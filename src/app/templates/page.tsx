
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TemplatesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'professional', name: 'Professional' },
    { id: 'modern', name: 'Modern' },
    { id: 'creative', name: 'Creative' },
  ];

  const templates = [
    {
      id: 'professional-erp',
      title: 'Professional Resume',
      description: 'Clean and professional template perfect for enterprise roles',
      accentColor: 'blue',
      category: 'professional',
      popular: true,
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
      category: 'modern',
    },
  ];

  // Filter templates based on active category
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Resume Template</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select from our professionally designed templates and start editing immediately
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === activeCategory ? 'default' : 'outline'}
                className={cn(
                  "rounded-full px-6", 
                  category.id === activeCategory ? 'bg-blue-600 hover:bg-blue-700' : ''
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <Link
              key={template.id}
              to={`/editor/${template.id}`}
              className="group"
            >
              <div className={`overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-lg bg-white dark:bg-gray-800`}>
                <div className="relative p-6">
                  {template.popular && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  {/* Template preview based on template ID */}
                  <div className="w-full h-[320px] bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm mb-4 overflow-hidden">
                    {template.id === 'professional-erp' && (
                      <div className="p-4 h-full bg-white dark:bg-gray-800">
                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                          <div className="w-2/3 h-7 bg-blue-100 dark:bg-blue-900/30 rounded mb-2"></div>
                          <div className="w-1/3 h-5 bg-blue-50 dark:bg-blue-900/20 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-1">
                            <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 mb-2 rounded"></div>
                            <div className="w-4/5 h-3 bg-gray-50 dark:bg-gray-600 rounded mb-1"></div>
                            <div className="w-3/5 h-3 bg-gray-50 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="col-span-2">
                            <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 mb-2 rounded"></div>
                            <div className="w-full h-16 bg-gray-50 dark:bg-gray-600 rounded mb-3"></div>
                            <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 mb-2 rounded"></div>
                            <div className="grid grid-cols-4 gap-2">
                              <div className="col-span-3">
                                <div className="w-full h-3 bg-gray-50 dark:bg-gray-600 rounded"></div>
                              </div>
                              <div className="col-span-1">
                                <div className="w-full h-3 bg-gray-50 dark:bg-gray-600 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {template.id === 'creative-design' && (
                      <div className="p-4 h-full bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                        <div className="flex justify-between mb-4">
                          <div className="w-16 h-16 rounded-full bg-pink-200 dark:bg-pink-800"></div>
                          <div className="w-2/5">
                            <div className="w-full h-6 bg-pink-100 dark:bg-pink-900/50 rounded mb-1"></div>
                            <div className="w-4/5 h-4 bg-pink-50 dark:bg-pink-900/30 rounded"></div>
                          </div>
                        </div>
                        <div className="flex gap-3 mb-4">
                          <div className="h-4 w-4 rounded-full bg-pink-300 dark:bg-pink-700"></div>
                          <div className="h-4 w-20 bg-pink-100 dark:bg-pink-900/40 rounded"></div>
                          <div className="h-4 w-4 rounded-full bg-pink-300 dark:bg-pink-700"></div>
                          <div className="h-4 w-20 bg-pink-100 dark:bg-pink-900/40 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                          <div className="col-span-1 border-r border-pink-200 dark:border-pink-800 pr-2">
                            <div className="w-full h-4 bg-pink-100 dark:bg-pink-900/50 rounded mb-2"></div>
                            <div className="w-full h-3 bg-pink-50 dark:bg-pink-900/30 rounded mb-1"></div>
                            <div className="w-4/5 h-3 bg-pink-50 dark:bg-pink-900/30 rounded"></div>
                          </div>
                          <div className="col-span-2">
                            <div className="w-full h-4 bg-pink-100 dark:bg-pink-900/50 rounded mb-2"></div>
                            <div className="w-full h-12 bg-pink-50 dark:bg-pink-900/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {template.id === 'minimal-tech' && (
                      <div className="p-4 h-full bg-white dark:bg-gray-900">
                        <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-3 mb-6">
                          <div className="w-1/2 h-7 bg-gray-200 dark:bg-gray-800 rounded mb-1"></div>
                          <div className="w-1/4 h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-2">
                            <div className="w-full h-5 bg-gray-200 dark:bg-gray-800 rounded mb-3"></div>
                            <div className="space-y-2">
                              <div className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
                              <div className="w-4/5 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
                              <div className="w-3/5 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
                            </div>
                          </div>
                          <div className="col-span-4">
                            <div className="w-full h-5 bg-gray-200 dark:bg-gray-800 rounded mb-3"></div>
                            <div className="grid grid-cols-8 gap-2 mb-2">
                              <div className="col-span-6">
                                <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                              </div>
                              <div className="col-span-2">
                                <div className="w-full h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                              </div>
                            </div>
                            <div className="w-full h-3 bg-gray-50 dark:bg-gray-600 rounded mb-1"></div>
                            <div className="w-full h-3 bg-gray-50 dark:bg-gray-600 rounded mb-1"></div>
                            <div className="w-4/5 h-3 bg-gray-50 dark:bg-gray-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{template.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{template.description}</p>
                  
                  <div className="mt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Edit This Template
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
