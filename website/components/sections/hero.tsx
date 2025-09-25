"use client"

import { Check } from 'lucide-react'
import LeadForm from '@/components/forms/lead-form'
import { promotions } from '@/config/site'
import Image from 'next/image'

export default function Hero() {
  const trustPoints = [
    "100-Night Trial",
    "10-Year Warranty",
    "Free Delivery & Setup"
  ]

  return (
    <section className="relative min-h-screen flex items-center" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-burnt) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fadeInUp">
            {/* Promotion Badge */}
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{
                backgroundColor: 'var(--primary-beige)',
                color: 'var(--text-primary)'
              }}>
                🎉 {promotions.hero.headline}
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              Experience{' '}
              <span style={{ color: 'var(--primary-burnt)' }}>Essential Quality</span>{' '}
              in Every Night's Sleep
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl opacity-80" style={{ color: 'var(--text-primary)' }}>
              Singapore's trusted furniture brand brings you premium mattresses designed for our climate.
              Visit our showroom for <strong>exclusive prices up to 40% off</strong>.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--success)' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to Action Text */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--primary-beige)', opacity: 0.8 }}>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                ⚡ Limited Time: {promotions.hero.subheadline}
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Get Exclusive Showroom Prices
                </h2>
                <p className="text-sm opacity-70" style={{ color: 'var(--text-primary)' }}>
                  Book your free consultation and save up to 40%
                </p>
              </div>

              <LeadForm source="hero" />

              {/* Urgency Text */}
              <div className="mt-6 text-center">
                <p className="text-xs" style={{ color: 'var(--warning)' }}>
                  🔥 17 people viewed this offer in the last hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mattress Visual - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 hidden xl:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-tl-[100px]" style={{
            background: `linear-gradient(135deg, var(--primary-beige) 0%, var(--secondary-taupe) 100%)`
          }} />
        </div>
      </div>
    </section>
  )
}