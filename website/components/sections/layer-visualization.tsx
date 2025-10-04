"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, Thermometer, Shield, Zap, Heart } from 'lucide-react'

interface MattressLayer {
  id: string
  name: string
  thickness: string
  description: string
  benefits: string[]
  color: string
  icon: React.ReactNode
  details: {
    material: string
    density: string
    features: string[]
  }
}

const mattressLayers: MattressLayer[] = [
  {
    id: 'cover',
    name: 'ESSEN GuardWeave™ Cover',
    thickness: '1/4"',
    description: 'Silver-ion infused fabric that resists bacteria, dust mites, and allergens',
    benefits: ['Certified antimicrobial protection (99.9% reduction)', 'Moisture-wicking for Singapore humidity', 'Soft-touch quilted surface'],
    color: 'layer-comfort',
    icon: <Shield className="w-5 h-5" />,
    details: {
      material: 'ESSEN GuardWeave™ Antimicrobial Fabric',
      density: 'Ultra-fine weave with silver-ion technology',
      features: ['Hypoallergenic', 'Moisture-wicking', 'Breathable design']
    }
  },
  {
    id: 'comfort',
    name: 'ESSEN CoolFlow™ Memory Foam',
    thickness: '2-3"',
    description: 'Advanced gel-infused memory foam that regulates temperature and contours to your body',
    benefits: ['Gel infusion reduces sleep temperature by 3°C', 'Superior body contouring and pressure relief', 'Open-cell structure promotes airflow'],
    color: 'layer-memory',
    icon: <Heart className="w-5 h-5" />,
    details: {
      material: 'ESSEN CoolFlow™ HD (Ultra Plus) / CoolFlow™ Responsive (Ultra Max)',
      density: '3.5 lb/ft³ High Density (Ultra Plus) / 2.5 lb/ft³ Responsive (Ultra Max)',
      features: ['Open-cell structure', 'Cooling gel beads', '50% faster recovery (Ultra Max)']
    }
  },
  {
    id: 'transition',
    name: 'ESSEN SinkShield™ Layer',
    thickness: '1-2"',
    description: 'High-density transition layer prevents sagging and extends mattress life',
    benefits: ['Prevents body impressions and sagging for 10+ years', 'Smooth comfort-to-support transition', 'Enhanced durability'],
    color: 'layer-transition',
    icon: <Zap className="w-5 h-5" />,
    details: {
      material: 'ESSEN SinkShield™ Foundation Foam',
      density: '2.8 lb/ft³ high-density support foam',
      features: ['Anti-sagging technology', 'Prevents body impressions', 'Long-lasting durability']
    }
  },
  {
    id: 'support',
    name: 'ESSEN PocketGuard™ Spring Core',
    thickness: '6-8"',
    description: 'Individually wrapped coils for motion isolation and pressure-absorbent support',
    benefits: ['700+ individually wrapped coils work independently', 'Minimizes partner movement transfer by 85%', 'Pressure-absorbent design adapts to your body'],
    color: 'layer-support',
    icon: <Thermometer className="w-5 h-5" />,
    details: {
      material: 'ESSEN PocketGuard™ Spring Core (Ultra Plus) / PocketGuard™ Plus with FeltShield™ (Ultra Max)',
      density: 'Premium-grade medium gauge steel coils',
      features: ['Motion isolation', 'Pressure absorbent', 'FeltShield™ reinforcement (Ultra Max)']
    }
  },
  {
    id: 'base',
    name: 'Foundation Layer',
    thickness: '1-2"',
    description: 'Durable foundation for mattress longevity and stability',
    benefits: ['Structural integrity', 'Air circulation', 'Durability'],
    color: 'layer-base',
    icon: <Shield className="w-5 h-5" />,
    details: {
      material: 'Dense Support Foam',
      density: '1.5 lb/ft³',
      features: ['Ventilation holes', 'Stable base', '10-year warranty']
    }
  }
]

