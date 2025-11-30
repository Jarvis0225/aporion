"use client";

import { motion } from "framer-motion";
import ChromaGrid, { ChromaItem } from "./ChromaGrid";

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
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black pointer-events-none" />
      
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
