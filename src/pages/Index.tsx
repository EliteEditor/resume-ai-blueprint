import React, { useState, useEffect } from 'react';
import ResumeBuilder from '@/components/ResumeBuilder';
import LinkedInOptimizer from '@/components/LinkedInOptimizer';
import Settings from '@/components/Settings';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');
  const isMobile = useIsMobile();

  // Apply dark mode class on mount and when isDarkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

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

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

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
        return <ResumeBuilder />;
      case 'linkedin':
        return <LinkedInOptimizer />;
      case 'settings':
        return (
          <Settings 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
            fontSize={fontSize}
            onFontSizeChange={handleFontSizeChange}
            language={language}
            onLanguageChange={handleLanguageChange}
          />
        );
      default:
        return <ResumeBuilder />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
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
      <main className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} md:pl-[280px]`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
