'use client';

import { motion } from 'framer-motion';
import { User, FolderOpen, FileText, Mail, Home, Briefcase } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onTabClick: (section: string) => void;
  isAnimating: boolean;
}

const Navigation = ({ activeSection, onTabClick, isAnimating }: NavigationProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-400/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-2 py-2">
        <div className="flex justify-center items-center space-x-1 md:space-x-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabClick(tab.id)}
                disabled={isAnimating}
                className={`
                  relative flex items-center space-x-1 px-2 md:px-4 py-1.5 md:py-2 
                  rounded-lg border transition-all duration-300 font-mono text-xs
                  ${isActive 
                    ? 'bg-blue-400/20 border-blue-400 text-blue-400 shadow-lg shadow-blue-400/20' 
                    : 'border-slate-600 text-slate-400 hover:border-blue-400/50 hover:text-blue-300'
                  }
                  ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                `}
                whileHover={!isAnimating ? { 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                } : {}}
                whileTap={!isAnimating ? { scale: 0.95 } : {}}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline text-xs">{tab.label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 border border-blue-400 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Loading animation when transitioning */}
                {isAnimating && isActive && (
                  <motion.div
                    className="absolute inset-0 bg-blue-400/10 rounded-lg"
                    animate={{ 
                      background: [
                        'rgba(59, 130, 246, 0.1)', 
                        'rgba(59, 130, 246, 0.3)', 
                        'rgba(59, 130, 246, 0.1)'
                      ]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
      
      {/* Matrix-style underline effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </motion.nav>
  );
};

export default Navigation;