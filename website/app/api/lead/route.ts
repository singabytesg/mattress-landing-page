import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { appendToSheet } from '@/lib/google-sheets'

// Initialize Resend only when API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, showroom } = body

    // Log the lead for monitoring
    console.log('New lead received:', body)

    // Skip email/sheets in development if API keys not configured
    const isDevelopment = !process.env.RESEND_API_KEY || !process.env.GOOGLE_SHEETS_ID

    if (isDevelopment) {
      console.log('Development mode: Skipping email/sheets integration')
      return NextResponse.json({
        success: true,
        message: 'Lead received successfully (dev mode)'
      })
    }

    // Send email notification to sales team
    try {
      if (!resend) {
        console.log('Resend not configured, skipping email')
      } else {
        await resend.emails.send({
        from: 'ESSEN Mattress <noreply@mattress.essen.sg>',
        to: process.env.SALES_EMAIL || 'sales@essen.sg',
        subject: `New Mattress Lead: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #A75421;">New Mattress Lead Received</h2>

            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Lead Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Preferred Showroom:</strong> ${showroom}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })}</p>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
              <p style="margin: 0;"><strong>Action Required:</strong></p>
              <p>Please contact this lead within 2 hours for best conversion.</p>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

            <p style="color: #666; font-size: 12px;">
              This is an automated email from the ESSEN Mattress landing page.
            </p>
          </div>
        `,
        })
        console.log('Email notification sent successfully')
      }
    } catch (emailError) {
      console.error('Email send failed:', emailError)
      // Continue processing even if email fails
    }

    // Save to Google Sheets
    try {
      await appendToSheet({
        name,
        email,
        phone,
        showroom,
        source: 'Landing Page',
      })
      console.log('Lead saved to Google Sheets')
    } catch (sheetError) {
      console.error('Google Sheets save failed:', sheetError)
      // Continue processing even if sheets fails
    }

    // Send confirmation email to customer
    try {
      if (!resend) {
        console.log('Resend not configured, skipping customer email')
      } else {
        await resend.emails.send({
        from: 'ESSEN Mattress <noreply@mattress.essen.sg>',
        to: email,
        subject: 'Thank You for Your Interest in ESSEN Mattresses',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #A75421; padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You, ${name}!</h1>
            </div>

            <div style="padding: 30px;">
              <p style="font-size: 16px; line-height: 1.6;">
                We're excited to help you find the perfect mattress at our ${showroom} showroom.
              </p>

              <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #A75421; margin-top: 0;">What Happens Next?</h3>
                <ol style="line-height: 1.8;">
                  <li>Our sleep consultant will contact you within 24 hours</li>
                  <li>We'll schedule your personalized showroom experience</li>
                  <li>You'll receive exclusive showroom-only pricing (up to 40% off)</li>
                </ol>
              </div>

              <div style="background: #F3D7A7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #A75421; margin-top: 0;">Exclusive Showroom Benefits:</h3>
                <ul style="line-height: 1.8;">
                  <li>Try all mattress models in person</li>
                  <li>Expert consultation on sleep needs</li>
                  <li>Bundle deals with furniture</li>
                  <li>Same-day delivery available</li>
                  <li>0% interest installment plans</li>
                </ul>
              </div>

              <p style="font-size: 16px; line-height: 1.6;">
                Can't wait? Call us directly at <a href="tel:+6560190775" style="color: #A75421;">+65 6019 0775</a>
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://mattress.essen.sg" style="display: inline-block; background: #A75421; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px;">
                  Learn More About Our Mattresses
                </a>
              </div>
            </div>

            <div style="background: #f8f8f8; padding: 20px; text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                ESSEN Furniture | Singapore's Sleep Experts<br>
                This email was sent because you submitted an inquiry on our website.
              </p>
            </div>
          </div>
        `,
        })
        console.log('Customer confirmation email sent')
      }
    } catch (confirmError) {
      console.error('Customer email failed:', confirmError)
      // Non-critical, continue
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you shortly.'
    })
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead. Please try again.' },
      { status: 500 }
    )
  }
}