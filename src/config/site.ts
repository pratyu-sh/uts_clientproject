import { FaqItem, RequirementFinderItem, ServiceDetail, Testimonial } from "@/types";

export const siteConfig = {
  name: "Uttarakhand Tempo Services",
  brandName: "UTS — Packers & Movers",
  shortName: "UTS",
  tagline: "Dehradun's Local Transport Partner",
  headline: "Move Anything. Anywhere. Without the Stress.",
  description:
    "Reliable tempo, packers & movers and transportation services for homes, offices and businesses across Dehradun and Uttarakhand.",
  since: "2010",
  gstVerified: true,
  gstNumber: "05AAACU1234F1Z5", // Dehradun Uttarakhand State GST format
  phone: "+91 94120 54321",
  phoneRaw: "+919412054321",
  whatsappNumber: "919412054321",
  email: "support@uttarakhandtemposervices.in",
  address: "Plot 14, Transport Nagar, Saharanpur Road, Dehradun, Uttarakhand 248001",
  landmark: "Near ISBT & Transport Nagar Hub",
  operatingHours: "7:00 AM – 10:00 PM (All 7 Days)",

  socialLinks: {
    googleMaps: "https://maps.google.com/?q=Transport+Nagar+Dehradun",
  },
};

export function getWhatsAppUrl(params?: {
  service?: string;
  pickup?: string;
  destination?: string;
  loadType?: string;
}) {
  let message = "Hello Uttarakhand Tempo Services, I need a transportation quote.";
  if (params?.service) {
    message = `Hello UTS, I need a *${params.service}* quote.`;
  }
  if (params?.pickup || params?.destination) {
    message += `\nPickup: ${params.pickup || "Dehradun"}\nDestination: ${params.destination || ""}`;
  }
  if (params?.loadType) {
    message += `\nRequirement: ${params.loadType}`;
  }
  message += "\nPlease share estimated rate and availability.";

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const trustPillars = [
  {
    title: "SINCE 2010",
    subtitle: "15+ Years Local Experience",
    description: "Deep knowledge of Dehradun routes, hills, narrow lanes & parking limits.",
  },
  {
    title: "GST VERIFIED",
    subtitle: "Authorized Transporter",
    description: "Official tax invoices, transit documentation and verified business credentials.",
  },
  {
    title: "LOCAL DEHRADUN TEAM",
    subtitle: "Resident Drivers & Handlers",
    description: "Trained in-house staff who take personal care of your furniture & belongings.",
  },
  {
    title: "DIRECT HUMAN SUPPORT",
    subtitle: "No Call Center Delays",
    description: "Speak directly with the team handling your move from start to delivery.",
  },
];

export const servicesData: ServiceDetail[] = [
  {
    id: "household",
    title: "Household Shifting",
    badge: "Most Popular",
    description: "Move furniture, appliances, boxes and household belongings with zero transit anxiety.",
    ctaText: "Get Household Quote →",
    icon: "Home",
    highlights: [
      "Sofas, beds, wardrobes & dining tables",
      "Refrigerator, washing machine & TV protection",
      "Doorstep pickup & room-of-choice placement",
    ],
  },
  {
    id: "packers-movers",
    title: "Packers & Movers",
    badge: "Complete Care",
    description: "Comprehensive end-to-end packing, careful loading, safe transport and neat unpacking.",
    ctaText: "Plan My Move →",
    icon: "PackageCheck",
    highlights: [
      "Multi-layer bubble & corrugated sheet wrap",
      "Special carton boxes for delicate crockery",
      "Disassembly & reassembly support",
    ],
  },
  {
    id: "office",
    title: "Office Shifting",
    badge: "Minimal Downtime",
    description: "Move office workstations, electronic equipment, records and furniture safely over weekends or nights.",
    ctaText: "Get Office Quote →",
    icon: "Building2",
    highlights: [
      "Server, CPU & monitor safety protocols",
      "Organized desk-by-desk tagging & boxing",
      "Flexible schedule to avoid business disruption",
    ],
  },
  {
    id: "goods",
    title: "Goods Transportation",
    badge: "Dependable",
    description: "Transport personal consignments, retail store inventory and commercial trade goods.",
    ctaText: "Book Transportation →",
    icon: "Truck",
    highlights: [
      "Market-to-godown & shop deliveries",
      "Weather-protected covered vehicles",
      "Direct transit with no en-route offloading",
    ],
  },
  {
    id: "vehicle",
    title: "Vehicle Transportation",
    badge: "Safe Transit",
    description: "Dedicated safe shifting for your two-wheelers, scooters, and motorcycles.",
    ctaText: "Get a Quote →",
    icon: "Bike",
    highlights: [
      "Mirror & body foam wrapping",
      "Special hydraulic ramps & wheel locks",
      "Dehradun to any Uttarakhand or North India city",
    ],
  },
  {
    id: "local-tempo",
    title: "Local Tempo Service",
    badge: "Quick Dispatch",
    description: "On-demand Tata Ace, Bolero Maxi Truck and pickup tempo for point-to-point Dehradun shifting.",
    ctaText: "Book a Tempo →",
    icon: "Clock",
    highlights: [
      "Ideal for PGs, students & small loads",
      "Quick dispatch across Dehradun suburbs",
      "Affordable transparent kilometer pricing",
    ],
  },
];

export const whyUsPoints = [
  {
    title: "The Right Vehicle",
    description:
      "Tell us what you're moving and we'll help you identify the appropriate vehicle size so you never overpay for empty space or struggle with tight fits.",
    icon: "Truck",
  },
  {
    title: "Careful Handling",
    description:
      "Your belongings deserve attention. Our trained loaders use protective blankets, straps, and corner guards from pickup through final delivery.",
    icon: "ShieldCheck",
  },
  {
    title: "Local Expertise",
    description:
      "From tight colony lanes in Dalanwala to the steep inclines of Rajpur and Mussoorie bypass, our drivers know Dehradun's terrain intimately.",
    icon: "MapPin",
  },
  {
    title: "Direct Support",
    description:
      "Talk directly with our local coordinator via call or WhatsApp. No chatbots, no IVR mazes, and no shifting responsibility.",
    icon: "PhoneCall",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Share your pickup location, destination, preferred moving date, and what you're moving through our quick form, WhatsApp, or phone.",
  },
  {
    step: "02",
    title: "Get Your Clear Quote",
    description:
      "We evaluate the volume, access points, and route to give you a transparent, all-inclusive quotation with zero hidden surprises.",
  },
  {
    step: "03",
    title: "Confirm Your Schedule",
    description:
      "Pick your preferred time slot. We reserve your dedicated vehicle and assign our trained local moving crew.",
  },
  {
    step: "04",
    title: "Move Stress-Free",
    description:
      "Our team arrives on time, loads with care, drives safely, and delivers your belongings right into your new space.",
  },
];

export const requirementFinderOptions: RequirementFinderItem[] = [
  {
    id: "boxes",
    title: "Few Boxes & Bags",
    subtitle: "Student / PG / Luggage",
    iconName: "Boxes",
    idealFor: "5–15 cartons, suitcases, books, study table, single bike",
    vehicleRecommendation: "Tata Ace (Chota Hathi) / 3-Wheeler Tempo",
    features: ["Fast loading & rapid dispatch", "Navigates narrow residential lanes", "Cost-effective city rate"],
    ctaLabel: "Get Small Move Quote",
    serviceType: "local-tempo",
    badge: "Best for Narrow Lanes & Hill Colonies",
    payloadCapacity: "Up to 750 kg",
    deckDimensions: "7 ft × 4.8 ft (Covered / Tarpaulin)",
    crewRecommendation: "1 Driver + 1 Helper (Optional)",
    routeSuitability: "Rajpur Road, Jakhan, Prem Nagar, University PGs",
    typicalItems: [
      "5–15 cartons, suitcases & bags",
      "1 Study table & ergonomic chair",
      "Single mattress & personal belongings",
      "Optionally 1 two-wheeler / scooty",
    ],
  },
  {
    id: "furniture",
    title: "Few Bulky Furniture",
    subtitle: "Sofa / Bed / Refrigerator",
    iconName: "Armchair",
    idealFor: "Double bed, 3-seater sofa, fridge, washing machine, wardrobe",
    vehicleRecommendation: "8 ft Tata Ace Mega / Bolero Pickup",
    features: ["Corner padding & protective blankets", "Rope tying & rain tarpaulin", "Trained furniture handlers available"],
    ctaLabel: "Get Furniture Quote",
    serviceType: "local-tempo",
    badge: "Heavy Single-Item & Room Shifting",
    payloadCapacity: "Up to 1,200 kg",
    deckDimensions: "8.2 ft × 5.2 ft Reinforced Bed",
    crewRecommendation: "1 Driver + 2 Trained Handlers",
    routeSuitability: "All Dehradun colonies, Ballupur, Clement Town, GMS Rd",
    typicalItems: [
      "1 Double bed with mattress",
      "3-seater sofa or 2 recliners",
      "Double-door refrigerator",
      "Washing machine & small storage rack",
    ],
  },
  {
    id: "1bhk",
    title: "1 BHK Household",
    subtitle: "Full Apartment Shifting",
    iconName: "Home",
    idealFor: "Bedroom set, living room essentials, kitchen appliances & 20+ boxes",
    vehicleRecommendation: "Bolero Maxi Truck / 9 ft Tata 407",
    features: ["Complete mattress & appliance wrap", "Dedicated loading crew", "Single-trip complete transit"],
    ctaLabel: "Get 1 BHK Quote",
    serviceType: "household",
    badge: "Complete 1 BHK in a Single Trip",
    payloadCapacity: "Up to 1,750 kg",
    deckDimensions: "9.5 ft × 5.5 ft High-Deck",
    crewRecommendation: "3 Dedicated Movers + 1 Driver",
    routeSuitability: "Societies & hill sectors (Sahastradhara, Vasant Vihar)",
    typicalItems: [
      "Full master bedroom furniture set",
      "Living room sofa & center coffee table",
      "Refrigerator, washing machine, TV & microwave",
      "20–25 packed kitchen & wardrobe cartons",
    ],
  },
  {
    id: "2bhk",
    title: "2 / 3 BHK Home",
    subtitle: "Complete Family Relocation",
    iconName: "Building",
    idealFor: "Full master sets, dining table, all electronics, kitchenware & balconies",
    vehicleRecommendation: "14 ft / 17 ft Covered Container Truck",
    features: ["Multi-layer corrugated packaging", "Disassembly/reassembly of beds & almirahs", "Full sealed all-weather container protection"],
    ctaLabel: "Get 2/3 BHK Quote",
    serviceType: "household",
    badge: "All-Weather Sealed Protection",
    payloadCapacity: "Up to 3,500 – 4,500 kg",
    deckDimensions: "14 ft – 17 ft Enclosed All-Weather Box",
    crewRecommendation: "4–5 Senior Movers + Supervisor",
    routeSuitability: "Full Dehradun & inter-city (Rishikesh, Haridwar, NCR)",
    typicalItems: [
      "2–3 complete bedroom furniture sets",
      "6-seater dining table & chairs",
      "Modular kitchenware, appliances & glassware",
      "40+ heavy cartons & delicate home decor",
    ],
  },
  {
    id: "office",
    title: "Office Relocation",
    subtitle: "Workstations & Equipment",
    iconName: "Briefcase",
    idealFor: "Office desks, ergonomic chairs, servers, monitors, filing cabinets",
    vehicleRecommendation: "14 ft / 19 ft Closed Container Fleet",
    features: ["Weekend & after-hours execution", "Anti-static bubble wrap for IT assets", "Numbered inventory & department labeling"],
    ctaLabel: "Get Office Quote",
    serviceType: "office",
    badge: "Zero-Downtime Commercial Relocation",
    payloadCapacity: "Up to 5,000 kg (Multi-vehicle available)",
    deckDimensions: "17 ft / 19 ft Sealed Fleet",
    crewRecommendation: "Specialized IT & Corporate Moving Crew",
    routeSuitability: "IT Park, Transport Nagar, Rajpur Road offices",
    typicalItems: [
      "10–30 modular workstations & chairs",
      "Desktop monitors, CPUs & server racks",
      "Office conference tables & reception setup",
      "Important files, archives & pantry gear",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Goods",
    subtitle: "Business & Market Cargo",
    iconName: "Truck",
    idealFor: "Retail stock, hardware, FMCG boxes, industrial raw materials",
    vehicleRecommendation: "On-demand Fleet: Ace, 407, 14ft, 19ft",
    features: ["GST E-way bill & documentation compliance", "Direct godown gate delivery", "Scheduled repeat trips & account billing"],
    ctaLabel: "Get Commercial Quote",
    serviceType: "goods",
    badge: "B2B & Industrial Transport",
    payloadCapacity: "1 Ton to 7.5 Tons (Custom Fleet)",
    deckDimensions: "Custom open / closed deck for pallets",
    crewRecommendation: "Driver-only or dedicated dock loading crew",
    routeSuitability: "Industrial Patel Nagar, Selaqui, Haridwar Highway, Godowns",
    typicalItems: [
      "Wholesale FMCG & distributor cartons",
      "Hardware, plywood & construction supplies",
      "Industrial components & raw materials",
      "Daily market retail replenishment",
    ],
  },
];

export const serviceAreas = {
  dehradunLocal: [
    "Rajpur Road & Jakhan",
    "Saharanpur Road & ISBT",
    "Ballupur & Balliwala",
    "Clement Town & Subhash Nagar",
    "Prem Nagar & FRI Area",
    "Dalanwala & Race Course",
    "Patel Nagar & Transport Nagar",
    "GMS Road & Kanwali Road",
    "Sahastradhara Road & IT Park",
    "Chakrata Road & Vasant Vihar",
  ],
  interCityRoutes: [
    { from: "Dehradun", to: "Rishikesh", time: "1.5 Hrs", desc: "Daily frequent tempo & shifting" },
    { from: "Dehradun", to: "Haridwar", time: "2 Hrs", desc: "Reliable household & cargo trips" },
    { from: "Dehradun", to: "Mussoorie", time: "1.5 Hrs", desc: "Hill route specialists with experienced drivers" },
    { from: "Dehradun", to: "Roorkee", time: "2.5 Hrs", desc: "Industrial & educational cargo" },
    { from: "Dehradun", to: "Delhi NCR", time: "5–6 Hrs", desc: "Direct highway container transit" },
    { from: "Dehradun", to: "Chandigarh", time: "4–5 Hrs", desc: "Inter-state household relocation" },
    { from: "Dehradun", to: "Paonta Sahib", time: "2 Hrs", desc: "Industrial and commercial supply" },
  ],
};

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Col. Rajesh Verma (Retd.)",
    rating: 5,
    service: "Household Shifting (2 BHK)",
    route: "Dalanwala to Clement Town, Dehradun",
    review:
      "Moved our 2 BHK household with fragile antique cabinets and glassware. The UTS crew arrived right on time at 8 AM, packed each item with thick corrugated sheets, and not a single scratch occurred. Very respectful and direct team.",
    verified: true,
  },
  {
    id: "2",
    name: "Dr. Ananya Joshi",
    rating: 5,
    service: "Apartment Shifting",
    route: "Rajpur Road to Sahastradhara Road",
    review:
      "After bad experiences with middlemen portals, speaking directly with Uttarakhand Tempo Services was a breath of fresh air. Clear quote on WhatsApp, no last-minute bargaining, and quick delivery within 4 hours.",
    verified: true,
  },
  {
    id: "3",
    name: "Vikram Negi",
    rating: 5,
    service: "Office & Lab Relocation",
    route: "Transport Nagar to IT Park, Dehradun",
    review:
      "We relocated our branch workstations and server equipment. They did it over Sunday without disrupting our Monday morning operations. GST bill was issued promptly. Highly recommended for commercial moves.",
    verified: true,
  },
  {
    id: "4",
    name: "Pooja Sharma",
    rating: 5,
    service: "PG & Small Household",
    route: "Prem Nagar to Delhi NCR",
    review:
      "I was shifting from Dehradun after completing my degree. UTS provided a Tata Ace at very reasonable student rates. Everything from my scooter to 12 boxes reached safe and sound in Noida.",
    verified: true,
  },
];

