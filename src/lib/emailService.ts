export interface EmailPayload {
  type?: 'inquiry' | 'notification' | 'test'
  fullName?: string
  email?: string
  mobileNumber?: string
  grade?: string
  yearOfBirth?: string
  subject?: string
  message: string
  to?: string
  priority?: 'Normal' | 'Urgent' | 'Admission Alert'
}

export interface EmailResponse {
  success: boolean
  isConfigured?: boolean
  simulated?: boolean
  messageId?: string
  message: string
  recipient?: string
  error?: string
  details?: {
    to: string
    subject: string
    time: string
  }
}

export interface EmailStatus {
  configured: boolean
  host: string
  user: string
  recipient: string
}

export async function sendEmail(payload: EmailPayload): Promise<EmailResponse> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    return data
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Unable to connect to email notification service.',
      error: error.message,
    }
  }
}

export async function getEmailStatus(): Promise<EmailStatus> {
  try {
    const response = await fetch('/api/email-status')
    if (!response.ok) {
      throw new Error('Failed to fetch email status')
    }
    return await response.json()
  } catch {
    return {
      configured: false,
      host: 'smtp.gmail.com',
      user: '',
      recipient: 'yenopoyaworld@gmail.com',
    }
  }
}
