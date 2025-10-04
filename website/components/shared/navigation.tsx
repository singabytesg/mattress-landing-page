"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-wider"
            style={{ color: 'var(--primary-burnt)' }}
          >
            ESSEN
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#products"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-primary)' }}
            >
              Mattresses
            </Link>
            <Link
              href="#technology"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-primary)' }}
            >
              Technology
            </Link>
            <Link
              href="#trial"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-primary)' }}
            >
              100-Night Trial
            </Link>
            <Link
              href="#reviews"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-primary)' }}
            >
              Reviews
            </Link>
            <Link
              href={siteConfig.links.mainSite}
              target="_blank"
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-primary)' }}
            >
              Furniture
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="#booking"
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'var(--primary-burnt)' }}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}