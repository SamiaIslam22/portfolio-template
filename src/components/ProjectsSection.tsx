'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsSectionProps {
  isAnimating: boolean;
}

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  period: string;
  github?: string;
  demo?: string;
  highlights: string[];
}

const ProjectsSection = ({ isAnimating }: ProjectsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // Project data with updated demo link for project 1
  const projects: Project[] = [
    {
      id: 1,
      title: "UCSB RAG Chatbot System",
      shortDesc: "End-to-end RAG pipeline with web scraping, vector embeddings, and semantic search",
      fullDesc: "Engineered end-to-end RAG pipeline with web scraping, vector embeddings, and semantic search to transform 750+ docs into deployed full-stack application with optimized database integration.",
      tech: ["Python", "Streamlit", "OpenAI", "Vector Search", "PostgreSQL"],
      period: "June 2025 - Aug 2025",
      github: "https://github.com/SamiaIslam22/ucsb_rag_chatbot",
      demo: "https://ucsbragchatbot.up.railway.app/",
      highlights: [
        "Processed 750+ documents with vector embeddings",
        "Implemented semantic search with PostgreSQL",
        "Built full-stack web application with Streamlit",
        "Deployed production-ready RAG system"
      ]
    },
    {
      id: 2,
      title: "Coffee Simulator",
      shortDesc: "Freshman CLI project transformed into full-stack web game with real-time features",
      fullDesc: "Transformed freshman CLI project into full-stack web game with real-time inventory management, customer interaction, and WebSocket communication for 2k+ combinational gameplay.",
      tech: ["Python", "Flask", "JavaScript", "WebSocket", "HTML5"],
      period: "July 2025 - Aug 2025",
      github: "https://github.com/SamiaIslam22/Coffee-Simulator",
      demo: "https://coffee-simulator.up.railway.app/",
      highlights: [
        "Real-time inventory management system",
        "2k+ possible game combinations",
        "WebSocket-based multiplayer features",
        "Interactive customer simulation"
      ]
    },
    {
      id: 3,
      title: "YAIN - AI Music Recommendation",
      shortDesc: "Full-stack AI-powered music recommendation with Spotify, YouTube, and Gemini integration",
      fullDesc: "Developed and deployed a full-stack AI-powered music recommendation web application integrating Spotify Web API, YouTube Data API, and Google Gemini AI with mood detection across emotional states, implementing memory management and real-time chat interface.",
      tech: ["Python", "Flask", "Spotify API", "YouTube API", "Gemini AI"],
      period: "June 2025 - July 2025",
      github: "https://github.com/SamiaIslam22/YAIN",
      demo: "https://yain.onrender.com/",
      highlights: [
        "Multi-API integration (Spotify + YouTube + Gemini)",
        "Real-time mood detection and analysis",
        "Memory management for user preferences",
        "Interactive chat-based interface"
      ]
    },
    {
      id: 4,
      title: "RoboSoccer Webots Game",
      shortDesc: "AI-based multi-robot soccer simulation with fault injection testing",
      fullDesc: "Developed AI-based multi-robot soccer simulation featuring robots with threaded vision and team communication, with fault injections to test robustness under failure conditions.",
      tech: ["C++", "Webots", "Computer Vision", "Multi-threading"],
      period: "Aug 2024 - May 2025",
      github: "https://github.com/SamiaIslam22/RoboSoccer",
      highlights: [
        "Multi-robot coordination and communication",
        "Threaded computer vision systems",
        "Fault injection testing framework",
        "Robustness analysis under failure conditions"
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000); // 6 seconds per slide
    
    return () => clearInterval(interval);
  }, [autoSlide, projects.length]);

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoSlide(false); // Stop auto-slide when user interacts
    setTimeout(() => setAutoSlide(true), 8000); // Resume after 8 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 8000);
  };

  const currentProject = projects[currentIndex];

  return (
    <motion.section
      className="min-h-screen pt-20 pb-4 px-4 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="font-mono text-sm md:text-base font-bold text-blue-400 mb-1">
            <span className="text-sky-400">function</span>{' '}
            <span className="text-cyan-400">showProjects</span>
            <span className="text-white">() {'{'}</span>
          </h2>
          <p className="font-mono text-gray-400 text-sm">
            <span className="text-indigo-400">return</span>{' '}
            <span className="text-cyan-300">projects[{currentIndex}]</span>
            <span className="text-gray-400">;</span>
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-lg p-1 border border-blue-400/30">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`px-3 py-1 rounded-lg font-mono text-xs transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-400/20 text-blue-400 border border-blue-400/50'
                    : 'text-gray-400 hover:text-blue-300 hover:bg-blue-400/10'
                }`}
              >
                Project {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-gray-900/80 border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            title="Previous project"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-gray-900/80 border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            title="Next project"
          >
            <ChevronRight size={16} />
          </button>

          {/* Project Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gray-900/90 backdrop-blur-sm border border-blue-400/50 rounded-xl p-4 min-h-64"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row gap-4 mb-2">
                {/* Left side - Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <h3 className="text-base font-mono font-bold text-blue-400">
                      {currentProject.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 font-mono text-xs mb-2">
                    {currentProject.period}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-2 text-xs">
                    {currentProject.shortDesc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-2">
                    <h4 className="text-blue-400 font-mono font-semibold mb-1 text-xs uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {currentProject.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded text-xs font-mono"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div className="mb-2">
                    <h4 className="text-blue-400 font-mono font-semibold mb-1 text-xs uppercase tracking-wide">
                      Project Brief
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {currentProject.id === 1 && "Production-ready RAG system processing 750+ UCSB nanofab documents with advanced document chunking, vector embeddings, and semantic search. Features modular architecture with async web scraping, multi-content processing (text/tables/images), and cloud database integration using Neon PostgreSQL."}
                      
                      {currentProject.id === 2 && "Full-stack transformation of CLI project into interactive web game with real-time inventory management, WebSocket communication, and AI customer simulation. Features HTML5 Canvas pixel art, 2k+ game combinations, progressive difficulty system, and comprehensive business logic with payment processing."}
                      
                      {currentProject.id === 3 && "AI-powered music recommendation engine integrating Spotify, YouTube, and Gemini AI with advanced mood detection across 50+ emotional states. Features intelligent memory system, multi-language support, personalized recommendations, and real-time chat interface with witty AI personality."}
                      
                      {currentProject.id === 4 && "Sophisticated multi-threaded humanoid robot soccer simulation with autonomous AI players, team coordination strategies, and comprehensive fault tolerance system. Features role-based behaviors, advanced computer vision, realistic physics simulation, and performance analytics for RoboCup-style competitions."}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-3">
                    <h4 className="text-blue-400 font-mono font-semibold mb-1 text-xs uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <div className="space-y-1">
                      {currentProject.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.4 }}
                        >
                          <span className="text-green-400 mt-0.5 flex-shrink-0 text-xs">&#9658;</span>
                          <span className="text-gray-300 text-xs">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right side - Project Image/Screenshot */}
                <div className="flex-shrink-0 w-full lg:w-80 flex items-center justify-center">
                  <div className="bg-gray-800/50 border border-blue-400/30 rounded-lg p-3 w-full flex items-center justify-center">
                    {currentProject.id === 1 && (
                      <img 
                        src="/project1.png" 
                        alt="UCSB RAG Chatbot System Screenshot"
                        className="w-full h-auto object-contain rounded-lg max-h-48"
                      />
                    )}
                    {currentProject.id === 2 && (
                      <img 
                        src="/project2.png" 
                        alt="Coffee Simulator Game Screenshot"
                        className="w-full h-auto object-contain rounded-lg max-h-48"
                      />
                    )}
                    {currentProject.id === 3 && (
                      <img 
                        src="/project3.png" 
                        alt="YAIN Music Recommendation Screenshot"
                        className="w-full h-auto object-contain rounded-lg max-h-48"
                      />
                    )}
                    {currentProject.id === 4 && (
                      <img 
                        src="/project4.png" 
                        alt="RoboSoccer Webots Game Screenshot"
                        className="w-full h-auto object-contain rounded-lg max-h-48"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {currentProject.github && (
                  <motion.a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} />
                    <span className="font-mono text-xs">View Code</span>
                  </motion.a>
                )}
                {currentProject.demo && (
                  <motion.a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-400/20 hover:bg-blue-400/30 px-4 py-2 rounded-lg text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    <span className="font-mono text-xs">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                title={`Go to project ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-400 w-6'
                    : 'bg-gray-600 hover:bg-blue-400/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-slide indicator */}
          <motion.div
            className="mt-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center justify-center gap-2">
              <div className={`w-2 h-2 rounded-full ${autoSlide ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
              <span className="font-mono text-xs text-gray-400">
                {autoSlide ? 'Auto-sliding' : 'Manual mode'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;