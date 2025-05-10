
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
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
      <ThemeProvider defaultTheme="light" storageKey="resumeai-theme">
        <TooltipProvider>
          <Router>
            <Header />
            <main className="min-h-[calc(100vh-4rem)]">
              <Routes>
                <Route path="/" element={<Index />} />
              </Routes>
            </main>
            <footer className="bg-gray-50 border-t border-gray-200">
              <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Product</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Features</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Templates</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Pricing</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Resources</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Help Center</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Resume Tips</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3>
                    <ul className="mt-4 space-y-2">
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a></li>
                      <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Cookies</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <p className="text-base text-gray-500 text-center">&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <Toaster />
            <Sonner />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
