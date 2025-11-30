"use client";

import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import GradientText from "./GradientText";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[35vh] flex items-center justify-center bg-black border-t border-white/10 py-20">
      <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-12 z-10">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-32 items-start w-full">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start text-left">
            <GradientText
              colors={["#9F85FF", "#CF7AC9", "#FF6B8B", "#CF7AC9", "#9F85FF"]}
              animationSpeed={3}
              showBorder={false}
              className=""
            >
              <span className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-widest">
                APORION
              </span>
            </GradientText>
            <p className="text-zinc-500 mt-6 text-sm leading-relaxed max-w-md">
              Building the future of embodied intelligence. Giving AI a body to interact with the world.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><a href="#agentsflow" className="text-zinc-500 hover:text-[#00F0FF] transition-colors text-sm">AGENTSFLOW</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#00F0FF] transition-colors text-sm">TATA AI</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#00F0FF] transition-colors text-sm">AICORUMI</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a href="#team" className="text-zinc-500 hover:text-[#00F0FF] transition-colors text-sm">Our Team</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-[#00F0FF] transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-[#00F0FF] transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-5">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Aporion Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}