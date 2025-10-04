"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Check, X, Star, Info } from 'lucide-react'
import { products } from '@/config/products'
import { siteConfig } from '@/config/site'

interface ComparisonFeature {
  name: string
  description: string
  essential: boolean | string
  luxe: boolean | string
  category: 'comfort' | 'support' | 'materials' | 'warranty'
}

const comparisonFeatures: ComparisonFeature[] = [
  // Comfort Features
  { name: 'Firmness Level', description: 'Sleep surface feel and comfort', essential: 'Medium-Firm', luxe: 'Plush', category: 'comfort' },
  { name: 'Cooling Technology', description: 'Temperature regulation for Singapore climate', essential: 'CoolFlow™ HD', luxe: 'CoolFlow™ Responsive', category: 'comfort' },
  { name: 'Motion Isolation', description: 'Reduces partner movement transfer by 85%', essential: true, luxe: true, category: 'comfort' },
  { name: 'Top Layer', description: 'Surface comfort layer', essential: 'GuardWeave™ Cover', luxe: 'PlushCloud™ Tufted', category: 'comfort' },

  // Support Features
  { name: 'Spring System', description: 'Core support structure', essential: 'PocketGuard™ Spring Core', luxe: 'PocketGuard™ Plus (FeltShield™)', category: 'support' },
  { name: 'Spinal Alignment', description: 'Maintains natural spine curvature', essential: true, luxe: true, category: 'support' },
  { name: 'Pressure Relief', description: 'Reduces pressure points', essential: 'Good', luxe: 'Excellent', category: 'support' },
  { name: 'Sink Resistance', description: 'SinkShield™ prevents sagging for 10+ years', essential: true, luxe: true, category: 'support' },

  // Materials
  { name: 'Construction Type', description: 'Mattress build approach', essential: 'Hybrid Spring/Foam', luxe: 'Enhanced Hybrid', category: 'materials' },
  { name: 'Memory Foam Type', description: 'Body-contouring foam layer', essential: 'CoolFlow™ HD (3.5 lb/ft³)', luxe: 'CoolFlow™ Responsive (2.5 lb/ft³)', category: 'materials' },
  { name: 'Durability Layer', description: 'Long-lasting support layers', essential: 'SinkShield™ Foundation', luxe: 'SinkShield™ + FeltShield™', category: 'materials' },
  { name: 'Antimicrobial Cover', description: 'GuardWeave™ fabric with 99.9% protection', essential: true, luxe: true, category: 'materials' },

  // Warranty & Service
  { name: 'Sleep Trial', description: 'Risk-free trial period', essential: '100 nights', luxe: '100 nights', category: 'warranty' },
  { name: 'Warranty Period', description: 'Manufacturing defect coverage', essential: '10 years', luxe: '10 years', category: 'warranty' },
  { name: 'Free Delivery', description: 'Island-wide delivery included', essential: true, luxe: true, category: 'warranty' },
  { name: 'Free Setup', description: 'Professional installation service', essential: true, luxe: true, category: 'warranty' },
]

const categoryIcons = {
  comfort: '🛏️',
  support: '🏋️',
  materials: '🧪',
  warranty: '🛡️'
}

const categoryNames = {
  comfort: 'Comfort Features',
  support: 'Support & Health',
  materials: 'Materials & Quality',
  warranty: 'Warranty & Service'
}

