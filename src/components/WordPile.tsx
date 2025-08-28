'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techWords, getWordsForSection } from '@/utils/techWords';

interface WordPileProps {
  isAnimating: boolean;
  targetSection: string;
}

interface WordItem {
  id: string;
  text: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  fontSize: string;
  delay: number;
}

interface FormationWord {
  text: string;
  x: number;
  y: number;
  color: string;
  size: string;
}

const WordPile = ({ isAnimating, targetSection }: WordPileProps) => {
  const [homeWords, setHomeWords] = useState<WordItem[]>([]);
  const [formationWords, setFormationWords] = useState<FormationWord[]>([]);
  const [showFormation, setShowFormation] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Derive showOnHome from the targetSection and isAnimating state
  const showOnHome = targetSection === 'home' && !isAnimating && isClient;

  // Color scheme
  const colors = [
    'text-blue-300', 'text-blue-400', 'text-blue-500',
    'text-sky-300', 'text-sky-400', 'text-sky-500',
    'text-cyan-300', 'text-cyan-400', 'text-cyan-500',
    'text-indigo-300', 'text-indigo-400', 'text-indigo-500',
    'text-slate-300', 'text-slate-400'
  ];

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate words for homepage pile - only on client
  const generateHomePile = () => {
    if (typeof window === 'undefined' || !isClient) return;
    
    const wordCount = window.innerWidth < 768 ? 80 : 120;
    
    // Use seeded random for consistent results
    const seededRandom = (seed: number) => {
      let x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    const shuffledWords = [...techWords].sort((a, b) => seededRandom(a.length) - seededRandom(b.length));
    const selectedWords = shuffledWords.slice(0, wordCount);
    
    const bottomStart = window.innerHeight * 0.75;
    const pileHeight = window.innerHeight * 0.23;
    const screenWidth = window.innerWidth;
    const margin = 50;
    const availableWidth = screenWidth - (margin * 2);
    
    const cellWidth = 100;
    const cellHeight = 40;
    const cols = Math.floor(availableWidth / cellWidth);
    
    const newWords: WordItem[] = [];
    
    for (let i = 0; i < selectedWords.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      const baseX = margin + col * cellWidth;
      const baseY = bottomStart + row * cellHeight;
      
      // Use seeded random for consistent positioning
      const randomX = seededRandom(i * 7);
      const randomY = seededRandom(i * 11);
      const randomSize = seededRandom(i * 13);
      const randomRotation = seededRandom(i * 17);
      
      const x = Math.max(margin, Math.min(screenWidth - margin - 80, 
        baseX + (randomX - 0.5) * 40));
      const y = Math.max(bottomStart, Math.min(bottomStart + pileHeight - 30, 
        baseY + (randomY - 0.5) * 20));
      
      let scale: number, fontSize: string;
      
      if (randomSize < 0.3) {
        scale = 0.8;
        fontSize = 'text-xs';
      } else if (randomSize < 0.7) {
        scale = 1.0;
        fontSize = 'text-sm';
      } else {
        scale = 1.1;
        fontSize = 'text-base';
      }
      
      newWords.push({
        id: `home-word-${i}`,
        text: selectedWords[i],
        x,
        y,
        rotation: randomRotation * 20 - 10,
        scale,
        color: colors[i % colors.length], // Use index instead of random
        fontSize,
        delay: i * 0.02
      });
    }
    
    setHomeWords(newWords);
  };

  // Generate formation text
  const generateFormation = () => {
    if (typeof window === 'undefined' || !isClient) return;
    
    const sectionWords = getWordsForSection(targetSection);
    if (!sectionWords.length) return;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const lineHeight = 60;
    const startY = centerY - (sectionWords.length * lineHeight) / 2;
    
    const newFormation: FormationWord[] = sectionWords.map((word, index) => ({
      text: word,
      x: centerX,
      y: startY + index * lineHeight,
      color: index % 2 === 0 ? 'text-cyan-400' : 'text-blue-400',
      size: index === 0 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
    }));
    
    setFormationWords(newFormation);
  };

  // Initialize home pile
  useEffect(() => {
    if (showOnHome && !isAnimating && isClient) {
      generateHomePile();
    }
  }, [showOnHome, isAnimating, isClient]);

  // Handle transition animation - REMOVED ALL TEXT ANIMATIONS
  useEffect(() => {
    // No formation text or any other animations during transitions
    if (!isAnimating) {
      setFormationWords([]);
      setShowFormation(false);
    }
  }, [isAnimating, targetSection]);

  // Resize handler
  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      if (showOnHome && !isAnimating) {
        generateHomePile();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showOnHome, isAnimating, isClient]);

  const wordStyle = (wordItem: WordItem) => ({
    background: `linear-gradient(145deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)`,
    border: `1px solid rgba(${
      wordItem.color.includes('cyan') ? '6,182,212' : 
      wordItem.color.includes('sky') ? '14,165,233' : 
      wordItem.color.includes('blue') ? '59,130,246' :
      wordItem.color.includes('indigo') ? '99,102,241' :
      '148,163,184'
    }, 0.6)`,
    borderRadius: '8px',
    padding: '2px 6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
  });

  // Don't render anything on server or before client-side hydration
  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      {/* Homepage word pile */}
      <AnimatePresence>
        {showOnHome && !isAnimating && homeWords.map((word) => (
          <motion.div
            key={word.id}
            className={`absolute font-mono ${word.fontSize} font-semibold ${word.color} 
                       select-none whitespace-nowrap cursor-grab`}
            style={{
              left: word.x,
              top: word.y,
              pointerEvents: 'auto',
              ...wordStyle(word)
            }}
            initial={{ 
              y: word.y + 100,
              scale: 0,
              opacity: 0,
              rotate: word.rotation
            }}
            animate={{
              y: word.y,
              scale: word.scale,
              opacity: 0.9,
              rotate: word.rotation
            }}
            exit={{
              y: word.y + (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
              rotate: word.rotation + (word.delay * 90 - 45), // Use delay instead of random
              transition: { duration: 1, delay: word.delay }
            }}
            transition={{
              duration: 0.8,
              delay: word.delay,
              type: "spring",
              stiffness: 100
            }}
            drag
            dragMomentum={false}
            whileDrag={{ 
              scale: word.scale * 1.3,
              zIndex: 999,
              rotate: 0,
              opacity: 1
            }}
          >
            {word.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Formation text only - no falling words */}
      <AnimatePresence>
        {showFormation && formationWords.map((word, index) => (
          <motion.div
            key={`formation-${index}`}
            className={`absolute font-mono ${word.size} font-bold ${word.color} 
                       select-none text-center pointer-events-none`}
            style={{
              left: '50%',
              top: word.y,
              transform: 'translateX(-50%)',
              textShadow: '0 0 10px currentColor'
            }}
            initial={{ 
              scale: 0.5,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.5 }
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 120
            }}
          >
            {word.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WordPile;