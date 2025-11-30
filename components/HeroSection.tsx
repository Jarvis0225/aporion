"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import DecryptedText from "./ui/DecryptedText";
import BlurText from "./BlurText";
import LiquidEther from "./LiquidEther";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* LiquidEther Background - Fluid Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className=""
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/20 to-[#050505]/50 pointer-events-none z-10" />
      </div>

      {/* Hero Content - Vertically Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-6 text-center pt-20 gap-10">
        {/* Main Headline - Decrypted Text Effect */}
        <div className="w-full max-w-6xl mx-auto">
          <DecryptedText
            text="FORMING THE FORMLESS"
            className="w-full font-[family-name:var(--font-syne)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-white"
            delay={500}
            speed={80}
          />
        </div>

        {/* Sub-headline */}
        <div className="w-full max-w-4xl mx-auto">
          <BlurText
            text="                The Neural Architecture for Embodied AI. Bridging biological intent with digital response."
            className="text-base md:text-lg lg:text-xl text-[#A1A1AA] leading-relaxed text-center"
            delay={50}
            animateBy="words"
            direction="bottom"
          />
        </div>

        {/* Badge - Minimalist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="hidden flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <Trophy className="w-4 h-4 text-[#00F0FF]" strokeWidth={1} />
          <span className="text-sm font-medium text-[#A1A1AA]">
            CES 2025 Innovation Award Honoree
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="hidden"
        >
          <button className="group relative px-10 py-4 border border-white/20 rounded-full text-base font-medium text-white hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-500">
            <span className="relative z-10">Watch the Film</span>
            <div className="absolute inset-0 rounded-full bg-[#00F0FF]/0 group-hover:bg-[#00F0FF]/5 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Minimalist */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-[#A1A1AA]"
        >
          <span className="text-[10px] tracking-[0.2em] font-light mb-2">SCROLL</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
