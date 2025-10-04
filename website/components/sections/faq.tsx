"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/config/site'

const faqs = [
  {
    question: "Why are showroom prices cheaper than online?",
    answer: "We offer exclusive showroom prices to reward customers who visit us in person. This allows us to provide personalized service, let you try all our mattresses, and often results in bundle deals with our furniture collections - savings that can exceed 40% off regular prices."
  },
  {
    question: "How does the 100-night trial work?",
    answer: "After purchasing from our showroom, we deliver your mattress for free. You have 100 nights to sleep on it at home. If you're not completely satisfied, we'll pick it up at no charge and provide a full refund. No questions asked, no hidden fees."
  },
  {
    question: "What makes ESSEN mattresses suitable for Singapore's climate?",
    answer: "Our mattresses feature cooling gel technology, breathable materials, and anti-microbial protection specifically designed for tropical humidity. The open-cell structure promotes airflow while silver-ion technology prevents mold and dust mites common in our climate."
  },
  {
    question: "Can I buy online and pick up at the showroom?",
    answer: "While you can browse our collection online, all purchases must be completed at our showroom to receive the exclusive pricing. This ensures you get personalized service and the best possible deal. You can book an appointment online for faster service."
  },
  {
    question: "What's included in the free delivery?",
    answer: "Free delivery includes: transportation to your home, carrying the mattress to your bedroom (including stairs), professional setup, plastic removal, and optional removal of your old mattress. We deliver island-wide in Singapore within 3-5 days."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes! We offer 0% interest installment plans for 6 or 12 months with major credit cards. We also accept PayNow, cash, and checks. Speak to our showroom consultants about the best payment option for you."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg opacity-80" style={{ color: 'var(--text-primary)' }}>
              Everything you need to know about ESSEN mattresses
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center group"
                >
                  <span className="font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: 'var(--primary-burnt)' }}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fadeInUp">
                    <p className="text-sm leading-relaxed opacity-80" style={{ color: 'var(--text-primary)' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--primary-beige)' }}>
            <p className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Still have questions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href={`tel:+65${siteConfig.contact.phone}`}
                className="inline-block px-6 py-3 bg-white font-semibold rounded-lg hover:shadow-md transition-shadow"
                style={{ color: 'var(--text-primary)' }}
              >
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}