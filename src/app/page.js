"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TailoredTechSolution from "./components/TailoredTechSolution";
import ServicesSection from "./components/ServicesSection";
import ConsultationPage from "./components/ConsultationPage";
import PricingPage from "./components/PricingPage";
import About from "./components/About";
import TechStackSection from "./components/TechStackSection";
import Footer from "./components/Footer";
import DesignedForSuccess from "./components/DesignedForSuccess";
// import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1B112B] text-white">
      <Navbar />
      <HeroSection />
      <TailoredTechSolution />
      <DesignedForSuccess />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="consultation">
        <ConsultationPage />
      </div>
      <div id="pricing">
        <PricingPage />
      </div>
      <div id="about">
        <About />
      </div>
      <TechStackSection />

      <Footer />
    </main>
  );
}