export default function LayerVisualization() {
  const [selectedLayer, setSelectedLayer] = useState<string>('comfort')
  const [isExploded, setIsExploded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMattress, setSelectedMattress] = useState<'ultraplus' | 'ultramax'>('ultraplus')
  const [showFactory, setShowFactory] = useState(false)

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

    const element = document.getElementById('layer-visualization')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const selectedLayerData = mattressLayers.find(layer => layer.id === selectedLayer)

  return (
    <section id="layer-visualization" className="py-20" style={{ backgroundColor: 'var(--cream-light)' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'reveal-up revealed' : 'reveal-up'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Advanced Mattress Technology
          </h2>
          <p className="text-lg opacity-80 mb-8" style={{ color: 'var(--text-primary)' }}>
            Discover the science behind your perfect night's sleep
          </p>

          {/* Interactive Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setIsExploded(!isExploded)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                isExploded
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-300'
              }`}
            >
              {isExploded ? 'Stack View' : 'Exploded View'}
            </button>

            {/* Factory Image Button */}
            <button
              onClick={() => setShowFactory(!showFactory)}
              className="px-6 py-3 rounded-lg font-semibold transition-all bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-300 flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>View Construction</span>
            </button>
          </div>

          {/* Mattress Toggle */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setSelectedMattress('ultraplus')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMattress === 'ultraplus'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
              }`}
            >
              Ultra Plus
            </button>
            <button
              onClick={() => setSelectedMattress('ultramax')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMattress === 'ultramax'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
              }`}
            >
              Ultra Max
            </button>
          </div>
        </div>

        {/* Factory Image Modal/Display */}
        {showFactory && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative w-full h-[400px] bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/ultramax-factory.png"
                alt="ESSEN Mattress Construction"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setShowFactory(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Layer Stack Visualization */}
            <div className={`${isVisible ? 'reveal-left revealed' : 'reveal-left'}`}>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                  Cross-Section View
                </h3>

                {isExploded ? (
                  /* Exploded View - Show Product Image */
                  <div className="relative w-full h-[500px] bg-white rounded-xl overflow-hidden">
                    <Image
                      src={selectedMattress === 'ultraplus' ? '/images/ultraplus-expanded.jpg' : '/images/ultramax-full-expanded.jpg'}
                      alt={`${selectedMattress === 'ultraplus' ? 'Ultra Plus' : 'Ultra Max'} Cross-Section`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  /* Stack View - Show Layer Stack */
                  <div className="layer-stack relative">
                    {mattressLayers.map((layer, index) => {
                      const isSelected = selectedLayer === layer.id
                      const explodedOffset = isExploded ? index * 12 : 0
                      const layerHeight = `${Math.max(20, 40 - index * 5)}px`

                      return (
                        <div
                          key={layer.id}
                          className={`mattress-layer ${layer.color} ${isSelected ? 'z-20 shadow-lg' : ''}`}
                          style={{
                            height: layerHeight,
                            transform: `translateY(${explodedOffset}px)`,
                            marginBottom: isExploded ? '12px' : '0',
                            cursor: 'pointer',
                            zIndex: isSelected ? 20 : 10 - index
                          }}
                          onClick={() => setSelectedLayer(layer.id)}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                {layer.icon}
                              </div>
                              <div>
                                <div className="layer-label">{layer.name}</div>
                                <div className="text-xs opacity-80 text-white">{layer.thickness}</div>
                              </div>
                            </div>
                            {isSelected && (
                              <div className="bg-white bg-opacity-20 rounded-full p-1">
                                <ChevronRight className="w-4 h-4 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Layer Selector Buttons */}
                {!isExploded && (
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {mattressLayers.map((layer) => (
                      <button
                        key={layer.id}
                        onClick={() => setSelectedLayer(layer.id)}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          selectedLayer === layer.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 bg-white hover:border-orange-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-4 h-4 rounded ${layer.color}`}></div>
                          <span className="font-medium text-sm">{layer.name}</span>
                        </div>
                        <p className="text-xs text-gray-600">{layer.thickness}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Layer Details */}
            <div className={`${isVisible ? 'reveal-right revealed' : 'reveal-right'}`}>
              {selectedLayerData && (
                <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${selectedLayerData.color}`}>
                      {selectedLayerData.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {selectedLayerData.name}
                      </h3>
                      <p className="text-orange-600 font-medium">{selectedLayerData.thickness} thick</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedLayerData.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedLayerData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Details */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                      Technical Specifications
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <span className="font-medium text-gray-700">Material:</span>
                        <span className="ml-2 text-gray-600">{selectedLayerData.details.material}</span>
                      </div>

                      <div>
                        <span className="font-medium text-gray-700">Density:</span>
                        <span className="ml-2 text-gray-600">{selectedLayerData.details.density}</span>
                      </div>

                      <div>
                        <span className="font-medium text-gray-700">Features:</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {selectedLayerData.details.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Singapore Climate Features */}
        <div className={`mt-16 ${isVisible ? 'reveal-up revealed' : 'reveal-up'}`} style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
              Designed for Singapore's Climate
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Thermometer className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Temperature Regulation
                </h4>
                <p className="text-gray-600 text-sm">
                  Advanced cooling technology keeps you comfortable in tropical humidity
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Antimicrobial Protection
                </h4>
                <p className="text-gray-600 text-sm">
                  Silver-infused fabrics resist bacteria and dust mites naturally
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Quick Recovery
                </h4>
                <p className="text-gray-600 text-sm">
                  Open-cell foam structure provides responsive support and airflow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}