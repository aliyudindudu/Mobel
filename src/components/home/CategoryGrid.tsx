"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Sofas & Armchairs",
    subtitle: "Modular Comfort",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=2070",
    className: "col-span-8 row-span-2",
  },
  {
    title: "Lighting",
    subtitle: "Warm Ambience",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=2070",
    className: "col-span-4 row-span-1",
  },
  {
    title: "Storage",
    subtitle: "Clean Organization",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2070",
    className: "col-span-4 row-span-1",
  },
];

export default function CategoryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".bento-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative z-10 py-24 px-12 bg-white" ref={containerRef}>
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-jakarta font-bold mb-4 tracking-tight">
            Browse by Room
          </h2>
          <p className="text-gray-500 max-w-md">
            Everything you need for a functional and beautiful home, curated into
            simple collections.
          </p>
        </div>
        <button className="text-sm font-semibold border-b-2 border-charcoal pb-1 transition-all hover:border-burntOrange hover:text-burntOrange">
          VIEW ALL COLLECTIONS
        </button>
      </div>

      <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[700px]">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`bento-card relative group overflow-hidden ${cat.className}`}
          >
            <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/0 transition-colors duration-500 z-10" />
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-medium mb-1 block">
                {cat.subtitle}
              </span>
              <h3 className="text-white text-2xl font-jakarta font-bold flex items-center justify-between">
                {cat.title}
                <div className="w-10 h-10 bg-white text-charcoal flex items-center justify-center rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <MoveUpRight size={18} />
                </div>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
