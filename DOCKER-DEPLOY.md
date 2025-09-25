# Docker Deployment Guide

## Quick Deploy to Digital Ocean

Your app is now configured for Docker deployment. Here's how to deploy:

### 1. Update Digital Ocean App Platform

1. Go to your app in Digital Ocean App Platform
2. Click "Settings" → "App Spec"
3. Replace the content with the updated `.do/app.yaml` (already committed)
4. **Important**: Change deployment method from "Node.js" to "Docker"

### 2. Environment Variables

Make sure these secrets are configured in Digital Ocean:

**Required Secrets:**
- `RESEND_API_KEY` - Your Resend email API key
- `GOOGLE_SHEETS_PRIVATE_KEY` - Google Sheets service account private key
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Google Sheets service account email
- `GOOGLE_SHEETS_SPREADSHEET_ID` - Your Google Sheets ID

**Auto-configured:**
- `SALES_EMAIL=enquiry@essen.sg`
- `NEXT_PUBLIC_WHATSAPP=6591234567`
- `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/enquiry-essen/appointment`

### 3. Deploy

1. Push changes to GitHub (already done)
2. Digital Ocean will automatically rebuild with Docker
3. Should deploy successfully in ~3-5 minutes

## Test Locally (Optional)

If you have Docker installed:

```bash
# Build the image
docker build -t essen-mattress .

# Run locally
docker run -p 3000:3000 essen-mattress

# Open http://localhost:3000
```

## Why Docker Solves the Issues

- ✅ **Consistent environment** - Same Node 18 everywhere
- ✅ **No buildpack conflicts** - Uses official Node image
- ✅ **Clean dependency resolution** - Fresh npm install every time
- ✅ **Standalone build** - Self-contained with all dependencies
- ✅ **Better caching** - Docker layers cache dependencies between builds

## Troubleshooting

If deployment still fails:

1. Check Digital Ocean build logs for specific errors
2. Ensure all environment variables are properly set
3. Verify the Docker build works locally
4. Check that all files are properly committed to git

The Docker approach eliminates the styled-jsx and React version conflicts by providing a clean, predictable build environment.