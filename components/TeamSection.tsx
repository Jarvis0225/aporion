"use client";

import { motion } from "framer-motion";
import ChromaGrid, { ChromaItem } from "./ChromaGrid";
import dynamic from "next/dynamic";

const GhostCursor = dynamic(() => import("./GhostCursor"), { ssr: false });

export default function TeamSection() {
  const items: ChromaItem[] = [
    {
      image: "/pics/9K5A4845.jpg",
      title: "Multimodal Perception",
      subtitle: "Real-time recognition of user emotion, gestures, and spatial context.",
      handle: "@Beyond pixels",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "#"
    },
    {
      image: "/pics/TATA.png",
      title: "Cognitive Core",
      subtitle: "Proprietary LLM orchestration with long-term memory and personality imprinting.",
      handle: "@The brain",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "#"
    },
    {
      image: "/pics/AICORUMI.png",
      title: "Sonic Presence",
      subtitle: "Full-duplex interaction with hyper-realistic tone matching and adaptive emotional modulation.",
      handle: "@The soul",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "#"
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Desktop: GhostCursor Background */}
      <div className="hidden md:block">
        <GhostCursor color="#E8C5E8" brightness={0.35} bloomStrength={0.03} />
      </div>
      
      {/* Mobile: Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent pointer-events-none md:hidden" />
      
      {/* Edge Fade Masks for GhostCursor (Desktop only) */}
      <div className="hidden md:block absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-12 z-10">
        
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
            The Aporion Stack
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed text-center">
            A full-stack infrastructure for embodied intelligence. Plug, play, and awaken.
          </p>
        </motion.div>

        {/* ChromaGrid */}
        <div style={{ height: '400px', position: 'relative' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

      </div>
    </section>
  );
}
