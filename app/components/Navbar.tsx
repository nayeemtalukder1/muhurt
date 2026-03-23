"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: string[] = ["আমাদের বিশেষত্ব", "আমাদের মেনু", "গ্যালারি", "কাস্টমারদের চোখে আমরা"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0f0a05]/95 backdrop-blur-md py-2 shadow-xl"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">

        {/* LEFT: Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-10 flex-1">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 hover:text-[#d4a017] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CENTER: Logo (Smaller size as per screenshot) */}
        <div className="flex justify-center items-center">
          <a href="/" className="transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Muhurto Logo"
              width={scrolled ? 70 : 85} // Precision sizing
              height={85}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </a>
        </div>

        {/* RIGHT: Nav Links + Socials (Desktop) */}
        <div className="hidden lg:flex items-center justify-end space-x-10 flex-1">
          {navLinks.slice(3).map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 hover:text-[#d4a017] transition-colors duration-300"
            >
              {link}
            </a>
          ))}

          {/* Vertical Divider & Socials */}
          <div className="flex items-center space-x-5 ml-4 pl-8 border-l border-white/20">
            <Instagram size={16} className="text-white/80 hover:text-[#d4a017] cursor-pointer transition-colors" />
            <Facebook size={16} className="text-white/80 hover:text-[#d4a017] cursor-pointer transition-colors" />
            <Twitter size={16} className="text-white/80 hover:text-[#d4a017] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 bg-[#0f0a05] flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl uppercase tracking-widest text-white hover:text-[#d4a017]"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;