'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - (isPointer ? 20 : 12),
      y: mousePosition.y - (isPointer ? 20 : 12),
      scale: isPointer ? 1.5 : 1,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate="default"
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {/* Arrow cursor */}
        <div className="relative w-6 h-6 rotate-45">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-sm opacity-50 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-sm" />
          <div className="absolute inset-0 border border-white/20 rounded-sm" />
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor; 