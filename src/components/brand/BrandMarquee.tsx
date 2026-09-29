import { Marquee } from "@/components/ui/marquee";

export function BrandMarquee() {
  const items = [
    "TEMPO SERVICES",
    "PACKERS & MOVERS",
    "HOUSEHOLD SHIFTING",
    "OFFICE SHIFTING",
    "GOODS TRANSPORTATION",
    "LOCAL TEMPO SERVICE",
    "DOOR-TO-DOOR TRANSPORT",
    "DEHRADUN • UTTARAKHAND",
  ];

  return (
    <div className="flex w-full items-center justify-center overflow-hidden py-6 sm:py-7 bg-white border-y border-[#E8EAED] shadow-2xs mt-[5px]">
      <Marquee
        duration={28}
        direction="left"
        fade={true}
        fadeAmount={8}
      >
        {items.map((item, index) => (
          <div
            key={item}
            className="flex items-center"
          >
            <span className="mx-6 sm:mx-8 whitespace-nowrap text-base sm:text-lg md:text-2xl font-bold tracking-[0.08em] text-[#17201B]">
              {item}
            </span>

            <span
              className={`text-xl ${
                index % 4 === 0
                  ? "text-[#D98A00]"
                  : index % 4 === 1
                    ? "text-[#14552D]"
                    : index % 4 === 2
                      ? "text-[#064A91]"
                      : "text-[#C90055]"
              }`}
            >
              ✦
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default BrandMarquee;
