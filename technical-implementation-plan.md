# ESSEN Mattress Landing Page - Technical Implementation Plan
## Simplified No-Database Version with Claude Code

---

## Executive Summary

This simplified technical plan outlines a rapid implementation of the ESSEN mattress landing page using Next.js 14, TypeScript, and Tailwind CSS. **No database required** - leads go directly to email and Google Sheets, with Calendly (free tier) handling all booking functionality. This approach can be built in **3-5 days** 

---

## 1. RECOMMENDED TECH STACK (SIMPLIFIED)

### Core Technologies

```yaml
Frontend Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animation: Framer Motion
Components: Shadcn/ui (Radix UI base)
Forms: React Hook Form + Zod
Analytics: Google Analytics 4 + Facebook Pixel
Deployment: Vercel
Email: Resend (10,000 free emails/month)
Lead Storage: Google Sheets API
Booking: Calendly (Free Tier - embedded)
Chat: WhatsApp Click-to-Chat (no API needed)
```

### Why This Simplified Stack?

- **No Database:** Direct email notifications + Google Sheets backup
- **Calendly Free:** Handles all booking complexity for you
- **Faster Development:** 3-5 days instead of 2 weeks
- **Lower Cost:** No database hosting, minimal services
- **Easier Maintenance:** Less complexity, fewer moving parts
- **Vercel:** Free tier perfect for landing pages

---

## 2. PROJECT STRUCTURE (SIMPLIFIED)

```
mattress-landing-page/
├── app/
│   ├── page.tsx                    # Single landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   └── api/
│       └── lead/route.ts          # Single API endpoint for leads
├── components/
│   ├── sections/
│   │   ├── hero.tsx               # Hero with lead form
│   │   ├── value-props.tsx        # Why visit showroom
│   │   ├── products.tsx           # Product preview cards
│   │   ├── booking.tsx            # Calendly embed
│   │   ├── testimonials.tsx      # Customer reviews
│   │   └── faq.tsx                # Common questions
│   ├── ui/                        # Shadcn components
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   └── dialog.tsx
│   ├── forms/
│   │   └── lead-form.tsx          # Single lead capture form
│   └── shared/
│       ├── navigation.tsx
│       ├── footer.tsx
│       └── whatsapp-button.tsx    # Floating WhatsApp
├── lib/
│   ├── google-sheets.ts           # Google Sheets integration
│   ├── email.ts                   # Resend email service
│   ├── analytics.ts               # GA4 + FB Pixel
│   └── utils.ts                   # Helper functions
├── public/
│   ├── images/                    # Optimized images
│   └── essen-logo.svg            # Brand assets
└── config/
    ├── site.ts                    # Site configuration
    └── products.ts                # Product data
```

---

## 3. COMPONENT ARCHITECTURE

### 3.1 Core Components

```typescript
// app/page.tsx - Single Landing Page
import Hero from '@/components/sections/hero'
import ValueProps from '@/components/sections/value-props'
import Products from '@/components/sections/products'
import Booking from '@/components/sections/booking'
import Testimonials from '@/components/sections/testimonials'
import FAQ from '@/components/sections/faq'
import WhatsAppButton from '@/components/shared/whatsapp-button'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Products />
      <Booking />
      <Testimonials />
      <FAQ />
      <WhatsAppButton />
    </>
  )
}
```

### 3.2 Component Specifications

#### Hero Component
```typescript
// Features:
- Animated headline with typewriter effect
- Lead capture form (Name, Email, Phone, Location)
- Trust badges animation
- Background image with parallax
- Mobile-responsive layout
- A/B testing capability

// Key Functions:
- Form validation with Zod
- Lead submission to Supabase
- Analytics event tracking
- Loading states
- Success/error feedback
```

#### Lead Capture Form (Simplified)
```typescript
// components/forms/lead-form.tsx
interface LeadFormData {
  name: string
  email: string
  phone: string
  preferredShowroom?: string
}

// Simple 4-field form:
- name: string (required)
- email: string (required)
- phone: string (required, SG format)
- preferredShowroom: select (optional)

// On Submit:
1. Send email notification to sales team
2. Save to Google Sheets
3. Show success message
4. Optional: Redirect to Calendly
```

#### Booking Component (Calendly Free Tier)
```typescript
// components/sections/booking.tsx
// Simple Calendly embed - they handle everything!

export default function Booking() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2>Book Your Free Consultation</h2>
        <div className="calendly-inline-widget"
          data-url="https://calendly.com/essen-mattress/consultation"
          style={{ minWidth: '320px', height: '630px' }}
        />
      </div>
    </section>
  )
}

// Calendly Free Features:
- 1 calendar connection
- Unlimited bookings
- Automated confirmations
- Reminder emails
- No credit card required
```

