"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

interface QuickLink {
  title: string;
  subtitle: string;
  img: string;
  tag: string;
}

const quickLinks: QuickLink[] = [
  {
    tag: "তাজা উপকরণ",
    title: "বিশুদ্ধ স্বাদ",
    subtitle: "দেশি-বিদেশি মশলার সঠিক মিশ্রণে তৈরি সেরা সব স্বাদ।",
    img: "/tp.jpeg",
  },
  {
    tag: "আভিজাত্য",
    title: "মনোরম পরিবেশ",
    subtitle: "পরিবার ও প্রিয়জনদের নিয়ে আড্ডা দেওয়ার জন্য সেরা জায়গা।",
    img: "/cp.jpg",
  },
  {
    tag: "শেফ স্পেশাল",
    title: "দক্ষ কারিগর",
    subtitle: "অভিজ্ঞ শেফদের নিপুণ হাতের ছোঁয়ায় প্রতিটি ডিশ অনন্য।",
    img: "/hp.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const QuickLinks: FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0f0a05]" id="আমাদের বিশেষত্ব">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ffcc33] text-xs uppercase tracking-[0.5em] font-bold block mb-3">
            কেন আমাদের বেছে নেবেন?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif bg-gradient-to-r from-white via-[#f5e9d0] to-[#ffcc33] bg-clip-text text-transparent inline-block pb-2">
            আমাদের বিশেষত্ব
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#ffcc33]/50 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              custom={index}
              className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer border border-white/5"
            >
              {/* Background Image */}
              <img
                src={link.img}
                alt={link.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Sophisticated Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05] via-[#0f0a05]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                {/* Small Tag */}
                <span className="w-fit px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#ffcc33] border border-[#ffcc33]/30 rounded-full mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {link.tag}
                </span>

                <h3 className="text-2xl font-serif text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {link.title}
                </h3>

                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                  {link.subtitle}
                </p>

                {/* Bottom Border/Progress Animation */}
                <div className="w-12 h-[2px] bg-[#ffcc33] transition-all duration-700 group-hover:w-full group-hover:bg-gradient-to-r from-[#ffcc33] to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;