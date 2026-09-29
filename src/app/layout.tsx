import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uttarakhand Tempo Services | Packers & Movers in Dehradun",
  description:
    "Reliable tempo, packers & movers and transportation services in Dehradun. Get a free quote for household shifting, office shifting and goods transportation. GST Verified, since 2010.",
  keywords: [
    "packers and movers dehradun",
    "tempo service dehradun",
    "house shifting dehradun",
    "office shifting dehradun",
    "goods transport dehradun",
    "uttarakhand tempo services",
    "uts movers",
  ],
  authors: [{ name: "Uttarakhand Tempo Services" }],
  creator: "Uttarakhand Tempo Services",
  metadataBase: new URL("https://uttarakhandtemposervices.in"),
  openGraph: {
    title: "Uttarakhand Tempo Services | Packers & Movers in Dehradun",
    description:
      "Move Anything. Anywhere. Without the Stress. Reliable local tempo & household shifting service in Dehradun.",
    url: "https://uttarakhandtemposervices.in",
    siteName: "Uttarakhand Tempo Services",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MovingCompany"],
      "@id": "https://uttarakhandtemposervices.in/#organization",
      name: "Uttarakhand Tempo Services",
      alternateName: "UTS Packers & Movers",
      url: "https://uttarakhandtemposervices.in",
      telephone: "+917906696981",
      priceRange: "₹₹",
      image: "https://uttarakhandtemposervices.in/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Transport Nagar, Saharanpur Road",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.2982,
        longitude: 78.0063,
      },
      areaServed: [
        { "@type": "City", name: "Dehradun" },
        { "@type": "City", name: "Rishikesh" },
        { "@type": "City", name: "Haridwar" },
        { "@type": "City", name: "Mussoorie" },
        { "@type": "City", name: "Roorkee" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Chandigarh" },
      ],
      foundingDate: "2010",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "22:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Transportation and Moving Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Household Shifting",
              description: "Move furniture, appliances, boxes and household belongings safely.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Packers & Movers",
              description: "Professional packing and moving relocation services across Uttarakhand.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office Shifting",
              description: "Organized office relocation for workstations, equipment and documents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local Tempo Service",
              description: "On-demand mini trucks and tempos for intra-city Dehradun transport.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F5F6] text-[#121316] font-sans selection:bg-[#FF4D24] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
