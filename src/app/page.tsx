
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const templates = [
  {
    id: 'professional-erp',
    name: 'Professional ERP',
    description: 'Clean and professional template perfect for enterprise roles',
    color: 'blue',
    selected: true
  },
  {
    id: 'modern-data-science',
    name: 'Modern Data Science',
    description: 'Modern layout ideal for data science and analytics positions',
    color: 'purple',
    selected: false
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    description: 'Strategic layout highlighting product management experience',
    color: 'green',
    selected: false
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Create a professional resume in <span className="text-blue-600">minutes</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Our AI-powered builder creates tailored resumes that stand out to hiring managers and pass through ATS systems.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/templates">
                <Button className="bg-blue-600 hover:bg-blue-700 text-base py-6 px-8 rounded-xl">
                  Create My Resume
                </Button>
              </Link>
              <Link href="#templates">
                <Button variant="outline" className="text-base py-6 px-8 rounded-xl">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Feature image */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="h-full w-full bg-gradient-to-b from-blue-50 to-transparent"></div>
            </div>
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
                <div className="p-2">
                  <div className="bg-gray-50 rounded-md p-6">
                    <div className="h-8 flex items-center">
                      <div className="flex space-x-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-12 gap-4">
                      <div className="col-span-3 bg-white rounded-md p-4 shadow-sm">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="mt-3 space-y-2">
                          <div className="h-3 bg-gray-100 rounded"></div>
                          <div className="h-3 bg-gray-100 rounded"></div>
                          <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                        </div>
                      </div>
                      <div className="col-span-9 bg-white rounded-md p-4 shadow-sm">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                            <div className="mt-4 space-y-2">
                              <div className="h-3 bg-gray-100 rounded"></div>
                              <div className="h-3 bg-gray-100 rounded"></div>
                              <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="h-24 bg-gray-200 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Showcase Section */}
      <div id="templates" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Professional Resume Templates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our professionally designed templates to create your perfect resume
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link 
              key={template.id} 
              href={`/editor/${template.id}`}
              className="group"
            >
              <div className={`overflow-hidden rounded-2xl border ${template.selected ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200 hover:border-blue-400'} transition-all duration-300 shadow-sm hover:shadow-lg`}>
                <div className="relative bg-white p-6">
                  {template.selected && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  {/* Template preview */}
                  <div className="w-full h-[320px] bg-gray-50 rounded-lg shadow-sm mb-4 overflow-hidden">
                    <div className="p-4 h-full">
                      <div className="w-full h-full flex flex-col">
                        <div className="w-1/3 h-6 bg-gray-200 rounded mb-3"></div>
                        <div className="w-2/3 h-4 bg-gray-100 rounded mb-2"></div>
                        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
                        <div className="w-2/3 h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="flex-1 grid grid-cols-6 gap-2">
                          <div className="col-span-2">
                            <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                            <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                          </div>
                          <div className="col-span-4">
                            <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                            <div className="w-5/6 h-3 bg-gray-100 rounded mb-1"></div>
                            <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{template.name}</h3>
                  <p className="text-gray-600 text-sm">{template.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/templates">
            <Button variant="outline" className="text-base px-6 py-5 rounded-xl">
              View All Templates
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose ResumeAI
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines modern design with powerful AI to create resumes that help you stand out
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ATS-Optimized Templates</h3>
              <p className="text-gray-600">Our templates are designed to pass through Applicant Tracking Systems and catch the recruiter's eye.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Content</h3>
              <p className="text-gray-600">Get intelligent suggestions for your resume content that highlight your skills and experience.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Customization</h3>
              <p className="text-gray-600">Personalize your resume with our intuitive editor - no design skills required.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
                Ready to land your dream job?
              </h2>
              <p className="mt-4 max-w-md text-lg text-blue-100">
                Create a professional resume in minutes with our AI-powered platform that gives you the competitive edge.
              </p>
              <div className="mt-8">
                <Link href="/templates">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-base py-6 px-8 rounded-xl">
                    Create My Resume Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-center h-64 bg-white">
                    <div className="w-2/3 flex flex-col">
                      <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
