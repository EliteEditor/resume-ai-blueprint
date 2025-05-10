
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TemplatesPage = () => {
  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'professional', name: 'Professional' },
    { id: 'modern', name: 'Modern' },
    { id: 'creative', name: 'Creative' },
    { id: 'simple', name: 'Simple' },
  ];

  const templates = [
    {
      id: 'professional-erp',
      title: 'Professional ERP',
      description: 'Clean and professional template perfect for enterprise roles',
      accentColor: 'blue',
      category: 'professional',
      popular: true,
    },
    {
      id: 'modern-data-science',
      title: 'Modern Data Science',
      description: 'Modern layout ideal for data science and analytics positions',
      accentColor: 'purple',
      category: 'modern',
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      description: 'Strategic layout highlighting product management experience',
      accentColor: 'green',
      category: 'professional',
    },
    {
      id: 'creative-design',
      title: 'Creative Design',
      description: 'Bold layout for creative professionals',
      accentColor: 'pink',
      category: 'creative',
    },
    {
      id: 'minimal-tech',
      title: 'Minimal Tech',
      description: 'Clean minimal design for technical roles',
      accentColor: 'gray',
      category: 'simple',
    },
    {
      id: 'executive-resume',
      title: 'Executive Resume',
      description: 'Sophisticated template for leadership positions',
      accentColor: 'blue',
      category: 'professional',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Resume Template</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select from our professionally designed templates to create your perfect resume
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === 'all' ? 'default' : 'outline'}
                className={cn(
                  "rounded-full px-6", 
                  category.id === 'all' ? 'bg-blue-600 hover:bg-blue-700' : ''
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Link
              key={template.id}
              href={`/editor/${template.id}`}
              className="group"
            >
              <div className={`overflow-hidden rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-lg`}>
                <div className="relative bg-white p-6">
                  {template.popular && (
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
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{template.title}</h3>
                  <p className="text-gray-600 text-sm">{template.description}</p>
                  
                  <div className="mt-4">
                    <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800">
                      Use This Template
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
