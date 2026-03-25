"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-[#0f0a05] px-6" id="কাস্টমারদের চোখে আমরা">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-white to-[#ffcc33] bg-clip-text text-transparent"
            >
              কাস্টমারদের চোখে আমরা
            </motion.h2>
            <p className="text-white/50 italic">মুহূর্তের সেরা কিছু রিভিউ</p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Volume2 size={14} className="text-[#ffcc33]" />
            <span className="text-[10px] uppercase tracking-widest text-white/60">
              Real stories from real customers
            </span>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-center px-6"
              >
                <Quote className="text-[#ffcc33]/20 w-16 h-16 mx-auto mb-10" />

                {/* Stars */}
                <div className="flex gap-2 mb-10 justify-center">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={26} className="text-[#ffcc33] fill-[#ffcc33]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-white/90 text-[18px] md:text-[21px] leading-relaxed italic font-light max-w-3xl mx-auto">
                  "{reviews[currentIndex].comment}"
                </p>

                {/* Name & Role */}
                <div className="mt-14">
                  <h4 className="text-white font-semibold text-2xl tracking-wide">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-[#ffcc33] text-sm uppercase tracking-[0.125em] mt-2">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all backdrop-blur-md border border-white/10"
            aria-label="Previous review"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all backdrop-blur-md border border-white/10"
            aria-label="Next review"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-[#ffcc33] scale-125"
                : "bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Recommendation Banner */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 px-8 py-4 rounded-full border border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-[#ffcc33] fill-[#ffcc33]" />
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