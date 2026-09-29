import { z } from "zod";

export type ServiceType =
  | "household"
  | "packers-movers"
  | "office"
  | "goods"
  | "vehicle"
  | "local-tempo"
  | "other";

export const quoteFormSchema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  destination: z.string().min(2, "Destination is required"),
  service: z.enum([
    "household",
    "packers-movers",
    "office",
    "goods",
    "vehicle",
    "local-tempo",
    "other",
  ]),
  movingDate: z.string().optional(),
  message: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export type QuoteRequest = QuoteFormData & {
  submittedAt?: string;
  source?: string;
};

export interface RequirementFinderItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  idealFor: string;
  vehicleRecommendation: string;
  features: string[];
  ctaLabel: string;
  serviceType?: ServiceType;
  badge?: string;
  payloadCapacity?: string;
  deckDimensions?: string;
  crewRecommendation?: string;
  routeSuitability?: string;
  typicalItems?: string[];
}

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  badge?: string;
  description: string;
  ctaText: string;
  icon: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  service: string;
  route: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