---

## 4. DATA FLOW (NO DATABASE)

### Lead Capture Flow

```typescript
// When user submits form:
1. Form Data → API Route
2. API Route → Email to Sales Team
3. API Route → Save to Google Sheets
4. Return success → Show thank you message

// Google Sheets Structure:
Columns:
- Timestamp
- Name
- Email
- Phone
- Preferred Showroom
- Source (URL)
- UTM Campaign
- UTM Source
- UTM Medium
```

### Email Notification Template

```typescript
// Email to sales team
Subject: 🔥 New Mattress Lead - {name}

Body:
New lead from mattress.essen.sg!

Customer Details:
- Name: {name}
- Email: {email}
- Phone: {phone}
- Preferred Showroom: {showroom}
- Submitted: {timestamp}

Source:
- Page: {pageUrl}
- Campaign: {utmCampaign}

Action Required:
1. Call within 1 hour
2. Book showroom appointment
3. Update Google Sheet status

---
View all leads: [Google Sheets Link]
```

---

## 5. DEVELOPMENT PHASES (3-5 DAYS)

### Day 1: Setup & Foundation

```bash
# 1. Initialize project
npx create-next-app@latest essen-mattress --typescript --tailwind --app
cd essen-mattress

# 2. Install minimal dependencies
npm install framer-motion react-hook-form zod
npm install @hookform/resolvers
npm install resend googleapis
npm install @vercel/analytics

# 3. Setup Shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button form dialog

# 4. Configure environment variables
# .env.local
RESEND_API_KEY=           # From resend.com
GOOGLE_SHEETS_ID=         # Your Google Sheet ID
GOOGLE_SERVICE_ACCOUNT=   # Service account JSON (base64)
NEXT_PUBLIC_GA_ID=        # Google Analytics
NEXT_PUBLIC_FB_PIXEL=     # Facebook Pixel
SALES_EMAIL=              # Where to send notifications
WHATSAPP_NUMBER=          # Your WhatsApp Business number
```

### Day 2: Core Components

#### Day 3: Layout & Navigation
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navigation from '@/components/shared/navigation'
import Footer from '@/components/shared/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

#### Day 4: Hero & Lead Capture
```typescript
// components/hero.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import LeadForm from '@/components/forms/lead-form'
import { trackEvent } from '@/lib/analytics'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero content */}
      </motion.div>
    </section>
  )
}
```

#### Day 5: Product Cards & Booking
```typescript
// components/products.tsx
import { products } from '@/config/products'
import ProductCard from './product-card'

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Day 3: API & Integrations

#### Simple API Route (No Database)
```typescript
// app/api/lead/route.ts
import { Resend } from 'resend'
import { google } from 'googleapis'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[89]\d{7}$/), // SG format
  showroom: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const lead = leadSchema.parse(body)

    // 1. Send email to sales team
    await resend.emails.send({
      from: 'leads@mattress.essen.sg',
      to: process.env.SALES_EMAIL!,
      subject: `New Lead: ${lead.name}`,
      html: `
        <h2>New Mattress Lead</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Showroom:</strong> ${lead.showroom || 'Not specified'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString('en-SG')}</p>
      `,
    })

    // 2. Save to Google Sheets
    await appendToGoogleSheet(lead)

    // 3. Send thank you email to customer
    await resend.emails.send({
      from: 'noreply@essen.sg',
      to: lead.email,
      subject: 'Thank You - ESSEN Mattress',
      html: `
        <h1>Thank you, ${lead.name}!</h1>
        <p>We've received your inquiry and will call you within 1 hour.</p>
        <p>In the meantime, book your consultation:
        <a href="https://calendly.com/essen-mattress">Book Now</a></p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return Response.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
```

### Day 4: Polish & Testing

```typescript
// lib/analytics/google.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Custom events for tracking
export const trackEvents = {
  leadFormStart: () => event({ action: 'form_start', category: 'lead' }),
  leadFormSubmit: () => event({ action: 'form_submit', category: 'lead' }),
  bookingComplete: () => event({ action: 'booking_complete', category: 'conversion' }),
  phoneClick: () => event({ action: 'phone_click', category: 'contact' }),
  whatsappClick: () => event({ action: 'whatsapp_click', category: 'contact' }),
}
```

### Day 5: Launch

#### Performance Optimizations
```typescript
// next.config.js
module.exports = {
  images: {
    domains: ['essen.sg'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
}

// Image optimization
import Image from 'next/image'

<Image
  src="/hero-mattress.jpg"
  alt="ESSEN Mattress"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

---

## 6. KEY FEATURES IMPLEMENTATION

### 6.1 Google Sheets Integration

```typescript
// lib/google-sheets.ts
import { google } from 'googleapis'

export async function appendToGoogleSheet(lead: any) {
  // Parse service account from base64 env variable
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT!, 'base64').toString()
  )

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const values = [[
    new Date().toISOString(),
    lead.name,
    lead.email,
    lead.phone,
    lead.showroom || '',
    lead.utm_source || '',
    lead.utm_medium || '',
    lead.utm_campaign || '',
  ]]

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
    range: 'Leads!A:H',
    valueInputOption: 'RAW',
    requestBody: { values },
  })
}
```

### 6.2 WhatsApp Integration (No API Needed)

```typescript
// components/shared/whatsapp-button.tsx
'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP || '6591234567'
  const message = encodeURIComponent(
    'Hi! I saw your mattress promotion. Can you tell me more?'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600"
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
```

### 6.3 Calendly Embed (Free Tier)

```typescript
// components/sections/booking.tsx
'use client'

import Script from 'next/script'

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Book Your Free Consultation</h2>
        <p className="text-xl text-gray-600 mb-8">
          Choose your preferred time and showroom location
        </p>

        {/* Calendly embed - Free tier */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/essen-mattress/showroom-consultation"
          style={{ minWidth: '320px', height: '630px' }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  )
}

// Calendly Setup (done once on calendly.com):
// 1. Create free account
// 2. Set event: "Showroom Consultation" (45 min)
// 3. Add locations (showroom addresses)
// 4. Set availability hours
// 5. Enable email confirmations
// 6. Copy embed link
```

### 6.4 Simple Lead Form

```typescript
// components/forms/lead-form.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().regex(/^[89]\d{7}$/, 'Valid SG number required'),
  showroom: z.string().optional(),
})

