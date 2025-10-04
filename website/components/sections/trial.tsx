import { Moon, Shield, Truck } from 'lucide-react'
import { promotions } from '@/config/site'

export default function Trial() {
  return (
    <section id="trial" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--primary-burnt) 0%, var(--accent-blue) 100%)`,
        }}
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='60' height='60' fill='url(%23dots)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sleep On It Risk-Free
          </h2>
          <p className="text-xl mb-12 opacity-95">
            Your comfort is our priority - that's why we offer the most generous trial in Singapore
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <Moon className="w-12 h-12" />
              </div>
              <div className="text-5xl font-bold mb-2">{promotions.trial.nights}</div>
              <div className="text-lg">Night Trial</div>
              <p className="text-sm opacity-80 mt-2">
                Take your time to experience better sleep
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-12 h-12" />
              </div>
              <div className="text-5xl font-bold mb-2">{promotions.trial.warranty}</div>
              <div className="text-lg">Year Warranty</div>
              <p className="text-sm opacity-80 mt-2">
                Quality guaranteed for a decade
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <Truck className="w-12 h-12" />
              </div>
              <div className="text-5xl font-bold mb-2">Free</div>
              <div className="text-lg">Delivery & Returns</div>
              <p className="text-sm opacity-80 mt-2">
                Including setup and old mattress removal
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">How Our Trial Works</h3>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold mb-2 opacity-50">01</div>
                <p className="text-sm">Visit our showroom and choose your perfect mattress</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 opacity-50">02</div>
                <p className="text-sm">We deliver and set up your new mattress for free</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 opacity-50">03</div>
                <p className="text-sm">Sleep on it for up to 100 nights in your own home</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 opacity-50">04</div>
                <p className="text-sm">Love it or we'll pick it up and refund you fully</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="#booking"
              className="inline-block px-10 py-4 bg-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
              style={{ color: 'var(--primary-burnt)' }}
            >
              Start Your 100-Night Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}