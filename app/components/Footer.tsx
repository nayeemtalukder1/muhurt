"use client";

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-[#0f0a05] text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">

        {/* Brand & Social */}
        <div className="space-y-8">
          <h3 className="text-2xl font-serif uppercase tracking-widest bg-gradient-to-r from-white to-[#ffcc33] bg-clip-text text-transparent inline-block">
            Muhurto Cafe
          </h3>
          <p className="text-sm font-light leading-relaxed text-white/60">
            মুহূর্তের সাথে প্রতিটি মুহূর্তই থাকুক স্মৃতিময়।
            Founded in 2022, we are dedicated to providing a wholesome culinary adventure for everyone.
          </p>
          <div className="flex space-x-5 text-white/50">
            <Instagram size={20} className="hover:text-[#ffcc33] cursor-pointer transition-colors" />
            <a href="https://www.facebook.com/profile.php?id=61585209115393" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="hover:text-[#ffcc33] cursor-pointer transition-colors" />
            </a>
            <Twitter size={20} className="hover:text-[#ffcc33] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Visit - Integrated Google Maps Data */}
        <div className="space-y-8">
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#ffcc33] font-bold">Location</h4>
          <div className="space-y-4 text-sm font-light text-white/70">
            <p className="flex items-start space-x-3">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-[#ffcc33]" />
              <span>Tarakanda, Mymensingh <br />Bangladesh</span>
            </p>
            <p className="flex items-center space-x-3">
              <Phone size={18} className="flex-shrink-0 text-[#ffcc33]" />
              <span>+880 1611-348685</span>
            </p>
            <p className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0 text-[#ffcc33]" />
              <span>hello@muhurtocafe.com</span>
            </p>
          </div>
        </div>

        {/* Hours - Based on Mirpur 2 Location */}
        <div className="space-y-8">
          <h4 className="text-xs uppercase tracking-[0.3em] text-[#ffcc33] font-bold">Opening Hours</h4>
          <div className="space-y-3 text-sm font-light text-white/70">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Sat – Tue</span>
              <span>11:00 AM – 11:30 PM</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2 text-[#ffcc33]">
              <span>Wed – Fri</span>
              <span>Open 24 Hours</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Sunday</span>
              <span>11:00 AM – 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/40 text-center md:text-left">
        <div className="space-y-2 md:space-y-0">
          <p>© {new Date().getFullYear()} Muhurto Cafe. All Rights Reserved.</p>
          <p className="md:mt-1">
            Created by{" "}
            <a
              href="https://solutions.nayeemtalukder.top/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffcc33] hover:text-white transition-colors font-bold tracking-[0.3em]"
            >
              Nayeem Talukder
            </a>
          </p>
        </div>

        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-[#ffcc33] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#ffcc33] transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;