import { images } from "./images";

export const companies = [
  {
    slug: "consult",
    name: "Concierge Consult",
    category: "Advisory & business support",
    short: "Clarity for the opportunity ahead.",
    description:
      "Advisory, business support and facilitation that connect local understanding with your business ambitions.",
    headline: "Opportunity, understood.\nProgress, facilitated.",
    role: "Identifies and structures opportunities",
    image: images.consult,
    accent: "#80662f",
    services: [
      "Strategic advisory",
      "Business support",
      "Opportunity facilitation",
      "Investment & business support",
    ],
    detail:
      "Every meaningful business decision begins with context. Concierge Consult brings an informed perspective to opportunities, helping organisations define their priorities, understand their requirements and take the next step with purpose.",
  },
  {
    slug: "pr",
    name: "Concierge PR",
    category: "Communications & influence",
    short: "Make your story matter.",
    description:
      "Commercial communications, public relations and marketing that give ideas a voice and brands a clear direction.",
    headline: "A clear voice.\nA meaningful connection.",
    role: "Builds visibility and influence",
    image: images.pr,
    accent: "#875437",
    services: [
      "Public relations",
      "Commercial communications",
      "Marketing",
      "Brand visibility & influence",
    ],
    detail:
      "Good communication begins with understanding what an organisation stands for and who it needs to reach. Concierge PR connects business purpose with clear stories, considered messaging and meaningful engagement.",
  },
  {
    slug: "properties",
    name: "Concierge Properties",
    category: "Property & real estate",
    short: "A considered sense of place.",
    description:
      "Property and real-estate support shaped around the places where people live, businesses work and possibilities grow.",
    headline: "Places for life.\nSpace for possibility.",
    role: "Supports property requirements",
    image: images.properties,
    accent: "#77613f",
    services: [
      "Property requirements",
      "Real-estate opportunities",
      "Residential property support",
      "Business property support",
    ],
    detail:
      "Property is part of a bigger picture: the way we live, work and build for the future. Concierge Properties focuses on understanding real-estate requirements and connecting them with a considered path forward.",
  },
  {
    slug: "energy",
    name: "Concierge Energy",
    category: "Energy solutions & advisory",
    short: "Powering the possibilities ahead.",
    description:
      "Energy solutions and advisory supporting the requirements of businesses and the opportunities of a changing sector.",
    headline: "Energy for enterprise.\nPerspective for tomorrow.",
    role: "Supports energy opportunities",
    image: images.energy,
    accent: "#536b46",
    services: [
      "Energy advisory",
      "Energy solutions",
      "Business energy requirements",
      "Energy opportunity support",
    ],
    detail:
      "Energy underpins enterprise. Concierge Energy brings solutions and advisory together to help organisations examine their energy requirements and approach opportunities with clarity and a long-term perspective.",
  },
  {
    slug: "logistics",
    name: "Concierge Logistics",
    category: "Logistics & supply chains",
    short: "Connecting every next step.",
    description:
      "Logistics and supply-chain solutions that support the movement of goods and the businesses that depend on them.",
    headline: "Goods in motion.\nBusiness moving forward.",
    role: "Moves goods and supports supply chains",
    image: images.logistics,
    accent: "#526c74",
    services: [
      "Logistics solutions",
      "Supply-chain support",
      "Movement of goods",
      "Business logistics requirements",
    ],
    detail:
      "Behind every movement of goods is a business commitment. Concierge Logistics approaches logistics and supply-chain requirements as part of a connected commercial journey, with attention to coordination, communication and delivery.",
  },
  {
    slug: "automobile",
    name: "Concierge Automobile",
    category: "Automobile & mobility",
    short: "Move with purpose.",
    description:
      "Mobility and automobile solutions for the needs of individuals, organisations and growing businesses.",
    headline: "Your next destination.\nOur shared direction.",
    role: "Provides mobility solutions",
    image: images.automobile,
    accent: "#5f6b60",
    services: [
      "Automobile solutions",
      "Personal mobility requirements",
      "Business mobility support",
      "Mobility facilitation",
    ],
    detail:
      "Mobility connects people with what comes next. Concierge Automobile focuses on understanding automobile requirements and facilitating solutions that fit the way individuals and organisations move.",
  },
  {
    slug: "foundation",
    name: "Concierge Foundation",
    category: "Social impact & community",
    short: "Opportunity beyond business.",
    description:
      "A commitment to health, education, economic empowerment and community development, with human potential at its heart.",
    headline: "When opportunity grows,\nwe all move forward.",
    role: "Creates social impact",
    image: images.foundation,
    accent: "#805033",
    services: [
      "Health",
      "Education",
      "Economic empowerment",
      "Community development",
    ],
    detail:
      "Business success should create opportunities beyond the business itself. Concierge Foundation expresses the Group’s commitment to social impact through a focus on health, education, economic empowerment and community development.",
  },
];
export type Company = (typeof companies)[number];
