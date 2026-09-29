import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { ServiceType } from "@/types";

interface QuotePayload {
  name?: string;
  phone: string;
  pickupLocation: string;
  destination?: string;
  dropLocation?: string;
  service: ServiceType;
  movingDate?: string;
  message?: string;
}

const serviceEstimates: Record<
  ServiceType,
  { vehicle: string; priceRange: string; crew: string }
> = {
  "local-tempo": {
    vehicle: "Tata Ace (Chota Hathi) / Bolero Pickup",
    priceRange: "₹800 – ₹1,800",
    crew: "1 Driver (+ optional helper)",
  },
  household: {
    vehicle: "Bolero Pickup / 9 ft Tata 407",
    priceRange: "₹3,500 – ₹7,500",
    crew: "2–3 Professional Movers",
  },
  "packers-movers": {
    vehicle: "14 ft / 17 ft Covered Container Truck",
    priceRange: "₹4,500 – ₹11,000",
    crew: "Full Crew with Multi-Layer Packing",
  },
  office: {
    vehicle: "14 ft / 19 ft Closed Container Fleet",
    priceRange: "₹6,000 – ₹16,000",
    crew: "Commercial IT & Furniture Moving Crew",
  },
  goods: {
    vehicle: "On-Demand Mini Truck / 407 / 14 ft",
    priceRange: "₹1,200 – ₹4,500",
    crew: "Driver / Commercial Cargo Team",
  },
  vehicle: {
    vehicle: "Covered Carrier with Foam Strapping",
    priceRange: "₹1,500 – ₹3,500",
    crew: "Dedicated Two-Wheeler Transit Team",
  },
  other: {
    vehicle: "Custom Fleet Allocation",
    priceRange: "Custom Quote",
    crew: "Custom Support",
  },
};

export async function POST(request: Request) {
  try {
    const body: QuotePayload = await request.json();

    const cleanPhone = (body.phone || "").replace(/\D/g, "").slice(-10);
    if (!cleanPhone || cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const destination = body.destination?.trim() || body.dropLocation?.trim();
    if (!body.pickupLocation?.trim() || !destination) {
      return NextResponse.json(
        { success: false, error: "Pickup location and destination are required." },
        { status: 400 }
      );
    }

    const serviceKey = body.service || "household";
    const estimate = serviceEstimates[serviceKey] || serviceEstimates.household;
    const quoteId = `UTS-${Math.floor(1000 + Math.random() * 9000)}`;
    const timestamp = new Date().toISOString();

    // Prepare customized WhatsApp message
    const lines = [
      `Hello Uttarakhand Tempo Services, I just submitted Quote *#${quoteId}* on your website:`,
      body.name ? `• *Name:* ${body.name}` : null,
      `• *Phone:* +91 ${cleanPhone}`,
      `• *Service:* ${serviceKey.replace("-", " ").toUpperCase()}`,
      `• *Pickup:* ${body.pickupLocation}`,
      `• *Drop:* ${destination}`,
      body.movingDate ? `• *Moving Date:* ${body.movingDate}` : null,
      `• *Recommended Vehicle:* ${estimate.vehicle}`,
      `• *Estimated Range:* ${estimate.priceRange}`,
      `Please confirm availability and share final quotation.`,
    ].filter(Boolean);

    const whatsappMessage = lines.join("\n");
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return NextResponse.json({
      success: true,
      quoteId,
      timestamp,
      estimatedRange: estimate.priceRange,
      recommendedVehicle: estimate.vehicle,
      recommendedCrew: estimate.crew,
      whatsappUrl,
      phone: cleanPhone,
      details: {
        pickupLocation: body.pickupLocation,
        destination,
        service: serviceKey,
        movingDate: body.movingDate || "Flexible",
        name: body.name || "",
      },
    });
  } catch (error) {
    console.error("Quote Submission API Error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process quote request. Please try again or call us." },
      { status: 500 }
    );
  }
}
