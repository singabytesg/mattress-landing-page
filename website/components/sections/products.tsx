"use client"

import { Check, Star } from 'lucide-react'
import { products } from '@/config/products'
import { siteConfig } from '@/config/site'

export default function Products() {
  return (
    <section id="products" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Our Mattress Collection
          </h2>
          <p className="text-lg opacity-80" style={{ color: 'var(--text-primary)' }}>
            Thoughtfully designed for every sleeper and every home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] group"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--primary-beige) 0%, var(--secondary-taupe) 100%)`
                  }}
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: 'var(--primary-burnt)' }}>
                    {product.badge}
                  </div>
                )}
                {/* Mattress Layers Visualization */}
                <div className="absolute bottom-0 left-0 right-0 h-32 flex flex-col">
                  <div className="flex-1" style={{ backgroundColor: 'rgba(243, 215, 167, 0.6)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'rgba(158, 140, 116, 0.6)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'rgba(167, 84, 33, 0.6)' }} />
                  <div className="flex-1" style={{ backgroundColor: 'rgba(84, 103, 115, 0.6)' }} />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {product.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: 'var(--primary-burnt)' }}>
                  {product.tagline}
                </p>
                <p className="text-sm opacity-70 mb-4" style={{ color: 'var(--text-primary)' }}>
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} />
                      <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--warning)' }} />
                  ))}
                  <span className="text-sm opacity-70 ml-2" style={{ color: 'var(--text-primary)' }}>
                    (4.8/5.0)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold" style={{ color: 'var(--primary-burnt)' }}>
                      ${product.price.current}
                    </span>
                    <span className="text-lg line-through opacity-50" style={{ color: 'var(--text-primary)' }}>
                      ${product.price.original}
                    </span>
                    <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                      Save ${product.price.original - product.price.current}
                    </span>
                  </div>
                  <p className="text-xs opacity-60 mt-1" style={{ color: 'var(--text-primary)' }}>
                    *Showroom exclusive price
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={siteConfig.links.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-lg font-semibold text-white text-center hover:shadow-lg transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: 'var(--primary-burnt)' }}
                  >
                    Try in Showroom →
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I'm interested in the ${product.name} mattress.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-lg font-semibold text-center border-2 hover:shadow-md transition-all"
                    style={{ borderColor: 'var(--primary-burnt)', color: 'var(--primary-burnt)' }}
                  >
                    Ask Questions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
            Can't decide? Our sleep experts will help you find the perfect match
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--accent-blue)' }}
          >
            Get Personal Recommendation
          </a>
        </div>
      </div>
    </section>
  )
}