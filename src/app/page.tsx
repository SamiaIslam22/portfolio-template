'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import WordPile from '@/components/WordPile';
import GridOverlay from '@/components/GridOverlay';
import EnhancedTerminal from '@/components/EnhancedTerminal';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showHomePage, setShowHomePage] = useState<boolean>(true);

  // Disable scrolling always - we control all navigation
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleTabClick = (section: string) => {
    if (section === activeSection || isAnimating) return;
    
    if (section === 'home') {
      // Going back to home
      setIsAnimating(true);
      setActiveSection('home');
      
      setTimeout(() => {
        setShowHomePage(true);
        setIsAnimating(false);
      }, 1000);
    } else {
      // Going to a content section
      setIsAnimating(true);
      setShowHomePage(false);
      
      // Start page scroll down animation
      setTimeout(() => {
        setActiveSection(section);
      }, 500);
      
      // Complete transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 2500);
    }
  };

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Simplified Grid Background - Always visible */}
      <GridOverlay />
      
      {/* Fixed Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onTabClick={handleTabClick}
        isAnimating={isAnimating}
      />

      {/* Homepage Section */}
      <AnimatePresence>
        {showHomePage && (
          <motion.div 
            className="h-screen flex flex-col justify-center items-center relative z-10"
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              y: typeof window !== 'undefined' ? -window.innerHeight : -1000,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            {/* Floating Code Snippets - Random positions and more words */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => {
                // Generate random positions each time - avoiding center area
                const centerX = 50; // Center percentage
                const centerY = 50; // Center percentage
                const avoidRadius = 25; // Percentage radius to avoid center
                
                let x, y;
                do {
                  x = Math.random() * 80 + 10; // 10% to 90%
                  y = Math.random() * 80 + 10; // 10% to 90%
                } while (
                  Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) < avoidRadius
                );
                
                // Array of more code snippets
                const codeSnippets = [
                  'stack_overflow', 'console.log("✨")', 'const magic = () => {...}', 
                  'while(coding) learn++;', '// This works!', 'git commit -m "✨"',
                  'npm install', 'async/await', 'try { } catch()', 'function debug()',
                  'return true;', 'import React', 'export default', 'useState()',
                  'useEffect()', '=> arrow func', 'null_pointer', 'undefined'
                ];
                
                return (
                  <motion.div
                    key={`float-${i}`}
                    className="absolute text-sm font-mono text-blue-400/60 bg-black/50 px-3 py-2 rounded-lg border border-blue-400/20"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'rotate(0deg)' // Keep straight
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0.8
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 12
                    }}
                  >
                    {codeSnippets[i % codeSnippets.length]}
                  </motion.div>
                );
              })}
            </div>

            {/* Main Content - Side by side layout */}
            <div className="flex items-center justify-center gap-16 mb-8 z-20 max-w-7xl mx-auto">
              {/* Enhanced Terminal Window */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              >
                <EnhancedTerminal />
              </motion.div>

              {/* Title Section */}
              <motion.div
                className="text-center flex-shrink-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1, 
                  duration: 0.8,
                  type: "spring", 
                  stiffness: 100
                }}
              >
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                  <motion.span 
                    className="text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    console
                  </motion.span>
                  <motion.span 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    .
                  </motion.span>
                  <motion.span 
                    className="text-cyan-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                  >
                    log
                  </motion.span>
                  <motion.span 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    (
                  </motion.span>
                  <motion.span 
                    className="text-sky-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                  >
                    "Samia's Portfolio"
                  </motion.span>
                  <motion.span 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    )
                  </motion.span>
                  <motion.span 
                    className="text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 }}
                  >
                    ;
                  </motion.span>
                  {/* Blinking Cursor */}
                  <motion.span 
                    className="text-blue-400 ml-0.5 text-4xl md:text-5xl lg:text-7xl"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      delay: 2.2,
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  >
                    |
                  </motion.span>
                </h1>
                <motion.div
                  className="text-blue-400 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  <span className="text-slate-400">// Building the future, one commit at a time</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Panel - Simplified */}
            <motion.div
              className="absolute top-20 right-10 text-xs font-mono text-slate-400 bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-slate-600/30"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Lines coded:</span>
                  <span className="text-blue-400 font-bold ml-2">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Coffee cups:</span>
                  <span className="text-cyan-400 font-bold ml-2">∞</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Problems solved:</span>
                  <span className="text-sky-400 font-bold ml-2">404</span>
                </div>
              </div>
            </motion.div>

            {/* Status Indicator */}
            <motion.div
              className="absolute top-10 left-10 flex items-center gap-2 text-xs text-slate-400 bg-gray-900/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-600/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, type: "spring" }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono">ONLINE</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Sections with Scroll Animation */}
      <AnimatePresence>
        {!showHomePage && (
          <motion.div
            className="min-h-screen"
            initial={{ y: typeof window !== 'undefined' ? window.innerHeight : 1000 }}
            animate={{ y: 0 }}
            exit={{ y: typeof window !== 'undefined' ? window.innerHeight : 1000 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              delay: isAnimating ? 0.5 : 0
            }}
          >
            {activeSection === 'about' && <AboutSection isAnimating={isAnimating} />}
            {activeSection === 'projects' && <ProjectsSection isAnimating={isAnimating} />}
            {activeSection === 'experience' && <ExperienceSection isAnimating={isAnimating} />}
            {activeSection === 'contact' && <ContactSection isAnimating={isAnimating} />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Word Pile - Enhanced with fall and formation animations */}
      <WordPile 
        isAnimating={isAnimating}
        targetSection={activeSection}
      />
    </main>
  );
}