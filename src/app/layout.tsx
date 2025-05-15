
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <div className="scroll-smooth antialiased">
      <ThemeProvider defaultTheme="dark" storageKey="resumeai-theme" attribute="class">
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)] bg-background dark:bg-gray-900">
          {children}
        </main>
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
      </ThemeProvider>
    </div>
  );
}
