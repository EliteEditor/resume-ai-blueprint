import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Linkedin, Settings, ArrowRight, CheckCircle, Lock, Shield, ChevronRight, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class on mount and when isDarkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  // Ensure we're at the top of the page when landing page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: FileText,
      title: "AI-Powered Resume Creation",
      description: "Build professional resumes with our AI assistant that helps optimize your content for maximum impact."
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile Optimization",
      description: "Get AI-generated suggestions to enhance your LinkedIn profile and stand out to recruiters."
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Choose from multiple resume templates and customize settings to match your personal preferences."
    }
  ];

  const benefits = [
    "Stand out from other job applicants with AI-enhanced content",
    "Save hours crafting the perfect resume and LinkedIn profile",
    "Highlight your skills and experience in the most effective way",
    "Get more interviews and job opportunities",
    "Keep your professional documents updated with minimal effort"
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Input Your Information",
      description: "Fill in your professional details through our guided form or upload your existing resume for AI analysis.",
      icon: "📝"
    },
    {
      step: 2,
      title: "AI Enhancement",
      description: "Our AI engine optimizes your content, suggests improvements, and formats your resume professionally.",
      icon: "✨"
    },
    {
      step: 3,
      title: "Choose & Download",
      description: "Select from multiple templates, make final adjustments, and download your ready-to-use resume.",
      icon: "🚀"
    }
  ];

  const handleGetStarted = () => {
    navigate('/app');
  };

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-primary">Nexprofile</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/app')}
            className="hover:bg-primary/10"
          >
            Go to App
          </Button>
        </div>
      </nav>

      {/* Hero Section - Enhanced with stronger CTA */}
      <div className="container mx-auto px-6 py-16 md:py-24 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="mr-1">✨</span> AI-Powered Career Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Elevate Your <span className="text-primary">Professional Presence</span> with AI
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Create stunning resumes and optimize your LinkedIn profile with our AI-powered tools. 
              Stand out to recruiters and land your dream job faster than ever before.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleGetStarted}
                className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Build My Resume with AI
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative" style={{ height: '500px' }}>
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3" style={{ zIndex: 1 }}></div>
              
              {/* Main image */}
              <div className="absolute inset-0" style={{ zIndex: 5 }}>
                <div className="bg-white rounded-lg p-4 shadow-xl h-full">
                  <img 
                    src="/images/e4de7bab-6389-4afb-aa0a-71a12e9f904d.png" 
                    alt="AI Resume Builder Interface" 
                    className="w-full h-full object-contain rounded-lg"
                    style={{ backgroundColor: 'rgb(248, 250, 252)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - 3-Step Process */}
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform simplifies the resume building and LinkedIn optimization process into three easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="absolute top-0 right-0 bg-primary/10 text-primary font-bold px-3 py-1.5 rounded-bl-lg">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" ref={featuresRef} className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Powerful Tools for Your Professional Journey
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our comprehensive suite of AI-powered features designed to elevate your career documents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-lg hover:shadow-lg transition-all hover-scale"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="mt-4 p-0 text-primary hover:text-primary/80 hover:bg-transparent"
                  onClick={() => navigate('/app')}
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="mt-8 flex items-center gap-2 hover-scale"
                onClick={() => navigate('/app')}
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-md" style={{ height: '400px' }}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3" style={{ zIndex: 1 }}></div>
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform -rotate-3" style={{ zIndex: 2 }}></div>
                
                {/* Main content container */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" style={{ zIndex: 5, margin: '10px' }}>
                  <img 
                    src="/lovable-uploads/bb38759b-fe5f-4a72-9f1e-7e63b88a572f.png" 
                    alt="Resume Document Sample" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Professional Profile?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have elevated their career opportunities 
            with our AI-powered resume builder and LinkedIn optimizer.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/app')}
            className="bg-white text-primary hover:bg-gray-100 shadow-lg hover-scale"
          >
            Build My Resume with AI
          </Button>
        </div>
      </div>

      {/* Footer with Trust Signals */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Resume + LinkedIn Optimizer</h1>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Using advanced AI to help professionals create impressive resumes and LinkedIn profiles that get noticed by recruiters.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <a href="#" className="text-gray-500 hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058 1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Features</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Templates</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} AI Resume Optimizer. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Shield className="h-4 w-4 mr-1" />
                GDPR Compliant
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Lock className="h-4 w-4 mr-1" />
                Privacy Protected
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800 shadow-lg z-50">
        <Button 
          className="w-full flex items-center justify-center gap-2"
          onClick={() => navigate('/app')}
        >
          Build My Resume with AI
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Landing;
