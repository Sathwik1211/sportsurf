"use client";

import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import FeaturedProductsGrid from "@/components/sections/FeaturedProductsGrid";
import StatsCounter from "@/components/sections/StatsCounter";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import Certifications from "@/components/sections/Certifications";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="bg-ag-bg min-h-screen">
      <Hero />
      <MarqueeStrip />
      <FeaturedProductsGrid />
      <StatsCounter />
      <FeaturedProjects />
      <Testimonials />
      <Certifications />
      <FinalCTA />
    </div>
  );
}
