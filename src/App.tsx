import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Landing from '@/pages/Landing';
import TemplatesPage from '@/app/templates/page';
import EditorPage from '@/app/editor/[templateId]/page';
import LinkedInOptimizerPage from '@/app/linkedin-optimizer/page';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import Header from '@/components/Header';
import Settings from '@/components/Settings';
import ProfilePage from '@/pages/ProfilePage';
import { UserProvider } from '@/contexts/UserContext';

const queryClient = new QueryClient();

// Create a wrapper component that uses the theme
const AppContent = () => {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${
        fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-lg' : 'text-base'
      }`}>
        <Routes>
          {/* Landing page as the root */}
          <Route path="/" element={<Landing />} />
          
          {/* App routes with header */}
          <Route path="/app" element={
            <>
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <Index />
              </main>
            </>
          } />
          <Route path="/templates" element={
            <>
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <TemplatesPage />
              </main>
            </>
          } />
          <Route path="/editor/:templateId" element={
            <>
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <EditorPage />
              </main>
            </>
          } />
          <Route path="/linkedin-optimizer" element={
            <>
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <LinkedInOptimizerPage />
              </main>
            </>
          } />
          <Route path="/settings" element={
            <>
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <Settings 
                  isDarkMode={theme === 'dark'}
                  toggleDarkMode={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  fontSize={fontSize}
                  onFontSizeChange={setFontSize}
                  language={language}
                  onLanguageChange={setLanguage}
                />
              </main>
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <ProfilePage />
              </main>
            </>
          } />
        </Routes>
        <Toaster />
        <Sonner />
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="resumeai-theme" attribute="class">
        <TooltipProvider>
          <UserProvider>
            <AppContent />
          </UserProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
