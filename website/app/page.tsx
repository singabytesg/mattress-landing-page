import Hero from '@/components/sections/hero'
import ValueProps from '@/components/sections/value-props'
import Products from '@/components/sections/products'
import ProductComparison from '@/components/sections/product-comparison'
import LayerVisualization from '@/components/sections/layer-visualization'
import Technology from '@/components/sections/technology'
import Trial from '@/components/sections/trial'
import Booking from '@/components/sections/booking'
import Testimonials from '@/components/sections/testimonials'
import FAQ from '@/components/sections/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Products />
      <ProductComparison />
      <LayerVisualization />
      <Technology />
      <Trial />
      <Booking />
      <Testimonials />
      <FAQ />
    </>
  )
}
