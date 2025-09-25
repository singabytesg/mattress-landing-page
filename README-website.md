# ESSEN Mattress Landing Page

A high-converting landing page designed to drive showroom visits for ESSEN mattresses, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to website directory
cd mattress-landing-page/website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 🎯 Key Features

### Showroom-First Strategy
- **No direct online sales** - All CTAs drive to showroom visits
- **Exclusive showroom pricing** - Up to 40% off displayed online
- **Lead capture focus** - Forms collect information for follow-up
- **Calendly integration** - Free tier booking system

### Sections Included
1. **Hero** - Lead capture form with promotional messaging
2. **Value Propositions** - ESSEN brand promises
3. **Products** - Three mattress tiers showcase
4. **Technology** - 4-layer comfort system explanation
5. **100-Night Trial** - Risk reversal guarantee
6. **Booking** - Calendly embedded scheduling
7. **Testimonials** - Social proof
8. **FAQ** - Common questions answered

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
# Email Configuration
RESEND_API_KEY=re_YOUR_API_KEY
SALES_EMAIL=sales@essen.sg

# Google Sheets
GOOGLE_SHEETS_ID=YOUR_SHEET_ID
GOOGLE_SERVICE_ACCOUNT=BASE64_ENCODED_JSON

# Analytics
NEXT_PUBLIC_GA_ID=G-YOUR_GA_ID
NEXT_PUBLIC_FB_PIXEL=YOUR_FB_PIXEL

# WhatsApp
NEXT_PUBLIC_WHATSAPP=6591234567
```

### Customization Points

1. **Colors** - Edit in `app/globals.css`
2. **Products** - Update in `config/products.ts`
3. **Site Info** - Modify in `config/site.ts`
4. **Calendly URL** - Change in `components/sections/booking.tsx`

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect GitHub repo to Vercel dashboard.

### Production Build

```bash
npm run build
npm start
```

## 📊 Lead Processing

Currently leads are logged to console. To activate email/Google Sheets:

1. Get Resend API key from resend.com
2. Set up Google Sheets with service account
3. Add credentials to `.env.local`
4. Uncomment code in `app/api/lead/route.ts`

## 🎨 Design System

- **Primary Color**: #A75421 (Burnt Orange)
- **Secondary**: #F3D7A7 (Beige)
- **Background**: #F8F5EA (Light Cream)
- **Text**: #43362D (Dark Brown)
- **Font**: Raleway

## 📈 Performance

Target metrics:
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Mobile responsive

## 🚦 Next Steps

1. **Set up tracking**:
   - Google Analytics 4
   - Facebook Pixel
   - Conversion tracking

2. **Configure integrations**:
   - Resend email service
   - Google Sheets API
   - Calendly account

3. **Launch campaigns**:
   - Google Ads
   - Facebook Ads
   - Set daily budgets

4. **Monitor & Optimize**:
   - A/B test headlines
   - Track conversion rates
   - Optimize for mobile

## 📞 Support

- WhatsApp: +65 9123 4567
- Email: enquiry@mattress.essen.sg
- Showroom visits encouraged!

---

Built with Next.js 14 + TypeScript + Tailwind CSS