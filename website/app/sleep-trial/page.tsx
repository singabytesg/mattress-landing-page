import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { CheckCircle2, Shield, Recycle } from "lucide-react"

export const metadata: Metadata = {
  title: "100-Night Perfect Sleep Guarantee | ESSEN Mattress",
  description: "Try your ESSEN mattress risk-free for 100 nights. Our comprehensive sleep trial policy ensures you find the perfect mattress for your comfort.",
}

export default function SleepTrialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-[var(--text-primary)] text-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" style={{ color: 'var(--primary-burnt)' }} />
              Risk-Free Sleep Trial
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The 100-Night Perfect Sleep Guarantee
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto" style={{ color: 'var(--primary-beige)' }}>
              At ESSEN, we are confident that you will love your new mattress. We also understand that a mattress is a significant investment in your well-being, and your body needs time to adjust to a new sleeping surface.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-12">
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">100 Nights Trial</h3>
              <p className="text-sm text-muted-foreground">Sleep on it for over 3 months risk-free</p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Exchange</h3>
              <p className="text-sm text-muted-foreground">One-time complimentary firmness exchange</p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Give Back</h3>
              <p className="text-sm text-muted-foreground">Returned mattresses donated to families in need</p>
            </div>
          </div>

          {/* Section 1: Trial Period & Eligibility */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              1. Trial Period & Eligibility
            </h2>

            <div className="space-y-5">
              <div className="bg-muted/50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">100-Night Trial:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your trial period begins on the date your mattress is delivered. You have 100 nights to sleep on the mattress in the comfort of your own home to decide if it's the perfect fit for you.
                </p>
              </div>

              <div className="bg-muted/50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Mandatory 30-Night Adjustment Period:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It can take between 30 to 90 days for your body to fully acclimate to a new mattress. Initial stiffness or discomfort is normal. For this reason, we require you to sleep on your new mattress for a minimum of 30 nights before initiating a return or exchange. This allows your body sufficient time to adjust to the new support system.
                </p>
              </div>

              <div className="bg-muted/50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Eligibility:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-burnt)' }} />
                    <span>This guarantee is limited to <strong>one (1) mattress return per household or delivery address</strong> to prevent policy abuse.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--primary-burnt)' }} />
                    <span>The trial is only available to the original purchaser of the mattress with a valid proof of purchase from our official Singapore website or authorized showrooms. The guarantee is non-transferable.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Conditions for Return */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              2. Conditions for Return
            </h2>

            <div className="space-y-5">
              <div className="bg-muted/50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Mattress Condition:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be eligible for a return, the mattress must be in a clean, donatable condition, free from any stains, tears, odours, or damage beyond normal wear and tear. We reserve the right to refuse a return if the product is found to be in an unsanitary or damaged state.
                </p>
              </div>

              <div className="bg-muted/50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Use of Mattress Protector:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strongly recommend using a waterproof mattress protector throughout the trial period. A soiled or stained mattress will void the 100-Night Perfect Sleep Guarantee.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Return & Exchange Process */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                3. The Return & Exchange Process
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to help you find the perfect sleep solution. Therefore, our process is designed to first resolve any comfort issues before proceeding with a full refund.
              </p>
            </div>

            <div className="space-y-5">
              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Initiate a Request</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11">
                  If, after the 30-night adjustment period, you are not satisfied, please contact our customer service team via email at{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-medium hover:underline" style={{ color: 'var(--primary-burnt)' }}>
                    {siteConfig.contact.email}
                  </a>{" "}
                  to initiate a request.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Free Firmness Exchange (Recommended)</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11">
                  The most common reason for dissatisfaction is an incorrect firmness level. As the primary solution, we offer a <strong>one-time, complimentary exchange</strong> for a different mattress model or firmness level in our range. Our sleep experts will work with you to find a more suitable option.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Return for Refund</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11 mb-4">
                  If you choose not to proceed with an exchange, you may opt for a full return.
                </p>
                <div className="ml-11 space-y-3 text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="font-semibold">•</span>
                    <div>
                      <strong>Collection Fee:</strong> A flat <strong>S$200 collection fee</strong> will be deducted from your refund to cover the costs of our third-party logistics partner retrieving the unboxed mattress. This fee is <strong>waived</strong> if you choose the exchange option.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">•</span>
                    <div>
                      <strong>Collection Process:</strong> We will arrange for a professional moving service to collect the mattress from your address. You are not required to re-box the mattress, but we do ask that you wrap it in its original plastic packaging (or a suitable alternative) to protect it during transit.
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">•</span>
                    <div>
                      <strong>Refund Processing:</strong> Once the mattress has been collected and its condition verified, we will process your refund (less the collection fee) to your original payment method within 7-14 business days. Please note that any original delivery surcharges (e.g., for staircase delivery) are non-refundable.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Exclusions & Limitations */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              4. Exclusions & Limitations
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  The 100-Night Perfect Sleep Guarantee applies only to our mattresses. It <strong>does not apply</strong> to other products such as bed frames, pillows, bedding accessories, custom-sized mattresses, or items marked as "Clearance" or "As-Is".
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  This policy is valid only for customers residing in Singapore with a Singaporean delivery address.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  ESSEN reserves the right to refuse the 100-Night Perfect Sleep Guarantee to anyone suspected of abusing the policy, including but not limited to, having a history of excessive returns.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5: Our Commitment to Sustainability */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-8 rounded-xl border border-green-200 dark:border-green-900 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Recycle className="w-8 h-8" style={{ color: 'var(--primary-burnt)' }} />
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                5. Our Commitment to Sustainability
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We never resell a returned mattress. Every mattress returned to us in good condition is donated to local charities and families in need, ensuring it finds a second home and does not end up in a landfill.
            </p>
          </section>

          {/* Section 6: Important Distinctions */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              6. Important Distinctions
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  <strong>Warranty:</strong> This sleep trial is a satisfaction guarantee covering comfort preference. It is separate from our 10-Year Limited Warranty, which covers manufacturing defects and material faults.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold flex-shrink-0">•</span>
                <span className="leading-relaxed">
                  <strong>Statutory Rights:</strong> This policy is offered in addition to, and does not affect, your statutory rights for non-conforming goods under Singapore's Consumer Protection (Fair Trading) Act (CPFTA), also known as the Lemon Law.
                </span>
              </li>
            </ul>
          </section>

          {/* ESSEN General Policies */}
          <section className="bg-muted/50 p-8 rounded-xl border-2 border-dashed space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              ESSEN General Policies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This 100-Night Perfect Sleep Guarantee is specific to mattress purchases. All other terms and conditions as outlined in ESSEN's general policies apply to your purchase. For comprehensive information, please refer to:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <a
                href="https://essen.sg/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Terms and Conditions</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#warranty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Warranty</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#faq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">FAQ</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Delivery Information</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#return"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Return Policy</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#cancellation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Cancellation Policy</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#disposal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Disposal Service</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
              <a
                href="https://essen.sg/terms#storage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">Free Storage</span>
                <span className="ml-auto text-muted-foreground group-hover:text-primary">→</span>
              </a>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-primary)]/90 text-white p-8 md:p-10 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Questions about our Sleep Trial?</h3>
            <p className="opacity-90 mb-6 text-lg" style={{ color: 'var(--primary-beige)' }}>
              Our team is here to help. Contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--text-primary)] rounded-lg font-semibold hover:bg-[var(--primary-beige)] transition-colors shadow-md"
              >
                Email Us
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