type LeadForm = z.infer<typeof leadSchema>

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
  })

  const onSubmit = async (data: LeadForm) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        // Track conversion
        gtag('event', 'generate_lead', {
          currency: 'SGD',
          value: 100,
        })
      }
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank You! 🎉
        </h3>
        <p className="text-green-700">
          We'll call you within 1 hour to schedule your showroom visit.
        </p>
        <Button
          className="mt-4"
          onClick={() => window.open('https://calendly.com/essen-mattress', '_blank')}
        >
          Book Appointment Now
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('name')}
        placeholder="Your Name"
        error={errors.name?.message}
      />

      <Input
        {...register('email')}
        type="email"
        placeholder="Email Address"
        error={errors.email?.message}
      />

      <Input
        {...register('phone')}
        placeholder="Phone (e.g., 91234567)"
        error={errors.phone?.message}
      />

      <Select {...register('showroom')}>
        <option value="">Select Preferred Showroom</option>
        <option value="jurong">Jurong Point</option>
        <option value="tampines">Tampines Mall</option>
        <option value="orchard">Orchard Central</option>
      </Select>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get Exclusive Showroom Price'}
      </Button>
    </form>
  )
}
```

---

## 7. DEPLOYMENT & DEVOPS

### 7.1 Vercel Deployment

```json
// vercel.json
{
  "functions": {
    "app/api/lead/route.ts": {
      "maxDuration": 10
    }
  },
  "redirects": [
    {
      "source": "/",
      "has": [
        {
          "type": "host",
          "value": "www.mattress.essen.sg"
        }
      ],
      "destination": "https://mattress.essen.sg",
      "permanent": true
    }
  ]
}
```

### 7.2 Environment Configuration

```bash
# Production environment variables (Vercel)
NEXT_PUBLIC_SITE_URL=https://mattress.essen.sg
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_FB_PIXEL_ID=
```

### 7.3 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 8. TESTING STRATEGY

### 8.1 Unit Testing

```typescript
// __tests__/lead-form.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LeadForm from '@/components/forms/lead-form'

describe('LeadForm', () => {
  it('validates required fields', async () => {
    render(<LeadForm />)
    const submitButton = screen.getByRole('button', { name: /submit/i })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    })
  })
})
```

### 8.2 E2E Testing

```typescript
// e2e/booking-flow.spec.ts
import { test, expect } from '@playwright/test'

