"use client";

import { motion } from "framer-motion";
import MagicBento from "./MagicBento";

export default function BentoSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative w-full mx-auto px-8 lg:px-12 z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center"
          style={{ marginBottom: '120px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ marginBottom: '40px' }}>
            Platform Scale
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed text-center">
            Trusted by thousands. Verified by billions of tokens.
          </p>
        </motion.div>

        {/* MagicBento Grid - Performance Optimized */}
        <MagicBento 
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={0}
          glowColor="132, 0, 255"
        />

      </div>
    </section>
  );
}
