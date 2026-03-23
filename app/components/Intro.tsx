"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="relative py-28 md:py-32 lg:py-40 px-6 text-center max-w-5xl mx-auto overflow-hidden bg-[#0f0a05]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier
        }}
        className="space-y-12"
      >
        {/* The Quote with Gradient Text */}
        <blockquote className="text-xl md:text-3xl lg:text-4xl font-serif italic leading-[1.4] tracking-tight px-4">
          <span className="bg-gradient-to-r from-white via-[#f5e9d0] to-[#ffcc33] bg-clip-text text-transparent">
            “Soul Kitchen, founded in 2022, is dedicated to all those who love to wander far and wide.
            We invite you on a wholesome culinary adventure, where you'll explore undiscovered gourmet experiences.”
          </span>
        </blockquote>

        {/* Supporting Text */}
        <div className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/40 font-medium">
          Thank you for creating lasting memories with us.
        </div>

        {/* Decorative Animated Divider */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#ffcc33]/50 to-transparent"
          />
          {/* Subtle central dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute w-1 h-1 bg-[#ffcc33] rounded-full shadow-[0_0_8px_#ffcc33]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;