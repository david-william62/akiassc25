"use client"
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Add scroll-based animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="about"
      className="h-screen relative z-30 py-24 px-6 md:px-12 bg-gradient-to-b from-blue-950/80 to-black/80 backdrop-blur-md"
      ref={sectionRef}
    >
      <motion.div 
        className="max-w-6xl mx-auto"
        style={{ opacity, y }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block relative">
              About <span className="text-blue-400">AKIASSC</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Our Vision</h3>
              <p className="text-gray-300">AKIASSC, the All Kerala Industry Applications Society Student Conclave, is an initiative 
              by the IEEE IA/IE/PELS Joint Chapter Kerala designed to provide a valuable platform for 
              engineering students. This conclave acts as a bridge between academic learning and practical 
              industrial applications, fostering a space for students to network with industry experts 
              and senior IEEE members. Through informative sessions, workshops, and interactions, 
              participants gain insights into technological innovations and explore potential career paths. 
              AKIASSC aims to enhance students' technical and professional skills, equipping them with the 
              knowledge and connections necessary to succeed in the dynamic field of industrial applications.</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Register Now
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
