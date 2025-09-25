"use client"

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = siteConfig.contact.whatsapp
  const message = encodeURIComponent(
    'Hi! I saw your mattress promotion. I would like to know more about the showroom exclusive prices.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  if (!isVisible) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-fadeInUp"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}