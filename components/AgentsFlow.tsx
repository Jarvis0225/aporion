"use client";

import { motion } from "framer-motion";
import { Mic, Eye, Fingerprint, Zap, Speaker, MessageSquare, Cpu } from "lucide-react";

// InputCard: 强制最大宽度 max-w-[300px]，内容靠右对齐
const InputCard = ({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) => (
  <div className="w-full max-w-[300px] flex items-center justify-end gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-[#00F0FF]/50 transition-colors group">
    <div className="text-right">
      <div className="text-white font-medium text-sm">{label}</div>
      <div className="text-zinc-500 text-xs">{sub}</div>
    </div>
    <div className="p-3 rounded-lg bg-black/50 text-[#00F0FF] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
      <Icon size={20} />
    </div>
  </div>
);

// OutputCard: 强制最大宽度 max-w-[300px]，内容靠左对齐
const OutputCard = ({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) => (
  <div className="w-full max-w-[300px] flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-[#FFB347]/50 transition-colors group text-left">
    <div className="p-3 rounded-lg bg-black/50 text-[#FFB347] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,179,71,0.2)]">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-white font-medium text-sm">{label}</div>
      <div className="text-zinc-500 text-xs">{sub}</div>
    </div>
  </div>
);

export default function AgentsFlow() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Background Glow - More Subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#00F0FF]/5 to-[#FFB347]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-12 z-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center" style={{ marginBottom: '120px' }}>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ marginBottom: '40px' }}>
            AGENTSFLOW
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
            The Neural Architecture bridging biological intent and digital response.
          </p>
        </div>

        {/* 3-Column Architecture Grid - Spacing Fixed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-32 items-center justify-items-center">
          
          {/* Left Column: Perception Cortex (Align Right to Center) */}
          <div className="flex flex-col gap-6 items-center lg:items-end">
            <div className="text-xs font-mono text-[#00F0FF] mb-2 tracking-[0.2em] uppercase">Sensory Inputs</div>
            <InputCard icon={Mic} label="Auditory Cortex" sub="360° Spatial Awareness & VAD" />
            <InputCard icon={Eye} label="Visual Empathy" sub="Micro-expression & Gesture Decoding" />
            <InputCard icon={Fingerprint} label="Tactile Nerves" sub="Pressure, Warmth & Touch Flow" />
          </div>

          {/* Center Column: AGENTSFLOW KERNEL (Absolute Center) */}
          <div className="relative flex justify-center items-center py-16 lg:py-0">
             {/* Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
               <div className="w-[320px] h-[320px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
               <div className="absolute w-[400px] h-[400px] border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            </div>

            {/* The Chip Box */}
            <div className="w-56 h-56 rounded-3xl bg-[#0A0A0A] border border-white/10 shadow-[0_0_80px_rgba(159,133,255,0.15)] flex flex-col items-center justify-center relative z-20">
               <Cpu size={56} className="text-white mb-4" strokeWidth={1} />
               <div className="text-center">
                 <span className="block text-white font-bold tracking-widest text-lg mb-1">AGENTSFLOW</span>
                 <span className="block text-zinc-600 text-[10px] tracking-[0.3em]">KERNEL</span>
               </div>
               
               {/* Horizontal Connection Lines (Desktop Only) */}
               <div className="absolute -left-20 top-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent to-[#00F0FF]/50 hidden lg:block" />
               <div className="absolute -right-20 top-1/2 w-20 h-[1px] bg-gradient-to-l from-transparent to-[#FFB347]/50 hidden lg:block" />
            </div>
          </div>

          {/* Right Column: Expression Engine (Align Left to Center) */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <div className="text-xs font-mono text-[#FFB347] mb-2 tracking-[0.2em] uppercase">Adaptive Response</div>
            <OutputCard icon={Speaker} label="Sonic Resonance" sub="Hyper-realistic Neural Voice" />
            <OutputCard icon={Zap} label="Kinetic Soul" sub="Bio-mimetic Servo Choreography" />
            <OutputCard icon={MessageSquare} label="Cognitive Core" sub="Long-term Memory & Personality" />
          </div>

        </div>
      </div>
    </section>
  );
}
