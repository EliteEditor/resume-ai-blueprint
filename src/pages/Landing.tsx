
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Linkedin, CheckCircle, BarChart, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure we're at the top of the page when landing page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      value: "90%",
      label: "Success Rate",
      description: "of users land interviews"
    },
    {
      value: "5k+",
      label: "Resumes Enhanced",
      description: "every month"
    },
    {
      value: "2x",
      label: "Interview Rate",
      description: "compared to standard resumes"
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "AI Keyword Optimization",
      description: "Our algorithms analyze job descriptions to identify crucial keywords that help your resume pass Applicant Tracking Systems.",
      color: "bg-indigo-700"
    },
    {
      icon: Shield,
      title: "Professional Content Enhancement",
      description: "Transform basic descriptions into powerful achievement-focused statements that capture recruiters' attention.",
      color: "bg-indigo-700"
    },
    {
      icon: BarChart,
      title: "Real-time Analytics",
      description: "Track your resume's performance with detailed metrics on views, application success, and potential improvements.",
      color: "bg-indigo-700"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile Optimizer",
      description: "Enhance your LinkedIn presence with AI-driven suggestions that improve your visibility to recruiters.",
      color: "bg-indigo-700"
    }
  ];

  return (
    <div className="bg-[#0A0B14] text-white min-h-screen">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0B14]/95 backdrop-blur-sm py-4 shadow-lg shadow-indigo-900/10' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              ResumeAI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/app" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link to="/app" className="text-gray-300 hover:text-white transition-colors">Process</Link>
            <Link to="/app" className="text-gray-300 hover:text-white transition-colors">Stories</Link>
            <Link to="/app" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => navigate('/app')}
            >
              Log In
            </Button>
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              onClick={() => navigate('/app')}
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-6">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  AI-Powered Resume Builder
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Career</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Journey</span>
                <br />
                With AI-Driven Precision
              </h1>
              <p className="mt-6 text-gray-400 text-lg max-w-lg">
                Craft standout resumes that beat ATS systems, impress hiring managers, and secure more interviews with our intelligent optimization engine.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/app')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-6 py-6 rounded-lg"
                >
                  Transform Your Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={scrollToFeatures}
                  className="border-gray-700 hover:bg-gray-800/50 text-gray-300 text-lg px-6 py-6 rounded-lg"
                >
                  See It In Action
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <img 
                  src="/lovable-uploads/85a6511a-3129-4e8a-9134-6ca86b3af5a6.png" 
                  alt="AI Resume Builder Interface" 
                  className="relative z-10 rounded-lg shadow-2xl shadow-indigo-900/20 border border-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-white mt-1">{stat.label}</div>
                <div className="text-gray-400 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-16">
          <button 
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
            onClick={scrollToFeatures}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <span className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
            </span>
          </button>
        </div>
      </section>

      {/* Why ResumeAI Stands Apart */}
      <section id="features" ref={featuresRef} className="py-20 bg-gradient-to-b from-[#0A0B14] to-[#111226]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">ResumeAI</span> Stands Apart
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technology meets professional expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-900/20">
                <div className={`${feature.color} p-3 rounded-lg inline-flex w-12 h-12 items-center justify-center mb-5`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <Button 
                  variant="link" 
                  className="mt-4 p-0 text-indigo-400 hover:text-indigo-300"
                  onClick={() => navigate('/app')}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0D0E1B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our simple three-step process to transform your career documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Upload Your Info",
                description: "Start by providing your current resume or inputting your career information."
              },
              {
                step: "02",
                title: "AI Enhancement",
                description: "Our AI analyzes and optimizes your content for maximum impact and ATS compatibility."
              },
              {
                step: "03",
                title: "Download & Apply",
                description: "Get your polished resume and LinkedIn profile suggestions ready to use in your job search."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-indigo-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[#0D0E1B] to-[#111328]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how ResumeAI has helped professionals land their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "My interview callbacks increased by 300% after using ResumeAI. I landed a job at a Fortune 500 company within weeks!",
                author: "Sarah K.",
                role: "Marketing Director"
              },
              {
                quote: "The LinkedIn optimization feature completely transformed my profile. I'm now getting regular outreach from recruiters.",
                author: "Michael T.",
                role: "Software Engineer"
              },
              {
                quote: "As a career changer, I struggled to highlight my transferable skills. ResumeAI helped me craft a compelling narrative that got me interviews.",
                author: "Priya L.",
                role: "Project Manager"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-6 text-4xl text-indigo-500">"</div>
                <p className="text-gray-300 mt-4 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#111328] to-[#0A0B14]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Transform Your Career?
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              Join thousands of professionals who have boosted their job search success with ResumeAI's advanced tools.
            </p>
            <div className="mt-10">
              <Button 
                size="lg"
                onClick={() => navigate('/app')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-6 rounded-lg"
              >
                Get Started For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-gray-500 text-sm">No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0B14] border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
                ResumeAI
              </div>
              <p className="text-gray-400 mb-4 max-w-xs">
                Using AI to help professionals create impressive resumes and LinkedIn profiles that get noticed.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ResumeAI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-gray-400 text-sm">Privacy Protected</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-gray-400 text-sm">SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
