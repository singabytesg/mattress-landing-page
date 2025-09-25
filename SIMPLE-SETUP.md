# Simple Setup Guide (No Google Cloud Required)

Get your landing page running with lead capture in 5 minutes!

## Quick Start

### 1. Install & Run

```bash
cd website
npm install
npm run dev
```

Visit http://localhost:3000

### 2. Choose Your Lead Storage Method

#### Option A: Email Only (Simplest - 2 minutes)

1. Sign up at [Resend.com](https://resend.com) (free tier = 100 emails/day)
2. Get your API key
3. Create `.env.local`:
   ```env
   RESEND_API_KEY=re_YOUR_API_KEY
   SALES_EMAIL=your-email@company.com
   ```
4. Done! All leads will be emailed to you

#### Option B: Email + Zapier (5 minutes)

Same as Option A, plus:
1. Create free [Zapier](https://zapier.com) account
2. Create a Zap: "When email received → Add row to Google Sheet"
3. No coding needed!

#### Option C: Local File + Manual Export (1 minute)

1. Create `.env.local`:
   ```env
   SAVE_LOCAL_BACKUP=true
   ADMIN_KEY=secret123
   ```
2. Leads saved to `leads-backup.json`
3. Download CSV anytime: http://localhost:3000/api/export-leads?key=secret123

#### Option D: Direct Webhook (3 minutes)

1. Get webhook from Zapier/Make/n8n
2. Create `.env.local`:
   ```env
   WEBHOOK_URL=https://hooks.zapier.com/YOUR_WEBHOOK
   ```
3. Leads automatically sent to your automation

### 3. Test Your Setup

1. Fill out the form on your landing page
2. Check your email/file/webhook
3. If working, you're ready to deploy!

## Deployment (Vercel - Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

## That's It!

You now have a working landing page that captures leads. No complex Google Cloud setup needed!

## Need the Advanced Google Sheets Setup?

Only if you're a Google Workspace admin, see `SETUP-GOOGLE-SHEETS.md` for direct integration.

## Troubleshooting

### Not receiving emails?
- Check spam folder
- Verify Resend API key
- Check Resend dashboard for errors

### Want to change API endpoint?
- Use `/api/lead-simple` instead of `/api/lead` for simpler integration
- Update form action in `components/forms/lead-form.tsx`

### Need help?
- WhatsApp: +65 9123 4567
- Email: support@essen.sg