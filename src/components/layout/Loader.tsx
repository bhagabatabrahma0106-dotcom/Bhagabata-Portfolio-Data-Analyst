import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress bar from 0 to 100% in ~2s
    if (progressRef.current) {
      progressRef.current.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(() => {
        if (progressRef.current) progressRef.current.style.width = '100%';
      }, 50);
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      {/* Profile Photo with Spinning Neon Ring */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer Glow Halo */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-secondary to-pink-500 blur-xl opacity-60 animate-pulse" />

        {/* Spinning gradient border ring */}
        <motion.div
          className="absolute -inset-1 rounded-full p-[3px] bg-gradient-to-r from-primary via-secondary to-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Profile Image */}
        <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-dark shadow-2xl bg-card">
          <img
            src="/profile.png"
            alt="Bhagabata Brahma"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="font-heading text-xl font-bold text-white/90 tracking-[0.3em] mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        BHAGABATA BRAHMA
      </motion.h1>

      <motion.p
        className="text-sm text-primary/70 tracking-widest mb-10 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Data Analyst · Data Governance Specialist
      </motion.p>

      {/* Progress bar track */}
      <motion.div
        className="w-64 h-1 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div
          ref={progressRef}
          className="loader-progress-bar h-full rounded-full"
          style={{ width: '0%' }}
        />
      </motion.div>

      <motion.p
        className="mt-4 text-xs text-white/30 font-mono tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  );
}
