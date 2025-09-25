import { google } from 'googleapis'

interface LeadData {
  name: string
  email: string
  phone: string
  showroom: string
  source?: string
  timestamp?: string
}

export async function appendToSheet(leadData: LeadData) {
  try {
    // Parse the service account credentials from environment variable
    const serviceAccount = JSON.parse(
      Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT || '', 'base64').toString()
    )

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    // Create sheets client
    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare row data
    const timestamp = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })
    const row = [
      timestamp,
      leadData.name,
      leadData.email,
      leadData.phone,
      leadData.showroom,
      leadData.source || 'Landing Page',
    ]

    // Append to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Leads!A:F', // Assumes sheet named "Leads" with columns A-F
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    })

    return response.data
  } catch (error) {
    console.error('Error appending to Google Sheets:', error)
    throw new Error('Failed to save lead to Google Sheets')
  }
}