export default function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['essential', 'luxe'])
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isVisible, setIsVisible] = useState(false)

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
      { threshold: 0.1 }
    )

    const element = document.getElementById('product-comparison')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const filteredFeatures = activeCategory === 'all'
    ? comparisonFeatures
    : comparisonFeatures.filter(feature => feature.category === activeCategory)

  const selectedProductData = selectedProducts.map(id => products.find(p => p.id === id)!).filter(Boolean)

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-400 mx-auto" />
      )
    }
    return <span className="text-sm font-medium text-center">{value}</span>
  }

  const getRecommendation = (productId: string) => {
    switch (productId) {
      case 'essential':
        return 'Best for most sleepers'
      case 'luxe':
        return 'Ultimate comfort'
      default:
        return ''
    }
  }

  return (
    <section id="product-comparison" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'reveal-up revealed' : 'reveal-up'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Compare Our Mattresses
          </h2>
          <p className="text-lg opacity-80 mb-8" style={{ color: 'var(--text-primary)' }}>
            Find your perfect match with our detailed side-by-side comparison
          </p>

          {/* Product Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  if (selectedProducts.includes(product.id)) {
                    if (selectedProducts.length > 1) {
                      setSelectedProducts(prev => prev.filter(id => id !== product.id))
                    }
                  } else {
                    if (selectedProducts.length < 2) {
                      setSelectedProducts(prev => [...prev, product.id])
                    }
                  }
                }}
                className={`px-4 py-2 rounded-lg border-2 transition-all font-medium ${
                  selectedProducts.includes(product.id)
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-orange-300'
                }`}
              >
                {product.name}
                {selectedProducts.includes(product.id) && (
                  <Check className="w-4 h-4 ml-2 inline" />
                )}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Features
            </button>
            {Object.entries(categoryNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {categoryIcons[key as keyof typeof categoryIcons]} {name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className={`comparison-container max-w-5xl mx-auto ${isVisible ? 'reveal-scale revealed' : 'reveal-scale'}`}>
          {/* Product Headers */}
          <div className="bg-white border-b border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
              <div className="hidden lg:block"></div>
              {selectedProductData.map((product) => (
                <div key={product.id} className="text-center">
                  {/* Product Image */}
                  <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={product.id === 'essential' ? '/images/ultraplus-showroom-4.jpg' : '/images/ultramax-showroom-1.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover hover-scale"
                    />
                    {product.badge && (
                      <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold text-white bg-orange-500 z-10">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--primary-burnt)' }}>
                    {getRecommendation(product.id)}
                  </p>
                  <div className="flex justify-center items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">(4.8)</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold" style={{ color: 'var(--primary-burnt)' }}>
                      ${product.price.current}
                    </span>
                    <span className="text-sm line-through text-gray-400 ml-2">
                      ${product.price.original}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="bg-white">
            {Object.entries(categoryNames).map(([categoryKey, categoryName]) => {
              const categoryFeatures = filteredFeatures.filter(f => f.category === categoryKey)
              if (categoryFeatures.length === 0) return null

              return (
                <div key={categoryKey} className="border-b border-gray-100 last:border-b-0">
                  {/* Category Header */}
                  <div className="bg-gray-50 px-6 py-3">
                    <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                      <span className="text-lg">{categoryIcons[categoryKey as keyof typeof categoryIcons]}</span>
                      {categoryName}
                    </h4>
                  </div>

                  {/* Category Features */}
                  {categoryFeatures.map((feature, index) => (
                    <div
                      key={`${categoryKey}-${index}`}
                      className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      <div className="lg:pr-4">
                        <div className="flex items-start gap-2">
                          <div>
                            <h5 className="font-medium text-gray-900">{feature.name}</h5>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                          <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        </div>
                      </div>

                      {selectedProductData.map((product) => (
                        <div key={product.id} className="flex justify-center items-center py-2">
                          {renderFeatureValue(feature[product.id as keyof typeof feature] as boolean | string)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-50 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="hidden lg:block"></div>
              {selectedProductData.map((product) => (
                <div key={product.id} className="space-y-2">
                  <a
                    href="#booking"
                    className="btn-primary-enhanced w-full justify-center"
                  >
                    Try {product.name}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi! I'm interested in the ${product.name} mattress.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-enhanced w-full justify-center text-sm"
                  >
                    Ask Questions
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center ${isVisible ? 'reveal-up revealed' : 'reveal-up'}`} style={{ animationDelay: '0.3s' }}>
          <p className="text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
            Still unsure? Our sleep experts will help you choose the perfect mattress
          </p>
          <a
            href="#booking"
            className="btn-primary-enhanced"
          >
            Get Personal Recommendation
            <span className="text-sm opacity-90">• Free Consultation</span>
          </a>
        </div>
      </div>
    </section>
  )
}