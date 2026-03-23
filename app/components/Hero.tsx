"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative h-[120vh] flex items-center justify-center overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.7) contrast(1.1)" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920"
            alt="Warm kitchen cooking scene"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 shadow-inner" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Welcome Tag - Now with Gradient */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm sm:text-base mb-2 block font-bold tracking-tight bg-gradient-to-r from-[#feb47b] to-[#ffcc33] bg-clip-text text-transparent"
        >
          সুস্বাগতম
        </motion.span>

        {/* Headline - Now with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.15] drop-shadow-lg bg-gradient-to-r from-white via-[#feb47b] to-[#ffcc33] bg-clip-text text-transparent"
        >
          স্বাদের আসল ঠিকানা <br />
          এখন আপনার আশেপাশেই!
        </motion.h1>

        {/* List Items */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
          }}
          className="flex flex-col items-center space-y-2 mb-8 text-white/95"
        >
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center text-lg sm:text-xl">
            <span className="mr-3 text-2xl">🍹</span> ১০০% ফ্রেশ ফলের জুস
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center text-lg sm:text-xl">
            <span className="mr-3 text-2xl">☕</span> দুধ চা, লেবু চা ও স্পেশাল চা
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center text-lg sm:text-xl">
            <span className="mr-3 text-2xl">⚪</span> গরম গরম পুরা রুটি
          </motion.p>

          {/* Highlight Sentence - Now with Gradient */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="pt-4 italic font-semibold text-lg sm:text-xl px-2 bg-gradient-to-r from-[#ffcc33] to-[#ff7e5f] bg-clip-text text-transparent"
          >
            সকালের নাস্তা হোক বা বিকেলের আড্ডা — স্বাদ আর তৃপ্তিতে আমরা একদম আলাদা 💯
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-lg font-medium text-white"
          >
            একবার আসলে বারবার আসতে মন চাইবেই 😍
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-4"
        >
          <button
            className="
              inline-flex items-center gap-3
              px-10 py-4
              bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ffcc33]
              text-white font-bold text-lg
              rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              hover:scale-105 transition-transform duration-300
              border border-white/30
            "
          >
            <span className="w-2.5 h-2.5 bg-pink-300 rounded-full animate-pulse" />
            চলে আসুন আজই — স্বাদ নিন
          </button>
        </motion.div>
      </div>

      {/* Mouse Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60">
        <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;