"use client"

import Script from 'next/script'
import { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, MapPin, Phone, MessageCircle, AlertCircle, RefreshCw } from 'lucide-react'
import { siteConfig } from '@/config/site'

// Calendly event types for tracking
interface CalendlyEvent {
  event: string
  data?: {
    event_type_name?: string
    invitee?: {
      name?: string
      email?: string
    }
  }
}

export default function Booking() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [bookingStep, setBookingStep] = useState<string>('')
  const sectionRef = useRef<HTMLElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/enquiry-essen/appointment"

  // Enhanced Calendly URL with UTM parameters and prefill
  const getEnhancedCalendlyUrl = () => {
    const url = new URL(calendlyUrl)

    // Add UTM parameters for tracking
    url.searchParams.set('utm_source', 'website')
    url.searchParams.set('utm_medium', 'booking_widget')
    url.searchParams.set('utm_campaign', 'showroom_booking')

    // Add Calendly specific parameters
    url.searchParams.set('hide_landing_page_details', '1')
    url.searchParams.set('hide_gdpr_banner', '1')

    // Add background color to match our theme
    url.searchParams.set('background_color', 'ffffff')
    url.searchParams.set('text_color', '43362d')
    url.searchParams.set('primary_color', 'a75421')

    return url.toString()
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Listen for Calendly events
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent<CalendlyEvent>) => {
      if (e.origin !== 'https://calendly.com') return

      const { event, data } = e.data || {}

      switch (event) {
        case 'calendly.profile_page_viewed':
          setIsLoading(false)
          setBookingStep('Viewing available times')
          // Analytics tracking
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'calendly_page_viewed', {
              event_category: 'booking',
              event_label: 'widget_loaded'
            })
          }
          break

        case 'calendly.event_type_viewed':
          setBookingStep('Selecting appointment type')
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'calendly_event_type_viewed', {
              event_category: 'booking',
              event_label: data?.event_type_name || 'consultation'
            })
          }
          break

        case 'calendly.date_and_time_selected':
          setBookingStep('Confirming appointment details')
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'calendly_time_selected', {
              event_category: 'booking',
              event_label: 'time_selected'
            })
          }
          break

        case 'calendly.event_scheduled':
          setBookingStep('Appointment confirmed! 🎉')
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'calendly_booking_completed', {
              event_category: 'booking',
              event_label: 'appointment_scheduled',
              value: 1
            })
          }
          // Optional: trigger additional actions like lead capture
          console.log('Appointment scheduled:', data)
          break

        case 'calendly.page_height':
          // Handle iframe height changes for better responsive experience
          break

        default:
          console.log('Calendly event:', event, data)
      }
    }

    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [])

  // Error recovery
  const handleRetryWidget = () => {
    setHasError(false)
    setIsLoading(true)
    // Force widget reload
    if (widgetRef.current) {
      const iframe = widgetRef.current.querySelector('iframe')
      if (iframe) {
        iframe.src = iframe.src
      }
    }
  }

  // Loading timeout fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading && isVisible) {
        setHasError(true)
        setIsLoading(false)
      }
    }, 10000) // 10 second timeout

    return () => clearTimeout(timer)
  }, [isLoading, isVisible])

  const ErrorFallback = () => (
    <div className="calendly-error">
      <div className="calendly-error-icon">
        <AlertCircle size={24} />
      </div>
      <h3 className="calendly-error-title">Unable to Load Booking Calendar</h3>
      <p className="calendly-error-message">
        Don't worry! You can still book your consultation through these alternative methods:
      </p>
      <div className="calendly-error-actions">
        <button onClick={handleRetryWidget} className="calendly-fallback-btn primary">
          <RefreshCw size={16} />
          Try Again
        </button>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '6591234567'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="calendly-fallback-btn primary"
        >
          <MessageCircle size={16} />
          WhatsApp Us
        </a>
        <a
          href={`tel:+65${(process.env.NEXT_PUBLIC_WHATSAPP || '91234567').slice(2)}`}
          className="calendly-fallback-btn secondary"
        >
          <Phone size={16} />
          Call +65 {(process.env.NEXT_PUBLIC_WHATSAPP || '91234567').slice(2)}
        </a>
      </div>
    </div>
  )

  const LoadingSkeleton = () => (
    <div className="calendly-loading">
      <div className="calendly-loading-header"></div>
      <div className="calendly-loading-content"></div>
    </div>
  )

  return (
    <section ref={sectionRef} id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fadeInUp" style={{ color: 'var(--text-primary)' }}>
            Book Your Free Sleep Consultation
          </h2>
          <p className="text-lg opacity-80 mb-4 animate-fadeInUp" style={{ color: 'var(--text-primary)' }}>
            Visit our showroom to try all mattresses and get exclusive pricing
          </p>
          <div className="text-sm opacity-70 mb-8 animate-fadeInUp" style={{ color: 'var(--text-primary)' }}>
            ✨ <strong>First 100 customers get 30% off + FREE pillows worth $299</strong>
          </div>

          {/* Enhanced Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-fadeInUp">
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-full transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--primary-beige)' }}>
                <Calendar className="w-5 h-5" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <div className="text-left">
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Flexible Scheduling
                </div>
                <div className="text-sm opacity-60" style={{ color: 'var(--text-primary)' }}>
                  7 days a week
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-full transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--primary-beige)' }}>
                <Clock className="w-5 h-5" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <div className="text-left">
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  45-Min Sessions
                </div>
                <div className="text-sm opacity-60" style={{ color: 'var(--text-primary)' }}>
                  Personal consultation
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-full transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--primary-beige)' }}>
                <MapPin className="w-5 h-5" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <div className="text-left">
                <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  3 Showrooms
                </div>
                <div className="text-sm opacity-60" style={{ color: 'var(--text-primary)' }}>
                  Island-wide locations
                </div>
              </div>
            </div>
          </div>

          {/* Booking progress indicator */}
          {bookingStep && !hasError && (
            <div className="mb-6 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                   style={{ backgroundColor: 'var(--primary-beige)', color: 'var(--text-primary)' }}>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                {bookingStep}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Calendly Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="calendly-widget-container">
            {/* Brand header */}
            <div className="calendly-widget-header">
              <div className="calendly-widget-title">Choose Your Preferred Time</div>
              <div className="calendly-widget-subtitle">Sleep experts available 7 days a week</div>
            </div>

            {/* Brand overlay */}
            <div className="calendly-brand-overlay"></div>

            {/* Widget content */}
            {hasError ? (
              <ErrorFallback />
            ) : (
              <>
                {isLoading && <LoadingSkeleton />}
                {isVisible && (
                  <div
                    ref={widgetRef}
                    className="calendly-inline-widget"
                    data-url={getEnhancedCalendlyUrl()}
                    style={{
                      minWidth: '320px',
                      height: '630px',
                      opacity: isLoading ? 0 : 1,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>

        {/* Load Calendly script only when visible */}
        {isVisible && (
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true)
              setIsLoading(false)
            }}
          />
        )}

        {/* Enhanced Alternative CTAs */}
        <div className="mt-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm opacity-70 mb-6" style={{ color: 'var(--text-primary)' }}>
              Prefer instant booking? Our sleep experts are available via phone or WhatsApp
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '6591234567'}?text=Hi! I'd like to book a mattress consultation at your showroom.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 group"
                style={{ backgroundColor: 'var(--primary-burnt)', color: 'white' }}
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                WhatsApp Booking
                <span className="text-sm opacity-90 font-normal">• Instant Response</span>
              </a>

              <a
                href={`tel:+65${(process.env.NEXT_PUBLIC_WHATSAPP || '91234567').slice(2)}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 group"
                style={{ backgroundColor: 'var(--primary-beige)', color: 'var(--text-primary)' }}
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Call +65 {(process.env.NEXT_PUBLIC_WHATSAPP || '91234567').slice(2)}
                <span className="text-sm opacity-70 font-normal">• Direct Line</span>
              </a>
            </div>
          </div>

          {/* Showroom locations quick access */}
          <div className="border-t pt-8 mt-8" style={{ borderColor: 'rgba(167, 84, 33, 0.1)' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Visit Our Showrooms
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {siteConfig.showrooms.map((showroom) => (
                <div
                  key={showroom.id}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'rgba(167, 84, 33, 0.1)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <div className="font-medium mb-1">{showroom.name}</div>
                  <div className="text-sm opacity-70">{showroom.address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}