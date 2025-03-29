"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Text to type in the animation
  const text = "Join us for an exceptional journey into the world of AKIASSC";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // New useEffect to control typing animation timing
  useEffect(() => {
    if (animationComplete) {
      // Start typing animation 1.5 seconds after main animation completes
      const typingTimer = setTimeout(() => {
        setTypingComplete(true);
      }, 1500);
      
      return () => clearTimeout(typingTimer);
    }
  }, [animationComplete]);

  // Typing animation variants
  const typingContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const typingCharacter = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center h-screen">
      <motion.div 
        className="mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: animationComplete ? 0.9 : 1.5,
          opacity: 1,
          y: animationComplete ? -20 : 0
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <Image
          src="/akiassc25logo.png"
          alt="Akiassc Logo"
          width={250}
          height={250}
          className=""
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: animationComplete ? 1 : 0,
          y: animationComplete ? 0 : 30
        }}
        transition={{ 
          delay: 0.8, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 flex flex-wrap justify-center gap-x-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: animationComplete ? 1 : 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            We are
          </motion.span>
          <motion.span
            className="text-yellow-300 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationComplete ? 1 : 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            live now
          </motion.span>
        </h1>
        
        {/* Typing animation for the description */}
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl"
          variants={typingContainer}
          initial="hidden"
          animate={typingComplete ? "visible" : "hidden"}
          aria-label={text}
        >
          {text.split("").map((char, index) => (
            <motion.span 
              key={`char-${index}`} 
              variants={typingCharacter}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
        
        {/* Scroll indicator with animation */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: typingComplete ? 1 : 0
          }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <motion.div
            className="text-white/70 text-sm"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}