"use client";

import { useRef, useState } from "react";
import { ShoppingBag, ChevronLeft, ChevronRight, Star } from "lucide-react";
import clsx from "clsx";

const products = [
  {
    id: 1,
    name: "STRANDMON Wing Chair",
    price: "$299.00",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2070",
    colors: ["#3F4E4F", "#2C3333", "#A27B5C"],
    isNew: true,
  },
  {
    id: 2,
    name: "MALM Bed Frame",
    price: "$499.00",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=2070",
    colors: ["#FFFFFF", "#E5E5E5", "#000000"],
    isNew: false,
  },
  {
    id: 3,
    name: "BILLY Bookcase",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=2070",
    colors: ["#FFFFFF", "#333333", "#D1D5DB"],
    isNew: true,
  },
  {
    id: 4,
    name: "POÄNG Armchair",
    price: "$149.00",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=2070",
    colors: ["#F97316", "#3F4E4F", "#FFFFFF"],
    isNew: false,
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-12 bg-muted/30">
      <div className="flex justify-between items-center mb-16">
        <div>
          <span className="text-burntOrange font-bold text-xs uppercase tracking-widest mb-2 block">
            Most Popular
          </span>
          <h2 className="text-4xl font-jakarta font-bold tracking-tight">
            Best Sellers
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 border border-charcoal/10 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all"
          >
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 border border-charcoal/10 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all"
          >
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[350px] flex-shrink-0 snap-start group"
          >
            <div className="relative aspect-[4/5] bg-muted mb-6 overflow-hidden border border-muted/50">
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-burntOrange text-white text-[10px] font-bold px-3 py-1 z-10 uppercase tracking-widest rounded-sm">
                  New Arrival
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Quick Add Button */}
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-charcoal text-white flex items-center justify-center rounded-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="font-jakarta font-bold text-lg text-charcoal max-w-[200px]">
                {product.name}
              </h3>
              <span className="font-bold text-charcoal">{product.price}</span>
            </div>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#EA580C" stroke="#EA580C" className="opacity-80" />
              ))}
              <span className="text-[10px] text-gray-400 ml-2 font-medium">(24 reviews)</span>
            </div>

            <div className="flex gap-2">
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className={clsx(
                    "w-4 h-4 rounded-full border border-gray-200 cursor-pointer transition-transform hover:scale-125",
                    i === 0 && "ring-2 ring-charcoal/20 ring-offset-2"
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
