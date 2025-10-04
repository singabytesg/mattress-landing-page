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
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMattress, setSelectedMattress] = useState<'ultraplus' | 'ultramax'>('ultraplus')

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

          {/* Mattress Toggle */}
          <div className="flex justify-center gap-3 mb-6">
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

        <div className="max-w-4xl mx-auto">
          <div className={`${isVisible ? 'reveal-up revealed' : 'reveal-up'}`}>
            {/* Show Product Image */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={selectedMattress === 'ultraplus' ? '/images/ultraplus-expanded.jpg' : '/images/ultramax-full-expanded.jpg'}
                alt={`${selectedMattress === 'ultraplus' ? 'Ultra Plus' : 'Ultra Max'} Cross-Section`}
                fill
                className="object-contain"
              />
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