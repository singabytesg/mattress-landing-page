import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Shield, CheckCircle2, XCircle, AlertCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "10-Year Limited Warranty | ESSEN Mattress",
  description: "Our comprehensive 10-year limited warranty covers manufacturing defects and faulty workmanship. Learn about your coverage and protection.",
}

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-[var(--text-primary)] text-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" style={{ color: 'var(--primary-burnt)' }} />
              Quality Guaranteed
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our 10-Year Limited Mattress Warranty
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto" style={{ color: 'var(--primary-beige)' }}>
              We build our mattresses to last and stand confidently behind their quality and craftsmanship. This 10-Year Limited Warranty is our promise to you, covering manufacturing defects and faulty workmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-12">
          {/* Key Coverage Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Years 1-2: Full Coverage</h3>
              <p className="text-sm text-muted-foreground">Free repair or replacement for any manufacturing defects</p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" style={{ color: 'var(--primary-burnt)' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Years 3-10: Prorated Coverage</h3>
              <p className="text-sm text-muted-foreground">Continued protection with prorated replacement cost</p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold text-amber-900 dark:text-amber-200">Important Notice</h3>
                <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                  This warranty is valid for 10 years from the date of delivery and applies only to the original purchaser of the mattress. It is non-transferable. Please retain your original sales invoice as proof of purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Warranty Coverage Structure */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Warranty Coverage Structure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our 10-Year Limited Warranty is a combination warranty, offering full coverage in the initial years and prorated coverage for the remainder of the term.
            </p>

            <div className="space-y-5">
              <div className="bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 border-l-4 border-green-600 p-5 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold">
                    1-2
                  </span>
                  Years 1–2: Full Coverage (Non-Prorated)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  During the first two years, should your mattress be found to have a manufacturing defect, we will repair or replace it at our discretion, at no cost to you. All transportation and inspection costs are the responsibility of the customer.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold">
                    3-10
                  </span>
                  Years 3–10: Limited Coverage (Prorated)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  After the first two years, we will, at our option, repair or replace the mattress on a prorated basis. The cost to you will be calculated as 1/10th of the <em>prevailing retail price</em> multiplied by the number of years you have owned the mattress, plus all transportation costs.
                </p>
                <div className="bg-blue-100/50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-200">
                    Example: If a defect appears in year 5, the replacement charge would be 5/10 (50%) of the current retail price.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-5 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If an identical model is no longer available, we reserve the right to substitute it with a comparable model of equal or greater value. A repair or replacement does not extend the original warranty period or begin a new one.
                </p>
              </div>
            </div>
          </section>

          {/* What This Warranty Covers */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8" style={{ color: 'var(--primary-burnt)' }} />
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                What This Warranty Covers
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This warranty covers the following specific defects under conditions of normal household use:
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                <div>
                  <h3 className="font-semibold mb-1">Visible Sagging or Indentations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Indentations greater than 1.5 inches (38mm) that are not the result of use with an improper or unsupportive foundation. This must be measured without any weight on the mattress surface.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                <div>
                  <h3 className="font-semibold mb-1">Coils or Wires</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Any coils or wires that are broken, loose, or protrude through the fabric.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                <div>
                  <h3 className="font-semibold mb-1">Physical Flaws</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Any physical flaw in the foam material that causes it to split or crack, despite normal usage and proper handling.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                <div>
                  <h3 className="font-semibold mb-1">Cover Defects</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Manufacturing defects in the mattress cover, such as split or unraveling seams.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What This Warranty Does NOT Cover */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                What This Warranty Does NOT Cover
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This warranty excludes the following:
            </p>

            <div className="space-y-3">
              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Normal Wear and Tear</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This includes the natural and gradual softening of foam materials over time or a decrease in the recovery aspect of memory foam.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Comfort Preference</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Any subjective preference regarding the firmness, feel, or temperature of the mattress. The warranty is for defects, not for changes in comfort preference after the sleep trial period has ended.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Minor Body Impressions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Any visible indentation or sag of 1.5 inches (38mm) or less. Body impressions are a normal occurrence as the comfort layers conform to your body and are not considered a manufacturing defect.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Improper Foundation or Support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Damage resulting from the use of an inadequate or unsupportive foundation. The mattress must be continuously supported by a solid, flat base or a slatted base with slats no more than 5cm apart.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Physical Damage</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Any damage caused by abuse, misuse, or accidents, including but not limited to burns, cuts, tears, stains, soiling, or liquid damage.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Unsanitary Condition</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Any mattress that is found to be in a soiled or unsanitary condition will void the warranty, regardless of whether a defect exists. We highly recommend the use of a waterproof mattress protector to maintain the validity of your warranty.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Product Misuse</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Damage caused by bending, standing, or jumping on the mattress.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Handles</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mattress handles are for positioning only and should not be used to support the full weight of the mattress.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Law Tag</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The warranty is void if the law tag is removed from the mattress.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <div>
                  <h3 className="font-semibold mb-1">Excluded Items</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Products sold "as-is," floor models, or mattresses used for commercial purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Make a Warranty Claim */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8" style={{ color: 'var(--primary-burnt)' }} />
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                How to Make a Warranty Claim
              </h2>
            </div>

            <div className="space-y-5">
              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Contact Us</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11">
                  To initiate a claim, please contact our customer service team at{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-medium hover:underline" style={{ color: 'var(--primary-burnt)' }}>
                    {siteConfig.contact.email}
                  </a>{" "}
                  with your original sales invoice or order number.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Provide Evidence</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11">
                  You will be asked to provide a brief written description and clear photographs of the alleged defect. For sagging claims, we will provide instructions on how to properly measure the indentation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Inspection</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11">
                  We reserve the right to conduct an in-person inspection to validate the claim. All transportation and inspection costs are the responsibility of the customer.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-lg">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <h3 className="font-semibold text-lg pt-1">Resolution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-11">
                  If a defect covered by this warranty is confirmed, we will repair or replace the product as outlined in the "Warranty Coverage Structure" section above.
                </p>
              </div>
            </div>
          </section>

          {/* Statutory Rights */}
          <section className="bg-card p-8 rounded-xl border shadow-sm space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Your Statutory Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This warranty is provided in addition to, and does not affect, your statutory rights under the Consumer Protection (Fair Trading) Act (CPFTA), also known as the Lemon Law, in Singapore.
            </p>
          </section>

          {/* ESSEN General Policies */}
          <section className="bg-muted/50 p-8 rounded-xl border-2 border-dashed space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              ESSEN General Policies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This 10-Year Limited Warranty is specific to manufacturing defects. All other terms and conditions as outlined in ESSEN's general policies apply to your purchase. For comprehensive information, please refer to:
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
                href="/sleep-trial"
                className="flex items-center gap-2 p-3 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-primary">100-Night Sleep Trial</span>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Questions about our Warranty?</h3>
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
