import http from 'http'
import { sendNotificationEmail, getMailConfig } from './src/server/mailHandler.js'

const PORT = process.env.API_PORT || 3001

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

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
      } catch (err) {
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

  res.statusCode = 404
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ error: 'Endpoint not found' }))
})

server.listen(PORT, () => {
  console.log(`[The Yenepoya World] Email notification server listening on http://localhost:${PORT}`)
})
