"use client";

import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";
import dynamic from "next/dynamic";

const GhostCursor = dynamic(() => import("./GhostCursor"), { ssr: false });

export default function VideoSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-36 pb-20">
      {/* Desktop: GhostCursor Background */}
      <div className="hidden md:block">
        <GhostCursor color="#E8C5E8" brightness={0.35} bloomStrength={0.03} />
      </div>
      
      {/* Mobile: Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent pointer-events-none md:hidden" />
      
      {/* Edge Fade Masks for GhostCursor (Desktop only) */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
      
      <div className="relative w-full mx-auto z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center px-8 lg:px-12"
          style={{ marginBottom: '30px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ marginBottom: '40px' }}>
            Product Demo
          </h2>
          <p className="text-zinc-400 max-w-4xl mx-auto text-lg leading-relaxed text-center">
            See our embodied AI in action. Real-time interaction, emotion recognition, and natural conversation.
          </p>
        </motion.div>

        {/* Video Player - Centered */}
        <motion.div
          className="w-full max-w-5xl mx-auto px-8 lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <VideoPlayer
            videoUrl="/demo-video.mov"
            posterUrl="/pics/logo_aporion.jpg"
            className="w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
