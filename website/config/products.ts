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
    description: "Hybrid construction combining ESSEN PocketGuard™ Spring Core with advanced foam layers for balanced support and comfort in Singapore's climate.",
    features: [
      "ESSEN PocketGuard™ Spring Core - 700+ individually wrapped coils",
      "ESSEN CoolFlow™ HD Memory Foam - Gel infusion reduces sleep temperature by 3°C",
      "ESSEN SinkShield™ Foundation Foam - Prevents sagging for 10+ years",
      "Pressure absorbent and motion isolation technology",
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
    description: "Enhanced comfort with ESSEN PlushCloud™ tufted top and responsive cooling foam, featuring ESSEN PocketGuard™ Plus with FeltShield™ Reinforcement.",
    features: [
      "ESSEN PlushCloud™ Tufted Top - Hand-tufted for hotel-quality comfort",
      "ESSEN CoolFlow™ Responsive Memory Foam - 50% faster recovery than standard foam",
      "ESSEN PocketGuard™ Plus with FeltShield™ - Extends mattress life by 40%",
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