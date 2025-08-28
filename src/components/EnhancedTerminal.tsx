'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'loading' | 'success' | 'error';
  text: string;
  delay: number;
  showCursor?: boolean;
}

const EnhancedTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isBooting, setIsBooting] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Boot sequence data - adjusted for mobile
  const bootSequence: TerminalLine[] = [
    { id: '1', type: 'command', text: '$ initializing portfolio...', delay: 0, showCursor: true },
    { id: '2', type: 'loading', text: '[████████░░] 80% Loading skills...', delay: 1000 },
    { id: '3', type: 'success', text: '✓ Python, JavaScript, C++ loaded', delay: 1500 },
    { id: '4', type: 'loading', text: '[██████████] 100% Compiling projects...', delay: 2000 },
    { id: '5', type: 'success', text: '✓ 12 projects compiled successfully', delay: 2500 },
    { id: '6', type: 'command', text: '$ whoami', delay: 3500, showCursor: true },
    { id: '7', type: 'output', text: 'samia-islam', delay: 4000 },
    { id: '8', type: 'command', text: '$ cat about.txt', delay: 4500, showCursor: true },
    { id: '9', type: 'output', text: 'Senior Computer Science Student @ CUNY', delay: 5000 },
    { id: '10', type: 'output', text: 'AI Developer | Full-Stack Engineer', delay: 5300 },
    { id: '11', type: 'command', text: '$ status --current', delay: 6000, showCursor: true },
    { id: '12', type: 'success', text: '✓ Ready to build amazing things!', delay: 6500 },
    { id: '13', type: 'command', text: '$ echo "Explore my portfolio above ↑"', delay: 7500, showCursor: true },
    { id: '14', type: 'output', text: 'Explore my portfolio above ↑', delay: 8000 },
    { id: '15', type: 'command', text: '$', delay: 9000, showCursor: true }
  ];

  // Typewriter effect for each line
  const [typewriterTexts, setTypewriterTexts] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentLineIndex < bootSequence.length) {
        const currentLine = bootSequence[currentLineIndex];
        setLines(prev => [...prev, currentLine]);
        
        // Start typewriter effect for this line
        if (currentLine.type === 'command' || currentLine.type === 'output') {
          typewriterEffect(currentLine.id, currentLine.text);
        } else {
          setTypewriterTexts(prev => ({ ...prev, [currentLine.id]: currentLine.text }));
        }
        
        setCurrentLineIndex(prev => prev + 1);
      } else if (isBooting) {
        setIsBooting(false);
      }
    }, currentLineIndex === 0 ? 1000 : bootSequence[currentLineIndex - 1]?.delay || 1000);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, isBooting]);

  const typewriterEffect = (lineId: string, fullText: string) => {
    let currentText = '';
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        currentText += fullText[charIndex];
        setTypewriterTexts(prev => ({ ...prev, [lineId]: currentText }));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50); // Typing speed
  };

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command': return 'text-blue-400';
      case 'output': return 'text-cyan-300';
      case 'loading': return 'text-yellow-400';
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-300';
    }
  };

  // Responsive dimensions
  const terminalStyle = {
    width: isMobile ? 'min(95vw, 400px)' : 'min(90vw, 600px)',
    height: isMobile ? 'min(60vh, 400px)' : 'min(70vh, 500px)',
    maxHeight: isMobile ? '400px' : '500px'
  };

  return (
    <motion.div
      className="relative mx-auto bg-gray-900/95 rounded-xl border border-slate-600/50 overflow-hidden backdrop-blur-sm terminal-content"
      style={terminalStyle}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 0.5, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-800/80 border-b border-slate-600/50">
        <div className="flex space-x-2">
          <motion.div 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="text-xs sm:text-sm text-slate-400 font-mono">
          samia@portfolio:~$
        </div>
        <div className="w-12 sm:w-16" /> {/* Spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-3 sm:p-4 h-full overflow-y-auto font-mono text-xs sm:text-sm">
        <motion.div className="space-y-1 sm:space-y-2">
          {lines.map((line, index) => (
            <motion.div
              key={line.id}
              className={`${getLineColor(line.type)} leading-relaxed typewriter-text`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {/* Loading bars animation */}
              {line.type === 'loading' && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {typewriterTexts[line.id] || line.text}
                </motion.span>
              )}
              
              {/* Success/Error messages with icons */}
              {(line.type === 'success' || line.type === 'error') && (
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {typewriterTexts[line.id] || line.text}
                </motion.span>
              )}
              
              {/* Regular text with typewriter effect */}
              {(line.type === 'command' || line.type === 'output') && (
                <span>
                  {typewriterTexts[line.id] || ''}
                  {/* Blinking cursor */}
                  {line.showCursor && (
                    <motion.span
                      className="text-green-400"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      ▋
                    </motion.span>
                  )}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* System stats sidebar - Only on desktop */}
        {!isMobile && (
          <motion.div
            className="absolute top-16 right-4 text-xs text-slate-400 space-y-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              CPU: 47%
            </motion.div>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              RAM: 62%
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              NET: ↑↓
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Terminal glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 rounded-xl ring-1 ring-blue-400/20 pointer-events-none" />
      
      {/* Scanning line effect - Only on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          initial={{ top: '10%' }}
          animate={{ top: '90%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 5
          }}
        />
      )}

      {/* Network activity indicator */}
      <motion.div
        className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default EnhancedTerminal;