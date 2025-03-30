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
  const isScrollingRef = useRef(false); // Using ref instead of state to avoid re-renders

  // More efficient wheel event handler using ref for scroll state
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isScrollingRef.current) return;
      
      isScrollingRef.current = true;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);

      const threshold = 10;
      
      if (event.deltaY > threshold) {
        if (currentSection === "hero" && aboutSectionRef.current) {
          event.preventDefault();
          aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("about");
        } else if (currentSection === "about" && countdownSectionRef.current) {
          event.preventDefault();
          countdownSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("countdown");
        }
      } else if (event.deltaY < -threshold) {
        if (currentSection === "countdown" && aboutSectionRef.current) {
          event.preventDefault();
          aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("about");
        } else if (currentSection === "about" && heroSectionRef.current) {
          event.preventDefault();
          heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
          setCurrentSection("hero");
        }
      }
    },
    [currentSection]
  );

  // Optimized scroll detection with throttling
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      handleWheel(e);
    };
    
    window.addEventListener("wheel", wheelHandler, { passive: false });
    
    // Throttled scroll handler for better performance
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollTimeout) return;
      
      scrollTimeout = setTimeout(() => {
        const viewportHeight = window.innerHeight;
        const heroOffset = heroSectionRef.current?.getBoundingClientRect().top || 0;
        const aboutOffset = aboutSectionRef.current?.getBoundingClientRect().top || 0;
        const countdownOffset = countdownSectionRef.current?.getBoundingClientRect().top || 0;
        
        // More efficient section detection using viewport percentage
        if (Math.abs(heroOffset) < viewportHeight * 0.3) {
          setCurrentSection("hero");
        } else if (Math.abs(aboutOffset) < viewportHeight * 0.3) {
          setCurrentSection("about");
        } else if (Math.abs(countdownOffset) < viewportHeight * 0.3) {
          setCurrentSection("countdown");
        }
        
        scrollTimeout = null;
      }, 100); // Throttle interval
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    }
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
        <BackgroundBeams className="z-0 opacity-30" pathCount={15} />
      </Suspense>
    </div>
  );
}
