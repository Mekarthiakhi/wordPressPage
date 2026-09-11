import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

export function getMailConfig() {
  dotenv.config({ override: true })
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  const secure = process.env.SMTP_SECURE === 'true' || port === 465
  const user = (process.env.SMTP_USER || '').trim()
  const rawPass = (process.env.SMTP_PASS || '').trim()
  const pass = rawPass.replace(/\s+/g, '') // remove spaces from Google App Password
  const defaultTo = (process.env.NOTIFICATION_TO || 'akhilesh.medicover@gmail.com').trim()
  const from = process.env.MAIL_FROM || `"The Yenepoya World" <${user || 'admissions@yenepoyaworldschool.com'}>`

  return {
    host,
    port,
    secure,
    user,
    pass,
    defaultTo,
    from,
    isConfigured: Boolean(user && pass),
  }
}

export function createTransporter() {
  const config = getMailConfig()
  if (!config.isConfigured) return null

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
}

export async function sendNotificationEmail(payload) {
  const config = getMailConfig()
  const {
    type = 'inquiry', // 'inquiry' | 'notification' | 'test'
    fullName = 'Website Visitor',
    email = '',
    mobileNumber = '',
    grade = '',
    yearOfBirth = '',
    subject = '',
    message = '',
    to = '',
    priority = 'Normal',
  } = payload

  const recipient = to || config.defaultTo
  const isNotification = type === 'notification'

  const emailSubject = subject
    ? `[Application/Notice] ${fullName}: ${subject}`
    : isNotification
    ? `[Notification from ${fullName}] Alert: ${grade || 'General'}`
    : `[Admission Application] ${fullName} (${grade || 'General'}) - The Yenepoya World`

  const formattedDate = new Date().toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  })

  // HTML Email Layout
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #82c9c7 0%, #5aa3a1 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; }
        .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.95; }
        .content { padding: 32px 28px; }
        .badge { display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 9999px; background: #d2f2f4; color: #0f766e; margin-bottom: 20px; }
        .data-table { width: 100%; border-collapse: collapse; margin: 16px 0 24px 0; }
        .data-table td { padding: 12px 14px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
        .data-table td.label { font-weight: 600; color: #64748b; width: 35%; background: #f8fafc; }
        .data-table td.value { color: #0f172a; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #82c9c7; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 12px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>The Yenepoya World</h1>
          <p>Official Portal Notification & Communication System</p>
        </div>
        <div class="content">
          <span class="badge">${isNotification ? 'Instant Notification' : 'Admission Inquiry'}</span>
          <h2 style="margin: 0 0 8px 0; font-size: 18px; color: #0f172a;">
            ${isNotification ? (subject || 'Portal Notification') : `New Enquiry from ${fullName}`}
          </h2>
          <p style="margin: 0 0 20px 0; font-size: 13px; color: #64748b;">
            Received on: <strong>${formattedDate}</strong> ${priority ? `&bull; Priority: <strong>${priority}</strong>` : ''}
          </p>

          <table class="data-table">
            <tr>
              <td class="label">Full Name</td>
              <td class="value">${fullName || 'N/A'}</td>
            </tr>
            <tr>
              <td class="label">Email Address</td>
              <td class="value"><a href="mailto:${email}" style="color: #5aa3a1; text-decoration: none;">${email || 'N/A'}</a></td>
            </tr>
            ${mobileNumber ? `
            <tr>
              <td class="label">Mobile Number</td>
              <td class="value"><a href="tel:${mobileNumber}" style="color: #5aa3a1; text-decoration: none;">${mobileNumber}</a></td>
            </tr>` : ''}
            ${grade ? `
            <tr>
              <td class="label">Grade Applying</td>
              <td class="value"><strong>${grade}</strong></td>
            </tr>` : ''}
            ${yearOfBirth ? `
            <tr>
              <td class="label">Year of Birth</td>
              <td class="value">${yearOfBirth}</td>
            </tr>` : ''}
          </table>

          <div style="font-weight: 600; font-size: 13px; color: #475569; margin-top: 20px;">Message / Note:</div>
          <div class="message-box">
            ${(message || 'No additional message provided.').replace(/\n/g, '<br>')}
          </div>
        </div>
        <div class="footer">
          <p style="margin: 0;">This email was automatically generated by <strong>The Yenepoya World</strong> portal notification system.</p>
        </div>
      </div>
    </body>
    </html>
  `

  if (!config.isConfigured) {
    // Return status indicating credentials are required
    return {
      success: false,
      isConfigured: false,
      simulated: true,
      message: 'SMTP credentials not configured yet. Please configure SMTP_USER and SMTP_PASS in .env or provide your credentials.',
      details: {
        to: recipient,
        subject: emailSubject,
        time: formattedDate,
      },
    }
  }

  const transporter = createTransporter()
  if (!transporter) {
    throw new Error('Failed to create email transporter')
  }

  const senderDisplayName = isNotification
    ? `${fullName || 'Portal User'} (The Yenepoya World)`
    : `${fullName || 'Applicant'} (Yenepoya Admissions)`

  const mailOptions = {
    from: `"${senderDisplayName}" <${config.user}>`,
    to: recipient,
    replyTo: email ? `"${fullName}" <${email}>` : config.user,
    subject: emailSubject,
    html,
  }

  const info = await transporter.sendMail(mailOptions)

  // 2. Automated Return Message to Applicant / Parent
  let returnMailSent = false
  if (email && email.includes('@') && email !== recipient) {
    try {
      const returnSubject = `[The Yenepoya World] Application Received - We will contact you shortly`
      const returnHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
            .header { background: linear-gradient(135deg, #82c9c7 0%, #4a9c9a 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; }
            .header p { margin: 8px 0 0 0; font-size: 13px; opacity: 0.95; }
            .content { padding: 32px 28px; }
            .badge { display: inline-block; padding: 4px 14px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 9999px; background: #d2f2f4; color: #0f766e; margin-bottom: 20px; }
            .intro-text { font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 16px; }
            .callout-box { background: #f0fdfa; border-left: 4px solid #82c9c7; border-radius: 6px; padding: 16px 18px; font-size: 14px; line-height: 1.6; color: #0f766e; margin: 20px 0; }
            .details-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; margin: 20px 0; }
            .details-box p { margin: 6px 0; font-size: 13px; color: #475569; }
            .details-box strong { color: #0f172a; }
            .contact-info { margin-top: 24px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 13px; color: #64748b; line-height: 1.6; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>The Yenepoya World</h1>
              <p>Excellence in Learning &bull; Character Development</p>
            </div>
            <div class="content">
              <span class="badge">Application Received</span>
              <h2 style="margin: 0 0 12px 0; font-size: 20px; color: #0f172a;">
                Hello ${fullName || 'Valued Parent'},
              </h2>
              <p class="intro-text">
                Thank you for reaching out to <strong>The Yenepoya World</strong>. We have received your application.
              </p>
              <div class="callout-box">
                <strong>We have received your application!</strong><br>
                Our admissions team will review your submission, and <strong>you will hear from our team shortly</strong> to guide you through the next steps, provide curriculum and fee information, and schedule an interactive campus tour.
              </div>
              <div class="details-box">
                <p style="margin-top: 0; font-weight: 700; color: #0f172a; font-size: 14px;">Application Details:</p>
                <p>&bull; <strong>Applicant Name:</strong> ${fullName || 'N/A'}</p>
                ${grade ? `<p>&bull; <strong>Grade Applied:</strong> ${grade}</p>` : ''}
                ${mobileNumber ? `<p>&bull; <strong>Contact Phone:</strong> ${mobileNumber}</p>` : ''}
                <p>&bull; <strong>Received on:</strong> ${formattedDate}</p>
              </div>
              <div class="contact-info">
                <p style="margin: 0 0 6px 0; font-weight: 600; color: #334155;">Need to speak with us right away?</p>
                <p style="margin: 0;">
                  Contact our Admissions Helpline at <strong style="color: #0f766e;">+91 824 220 4668</strong> or <strong style="color: #0f766e;">+91 99800 12345</strong>, or email us at <strong style="color: #0f766e;">yenopoyaworld@gmail.com</strong>.
                </p>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">The Yenepoya World &bull; Mangalore, Karnataka 575018 &bull; <a href="https://yenepoyaworldschool.com" style="color: #4a9c9a; text-decoration: none;">yenepoyaworldschool.com</a></p>
            </div>
          </div>
        </body>
        </html>
      `

      await transporter.sendMail({
        from: config.from,
        to: email,
        replyTo: config.user,
        subject: returnSubject,
        html: returnHtml,
      })
      returnMailSent = true
    } catch (err) {
      console.warn('Auto-responder return email warning:', err.message)
    }
  }

  return {
    success: true,
    isConfigured: true,
    messageId: info.messageId,
    returnMailSent,
    message: returnMailSent
      ? `We have received your application! Our team will get in touch with you shortly, and a confirmation email has been sent to ${email}.`
      : `Email notification sent successfully to ${recipient}!`,
    recipient,
  }
}