export const faqData: FaqItem[] = [
  {
    question: "How much does a tempo service cost in Dehradun?",
    answer:
      "Tempo pricing in Dehradun depends on the vehicle size (e.g. Tata Ace, Bolero Pickup, or 14-ft container), the total distance between pickup and drop, and whether you require loading/unloading helpers. Local trips generally start at very transparent rates. We give you a complete, upfront price breakdown before you book so there are never hidden surcharges.",
  },
  {
    question: "Do you provide household shifting with packing?",
    answer:
      "Yes, absolutely. We provide full Packers & Movers solutions where our crew brings bubble wrap, heavy-duty carton boxes, stretch film, and packing tape to secure your furniture, appliances, kitchenware, and clothing. We also offer transportation-only tempo services if you prefer to pack yourself.",
  },
  {
    question: "Do you provide loading and unloading labour?",
    answer:
      "Yes. Depending on your requirement, you can book just the vehicle with driver, or add experienced local helpers who handle the heavy lifting, stair climbing, loading, and unloading into your designated rooms.",
  },
  {
    question: "Which areas in Dehradun do you cover?",
    answer:
      "We cover every neighborhood across Dehradun including Rajpur Road, Jakhan, Sahastradhara, Ballupur, Clement Town, Prem Nagar, Patel Nagar, Dalanwala, GMS Road, Transport Nagar, as well as suburban and hill routes like Mussoorie, Rishikesh, and Haridwar.",
  },
  {
    question: "Can I book a tempo for the same day?",
    answer:
      "Yes, subject to vehicle availability. Because our fleet is stationed right in Dehradun (Transport Nagar and central hubs), we can often dispatch a Tata Ace or Bolero within 45 to 90 minutes. For full household packing and moves, we recommend booking 1–2 days in advance.",
  },
  {
    question: "How is my quotation calculated?",
    answer:
      "Your quotation is based on four transparent factors: (1) Volume and nature of goods, (2) Route distance and hill/terrain factors, (3) Floor levels and lift availability at both locations, and (4) Selected service level (transportation-only vs. full packing and labour).",
  },
  {
    question: "How can I book or get a quotation?",
    answer:
      "You can submit our quick quote form on this page, message us directly on WhatsApp with your pickup and destination, or call our direct phone number (+91 94120 54321). We respond within minutes.",
  },
  {
    question: "What items can or cannot be transported?",
    answer:
      "We transport household furniture, electronics, consumer goods, business inventory, two-wheelers, and boxed personal effects. Per safety regulations, we do not transport hazardous inflammable chemicals, loose fuel, explosives, or illegal contraband.",
  },
];
