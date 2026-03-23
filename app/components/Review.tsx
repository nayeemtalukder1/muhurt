"use client";

import { motion } from "framer-motion";
import { Star, Quote, Volume2 } from "lucide-react";
import type { FC } from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  videoUrl: string;
  thumbnail: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    role: "Food Blogger",
    videoUrl: "/reviews/review1.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    comment: "হাঁসের মাংস আর চাউলের রুটি জাস্ট অসাধারণ ছিল!",
  },
  {
    id: 2,
    name: "Sajid Hasan",
    role: "Regular Customer",
    videoUrl: "/reviews/review2.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    comment: "Best cold coffee in town. The ambiance is so peaceful.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Influencer",
    videoUrl: "/reviews/review3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    comment: "পরিবেশ এবং খাবার—দুটোই ১০ এ ১০!",
  },
];

const VideoReview: FC = () => {
  return (
    <section className="py-24 bg-[#0f0a05] px-6" id="কাস্টমারদের চোখে আমরা">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-[10px] uppercase tracking-widest text-white/60">Videos play muted by default</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#ffcc33]/40 transition-all duration-500 shadow-2xl"
            >
              {/* Auto-playing Video Container */}
              <div className="relative h-80 overflow-hidden">
                <video
                  src={review.videoUrl}
                  poster={review.thumbnail} // Shows thumbnail while loading
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay for branding */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0f0a05]/80" />

                {/* Play Icon (Visual Only for Autoplay) */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-[#ffcc33]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#ffcc33]/40">
                    <div className="w-2 h-2 bg-[#ffcc33] rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="p-8 pt-4 relative">
                <Quote className="absolute -top-6 right-8 text-[#ffcc33]/10 w-16 h-16" />

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#ffcc33] fill-[#ffcc33]" />
                  ))}
                </div>

                <p className="text-white/90 mb-6 italic font-light leading-relaxed text-sm md:text-base">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-[1px] bg-gradient-to-b from-[#ffcc33] to-transparent" />
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{review.name}</h4>
                    <p className="text-[#ffcc33] text-[10px] uppercase tracking-[0.2em] font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReview;