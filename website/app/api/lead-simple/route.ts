import { NextResponse } from 'next/server'

// Simplified lead API - works with just email or webhooks
// No Google Cloud setup required

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, showroom } = body
    const timestamp = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })

    // Always log leads for backup
    console.log('New lead:', { timestamp, name, email, phone, showroom })

    // Option 1: Send to webhook (Zapier/Make/n8n)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp,
            name,
            email,
            phone,
            showroom,
            source: 'Landing Page'
          })
        })
        console.log('Lead sent to webhook')
      } catch (error) {
        console.error('Webhook failed:', error)
      }
    }

    // Option 2: Simple email notification
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: 'ESSEN Mattress <noreply@mattress.essen.sg>',
          to: process.env.SALES_EMAIL || 'sales@essen.sg',
          subject: `New Lead: ${name} - ${showroom}`,
          text: `
New Mattress Lead Received

Name: ${name}
Email: ${email}
Phone: ${phone}
Showroom: ${showroom}
Time: ${timestamp}

Please contact within 2 hours for best conversion.
          `,
          html: `
            <h2>New Mattress Lead Received</h2>
            <table style="border-collapse: collapse; width: 100%;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Showroom:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${showroom}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Time:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td>
              </tr>
            </table>
            <p><strong>⚡ Please contact within 2 hours for best conversion.</strong></p>
          `
        })
        console.log('Email sent successfully')
      } catch (error) {
        console.error('Email failed:', error)
      }
    }

    // Option 3: Save to local JSON file (for development/backup)
    if (process.env.SAVE_LOCAL_BACKUP === 'true') {
      const fs = await import('fs/promises')
      const path = await import('path')

      try {
        const leadsFile = path.join(process.cwd(), 'leads-backup.json')
        let leads = []

        try {
          const existing = await fs.readFile(leadsFile, 'utf-8')
          leads = JSON.parse(existing)
        } catch {
          // File doesn't exist yet
        }

        leads.push({
          timestamp,
          name,
          email,
          phone,
          showroom,
          source: 'Landing Page'
        })

        await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2))
        console.log('Lead saved to local backup')
      } catch (error) {
        console.error('Local backup failed:', error)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you shortly.'
    })

  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}