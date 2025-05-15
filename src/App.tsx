
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import TemplatesPage from '@/app/templates/page';
import EditorPage from '@/app/editor/[templateId]/page';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="resumeai-theme" attribute="class">
        <TooltipProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 bg-background dark:bg-gray-900">
                <Routes>
                  {/* Redirect from landing page to app dashboard */}
                  <Route path="/" element={<Navigate to="/app" replace />} />
                  <Route path="/app" element={<Index />} />
                  <Route path="/templates" element={<TemplatesPage />} />
                  <Route path="/editor/:templateId" element={<EditorPage />} />
                </Routes>
              </main>
              <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto py-8 px-4">
                  <p className="text-base text-gray-500 dark:text-gray-400 text-center">&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
                </div>
              </footer>
              <Toaster />
              <Sonner />
            </div>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
