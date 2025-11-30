"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number; // milliseconds between iterations
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function DecryptedText({ 
  text, 
  className = "",
  delay = 0,
  speed = 50 
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    // Start decryption after delay
    const startTimeout = setTimeout(() => {
      setIsDecrypting(true);
      
      let iteration = 0;
      const maxIterations = text.length;
      
      const interval = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              // If character is a space, keep it
              if (char === " ") return " ";
              
              // If we've revealed this character, keep it
              if (index < iteration) {
                return text[index];
              }
              
              // Otherwise show random character
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("");
        });

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsDecrypting(false);
        }

        iteration += 1 / 3; // Slower reveal
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={`${className}`}
      style={{ textAlign: 'center', width: '100%' }}
    >
      {displayText}
    </motion.h1>
  );
}
