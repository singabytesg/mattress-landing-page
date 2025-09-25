"use client"

import Script from 'next/script'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Book Your Free Consultation
          </h2>
          <p className="text-lg opacity-80 mb-8" style={{ color: 'var(--text-primary)' }}>
            Visit our showroom to try all mattresses and get exclusive prices
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: 'var(--primary-burnt)' }} />
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                Flexible Scheduling
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: 'var(--primary-burnt)' }} />
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                45-Min Sessions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" style={{ color: 'var(--primary-burnt)' }} />
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                3 Locations
              </span>
            </div>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div
              className="calendly-inline-widget"
              data-url={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/essen-mattress/showroom-consultation"}
              style={{ minWidth: '320px', height: '630px' }}
            />
          </div>
        </div>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        {/* Alternative CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-60 mb-4" style={{ color: 'var(--text-primary)' }}>
            Prefer to call? Speak to our sleep experts directly
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP || '6591234567'}`}
            className="inline-block px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--primary-beige)', color: 'var(--text-primary)' }}
          >
            📞 Call +65 {(process.env.NEXT_PUBLIC_WHATSAPP || '6591234567').slice(2)}
          </a>
        </div>
      </div>
    </section>
  )
}