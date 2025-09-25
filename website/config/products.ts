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
    name: "ESSEN Essential",
    tagline: "Quality sleep made accessible",
    description: "Our signature mattress designed for Singapore's climate with cooling technology and balanced support.",
    features: [
      "Medium-firm support for all sleep positions",
      "Cooling gel memory foam",
      "CertiPUR certified materials",
      "Anti-microbial fabric cover",
    ],
    price: {
      original: 1299,
      current: 899,
    },
    badge: "Best Seller",
    image: "/images/mattress-essential.jpg",
  },
  {
    id: "luxe",
    name: "ESSEN Luxe",
    tagline: "Indulge in luxury comfort",
    description: "Premium materials and advanced technology for the ultimate sleep experience.",
    features: [
      "Plush Euro-top design",
      "Advanced cooling technology",
      "7-zone support system",
      "Natural latex layer",
    ],
    price: {
      original: 2199,
      current: 1499,
    },
    badge: "Premium Choice",
    image: "/images/mattress-luxe.jpg",
  },
  {
    id: "ortho",
    name: "ESSEN Ortho",
    tagline: "Optimal spinal alignment",
    description: "Designed with orthopedic support for those who need extra firmness and back support.",
    features: [
      "Extra-firm support",
      "Orthopedic design",
      "Targeted back pain relief",
      "High-density support core",
    ],
    price: {
      original: 1799,
      current: 1299,
    },
    badge: "Firm Support",
    image: "/images/mattress-ortho.jpg",
  },
]