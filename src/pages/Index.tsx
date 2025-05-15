
import React, { useState, useEffect } from 'react';
import ResumeBuilder from '@/components/ResumeBuilder';
import LinkedInOptimizer from '@/components/LinkedInOptimizer';
import Settings from '@/components/Settings';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');
  const isMobile = useIsMobile();

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  // Load other settings from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedLanguage = localStorage.getItem('language') || 'english';

    setFontSize(savedFontSize);
    setLanguage(savedLanguage);

    // Apply initial font size
    document.documentElement.style.fontSize = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }[savedFontSize] || '16px';
  }, []);

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.style.fontSize = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }[size] || '16px';
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'resume':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResumeBuilder />
          </motion.div>
        );
      case 'linkedin':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LinkedInOptimizer />
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Settings 
              isDarkMode={isDarkMode} 
              toggleDarkMode={toggleDarkMode}
              fontSize={fontSize}
              onFontSizeChange={handleFontSizeChange}
              language={language}
              onLanguageChange={handleLanguageChange}
            />
          </motion.div>
        );
      default:
        return <ResumeBuilder />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
      <div className="hidden md:block">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <div className="md:hidden">
        <MobileNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <main className="transition-colors duration-200 text-gray-900 dark:text-white md:pl-[256px] p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
