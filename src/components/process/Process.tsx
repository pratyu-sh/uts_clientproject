// Built using Hyperiux Vault: https://vault.hyperiux.com - Adapted for UTS with Full Mobile Responsiveness
"use client";

import Image from "next/image";
import {
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "@/components/providers/SmoothScroll";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. A callback may return its own
   cleanup, which runs before the next re-add and on unmount. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
  }, deps);
}

type JourneyItem = {
  id: string;
  step: string;
  phase: string;
  title: string;
  content: string;
  reassurance: string;
};

type SplitTextInstance = InstanceType<typeof SplitText>;

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const topJourneyData: JourneyItem[] = [
  {
    id: "step-01",
    step: "01",
    phase: "Inquiry",
    title: "Tell Us What You Need",
    content: "Share pickup, destination, moving date & load details via our instant quote form, WhatsApp, or phone.",
    reassurance: "Direct response on WhatsApp or call in 10 mins",
  },
  {
    id: "step-03",
    step: "03",
    phase: "Schedule",
    title: "Confirm Your Schedule",
    content: "Select your preferred date & time slot. We reserve your dedicated vehicle and assign our trained local movers.",
    reassurance: "Dedicated vehicle reserved for your time slot",
  },
  {
    id: "step-05",
    step: "05",
    phase: "Delivery",
    title: "Delivered & Settled In",
    content: "Direct on-time delivery, careful room placement, and zero hidden surcharges for a smooth move.",
    reassurance: "Doorstep placement into your new rooms",
  },
];

const bottomJourneyData: JourneyItem[] = [
  {
    id: "step-02",
    step: "02",
    phase: "Assessment",
    title: "Get Your Clear Quote",
    content: "We calculate distance, vehicle sizing, access points, and floor elevation for an all-inclusive fixed quotation.",
    reassurance: "Zero hidden fuel or elevation surcharges",
  },
  {
    id: "step-04",
    step: "04",
    phase: "Transit",
    title: "Safe Packing & Loading",
    content: "Multi-layer protective bubble wrap, corner padding, rope tie-downs, and all-weather tarpaulin coverage.",
    reassurance: "Corner pads, furniture wrap & all-weather tarpaulin",
  },
];

const allJourneyItems: JourneyItem[] = [
  topJourneyData[0],
  bottomJourneyData[0],
  topJourneyData[1],
  bottomJourneyData[1],
  topJourneyData[2],
];

