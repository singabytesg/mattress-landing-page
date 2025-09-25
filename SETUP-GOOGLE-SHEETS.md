# Google Sheets Setup Guide

This guide provides multiple options for storing leads, from simple to advanced.

## Option A: Email-Only (Simplest - No Google Sheets Required)

If you don't have admin access to Google Cloud, just use email notifications:

1. Skip Google Sheets entirely
2. Only configure Resend email in `.env.local`:
   ```env
   RESEND_API_KEY=re_YOUR_API_KEY
   SALES_EMAIL=sales@essen.sg
   ```
3. All leads will be emailed to your sales team
4. Manually add leads to your CRM/spreadsheet from emails

## Option B: Zapier/Make Integration (No Coding)

Use a no-code automation tool:

1. Keep the current simple API
2. Use Zapier or Make.com to:
   - Trigger on new emails from Resend
   - Automatically add rows to Google Sheets
   - No Google Cloud setup required
3. Free tier available on both platforms

## Option C: Public Google Form (Workaround)

1. Create a Google Form with same fields
2. Link it to a Google Sheet
3. Modify the lead API to submit to Google Form
4. No authentication needed

## Option D: Full Google Sheets Integration (Requires Admin)

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename it to "ESSEN Mattress Leads"
4. Create a sheet named "Leads" (rename Sheet1 if needed)
5. Add these headers in the first row:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Showroom
   - F1: Source

## Step 2: Get Sheet ID

1. Look at your sheet URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
2. Copy the `YOUR_SHEET_ID` part
3. Save this for `.env.local`

## Step 3: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Go to "APIs & Services" → "Library"
4. Search for "Google Sheets API"
5. Click on it and press "Enable"

## Step 4: Create Service Account

1. In Google Cloud Console, go to "IAM & Admin" → "Service Accounts"
2. Click "Create Service Account"
3. Name it "essen-mattress-sheets"
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 5: Generate Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose JSON format
5. Download the file (keep it secure!)

## Step 6: Share Sheet with Service Account

1. Open the JSON file you downloaded
2. Find the `"client_email"` field
3. Copy the email address (looks like: `name@project.iam.gserviceaccount.com`)
4. Go back to your Google Sheet
5. Click "Share" button
6. Add the service account email with "Editor" permissions
7. Click "Send"

## Step 7: Encode Service Account Key

### On Mac/Linux:
```bash
base64 -i path/to/your-service-account-key.json | tr -d '\n' > encoded.txt
```

### On Windows (PowerShell):
```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("path\to\your-service-account-key.json")) | Out-File encoded.txt
```

Copy the contents of `encoded.txt` for your `.env.local` file.

## Step 8: Update .env.local

```env
GOOGLE_SHEETS_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT=paste_base64_encoded_json_here
```

## Testing

1. Submit a test lead through the form
2. Check your Google Sheet - a new row should appear
3. Check server logs for any errors

## Troubleshooting

### "Permission denied" error
- Make sure you shared the sheet with the service account email
- Verify the service account has "Editor" permissions

### "Invalid credentials" error
- Check that the base64 encoding is correct
- Ensure there are no line breaks in the encoded string
- Verify the JSON key file is valid

### "Sheet not found" error
- Ensure the sheet tab is named "Leads" (case-sensitive)
- Check that the sheet ID is correct

## Security Notes

1. **Never commit** the service account JSON file or `.env.local` to git
2. Keep the base64 encoded key secure
3. Regularly rotate service account keys
4. Monitor sheet access logs in Google Sheets

## Alternative: Using API Key (Less Secure)

If you prefer a simpler setup for development, you can use the Google Sheets API with an API key, but this only works for publicly readable sheets (not recommended for production).

---

For production, always use service account authentication as described above.