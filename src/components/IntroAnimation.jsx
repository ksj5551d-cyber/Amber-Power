import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Night time (0s)
    // Stage 1: Dawn / Sun rises (1s)
    const t1 = setTimeout(() => setStage(1), 500);
    // Stage 2: Day light hits panels / Rays appear (3s)
    const t2 = setTimeout(() => setStage(2), 2500);
    // Stage 3: Energy flows to logo (4.5s)
    const t3 = setTimeout(() => setStage(3), 4000);
    // Stage 4: Logo glows (5.5s)
    const t4 = setTimeout(() => setStage(4), 5000);
    // Stage 5: Zoom out (6.5s)
    const t5 = setTimeout(() => setStage(5), 6500);
    // Unmount (7.5s)
    const t6 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 7500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); 
      clearTimeout(t4); clearTimeout(t5); clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 6 && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: stage === 5 ? 0 : 1, 
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          
          {/* Realistic AI Generated Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/intro-bg.png')" }}
            initial={{ filter: "brightness(0.05) contrast(1.2)", scale: 1.1 }}
            animate={{ 
              filter: stage >= 1 ? "brightness(1.1) contrast(1.1) saturate(1.2)" : "brightness(0.05) contrast(1.2)",
              scale: stage === 5 ? 3 : (stage >= 1 ? 1 : 1.1)
            }}
            transition={{ 
              filter: { duration: 4, ease: "easeOut" },
              scale: { duration: stage === 5 ? 1.5 : 5, ease: "easeOut" }
            }}
          />

          {/* Artificial Sun Flare/Rays enhancing the image */}
          <motion.div 
            className="absolute top-1/4 left-1/2 md:left-1/3 w-[150vw] h-[150vh] origin-center pointer-events-none mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: stage >= 2 ? 0.8 : 0,
              scale: stage >= 2 ? 1 : 0.5,
              rotate: stage >= 2 ? 10 : 0
            }}
            transition={{ duration: 3, ease: "easeOut" }}
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(250,204,21,0.4) 10%, transparent 60%)"
            }}
          />

          {/* Energy Path (Field to Logo) */}
          <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 10 }}>
            <motion.path
              d="M 20 80 Q 30 50 50 50"
              fill="transparent"
              stroke="#4ade80"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000, opacity: 0 }}
              animate={{ 
                strokeDashoffset: stage >= 3 ? 0 : 1000,
                opacity: stage >= 3 && stage < 5 ? 1 : 0
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="drop-shadow-[0_0_15px_#4ade80]"
            />
            <motion.path
              d="M 80 80 Q 70 50 50 50"
              fill="transparent"
              stroke="#4ade80" 
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000, opacity: 0 }}
              animate={{ 
                strokeDashoffset: stage >= 3 ? 0 : 1000,
                opacity: stage >= 3 && stage < 5 ? 0.7 : 0
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="drop-shadow-[0_0_10px_#4ade80]"
            />
          </svg>

          {/* Logo Overlay */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: stage === 5 ? 0 : (stage >= 3 ? 1 : 0), 
              scale: stage === 5 ? 0.5 : (stage >= 3 ? 1 : 0.8)
            }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://lavender-cod-858351.hostingersite.com/assets/images/APS-opt.jpg?v=1776868841" 
              alt="APS Logo" 
              className="h-24 md:h-32 w-auto object-contain"
            />
            <div className="flex flex-col items-center mt-4">
              <span className="font-rajdhani text-3xl md:text-4xl font-bold text-[#1f2937] leading-tight">Amber Power Solutions</span>
              <span className="font-barlow text-lg text-gray-600">Power & Solar Services</span>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
