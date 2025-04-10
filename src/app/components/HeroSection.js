'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <div>
        <p className="text-sm text-lime-400 font-medium mb-2">Over 45+ Satisfied Clients</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight font-eudoxus">
          Enjoy Stress-Free Development While We Build Your Dream Product
        </h1>
        <p className="text-[var(--grey)] mb-8 font-eudoxus text-[1.125rem] leading-[1.78]">
  From concept to launch, we build MVPs to full-scale apps for startups and businesses, all while you focus on your growth.
</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#"
            className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md text-center"
          >
            Free Instant Product Roadmap
          </Link>
        </div>
      </div>

      {/* Right Section - Lottie Animation */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 100, y: 40, scale: 0.8 }}
        animate={{ opacity: 100, y: 0, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <DotLottieReact
          src="https://lottie.host/c5e75748-764f-4606-905b-a03cbc111e77/XjwIPThtRc.lottie"
          autoplay
          loop
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
