import React from "react";
import { Camera, CheckCircle2, Shield, Truck, Package, Home, Building2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Multi-Layer Furniture Wrapping",
    category: "Household Shifting",
    location: "Rajpur Road, Dehradun",
    description: "High-grade bubble sheet & corrugated corners applied on solid wood dining and double beds.",
    badge: "Damage Protection",
    icon: Package,
  },
  {
    id: "2",
    title: "Tata Ace & Bolero Fleet Dispatch",
    category: "Fleet Operations",
    location: "Transport Nagar Hub, Dehradun",
    description: "Well-maintained, GPS-enabled local mini trucks sanitized and inspected prior to dispatch.",
    badge: "On-Time Arrival",
    icon: Truck,
  },
  {
    id: "3",
    title: "Careful Loading & Strap Securing",
    category: "Safe Transit",
    location: "Dalanwala, Dehradun",
    description: "Loaders using industrial-grade ratchet straps and soft cotton blankets between bulky furniture.",
    badge: "Zero Transit Scratch",
    icon: Shield,
  },
  {
    id: "4",
    title: "Fragile Glassware & Crockery Crating",
    category: "Packers & Movers",
    location: "Clement Town, Dehradun",
    description: "Numbered 5-ply cartons with specialized foam dividers for chinaware, mirrors, and televisions.",
    badge: "Delicate Handling",
    icon: Home,
  },
  {
    id: "5",
    title: "Corporate IT & Server Relocation",
    category: "Office Shifting",
    location: "IT Park, Sahastradhara Rd",
    description: "Antistatic bubble packaging for desktop monitors, CPUs, network switches, and office files.",
    badge: "Zero Downtime",
    icon: Building2,
  },
  {
    id: "6",
    title: "Doorstep Delivery & Room Placement",
    category: "Delivery Completion",
    location: "Prem Nagar, Dehradun",
    description: "Unloading into the respective rooms and basic bed/table reassembly for an easy moving day.",
    badge: "Complete Setup",
    icon: CheckCircle2,
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-white border-b border-[#E4E7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF8EB] text-[#D98A00] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Operational Evidence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#17201B] tracking-tight mb-4">
            See UTS In Action
          </h2>

          <p className="text-base sm:text-lg text-[#4F5A53]">
            Real moves, real handling standards, and authentic team execution across Dehradun neighborhoods.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#E4E7E3] bg-[#F7F8F6] overflow-hidden hover:border-[#D98A00]/50 hover:shadow-[0_12px_30px_rgba(23,32,27,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Representation Header with Badge */}
                <div className="h-44 bg-gradient-to-br from-[#14552D]/10 via-[#064A91]/5 to-[#FFF8EB] p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-[#14552D] border border-[#E4E7E3] shadow-xs">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-[#4F5A53] bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      📍 {item.location}
                    </span>
                  </div>

                  {/* Centered Graphic Icon Indicator */}
                  <div className="flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white text-[#14552D] shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:text-[#D98A00] transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#66716B] uppercase tracking-wider z-10">
                    {item.category}
                  </span>

                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14552D_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* Content */}
                <div className="p-6 bg-white flex-1 flex flex-col justify-between border-t border-[#E4E7E3]">
                  <div>
                    <h3 className="text-lg font-bold text-[#17201B] mb-2 group-hover:text-[#D98A00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4F5A53] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E4E7E3]/60 flex items-center justify-between text-[11px] text-[#66716B]">
                    <span>Verified UTS Crew</span>
                    <span className="text-[#14552D] font-semibold">Standard Protocol ✓</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
