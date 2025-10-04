"use client"

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Tan",
    role: "Verified Purchase - ESSEN Ultra Max",
    content: "Best mattress I've ever owned! The showroom experience was fantastic - they helped me find the perfect firmness. The cooling technology really works in our Singapore weather.",
    rating: 5,
  },
  {
    name: "David Lim",
    role: "Verified Purchase - ESSEN Ortho",
    content: "My back pain is completely gone after switching to ESSEN. The consultation was professional and the exclusive showroom price saved me over $600!",
    rating: 5,
  },
  {
    name: "Michelle & James Wong",
    role: "Verified Purchase - ESSEN Ultra Plus",
    content: "We bought the entire bedroom set during our visit. The bundle deal was amazing and the quality exceeded our expectations. Highly recommend visiting their showroom!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What Our Customers Say
          </h2>
          <p className="text-lg opacity-80" style={{ color: 'var(--text-primary)' }}>
            Join thousands of Singaporeans enjoying better sleep with ESSEN
          </p>

          {/* Overall Rating */}
          <div className="mt-6 flex justify-center items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: 'var(--warning)' }} />
              ))}
            </div>
            <span className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              4.8/5.0
            </span>
            <span className="text-sm opacity-60" style={{ color: 'var(--text-primary)' }}>
              (523 reviews)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-10"
                style={{ color: 'var(--primary-burnt)' }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--warning)' }} />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: 'var(--primary-burnt)' }}
                >
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs opacity-60" style={{ color: 'var(--success)' }}>
                    ✓ {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
            Experience the ESSEN difference yourself
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--primary-burnt)' }}
          >
            Book Your Showroom Visit
          </a>
        </div>
      </div>
    </section>
  )
}