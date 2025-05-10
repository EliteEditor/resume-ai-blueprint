import React from 'react';
import Link from 'next/link';

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
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Progress */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Choose Template</h1>
          <div className="text-sm text-gray-500">Step 1 of 6</div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full bg-gray-100 rounded-full mb-8">
          <div className="h-full w-1/6 bg-blue-500 rounded-full"></div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Link 
              key={template.id} 
              href={`/editor/${template.id}`}
              className={`block rounded-lg overflow-hidden ${
                template.selected ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-gray-200'
              }`}
            >
              <div className="relative bg-gray-50 p-6 h-[380px]">
                {template.selected && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    Selected
                  </div>
                )}
                {/* Template preview placeholder */}
                <div className="w-full h-48 bg-white rounded-lg shadow-sm mb-4">
                  <div className="p-4">
                    <div className="w-1/3 h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded mb-1"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm">{template.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 