"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

const MainChef: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0f0a05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/arif.jpg" // নিশ্চিত করুন আপনার public ফোল্ডারে arif.jpg ফাইলটি আছে
                alt="এক্সিকিউটিভ শেফ"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a05]/60 to-transparent" />
            </div>

            {/* Decorative Frame Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-b-2 border-r-2 border-[#ffcc33]/30 rounded-br-2xl -z-10 hidden md:block" />

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-8 left-8 bg-[#ffcc33] text-black p-4 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl"
            >
              <span className="text-xl font-bold leading-none">২+</span>
              <span className="text-[10px] uppercase font-bold tracking-tighter">বছরের অভিজ্ঞতা</span>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#ffcc33] text-sm uppercase tracking-[0.4em] font-bold block mb-4">
                প্রধান কারিগর
              </span>
              {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                পরিচয় কমিয়ে নিন আমাদের <br />
                <span className="bg-gradient-to-r from-white to-[#ffcc33] bg-clip-text text-transparent italic">
                  প্রধান শেফের সাথে
                 </span>
              </h2> */}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed font-light italic"
            >
              "রান্না মানে কেবল উপকরণের সংমিশ্রণ নয়; এটি হলো টেবিলকে ঘিরে তৈরি হওয়া কিছু সুন্দর মুহূর্ত। 'মুহূর্ত' ক্যাফেতে আমরা ঐতিহ্যের সাথে আধুনিকতার মিলন ঘটাই এমন সব স্বাদ তৈরিতে, যা আপনার স্মৃতিতে অমলিন থাকবে চিরকাল।"
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-[#ffcc33]" />
                <p className="text-white font-medium tracking-widest uppercase text-sm">শেফ তৌহিদ আহমেদ আরিফ</p>
              </div>

              {/* Signature Style */}
              <p className="font-serif text-3xl text-white/40 pl-4">
                তৌহিদ আহমেদ আরিফ
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-[#ffcc33]/50 text-[#ffcc33] text-xs uppercase tracking-[0.2em] hover:bg-[#ffcc33] hover:text-black transition-all duration-300 rounded-full"
            >
              শেফ স্পেশাল মেনু দেখুন
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainChef;