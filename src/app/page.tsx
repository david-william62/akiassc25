import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { BackgroundBeams } from "@/components/ui/background";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full">
      <Header />
      <Suspense fallback={<div className="h-screen"></div>}>
        <HeroSection />
        <AboutSection />
        <BackgroundBeams className="z-10 opacity-30" /> {/* Reduced opacity */}
      </Suspense>
    </div>
  );
}
