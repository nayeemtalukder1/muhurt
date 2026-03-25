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

  const navLinks: string[] = [
    "আমাদের বিশেষত্ব",
    "আমাদের মেনু",
    "গ্যালারি",
    "কাস্টমারদের চোখে আমরা",
  ];

  // Close mobile menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0f0a05]/95 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">

        {/* LEFT: Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-10 flex-1">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 hover:text-[#d4a017] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CENTER: Logo */}
        <div className="flex justify-center items-center">
          <a href="/" className="transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Muhurto Logo"
              width={scrolled ? 70 : 85}
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
              href={`#${link}`}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 hover:text-[#d4a017] transition-colors duration-300"
            >
              {link}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex items-center space-x-5 ml-6 pl-8 border-l border-white/20">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={17} className="text-white/80 hover:text-[#d4a017] transition-colors" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61585209115393" target="_blank" rel="noopener noreferrer">
              <Facebook size={17} className="text-white/80 hover:text-[#d4a017] transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={17} className="text-white/80 hover:text-[#d4a017] transition-colors" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#0f0a05] z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-10 text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="text-2xl font-medium uppercase tracking-widest text-white hover:text-[#d4a017] transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Social Icons in Mobile Menu */}
            <div className="flex gap-8 mt-16">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={28} className="text-white/70 hover:text-[#d4a017]" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585209115393" target="_blank" rel="noopener noreferrer">
                <Facebook size={28} className="text-white/70 hover:text-[#d4a017]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={28} className="text-white/70 hover:text-[#d4a017]" />
              </a>
            </div>

            {/* Close Button at Bottom */}
            <button
              onClick={closeMenu}
              className="absolute bottom-12 text-white/60 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;