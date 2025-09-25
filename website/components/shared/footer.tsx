import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--text-primary)' }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--primary-burnt)' }}>
              ESSEN
            </h3>
            <p className="text-sm opacity-80" style={{ color: 'var(--primary-beige)' }}>
              More than just a furniture store, ESSEN is your partner in creating the perfect home.
              Experience essential quality in every product.
            </p>
            <p className="text-xs opacity-60" style={{ color: 'var(--secondary-taupe)' }}>
              Making luxury accessible to everyone
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg" style={{ color: 'var(--primary-beige)' }}>
              Products
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#essential" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ESSEN Essential
                </Link>
              </li>
              <li>
                <Link href="#luxe" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ESSEN Luxe
                </Link>
              </li>
              <li>
                <Link href="#ortho" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ESSEN Ortho
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.mainSite} target="_blank" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Furniture Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg" style={{ color: 'var(--primary-beige)' }}>
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#trial" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  100-Night Trial
                </Link>
              </li>
              <li>
                <Link href="#warranty" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  10-Year Warranty
                </Link>
              </li>
              <li>
                <Link href="#delivery" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Free Delivery
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Showrooms */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg" style={{ color: 'var(--primary-beige)' }}>
              Visit Our Showrooms
            </h4>
            <div className="space-y-3">
              {siteConfig.showrooms.map((showroom) => (
                <div key={showroom.id} className="text-sm">
                  <div className="font-medium opacity-90">{showroom.name}</div>
                  <div className="opacity-70 text-xs">{showroom.address}</div>
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                +65 {siteConfig.contact.phone.slice(2)}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © 2024 ESSEN. Making luxury accessible to everyone.
            </p>
            <p className="text-sm opacity-60">
              mattress.essen.sg
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}