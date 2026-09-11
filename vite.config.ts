import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import { sendNotificationEmail, getMailConfig } from './src/server/mailHandler.js'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'email-api-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const url = req.url ? req.url.split('?')[0] : ''

          if (url === '/api/email-status' && req.method === 'GET') {
            const config = getMailConfig()
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                configured: config.isConfigured,
                host: config.host,
                user: config.user ? config.user.replace(/(?<=.).(?=.*@)/g, '*') : '',
                recipient: config.defaultTo,
              })
            )
            return
          }

          if (url === '/api/send-email' && req.method === 'POST') {
            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })
            req.on('end', async () => {
              try {
                const payload = JSON.parse(body || '{}')
                const result = await sendNotificationEmail(payload)
                res.setHeader('Content-Type', 'application/json')
                res.statusCode = result.success || result.simulated ? 200 : 400
                res.end(JSON.stringify(result))
              } catch (err: any) {
                res.setHeader('Content-Type', 'application/json')
                res.statusCode = 500
                res.end(
                  JSON.stringify({
                    success: false,
                    error: err.message || 'Error occurred while processing email request',
                  })
                )
              }
            })
            return
          }

          next()
        })
      },
    },
  ],
  server: {
    host: true,
    port: 5180,
    strictPort: true,
  },
})
