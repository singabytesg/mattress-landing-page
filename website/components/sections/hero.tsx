"use client"

import { useState, useEffect } from 'react'
import { Check, Play, Star, ArrowDown } from 'lucide-react'
import LeadForm from '@/components/forms/lead-form'
import { promotions } from '@/config/site'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const trustPoints = [
    { icon: "🛏️", text: "100-Night Trial", subtitle: "Risk-free testing" },
    { icon: "🛡️", text: "10-Year Warranty", subtitle: "Quality guaranteed" },
    { icon: "🚚", text: "Free Delivery & Setup", subtitle: "Island-wide service" }
  ]

  const floatingElements = [
    { id: 1, size: 'w-4 h-4', position: 'top-20 left-20', delay: 0, class: 'parallax-slow' },
    { id: 2, size: 'w-6 h-6', position: 'top-40 right-32', delay: 0.5, class: 'parallax-medium' },
    { id: 3, size: 'w-3 h-3', position: 'top-60 left-40', delay: 1, class: 'parallax-fast' },
    { id: 4, size: 'w-5 h-5', position: 'bottom-40 left-32', delay: 1.5, class: 'parallax-slow' },
    { id: 5, size: 'w-4 h-4', position: 'bottom-60 right-20', delay: 2, class: 'parallax-medium' },
  ]

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--cream-light)' }}>
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-orange-50/30"></div>

        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${element.position} ${element.size} ${element.class} opacity-30`}
            style={{
              animationDelay: `${element.delay}s`,
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{ background: 'var(--primary-burnt)' }}
            />
          </div>
        ))}

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary-burnt) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className={`space-y-8 ${isVisible ? 'stagger-children revealed' : 'stagger-children'}`}>
            {/* Promotion Badge */}
            <div className="inline-block">
              <div className="px-6 py-3 rounded-full text-sm font-semibold hover-glow transition-all cursor-pointer" style={{
                background: 'linear-gradient(135deg, var(--primary-beige) 0%, #e8c288 100%)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-md)'
              }}>
                ✨ {promotions.hero.headline}
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Experience{' '}
                <span className="relative">
                  <span style={{ color: 'var(--primary-burnt)' }}>Essential Quality</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-60"></div>
                </span>
                <br />
                in Every Night's Sleep
              </h1>

              {/* Rating Display */}
              <div className="flex items-center gap-3 text-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>4.8/5</span>
                <span className="text-gray-600">• 1,200+ reviews</span>
              </div>
            </div>

            {/* Enhanced Subheadline */}
            <div className="space-y-4">
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Singapore's trusted furniture brand brings you premium mattresses designed specifically for our climate.
                Visit our showroom for <strong className="text-orange-600">exclusive prices up to 40% off</strong>.
              </p>

              {/* Video Placeholder */}
              <div className="video-placeholder max-w-sm cursor-pointer">
                <div className="video-placeholder-icon">
                  <Play className="w-6 h-6" />
                </div>
                <span className="ml-3 font-semibold text-gray-700">Watch: The ESSEN Difference</span>
              </div>
            </div>

            {/* Enhanced Trust Points */}
            <div className="grid sm:grid-cols-3 gap-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="group hover-scale">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                    <div className="text-2xl mb-2">{point.icon}</div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {point.text}
                    </div>
                    <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>
                      {point.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="btn-primary-enhanced text-lg px-8 py-4"
              >
                Book Free Consultation
                <ArrowDown className="w-5 h-5 ml-2" />
              </a>

              <a
                href="#product-comparison"
                className="btn-secondary-enhanced text-lg px-8 py-4"
              >
                Compare Mattresses
              </a>
            </div>

            {/* Enhanced Urgency Text */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--primary-burnt)' }}>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                Limited Time: {promotions.hero.subheadline}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                🔥 23 people viewed this offer in the last hour
              </p>
            </div>
          </div>

          {/* Right Column - Enhanced Form */}
          <div className={`lg:pl-8 ${isVisible ? 'reveal-right revealed' : 'reveal-right'}`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover-lift">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, var(--primary-burnt) 0%, var(--accent-blue) 100%)'
                  }}>
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Get Exclusive Showroom Prices
                </h2>
                <p className="text-sm opacity-80" style={{ color: 'var(--text-primary)' }}>
                  Book your free consultation and save up to 40%
                </p>
              </div>

              <LeadForm source="hero" />

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-center space-y-2">
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{
                          background: `linear-gradient(135deg, hsl(${i * 60}, 60%, 70%) 0%, hsl(${i * 60 + 30}, 60%, 60%) 100%)`
                        }} />
                      ))}
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      Join 1,200+ satisfied customers
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--warning)' }}>
                    🔥 Last booking 3 minutes ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mattress Visual - Now with Parallax */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-20 hidden xl:block parallax-bg"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-tl-[120px] hover-scale transition-transform duration-1000" style={{
            background: `linear-gradient(135deg, var(--primary-beige) 0%, var(--secondary-taupe) 50%, var(--accent-blue) 100%)`
          }} />
          {/* Overlay pattern */}
          <div className="absolute inset-0 rounded-tl-[120px] opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary-burnt) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}