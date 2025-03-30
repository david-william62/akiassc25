"use client";
import { forwardRef, useMemo } from "react";
import { Testimonials } from "@/lib/types";
import { AnimatedTestimonials } from "../ui/testimonials";

const AboutSection = forwardRef<HTMLElement, {}>((props, ref) => {
  // Use useMemo to prevent recreation of testimonials array on each render
  const testimonials = useMemo<Testimonials[]>(() => [
    {
      name: "About AKIASSC",
      quote: "AKIASSC, by IEEE IA/IE/PELS Kerala, bridges academics and industry, offering students workshops, networking, and insights to enhance technical skills and career opportunities.",
      designation: "",
      src: "/akiassc25logo.jpg",
    },
    {
      name: "About UKFCET",
      quote: "UKF College of Engineering & Technology, established in 2009, excels in academics, infrastructure, and faculty, fostering holistic student development through industry tie-ups, skill training, and extracurricular activities.",
      designation: "",
      src: "/ukf-college.jpg",
    }
  ], []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-8 py-16 text-gray-300 z-10"
    >
      <div className="w-full max-w-4xl mx-auto bg-blue-100/20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-blue-200/30">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
