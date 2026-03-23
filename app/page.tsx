import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import QuickLinks from "./components/QuickLinks";
import Intro from "./components/Intro";
import { Menu } from "lucide-react";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/galleryImages";
import VideoReview from "./components/Review";
import MainChef from "./components/MainChef";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickLinks />
      <MainChef />
      <MenuSection />
      <Gallery />
      <VideoReview />
      <Footer />
    </>
  );
}
