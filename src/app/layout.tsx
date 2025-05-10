
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
    <div className="scroll-smooth">
      <ThemeProvider defaultTheme="light" storageKey="resumeai-theme">
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
      </ThemeProvider>
    </div>
  );
}
