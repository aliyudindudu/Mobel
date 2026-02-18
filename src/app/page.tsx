import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductCarousel from "@/components/home/ProductCarousel";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-porcelain flex flex-col">
      <Navbar />
      
      {/* Hero Section with Hotspots */}
      <Hero />

      {/* Bento Grid Categories */}
      <CategoryGrid />

      {/* Best Sellers Carousel */}
      <div className="relative z-10">
        <ProductCarousel />
      </div>

      {/* Inspiration Section */}
      <section className="relative z-10 py-24 px-12 bg-white border-y border-muted">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold mb-4 block italic">
            #MOBELATHOME
          </span>
          <h2 className="text-5xl font-jakarta font-bold text-charcoal tracking-tight">
            Made for Living.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto min-h-[600px]">
          <div className="bg-muted overflow-hidden aspect-square md:aspect-auto">
             <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Inspiration" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-muted overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Inspiration" />
            </div>
            <div className="bg-muted overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Inspiration" />
            </div>
          </div>
          <div className="bg-muted overflow-hidden col-span-1 md:col-span-2">
            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Inspiration" />
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
