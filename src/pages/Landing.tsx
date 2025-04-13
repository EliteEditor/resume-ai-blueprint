
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Linkedin, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Elevate Your <span className="text-primary">Professional Presence</span> with AI
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Create stunning resumes and optimize your LinkedIn profile with our AI-powered tools. 
              Stand out to recruiters and land your dream job.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/app')}
                className="flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/placeholder.svg" 
              alt="Resume and LinkedIn Profile" 
              className="w-full h-auto resume-shadow rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Powerful Tools for Your Professional Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Platform?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="mt-8 flex items-center gap-2"
                onClick={() => navigate('/app')}
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform -rotate-3"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-md w-3/4"></div>
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-md w-5/6"></div>
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-md w-4/5"></div>
                    <div className="h-10 bg-primary/20 rounded-md w-1/3 mt-6"></div>
                  </div>
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
            className="bg-white text-primary hover:bg-gray-100"
          >
            Get Started for Free
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FileText className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Resume + LinkedIn Optimizer</h1>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} AI Resume Optimizer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
