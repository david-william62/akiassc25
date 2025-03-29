"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-8 py-16 text-gray-300"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold text-yellow-300 mb-6">
          About AKIASSC
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg leading-relaxed"
        >
          AKIASSC, the All Kerala Industry Applications Society Student Conclave, is an initiative by the IEEE IA/IE/PELS Joint Chapter Kerala designed to provide a valuable platform for engineering students. This conclave acts as a bridge between academic learning and practical industrial applications, fostering a space for students to network with industry experts and senior IEEE members. Through informative sessions, workshops, and interactions, participants gain insights into technological innovations and explore potential career paths. AKIASSC aims to enhance students' technical and professional skills, equipping them with the knowledge and connections necessary to succeed in the dynamic field of industrial applications.
        </motion.p>
      </motion.div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
