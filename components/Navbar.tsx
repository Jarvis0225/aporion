"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import GradientText from "./GradientText";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className="fixed left-0 right-0 z-50 flex justify-start" style={{ top: '48px' }}>
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
        {/* Logo - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a href="/" className="block">
            <GradientText
              colors={["#9F85FF", "#CF7AC9", "#FF6B8B", "#CF7AC9", "#9F85FF"]}
              animationSpeed={3}
              showBorder={false}
              className=""
            >
              <span className="font-[family-name:var(--font-syne)] text-2xl font-bold tracking-widest">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;APORION
              </span>
            </GradientText>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
