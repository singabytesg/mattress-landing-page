import { Award, Truck, Shield, Heart } from 'lucide-react'

const valueProps = [
  {
    icon: Award,
    title: "Essential Quality",
    description: "Premium materials and construction that ensures quality sleep for years to come.",
    color: 'var(--primary-burnt)',
  },
  {
    icon: Truck,
    title: "Effortless Experience",
    description: "From browsing to delivery, we make choosing your perfect mattress seamless.",
    color: 'var(--accent-blue)',
  },
  {
    icon: Shield,
    title: "100-Night Trial",
    description: "Sleep on it risk-free. Not satisfied? We'll pick it up and refund you fully.",
    color: 'var(--success)',
  },
  {
    icon: Heart,
    title: "Exceptional Service",
    description: "Our sleep experts help you find the perfect fit for your home and style.",
    color: 'var(--warning)',
  },
]

export default function ValueProps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The ESSEN Promise
          </h2>
          <p className="text-lg opacity-80" style={{ color: 'var(--text-primary)' }}>
            Upholding the best prices without compromising on quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow"
                  style={{ backgroundColor: `${prop.color}20` }}
                >
                  <Icon className="w-10 h-10" style={{ color: prop.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {prop.title}
                </h3>
                <p className="text-sm opacity-70" style={{ color: 'var(--text-primary)' }}>
                  {prop.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl" style={{ backgroundColor: 'var(--primary-beige)' }}>
            <p className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Visit our showroom to experience the difference
            </p>
            <a
              href="#booking"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--primary-burnt)' }}
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}