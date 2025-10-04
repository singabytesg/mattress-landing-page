"use client"

import { useState, useEffect } from 'react'
import { Snowflake, Wind, Shield, Heart, Play, TrendingUp, Zap } from 'lucide-react'

const technologies = [
  {
    icon: Snowflake,
    title: "Cooling Gel Technology",
    description: "Advanced gel-infused memory foam regulates temperature for Singapore's tropical nights",
    details: "Reduces sleep temperature by up to 3°C compared to traditional foam",
    benefit: "Better sleep quality in humid weather"
  },
  {
    icon: Wind,
    title: "Breathable Cell Structure",
    description: "Open-cell structure promotes airflow, preventing heat buildup and moisture",
    details: "2x more breathable than standard memory foam",
    benefit: "Stays dry and fresh all night"
  },
  {
    icon: Shield,
    title: "Antimicrobial Protection",
    description: "Silver-ion technology prevents dust mites, bacteria, and allergens",
    details: "Clinically proven to reduce allergens by 99.9%",
    benefit: "Healthier sleep environment"
  },
  {
    icon: Heart,
    title: "Hybrid Spring System",
    description: "Bonnel Pocket Spring system provides pressure absorption and motion isolation",
    details: "Reduces pressure points by 40% vs. traditional mattresses",
    benefit: "Wake up refreshed without aches"
  },
]

const certifications = [
  { name: "CertiPUR-US®", description: "Safe, non-toxic materials" },
  { name: "OEKO-TEX®", description: "Chemical-free fabrics" },
  { name: "ISO 9001", description: "Quality management certified" },
]

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(0)
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

    const element = document.getElementById('technology')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology" className="py-20" style={{ backgroundColor: 'var(--cream-light)' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'reveal-up revealed' : 'reveal-up'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Singapore-Optimized Sleep Technology
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-primary)' }}>
            Every ESSEN mattress features our proprietary technology system,
            engineered specifically for Singapore's tropical climate and lifestyle
          </p>

          {/* Video Showcase */}
          <div className="video-placeholder max-w-lg mx-auto cursor-pointer">
            <div className="video-placeholder-icon">
              <Play className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-700">Manufacturing Process</div>
              <div className="text-sm text-gray-600">See how we craft each mattress</div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Interactive Technology List */}
            <div className={`${isVisible ? 'reveal-left revealed' : 'reveal-left'}`}>
              <div className="space-y-4">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon
                  const isActive = selectedTech === index
                  return (
                    <div
                      key={index}
                      className={`group cursor-pointer transition-all duration-300 ${
                        isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                      }`}
                      onClick={() => setSelectedTech(index)}
                    >
                      <div className={`p-6 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-white shadow-2xl border-2 border-orange-200'
                          : 'bg-white/70 hover:bg-white shadow-md hover:shadow-lg border border-gray-100'
                      }`}>
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                              isActive ? 'scale-110' : 'group-hover:scale-105'
                            }`}
                            style={{
                              backgroundColor: isActive ? 'var(--primary-burnt)' : 'var(--primary-beige)',
                              color: isActive ? 'white' : 'var(--primary-burnt)'
                            }}
                          >
                            <Icon className="w-7 h-7" />
                          </div>

                          <div className="flex-1">
                            <h3 className={`font-bold mb-2 transition-colors ${
                              isActive ? 'text-orange-700' : 'text-gray-800'
                            }`}>
                              {tech.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {tech.description}
                            </p>

                            {isActive && (
                              <div className="space-y-2 animate-fadeInUp">
                                <div className="flex items-center gap-2 text-sm">
                                  <TrendingUp className="w-4 h-4 text-green-600" />
                                  <span className="font-medium text-gray-700">{tech.details}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Zap className="w-4 h-4 text-blue-600" />
                                  <span className="text-gray-600">{tech.benefit}</span>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className={`transition-all ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
                            <div className={`w-3 h-3 rounded-full transition-all ${
                              isActive ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                            }`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Certifications */}
              <div className="mt-12 p-6 bg-white/80 rounded-2xl">
                <h3 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Quality Certifications
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{cert.name}</div>
                        <div className="text-xs text-gray-600">{cert.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Visualization */}
            <div className={`${isVisible ? 'reveal-right revealed' : 'reveal-right'}`}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                  Hybrid Construction System
                </h3>

                {/* Interactive Layer Stack */}
                <div className="relative mb-8">
                  <div className="layer-stack">
                    {[
                      { name: "Cooling Gel Memory Foam", thickness: "5cm", color: 'layer-comfort', description: "Temperature regulation" },
                      { name: "Sink-Resistant Foam Layer", thickness: "4cm", color: 'layer-memory', description: "Durability" },
                      { name: "Bonnel Pocket Spring Core", thickness: "15cm", color: 'layer-transition', description: "Motion isolation" },
                      { name: "Foundation Support Layer", thickness: "6cm", color: 'layer-support', description: "Stability" },
                    ].map((layer, index) => (
                      <div
                        key={index}
                        className={`mattress-layer ${layer.color} group`}
                        style={{ height: `${50 - index * 5}px` }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">{index + 1}</span>
                            </div>
                            <div>
                              <div className="layer-label">{layer.name}</div>
                              <div className="text-xs opacity-80 text-white">{layer.description}</div>
                            </div>
                          </div>
                          <div className="text-white text-xs font-bold">{layer.thickness}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">30cm</div>
                    <div className="text-sm text-gray-600">Total Height</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">200kg</div>
                    <div className="text-sm text-gray-600">Per Person</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">-3°C</div>
                    <div className="text-sm text-gray-600">Cooling Effect</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">Hybrid</div>
                    <div className="text-sm text-gray-600">Spring + Foam</div>
                  </div>
                </div>

                {/* Climate Features */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Singapore Climate Optimizations
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        <strong>Humidity Resistance:</strong> Prevents mold and dust mites
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        <strong>Quick Dry Technology:</strong> Faster moisture evaporation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        <strong>Tropical Durability:</strong> Maintains shape in high humidity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}