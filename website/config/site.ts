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
    {
      id: "redhill",
      name: "ESSEN Showroom",
      address: "36 Jalan Kilang Barat, Singapore 159366",
      hours: "Daily 11am-7pm",
      mrt: "Redhill MRT (EW18) - 10 min walk",
      parking: "Parking available on-site",
      mapUrl: "https://maps.app.goo.gl/5YNjVuRRjCyGjNuY7"
    },
  ],
  contact: {
    phone: "60190775",
    email: "enquiry@essen.sg",
    whatsapp: "6560190775",
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