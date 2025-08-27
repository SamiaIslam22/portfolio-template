'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Calendar, ExternalLink, Award } from 'lucide-react';

interface ExperienceSectionProps {
  isAnimating: boolean;
}

const ExperienceSection = ({ isAnimating }: ExperienceSectionProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Define all the code lines that will be typed
  const codeLines = [
    { text: 'const experience = {', color: 'text-blue-400', indent: 0 },
    { text: '', color: '', indent: 0 },
    { text: '  workHistory: [', color: 'text-sky-400', indent: 1 },
    { text: '    {', color: 'text-white', indent: 2 },
    { text: '      role: "AI Developer Intern",', color: 'text-gray-400', indent: 3 },
    { text: '      company: "ASRC Nanofabrication Facility, CUNY",', color: 'text-gray-400', indent: 3 },
    { text: '      period: "June 2025 - Aug. 2025",', color: 'text-gray-400', indent: 3 },
    { text: '      location: "New York, NY",', color: 'text-gray-400', indent: 3 },
    { text: '      achievements: [', color: 'text-blue-400', indent: 3 },
    { text: '        "Architected and deployed AI-powered RAG system with multimodal processing",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Processed 4000+ chunks improving knowledge retrieval efficiency by 40%",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Implemented web scraping, semantic search, and cloud database integration",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Enabled researchers to query 16+ nanofabrication equipment specifications"', color: 'text-cyan-300', indent: 4 },
    { text: '      ]', color: 'text-blue-400', indent: 3 },
    { text: '    },', color: 'text-white', indent: 2 },
    { text: '    {', color: 'text-white', indent: 2 },
    { text: '      role: "Cybersecurity Engineer Fellow",', color: 'text-gray-400', indent: 3 },
    { text: '      company: "CodePath",', color: 'text-gray-400', indent: 3 },
    { text: '      period: "Dec. 2023 - Aug. 2025",', color: 'text-gray-400', indent: 3 },
    { text: '      location: "San Francisco, CA",', color: 'text-gray-400', indent: 3 },
    { text: '      achievements: [', color: 'text-blue-400', indent: 3 },
    { text: '        "Guided students through weekly cybersecurity labs across 700+ colleges",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Addressed critical shortage of 1 million software engineers needed by 2030",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Achieved 8% higher Fortune 500 placement rates through technical mentorship"', color: 'text-cyan-300', indent: 4 },
    { text: '      ]', color: 'text-blue-400', indent: 3 },
    { text: '    },', color: 'text-white', indent: 2 },
    { text: '    {', color: 'text-white', indent: 2 },
    { text: '      role: "Software Engineering Intern",', color: 'text-gray-400', indent: 3 },
    { text: '      company: "Metropolitan Transit Authority",', color: 'text-gray-400', indent: 3 },
    { text: '      period: "Sep. 2024 - Jan. 2025",', color: 'text-gray-400', indent: 3 },
    { text: '      location: "Queens, NY",', color: 'text-gray-400', indent: 3 },
    { text: '      achievements: [', color: 'text-blue-400', indent: 3 },
    { text: '        "Participated in project planning initiatives and technical discussions",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Drove innovative solutions and optimized resource management",', color: 'text-cyan-300', indent: 4 },
    { text: '        "Engineered database improvements through query optimization and schema design"', color: 'text-cyan-300', indent: 4 },
    { text: '      ]', color: 'text-blue-400', indent: 3 },
    { text: '    }', color: 'text-white', indent: 2 },
    { text: '  ]', color: 'text-sky-400', indent: 1 },
    { text: '};', color: 'text-blue-400', indent: 0 },
    { text: '', color: '', indent: 0 },
    { text: '// 3 internships . 36,000+ students impacted . 40% efficiency improvement', color: 'text-gray-500', indent: 0 },
    { text: 'console.log("Ready to drive innovation in tech!");', color: 'text-sky-400', indent: 0 }
  ];

  // Typewriter effect
  useEffect(() => {
    if (isAnimating || currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex];
    const targetText = currentLine.text;
    
    if (currentText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, 5 + Math.random() * 5); // Fast typing speed
      
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next line after brief pause
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentText('');
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, isAnimating]);

  // Check if typing is complete
  useEffect(() => {
    if (currentLineIndex >= codeLines.length && !isComplete) {
      setIsComplete(true);
      setShowCursor(false);
    }
  }, [currentLineIndex, isComplete]);

  // Cursor blinking
  useEffect(() => {
    if (!showCursor) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, [showCursor]);

  // Reset when section becomes active
  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(0);
        setCurrentText('');
        setShowCursor(true);
        setIsComplete(false);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const getIndentSpaces = (indent: number) => {
    return '  '.repeat(indent);
  };

  return (
    <motion.section
      className="min-h-screen pt-24 pb-12 px-4 flex items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="max-w-5xl mx-auto px-2 transform -translate-x-80 md:-translate-x-96">
        {/* Code display */}
        <div className="font-mono text-sm md:text-base">
          {/* Completed lines */}
          {codeLines.slice(0, currentLineIndex).map((line, index) => (
            <div key={index} className="leading-relaxed">
              {line.text === '' ? (
                <div className="h-6"></div>
              ) : (
                <span className={line.color || 'text-white'}>
                  {getIndentSpaces(line.indent)}{line.text}
                </span>
              )}
            </div>
          ))}
          
          {/* Current typing line */}
          {currentLineIndex < codeLines.length && (
            <div className="leading-relaxed">
              <span className={codeLines[currentLineIndex].color || 'text-white'}>
                {getIndentSpaces(codeLines[currentLineIndex].indent)}{currentText}
                {showCursor && (
                  <span className="text-blue-400 animate-pulse">|</span>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Right side content - Internship Images and Summary */}
        {isComplete && (
          <div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-[660px] space-y-6 max-w-sm">
            {/* Internship Images with staggered animation */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* ASRC Image */}
              <motion.div
                className="bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <img 
                  src="/asrc.jpg" 
                  alt="ASRC Nanofabrication Facility"
                  className="w-full h-40 object-contain rounded-lg bg-white"
                />
                <p className="text-xs text-cyan-400 font-mono mt-2 text-center">
                  ASRC Nanofab Facility
                </p>
              </motion.div>

              {/* CodePath Image */}
              <motion.div
                className="bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <img 
                  src="/codepath.png" 
                  alt="CodePath Fellowship"
                  className="w-full h-40 object-contain rounded-lg bg-white"
                />
                <p className="text-xs text-green-400 font-mono mt-2 text-center">
                  CodePath Fellowship
                </p>
              </motion.div>

              {/* MTA Image */}
              <motion.div
                className="bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <img 
                  src="/mta.png" 
                  alt="Metropolitan Transit Authority"
                  className="w-full h-40 object-contain rounded-lg bg-white"
                />
                <p className="text-xs text-sky-400 font-mono mt-2 text-center">
                  MTA Internship
                </p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;