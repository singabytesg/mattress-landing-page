import { Snowflake, Wind, Shield, Heart } from 'lucide-react'

const technologies = [
  {
    icon: Snowflake,
    title: "Cooling Gel Layer",
    description: "Advanced gel-infused memory foam regulates temperature for Singapore's tropical nights",
  },
  {
    icon: Wind,
    title: "Breathable Design",
    description: "Open-cell structure promotes airflow, preventing heat buildup and moisture",
  },
  {
    icon: Shield,
    title: "Anti-Microbial Protection",
    description: "Silver-ion technology prevents dust mites, bacteria, and allergens",
  },
  {
    icon: Heart,
    title: "Pressure Relief System",
    description: "7-zone support adapts to your body for optimal spinal alignment",
  },
]

export default function Technology() {
  return (
    <section id="technology" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Singapore-Optimized Technology
            </h2>
            <p className="text-lg opacity-80 mb-8" style={{ color: 'var(--text-primary)' }}>
              Every ESSEN mattress features our proprietary 4-layer system, designed specifically for Singapore's humid climate.
            </p>

            <div className="space-y-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <div key={index} className="flex gap-4 group">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: 'var(--primary-burnt)', opacity: 0.9 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {tech.title}
                      </h3>
                      <p className="text-sm opacity-70" style={{ color: 'var(--text-primary)' }}>
                        {tech.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Layer Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                4-Layer Comfort System
              </h3>

              <div className="space-y-3">
                {[
                  { name: "Cooling Gel Memory Foam", thickness: "5cm", color: 'var(--accent-blue)' },
                  { name: "Adaptive Comfort Layer", thickness: "7cm", color: 'var(--primary-beige)' },
                  { name: "Transition Support Layer", thickness: "5cm", color: 'var(--secondary-taupe)' },
                  { name: "High-Density Support Core", thickness: "13cm", color: 'var(--primary-burnt)' },
                ].map((layer, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg p-4 hover:scale-[1.02] transition-transform cursor-pointer"
                    style={{ backgroundColor: `${layer.color}20` }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {layer.name}
                        </p>
                        <p className="text-xs opacity-60" style={{ color: 'var(--text-primary)' }}>
                          {layer.thickness} thickness
                        </p>
                      </div>
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: layer.color, opacity: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--primary-beige)', opacity: 0.8 }}>
                <p className="text-sm font-medium text-center" style={{ color: 'var(--text-primary)' }}>
                  Total Height: 30cm | Weight Capacity: 200kg per person
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}