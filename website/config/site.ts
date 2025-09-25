export const siteConfig = {
  name: "ESSEN Mattress",
  description: "Experience Essential Quality Sleep - Singapore's trusted furniture brand brings you premium mattresses designed for our climate",
  url: "https://mattress.essen.sg",
  ogImage: "https://mattress.essen.sg/og.jpg",
  links: {
    mainSite: "https://essen.sg",
    calendly: "https://calendly.com/essen-mattress/consultation",
  },
  showrooms: [
    { id: "jurong", name: "Jurong Point", address: "1 Jurong West Central 2, #01-123, Singapore 648886" },
    { id: "tampines", name: "Tampines Mall", address: "4 Tampines Central 5, #02-456, Singapore 529510" },
    { id: "orchard", name: "Orchard Central", address: "181 Orchard Road, #03-789, Singapore 238896" },
  ],
  contact: {
    phone: "6591234567",
    email: "enquiry@mattress.essen.sg",
    whatsapp: "6591234567",
  },
}

export const promotions = {
  hero: {
    headline: "First 100 Customers Get 30% Off",
    subheadline: "Plus FREE Pillows Worth $299",
    endDate: new Date("2024-12-31"),
  },
  trial: {
    nights: 100,
    warranty: 10, // years
  },
}