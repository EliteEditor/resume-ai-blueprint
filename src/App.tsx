
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import HomePage from '@/app/page';
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
                  <Route path="/" element={<HomePage />} />
                  <Route path="/app" element={<Index />} />
                  <Route path="/templates" element={<TemplatesPage />} />
                  <Route path="/editor/:templateId" element={<EditorPage />} />
                </Routes>
              </main>
              <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto py-12 px-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Product</h3>
                      <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Templates</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Resources</h3>
                      <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Help Center</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Resume Tips</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Company</h3>
                      <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Legal</h3>
                      <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms</a></li>
                        <li><a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cookies</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-base text-gray-500 dark:text-gray-400 text-center">&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
                  </div>
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
