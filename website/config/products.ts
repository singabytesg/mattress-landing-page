export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  price: {
    original: number
    current: number
  }
  badge?: string
  image: string
}

export const products: Product[] = [
  {
    id: "essential",
    name: "ESSEN Ultra Plus",
    tagline: "Quality sleep made accessible",
    description: "Hybrid construction combining Bonnel Pocket Spring System with multiple foam layers for balanced support and comfort in Singapore's climate.",
    features: [
      "Bonnel Pocket Spring System with foam layers",
      "Cooling Gel High Density Memory Foam",
      "Pressure absorbent and motion isolation",
      "High Density and Sink-Resistant foam",
    ],
    price: {
      original: 999,
      current: 788,
    },
    badge: "Best Seller",
    image: "/images/mattress-essential.jpg",
  },
  {
    id: "luxe",
    name: "ESSEN Ultra Max",
    tagline: "Your affordable upgrade to premium comfort",
    description: "Enhanced comfort with plush tufted top and responsive cooling foam, featuring a reinforced Bonnel Pocket Spring system.",
    features: [
      "Plush Tufted Top for luxurious feel",
      "Cooling Gel Low Density Memory Foam",
      "Felt-reinforced Bonnel Pocket Spring",
      "Enhanced anti-motion & pressure absorption",
    ],
    price: {
      original: 1399,
      current: 1088,
    },
    badge: "Premium Choice",
    image: "/images/mattress-luxe.jpg",
  },
]