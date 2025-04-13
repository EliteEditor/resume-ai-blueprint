
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import ResumeBuilder from '@/components/ResumeBuilder';
import LinkedInOptimizer from '@/components/LinkedInOptimizer';
import Settings from '@/components/Settings';

const Index = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [theme, setTheme] = useState(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Try to get the theme from localStorage
      const storedTheme = localStorage.getItem('theme');
      // Check if the user has a preferred color scheme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Return the stored theme if it exists, otherwise return the preferred scheme or default to 'light'
      return storedTheme || (prefersDark ? 'dark' : 'light');
    }
    
    // Default to 'light' if on server-side
    return 'light';
  });

  // Update the class on the html element and store the theme preference
  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 overflow-y-auto">
          <div className="md:hidden px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          
          {activeTab === 'resume' && <ResumeBuilder />}
          {activeTab === 'linkedin' && <LinkedInOptimizer />}
          {activeTab === 'settings' && <Settings theme={theme} setTheme={setTheme} />}
        </main>
      </div>
    </div>
  );
};

export default Index;
