"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Changed to standard framer-motion for stability
import type { FC } from "react";

interface MenuItem {
  name: string;
  price: number;
  desc: string;
}

interface MenuCategory {
  [category: string]: MenuItem[];
}

interface MenuData {
  "Main Menu": MenuCategory;
  "Beverages": MenuCategory;
}

const menuData: MenuData = {
  "Main Menu": {
    "Special Menu": [
      { name: "হাঁসের মাংস ফুল প্লেট", price: 150, desc: "ধোঁয়া ওঠা গরম হাঁসের মাংসের পূর্ণ তৃপ্তি" },
      { name: "হাঁসের মাংস হাফ প্লেট", price: 80, desc: "স্বল্প পরিসরে হাঁসের মাংসের স্বাদ" },
      { name: "চাউলের রুটি প্রতি পিস", price: 10, desc: "হাঁসের মাংসের সাথে সেরা কম্বিনেশন" },
    ],
    "Cofe Menu": [
      { name: "হট কফি", price: 30, desc: "এক কাপ উষ্ণ প্রশান্তি" },
      { name: "কোল্ড কফি", price: 80, desc: "মন মাতানো শীতল কফি" },
      { name: "চকলেট কোল্ড কফি", price: 90, desc: "চকলেটের স্বাদে ভরা কোল্ড কফি" },
      { name: "স্ট্রবেরি কোল্ড কফি", price: 90, desc: "স্ট্রবেরির মিষ্টি সুবাসে কফি" },
    ],
  },
  "Beverages": {
    "Drink Menu": [
      { name: "লেবু শরবত", price: 20, desc: "তাজা লেবুর ফ্রেশ শরবত" },
      { name: "মিন্ট লেমন নেট", price: 30, desc: "পুদিনা ও লেবুর দারুণ মিশ্রণ" },
      { name: "মিন্ট লেমন নেট সোডা", price: 50, desc: "সোডার ঝাঝালো স্বাদে মিন্ট লেমন" },
    ],
    "Juice Menu": [
      { name: "তরমুজ এর জুস", price: 80, desc: "তাজা তরমুজের মিষ্টি রস" },
      { name: "আমের জুস", price: 80, desc: "পাকা আমের ঘন জুস" },
      { name: "আনারসের জুস", price: 80, desc: "আনারসের টক-মিষ্টি স্বাদের জুস" },
      { name: "খেজুরের জুস", price: 90, desc: "প্রাকৃতিক শক্তিবর্ধক খেজুরের রস" },
      { name: "মালটা জুস", price: 100, desc: "ভিটামিন সি সমৃদ্ধ মালটা জুস" },
      { name: "আপেল জুস", price: 100, desc: "তাজা আপেলের স্বাস্থ্যকর জুস" },
    ],
  },
};

const tabs: (keyof MenuData)[] = ["Main Menu", "Beverages"];

const MenuSection: FC = () => {
  const [activeTab, setActiveTab] = useState<keyof MenuData>("Main Menu");
  const currentMenu = menuData[activeTab];

  return (
    <section className="py-24 px-6 bg-[#0f0a05] text-white" id="আমাদের মেনু">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-white to-[#ffcc33] bg-clip-text text-transparent">
            আমাদের মেনু
          </h2>
          <p className="text-[#ffcc33] italic text-sm md:text-base mb-10">
            মুহূর্তের সাথে প্রতিটি মুহূর্তই থাকুক স্মৃতিময়
          </p>

          <div className="flex justify-center gap-8 md:gap-16 border-b border-white/10 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-xs md:text-sm uppercase tracking-[0.3em] transition-all pb-4 ${activeTab === tab ? "text-[#ffcc33]" : "text-white/40 hover:text-white/80"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffcc33]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {Object.entries(currentMenu).map(([category, items]) => (
            <div key={category} className="space-y-8">
              <h3 className="text-sm md:text-base uppercase tracking-[0.4em] text-[#ffcc33] border-b border-[#ffcc33]/20 pb-4">
                {category}
              </h3>

              <div className="space-y-7">
                {items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg md:text-xl font-medium group-hover:text-[#ffcc33] transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow border-b border-dashed border-white/10 mx-4"></div>
                      <span className="text-[#ffcc33] font-bold">
                        ৳{item.price}/-
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/50 italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;