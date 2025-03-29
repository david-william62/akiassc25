"use client"
import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownSection = forwardRef<HTMLElement>((_, ref) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("July 11, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen px-8 py-16 text-gray-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl font-bold text-yellow-300 mb-6 inline">
          Countdown
        </h1>
        <h1 className="text-3xl font-bold text-yellow-300 mb-6 inline pl-2">
          to
        </h1>
        <h1
          className="text-6xl font-bold text-yellow-300 mb-6 pt-1"
          style={{ textShadow: "0 0 5px #FFD700, 0 0 1px #FFD700, 0 0 1px #FFA500" }}
        >
          AKIASSC 2025
        </h1>
        <div className="text-2xl font-mono">
          <p>{`${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds`}</p>
        </div>
      </motion.div>
    </section>
  );
});

CountdownSection.displayName = "CountdownSection";
export default CountdownSection;
