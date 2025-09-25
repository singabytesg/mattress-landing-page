"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { siteConfig } from '@/config/site'

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^[89]\d{7}$/, 'Please enter a valid Singapore phone number'),
  showroom: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadSchema>

interface LeadFormProps {
  source?: string
  onSuccess?: () => void
}

export default function LeadForm({ source = 'hero', onSuccess }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()

        // Track conversion with Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            currency: 'SGD',
            value: 100,
            source: source,
          })
        }

        // Call parent success handler
        if (onSuccess) {
          onSuccess()
        }
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Sorry, there was an error. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl text-center animate-fadeInUp">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Thank You! 🎉
        </h3>
        <p className="text-green-700 mb-4">
          We'll call you within 1 hour to schedule your exclusive showroom visit.
        </p>
        <a
          href={siteConfig.links.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Book Your Appointment Now →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name')}
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-burnt)] focus:outline-none transition-colors"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-burnt)] focus:outline-none transition-colors"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('phone')}
          type="tel"
          placeholder="Phone Number (e.g., 91234567)"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-burnt)] focus:outline-none transition-colors"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <select
          {...register('showroom')}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--primary-burnt)] focus:outline-none transition-colors"
          disabled={isSubmitting}
        >
          <option value="">Select Preferred Showroom (Optional)</option>
          {siteConfig.showrooms.map((showroom) => (
            <option key={showroom.id} value={showroom.id}>
              {showroom.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 font-semibold text-white rounded-lg transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ backgroundColor: 'var(--primary-burnt)' }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Get Exclusive Showroom Price →'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted about ESSEN products and promotions.
      </p>
    </form>
  )
}