test('complete booking flow', async ({ page }) => {
  await page.goto('/')

  // Fill lead form
  await page.fill('[name="name"]', 'John Doe')
  await page.fill('[name="email"]', 'john@example.com')
  await page.fill('[name="phone"]', '91234567')

  // Submit form
  await page.click('button[type="submit"]')

  // Verify success
  await expect(page.locator('.success-message')).toBeVisible()
})
```

---

## 9. PERFORMANCE TARGETS

### Core Web Vitals
```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
FCP (First Contentful Paint): < 1.8s
TTFB (Time to First Byte): < 600ms
```

### Optimization Checklist
- [ ] Images optimized with Next.js Image
- [ ] Fonts subset and preloaded
- [ ] Critical CSS inlined
- [ ] JavaScript code-split
- [ ] Static pages pre-rendered
- [ ] API routes cached
- [ ] Database queries optimized
- [ ] CDN configured

---

## 10. QUICK START GUIDE

### 10.1 Immediate Setup (30 Minutes)

```bash
# 1. Create project
npx create-next-app@latest essen-mattress --typescript --tailwind --app
cd essen-mattress

# 2. Install essentials only
npm install framer-motion react-hook-form zod @hookform/resolvers
npm install resend googleapis
npm install lucide-react

# 3. Add Shadcn components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input select form

# 4. Create .env.local
echo "RESEND_API_KEY=re_123..." >> .env.local
echo "GOOGLE_SHEETS_ID=1abc..." >> .env.local
echo "GOOGLE_SERVICE_ACCOUNT=base64_encoded_json" >> .env.local
echo "SALES_EMAIL=sales@essen.sg" >> .env.local
echo "NEXT_PUBLIC_GA_ID=G-XXX" >> .env.local
echo "NEXT_PUBLIC_FB_PIXEL=123456" >> .env.local
echo "NEXT_PUBLIC_WHATSAPP=6591234567" >> .env.local

# 5. Run dev server
npm run dev
```

### 10.2 Development Workflow (3-5 Days)

```markdown
DAY 1: Foundation (4 hours)
✓ Project setup
✓ Environment configuration
✓ Basic layout structure
✓ Navigation & Footer

DAY 2: Core Features (6 hours)
✓ Hero section with form
✓ Value propositions
✓ Product cards
✓ WhatsApp button

DAY 3: Integrations (6 hours)
✓ Lead API endpoint
✓ Email notifications
✓ Google Sheets setup
✓ Calendly embed

DAY 4: Polish (4 hours)
✓ Animations
✓ Mobile optimization
✓ Analytics setup
✓ Testing

DAY 5: Launch (2 hours)
✓ Deploy to Vercel
✓ Domain setup
✓ Final testing
✓ Go live!
```

---

## 11. COMPLETE CODE EXAMPLE

### 11.1 Full Landing Page

```typescript
// app/page.tsx
import Hero from '@/components/sections/hero'
import ValueProps from '@/components/sections/value-props'
import Products from '@/components/sections/products'
import Booking from '@/components/sections/booking'
import Testimonials from '@/components/sections/testimonials'
import FAQ from '@/components/sections/faq'
import WhatsAppButton from '@/components/shared/whatsapp-button'

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <Products />
      <Booking />
      <Testimonials />
      <FAQ />
      <WhatsAppButton />
    </main>
  )
}
```

### 11.2 Google Sheets Setup

```markdown
1. Create Google Sheet:
   - Name: "ESSEN Mattress Leads"
   - Headers: Timestamp | Name | Email | Phone | Showroom | Source | Campaign | Medium

2. Enable Google Sheets API:
   - Go to Google Cloud Console
   - Create new project or select existing
   - Enable Google Sheets API

3. Create Service Account:
   - IAM & Admin > Service Accounts
   - Create new service account
   - Download JSON key
   - Convert to base64: `base64 -i key.json`

4. Share Sheet:
   - Share Google Sheet with service account email
   - Give "Editor" permission

5. Get Sheet ID:
   - From URL: docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit
```

---

## CONCLUSION

This simplified technical plan gets you from zero to a working landing page in **3-5 days** instead of 2 weeks. By removing database complexity and using proven services (Calendly, Google Sheets, Resend), you can focus on what matters: converting visitors into showroom appointments.

### Key Advantages of This Approach:

1. **Speed:** Launch in less than a week
2. **Simplicity:** No database to manage
3. **Cost-Effective:** ~$10/month total running costs
4. **Reliable:** Using proven third-party services
5. **Scalable:** Can handle hundreds of leads per day

### Next Steps:

1. **Today:** Set up project and environment
2. **Tomorrow:** Build core components
3. **Day 3:** Connect integrations
4. **Day 4:** Polish and test
5. **Day 5:** Deploy and launch!

### Future Enhancements (After Launch):

- Add A/B testing once you have traffic
- Implement exit-intent popups
- Create email nurture sequences
- Build analytics dashboard
- Add database when you exceed 100 leads/day

**Start now with `npx create-next-app` and have your landing page live by the end of the week!**