export function Process({
  title = "How It Works",
  periodLabel = "SEAMLESS RELOCATION ROADMAP",
  textColor = "#121316",
  mutedTextColor = "#5E6470",
  activeColor = "#FF4D24",
  backgroundColor = "#FFFFFF",
  imageUrl = "/images/services/packers-movers.jpg",
  imageAlt = "UTS Professional moving crew in Dehradun",
  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const { getLenis } = useLenis();
  const sectionRef = useRef<HTMLDivElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  // Synchronize ScrollTrigger with Lenis
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;
    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [getLenis]);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    // Only apply horizontal scroll pinning on desktop (>= 768px)
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "94% bottom",
          scrub: true,
        },
        defaults: {
          ease: "none",
        },
      });

      tl.fromTo(
        wholeSliderRef.current,
        { xPercent: 0 },
        { xPercent: -58 },
      );

      if (reducedMotion) {
        gsap.set(".journey-line", { width: "96%" });
      } else {
        gsap.to(".journey-line", {
          width: "96%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 25%",
            end: "94% bottom",
            scrub: true,
          },
        });
      }

      const items = allJourneyItems;

      if (reducedMotion) {
        items.forEach((item) => {
          gsap.set(`.jl-${item.id}`, { scaleY: 1 });
          gsap.set(`.jd-${item.id}`, { scale: 1 });
          gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: "transform" });
          gsap.set(`.description-${item.id}`, {
            opacity: 1,
            clearProps: "transform",
          });
        });
        return;
      }

      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: "bottom bottom",
        });
        gsap.set(`.jd-${item.id}`, { scale: 0 });
        gsap.set(`.title-${item.id}`, { opacity: 1 });
        gsap.set(`.description-${item.id}`, { opacity: 1 });
      });

      const titleSplits: Partial<Record<string, SplitTextInstance>> = {};
      const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

      items.forEach((item) => {
        try {
          titleSplits[item.id] = new SplitText(`.title-${item.id}`, {
            type: "lines, words",
            mask: "lines",
          });
        } catch {
          // Fallback handled in timeline
        }

        try {
          descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, {
            type: "lines",
            mask: "lines",
          });
        } catch {
          // Fallback handled in timeline
        }
      });

      const createItemTimeline = (
        item: JourneyItem,
        startPos: number,
        endPos: number,
      ) => {
        const lineSelector = `.jl-${item.id}`;
        const dotSelector = `.jd-${item.id}`;
        const titleLines = titleSplits[item.id]?.lines ?? `.title-${item.id}`;
        const descriptionLines =
          descriptionSplits[item.id]?.lines ?? `.description-${item.id}`;

        const isTop = topJourneyData.some((topItem) => topItem.id === item.id);

        if (!isTop) {
          gsap.set(lineSelector, { transformOrigin: "top top" });
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `${startPos}% 30%`,
            end: `${endPos}% 50%`,
            scrub: true,
          },
        });

        timeline
          .to(lineSelector, {
            scaleY: 1,
            duration: normalizedDuration * 0.4,
          })
          .to(
            dotSelector,
            {
              scale: 1,
              duration: normalizedDuration * 0.4,
            },
            "<",
          )
          .fromTo(
            titleLines,
            { y: 60, opacity: 0.2 },
            {
              y: 0,
              opacity: 1,
              delay: -0.6 * normalizedDuration,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: "power2.out",
            },
          )
          .fromTo(
            descriptionLines,
            { y: 40, opacity: 0.2 },
            {
              y: 0,
              opacity: 1,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: "power2.out",
            },
            "<",
          );

        return timeline;
      };

      const positions: ReadonlyArray<readonly [number, number]> = [
        [8, 26],
        [22, 40],
        [38, 56],
        [54, 72],
        [70, 88],
      ];

      items.forEach((item, index) => {
        const [startPos, endPos] = positions[index];
        createItemTimeline(item, startPos, endPos);
      });

      return () => {
        Object.values(titleSplits).forEach((split) => split?.revert?.());
        Object.values(descriptionSplits).forEach((split) => split?.revert?.());
      };
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mm.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef });

  return (
    <section id="how-it-works" className="w-full relative">
      {/* 1. Mobile-Optimized Connected Timeline (< 768px) */}
      <div className="block md:hidden px-4 sm:px-6 py-14 bg-white border-y border-[#E8EAED]">
        {/* Mobile Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EE] border border-[#FFD9CF] text-xs font-semibold text-[#FF4D24] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D24]" />
            <span>Simple Moving Process</span>
          </div>
          <h2 className="editorial-h2 text-3xl font-normal text-[#121316] tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-[#5E6470] mt-2.5 leading-relaxed font-normal">
            Tell us what you need. Get your quote. Confirm your date. Move without the stress.
          </p>
        </div>

        {/* Mobile Lead Showcase Banner */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#E8EAED] mb-8 shadow-xs">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-[#121316]/35 to-transparent flex flex-col justify-end p-4 text-white">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF4D24] text-white text-[10px] font-semibold tracking-wider uppercase mb-1.5 w-fit shadow-xs">
              <span>{periodLabel}</span>
            </div>
            <h3 className="text-base font-medium text-white leading-snug">
              Transparent Moving Across Dehradun
            </h3>
            <p className="text-[11px] text-white/80 mt-0.5 font-normal">
              Dedicated vehicle allocation, verified rates, and zero hidden surcharges.
            </p>
          </div>
        </div>

        {/* Mobile Connected Milestone Roadmap */}
        <div className="relative pl-5 sm:pl-7">
          {/* Continuous Left Vertical Stem */}
          <div className="absolute left-[15px] sm:left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#FF4D24] via-[#FF4D24] to-[#16803C]" />

          <div className="space-y-4">
            {allJourneyItems.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-3.5">
                {/* Numbered Node Badge */}
                <div className="relative -ml-[23px] sm:-ml-[27px] z-10 w-8 h-8 rounded-full bg-white border-2 border-[#FF4D24] shadow-xs flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-bold text-[#FF4D24]">
                    {item.step}
                  </span>
                </div>

                {/* Step Card */}
                <div className="flex-1 bg-[#F8F9FA] rounded-2xl p-4 border border-[#E8EAED] shadow-xs hover:border-[#FF4D24]/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D24] bg-[#FFF1EE] px-2 py-0.5 rounded-full border border-[#FFD9CF]">
                      {item.phase}
                    </span>
                    <span className="text-[10px] font-medium text-[#8E95A3]">
                      Step {index + 1} of 5
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-[#121316] mb-1 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#5E6470] leading-relaxed mb-3 font-normal">
                    {item.content}
                  </p>

                  <div className="pt-2.5 border-t border-[#E8EAED] flex items-center gap-1.5 text-[11px] font-medium text-[#16803C]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16803C] shrink-0" />
                    <span>{item.reassurance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Desktop Full Horizontal Scrub Timeline (>= 768px) */}
      <div
        ref={sectionRef}
        className="hidden md:block h-[220vh] w-full relative bg-white border-y border-[#E8EAED]"
        style={sectionStyle}
      >
        <div className="h-screen w-full sticky top-0 flex flex-col justify-center overflow-hidden">
          <div
            ref={wholeSliderRef}
            className="flex h-[32vw] w-[260vw] items-center gap-[4vw] px-[5vw]"
          >
            {/* Lead Showcase Visual Card */}
            <div className="h-full w-[28vw] shrink-0 overflow-hidden rounded-[28px] border border-[#E8EAED] relative group shadow-sm">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="28vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-[#121316]/30 to-transparent flex flex-col justify-end p-6 sm:p-7 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4D24] text-white text-[11px] font-semibold tracking-wider uppercase mb-2.5 w-fit shadow-xs">
                  <span>{periodLabel}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-1 leading-snug">
                  Transparent Moving from Start to Finish
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-normal">
                  Dedicated vehicle allocation, verified pricing, and careful handling across Dehradun.
                </p>
              </div>
            </div>

            {/* Timeline Center Rails */}
            <div className="relative h-full w-full">
              {/* The Horizontal Journey Axis */}
              <div className="w-full absolute left-0 top-[49%] -translate-y-1/2 flex items-center h-fit">
                <div
                  className="h-[.75vw] w-[.75vw] rounded-full shrink-0 shadow-xs"
                  style={activeStyle}
                />
                <div
                  className="h-[2px] w-[0%] rounded-full journey-line shrink-0"
                  style={activeStyle}
                />
                <div
                  className="h-[.75vw] w-[.75vw] rounded-full shrink-0 shadow-xs"
                  style={activeStyle}
                />
              </div>

              {/* Top Row Stages */}
              <div className="flex h-1/2 w-full items-center justify-start gap-[1vw]">
                <div className="h-full w-[18%] pt-[1.5vw] shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EE] text-[#FF4D24] border border-[#FFD9CF] text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>How It Works</span>
                  </div>
                  <h2 className="editorial-h2 text-[2.4vw] leading-[1.05] text-[#121316] font-normal tracking-tight">
                    {title}
                  </h2>
                </div>

                <div className="flex h-full gap-x-[12vw]">
                  {topJourneyData.map((item) => (
                    <div
                      key={`top-${item.id}`}
                      className="relative h-full w-[26vw] px-[2.5vw] shrink-0"
                    >
                      <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                        <div
                          className={`size-[0.8vw] -translate-x-1/2 relative aspect-square rounded-full jd-${item.id}`}
                          style={activeStyle}
                        />
                        <div
                          className={`h-[94%] w-[2px] origin-bottom rounded-full jl-${item.id}`}
                          style={activeStyle}
                        />
                      </div>

                      <div className="mt-[-1vw] space-y-[0.8vw]">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FFF1EE] text-[#FF4D24] border border-[#FFD9CF]">
                            STEP {item.step}
                          </span>
                          <span className="text-[10px] sm:text-xs font-semibold text-[#8E95A3] uppercase tracking-wider">
                            {item.phase}
                          </span>
                        </div>
                        <h4
                          className={`title-${item.id} text-[1.8vw] font-medium text-[#121316] leading-tight`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`description-${item.id} w-[92%] text-[1.05vw] leading-[1.35]`}
                          style={mutedTextStyle}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row Stages */}
              <div className="h-1/2 flex items-center justify-start w-full">
                <div className="w-[18%] pt-[1.5vw] shrink-0">
                  <p
                    className="text-[1.1vw] font-medium"
                    style={mutedTextStyle}
                  >
                    {periodLabel}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#16803C] mt-2 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Zero Hidden Surcharges</span>
                  </div>
                </div>

                <div className="flex h-full gap-x-[12vw] ml-[6vw]">
                  {bottomJourneyData.map((item) => (
                    <div
                      key={`bottom-${item.id}`}
                      className="relative h-full w-[26vw] px-[2.5vw] shrink-0"
                    >
                      <div className="w-full absolute left-0 bottom-[-1%] h-full">
                        <div
                          className={`h-[94%] origin-top w-[2px] rounded-full jl-${item.id}`}
                          style={activeStyle}
                        />
                        <div
                          className={`size-[0.8vw] -translate-x-1/2 relative aspect-square rounded-full jd-${item.id}`}
                          style={activeStyle}
                        />
                      </div>

                      <div className="flex h-full w-full flex-col justify-end space-y-[0.8vw]">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FFF1EE] text-[#FF4D24] border border-[#FFD9CF]">
                            STEP {item.step}
                          </span>
                          <span className="text-[10px] sm:text-xs font-semibold text-[#8E95A3] uppercase tracking-wider">
                            {item.phase}
                          </span>
                        </div>
                        <h4
                          className={`title-${item.id} text-[1.8vw] font-medium text-[#121316] leading-tight`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`description-${item.id} w-[92%] text-[1.05vw] leading-[1.35]`}
                          style={mutedTextStyle}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Process;
