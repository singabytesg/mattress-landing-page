"use client"

import { useState, useEffect } from 'react'
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
    name: 'Antimicrobial Cover',
    thickness: '1/4"',
    description: 'Silver-infused fabric cover with cooling properties',
    benefits: ['Temperature regulation', 'Antimicrobial protection', 'Soft touch'],
    color: 'layer-comfort',
    icon: <Shield className="w-5 h-5" />,
    details: {
      material: 'Silver Microtencel™ Fabric',
      density: 'Ultra-fine weave',
      features: ['Hypoallergenic', 'Moisture-wicking', 'Machine washable']
    }
  },
  {
    id: 'comfort',
    name: 'Gel Memory Foam',
    thickness: '2-3"',
    description: 'Cooling gel-infused memory foam for pressure relief',
    benefits: ['Pressure point relief', 'Body contouring', 'Temperature control'],
    color: 'layer-memory',
    icon: <Heart className="w-5 h-5" />,
    details: {
      material: 'CertiPUR-US® Gel Memory Foam',
      density: '4-5 lb/ft³',
      features: ['Open-cell structure', 'Gel infusion', 'Quick recovery']
    }
  },
  {
    id: 'transition',
    name: 'Transition Layer',
    thickness: '1-2"',
    description: 'Responsive foam layer for optimal support transition',
    benefits: ['Smooth support transition', 'Enhanced durability', 'Motion isolation'],
    color: 'layer-transition',
    icon: <Zap className="w-5 h-5" />,
    details: {
      material: 'High-Resilience Polyfoam',
      density: '2.5-3 lb/ft³',
      features: ['Quick response', 'Breathable', 'Long-lasting']
    }
  },
  {
    id: 'support',
    name: 'Support Core',
    thickness: '6-8"',
    description: 'High-density support core for proper spinal alignment',
    benefits: ['Spinal alignment', 'Deep support', 'Edge reinforcement'],
    color: 'layer-support',
    icon: <Thermometer className="w-5 h-5" />,
    details: {
      material: 'High-Density Support Foam',
      density: '1.8-2.2 lb/ft³',
      features: ['Firm support', 'Breathable channels', 'Zoned support']
    }
  },
  {
    id: 'base',
    name: 'Foundation Layer',
    thickness: '1-2"',
    description: 'Durable foundation for mattress longevity',
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
          <div className="flex flex-wrap justify-center gap-4">
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

            {/* Video Placeholder Button */}
            <div className="video-placeholder inline-flex items-center justify-center w-48 h-12 cursor-pointer">
              <div className="video-placeholder-icon !w-8 !h-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="ml-2 font-medium text-gray-700">Watch Construction</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Layer Stack Visualization */}
            <div className={`${isVisible ? 'reveal-left revealed' : 'reveal-left'}`}>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                  Cross-Section View
                </h3>

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

                {/* Layer Selector Buttons */}
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