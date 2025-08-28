'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AboutSectionProps {
  isAnimating: boolean;
}

const AboutSection = ({ isAnimating }: AboutSectionProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Define all the code lines that will be typed
  const codeLines = [
    { text: 'class SamiaIslam {', color: 'text-blue-400', indent: 0 },
    { text: '', color: '', indent: 0 },
    { text: '  constructor() {', color: 'text-sky-400', indent: 1 },
    { text: '    this.name = "Samia Islam";', color: 'text-gray-400', indent: 2 },
    { text: '    this.major = "Computer Science";', color: 'text-gray-400', indent: 2 },
    { text: '    this.degree = "Bachelor of Science";', color: 'text-gray-400', indent: 2 },
    { text: '    this.graduation = "May 2026";', color: 'text-gray-400', indent: 2 },
    { text: '    this.university = "City College of New York - Grove School of Engineering";', color: 'text-gray-400', indent: 2 },
    { text: '    this.passion = ["AI", "Machine Learning", "Data Science", "Full-Stack Development"];', color: 'text-gray-400', indent: 2 },
    { text: '  }', color: 'text-white', indent: 1 },
    { text: '', color: '', indent: 0 },
    { text: '  getSkills() {', color: 'text-sky-400', indent: 1 },
    { text: '    return {', color: 'text-indigo-400', indent: 2 },
    { text: '      languages: ["Python", "C++", "JavaScript", "Java", "SQL"],', color: 'text-blue-400', indent: 3 },
    { text: '      frameworks: ["Flask", "React", "Streamlit", "WebSocket"],', color: 'text-blue-400', indent: 3 },
    { text: '      backend: ["Flask", "WebSockets", "PostgreSQL", "Docker"],', color: 'text-blue-400', indent: 3 },
    { text: '      frontend: ["HTML", "CSS", "JavaScript"],', color: 'text-blue-400', indent: 3 },
    { text: '      databases: ["SQL", "PostgreSQL", "Database Design"],', color: 'text-blue-400', indent: 3 },
    { text: '      ai_ml: ["OpenAI APIs", "Vector Embeddings", "RAG Systems", "Multimodal AI"]', color: 'text-blue-400', indent: 3 },
    { text: '    }', color: 'text-white', indent: 2 },
    { text: '  }', color: 'text-white', indent: 1 },
    { text: '', color: '', indent: 0 },
    { text: '  getCertificates() {', color: 'text-sky-400', indent: 1 },
    { text: '    return [', color: 'text-indigo-400', indent: 2 },
    { text: '      {', color: 'text-white', indent: 3 },
    { text: '        name: "CodePath Cybersecurity Certification",', color: 'text-blue-400', indent: 4 },
    { text: '        skills: ["Malware Detection", "Data Breach Analysis", "SSH Encryption", "Linux"]', color: 'text-blue-400', indent: 4 },
    { text: '      },', color: 'text-white', indent: 3 },
    { text: '      {', color: 'text-white', indent: 3 },
    { text: '        name: "CodePath Software Engineering",', color: 'text-blue-400', indent: 4 },
    { text: '        skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"]', color: 'text-blue-400', indent: 4 },
    { text: '      }', color: 'text-white', indent: 3 },
    { text: '    ];', color: 'text-white', indent: 2 },
    { text: '  }', color: 'text-white', indent: 1 },
    { text: '}', color: 'text-white', indent: 0 },
    { text: '', color: '', indent: 0 },
    { text: '// Want to see my work?', color: 'text-gray-500', indent: 0 },
    { text: 'console.log("Check out my projects and my experience above!");', color: 'text-sky-400', indent: 0 }
  ];

  // Typewriter effect
  useEffect(() => {
    if (isAnimating || currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex];
    const targetText = currentLine.text;
    
    if (currentText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, 5 + Math.random() * 5); // Much faster typing speed
      
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
      className="min-h-screen pt-12 pb-6 px-4 flex items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Left side - Code display */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="font-mono text-xs leading-tight">
            {/* Completed lines */}
            {codeLines.slice(0, currentLineIndex).map((line, index) => (
              <div key={index} className="leading-tight">
                {line.text === '' ? (
                  <div className="h-3"></div>
                ) : (
                  <span className={line.color || 'text-white'}>
                    {getIndentSpaces(line.indent)}{line.text}
                  </span>
                )}
              </div>
            ))}
            
            {/* Current typing line */}
            {currentLineIndex < codeLines.length && (
              <div className="leading-tight">
                <span className={codeLines[currentLineIndex].color || 'text-white'}>
                  {getIndentSpaces(codeLines[currentLineIndex].indent)}{currentText}
                  {showCursor && (
                    <span className="text-blue-400 animate-pulse">|</span>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Profile Picture */}
        {isComplete && (
          <motion.div
            className="flex-shrink-0 w-full lg:w-72 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.8, 
              duration: 1.2, 
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Profile Image Container */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/30 via-cyan-400/30 to-sky-400/30 blur-xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm border-2 border-blue-400/50 rounded-2xl p-3 shadow-2xl">
                <img 
                  src="/pfp.JPG" 
                  alt="Samia Islam - Computer Science Student"
                  className="w-full h-auto rounded-xl object-cover shadow-lg max-w-56"
                />
                
                {/* Status indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/50">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-green-400">Available</span>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <motion.div
              className="mt-3 bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-center">
                <h3 className="font-mono font-bold text-blue-400 mb-2">Samia Islam</h3>
                <p className="font-mono text-sm text-gray-300 mb-2">Computer Science</p>
                <p className="font-mono text-xs text-gray-400">City College of New York</p>
                <div className="mt-3 flex justify-center gap-2">
                  <span className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded text-xs font-mono">AI Enthusiast</span>
                  <span className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded text-xs font-mono">Full-Stack Dev</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default AboutSection;