'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useMemo, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Particle = ({ x, y: initialY, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const yRange = [0, -40, 0];
  const opacityRange = [0.8, 1, 0.8];
  
  const yMotion = useMotionValue(0);
  const opacity = useTransform(yMotion, yRange, opacityRange);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
        opacity,
      }}
      animate={{ 
        y: yRange,
        rotate: [0, 180] 
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        repeatType: 'loop',
        delay,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 20 20" className="w-full h-full">
        <path
          d="M10 0L13 6H20L14 10L16 16L10 12L4 16L6 10L0 6H7L10 0"
          fill={theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}
          stroke={theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'}
          strokeWidth="0.5"
        />
      </svg>
    </motion.div>
  );
};

export const Particles = () => {
  const [mounted, setMounted] = useState(false);

  const particles = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 2,
    }))
  , []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((props, i) => (
        <Particle key={i} {...props} />
      ))}
    </div>
  );
}; 