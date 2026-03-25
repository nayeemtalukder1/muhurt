"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Volume2 } from "lucide-react";
import type { FC } from "react";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Apurbo Shorker",
    role: "Customer",
    rating: 5,
    comment: "বন্ধু হিসেবে নয় মন থেকে বলছি দুস্ত তোর দোকানের চা থেকে শুরু করে জুস এমনকি লাচ্ছি আইটেম গুলোওর মানও আলহামদুলিল্লাহ অনেক ভালো দোয়া করি বন্ধু",
  },
  {
    id: 2,
    name: "Sayem Sarkar",
    role: "Customer",
    rating: 5,
    comment: "কিছু একটা আছে আপনার হাতে নাহলে এতো সুন্দর করে কেউ চা বানায়",
  },
  {
    id: 3,
    name: "Md Josim Ahammed",
    role: "Customer",
    rating: 5,
    comment: "এই ফাস্ট টাইম তারাকান্দা এতো ভালো মানের চা খাইলাম আলহামদুলিল্লাহ আপনার চায়ের মান অনেক উন্নত...",
  },
  {
    id: 4,
    name: "S. Sabbir",
    role: "Customer",
    rating: 5,
    comment: "আলহামদুলিল্লাহ আপনার দোকানের চায়ের মান ভালো আছে",
  },
  {
    id: 5,
    name: "আবরার লাভীব",
    role: "Customer",
    rating: 5,
    comment: "এক কাপ চা, এক মুঠো শান্তি....",
  },
  {
    id: 6,
    name: "Shuvo Xoy",
    role: "Customer",
    rating: 5,
    comment: "এক কাপ চা, এক ঝলক শান্তি ☕😌\nধন্যবাদ : মুহুর্ত - Muhurt",
  },
];

const VideoReview: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-[#0f0a05] px-6" id="কাস্টমারদের চোখে আমরা">
      <div className="max-w-4xl mx-auto">
        {/* Header - Centered on all devices */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-white to-[#ffcc33] bg-clip-text text-transparent"
          >
            কাস্টমারদের চোখে আমরা
          </motion.h2>
          <p className="text-white/50 italic text-lg">
            মুহূর্তের সেরা কিছু রিভিউ
          </p>

          {/* Volume Badge */}
          <div className="mt-6 flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
            <Volume2 size={16} className="text-[#ffcc33]" />
            <span className="text-xs uppercase tracking-widest text-white/60">
              REAL STORIES FROM REAL CUSTOMERS
            </span>
          </div>
        </div>

        {/* Main Review Card */}
        <div className="relative min-h-[420px] flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-center px-4"
              >
                <Quote className="text-[#ffcc33]/20 w-20 h-20 mx-auto mb-8" />

                {/* Stars */}
                <div className="flex gap-1.5 mb-10 justify-center">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={32} className="text-[#ffcc33] fill-[#ffcc33]" />
                  ))}
                </div>

                {/* Comment */}
                <div className="max-w-3xl mx-auto">
                  <p className="text-white/90 text-[19px] md:text-[22px] leading-relaxed italic font-light px-4">
                    "{reviews[currentIndex].comment}"
                  </p>
                </div>

                {/* Author */}
                <div className="mt-16">
                  <h4 className="text-white font-semibold text-[26px] tracking-wide">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-[#ffcc33] text-sm uppercase tracking-[0.125em] mt-1">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-4 mt-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-[#ffcc33] scale-125 shadow-[0_0_15px_#ffcc33]"
                  : "bg-white/30 hover:bg-white/60"
                }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Recommendation Banner */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={26} className="text-[#ffcc33] fill-[#ffcc33]" />
              ))}
            </div>
            <span className="text-white/90 font-medium text-xl">
              100% recommend (6 Reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReview;