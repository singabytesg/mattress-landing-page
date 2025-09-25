import { NextResponse } from 'next/server'

// Simple CSV export endpoint for downloading leads
// Access at: /api/export-leads?key=YOUR_ADMIN_KEY

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    // Simple security check
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')

    // Set ADMIN_KEY in .env.local for basic protection
    if (process.env.ADMIN_KEY && key !== process.env.ADMIN_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Try to read local backup file
    const fs = await import('fs/promises')
    const path = await import('path')

    try {
      const leadsFile = path.join(process.cwd(), 'leads-backup.json')
      const data = await fs.readFile(leadsFile, 'utf-8')
      const leads = JSON.parse(data)

      // Convert to CSV
      const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Showroom', 'Source']
      const csvRows = [headers.join(',')]

      for (const lead of leads) {
        const row = [
          lead.timestamp,
          `"${lead.name}"`,
          lead.email,
          lead.phone,
          lead.showroom,
          lead.source || 'Landing Page'
        ]
        csvRows.push(row.join(','))
      }

      const csv = csvRows.join('\n')

      // Return as downloadable CSV file
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename=leads-${new Date().toISOString().split('T')[0]}.csv`
        }
      })

    } catch (error) {
      // No backup file exists
      return NextResponse.json({
        error: 'No leads found. Enable SAVE_LOCAL_BACKUP=true in .env.local to store leads locally.'
      }, { status: 404 })
    }

  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json(
      { error: 'Failed to export leads' },
      { status: 500 }
    )
  }
}