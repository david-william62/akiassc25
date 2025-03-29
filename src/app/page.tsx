"use client"
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CountdownSection from "@/components/CountdownSection";
import { BackgroundBeams } from "@/components/ui/background";
import { Suspense, useEffect, useRef, useState, useCallback } from "react";

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const countdownSectionRef = useRef<HTMLElement | null>(null);
  const [currentSection, setCurrentSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000); // Debounce for 1 second

      if (event.deltaY > 3) {
        if (currentSection === "hero" && aboutSectionRef.current) {
          aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("about");
        } else if (currentSection === "about" && countdownSectionRef.current) {
          countdownSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("countdown");
        }
      } else if (event.deltaY < 3) {
        if (currentSection === "countdown" && aboutSectionRef.current) {
          aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("about");
        } else if (currentSection === "about" && heroSectionRef.current) {
          heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("hero");
        }
      }
    },
    [currentSection, isScrolling]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div className="min-h-screen relative w-full pt-16">
      <Header />
      <Suspense fallback={<div className="h-screen"></div>}>
        <div ref={heroSectionRef}>
          <HeroSection />
        </div>
        <AboutSection ref={aboutSectionRef} />
        <CountdownSection ref={countdownSectionRef} />
        <BackgroundBeams className="z-10 opacity-30" /> {/* Reduced opacity */}
      </Suspense>
    </div>
  );
}
