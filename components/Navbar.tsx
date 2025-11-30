"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import GradientText from "./GradientText";
import BookingModal from "./BookingModal";
import GlareHover from "./GlareHover";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <div className="fixed left-0 right-0 z-50 flex justify-between items-center" style={{ top: '48px' }}>
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 flex justify-between items-center">
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

          {/* Book a Meeting Button - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlareHover
              width="auto"
              height="auto"
              background="rgba(0, 0, 0, 0.4)"
              borderRadius="9999px"
              borderColor="rgba(255, 255, 255, 0.2)"
              glareColor="#00F0FF"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              onClick={() => setIsBookingOpen(true)}
              style={{ padding: '0.5rem 1.5rem', backdropFilter: 'blur(8px)' }}
            >
              <span className="text-sm font-medium text-white tracking-wider">
                Book a Meeting
              </span>
            </GlareHover>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
