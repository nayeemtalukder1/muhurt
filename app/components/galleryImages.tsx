"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

const galleryImages = [
  {
    src: "/1.jpg",
    alt: "Premium Plated Dish",
  },
  {
    src: "/2.jpg",
    alt: "Warm Cafe Ambiance",
  },
  {
    src: "/3.jpg",
    alt: "Expert Preparation",
  },
  {
    src: "/4.jpg",
    alt: "Fresh Beverages",
  },
  {
    src: "/5.jpg",
    alt: "Traditional Flavors",
  },
  {
    src: "/7.jpg",
    alt: "Signature Desserts",
  },
];

const Gallery: FC = () => {
  return (
    <section className="relative py-24 bg-[#0f0a05] overflow-hidden" id="গ্যালারি">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-white via-[#f5e9d0] to-[#ffcc33] bg-clip-text text-transparent inline-block"
        >
          গ্যালারি — মুহূর্তের দৃশ্যপট
        </motion.h2>
        <div className="h-[1px] w-24 bg-[#ffcc33]/40 mx-auto mt-4" />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-[60vh] min-h-[400px]">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            className="group relative overflow-hidden border-[0.5px] border-white/5"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              loading="lazy"
            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Alt Text Label */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#ffcc33] font-bold mb-1">
                Explore
              </p>
              <p className="text-xs text-white font-light tracking-widest">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Side Decorative Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f0a05] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f0a05] to-transparent pointer-events-none" />
    </section>
  );
};

export default Gallery;