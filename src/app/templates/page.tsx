import React from 'react';
import TemplatePreview from '@/components/TemplatePreview';

const TemplatesPage = () => {
  const templates = [
    {
      id: 'professional-erp',
      title: 'Professional ERP',
      description: 'Clean and professional template perfect for enterprise roles',
      accentColor: 'blue',
    },
    {
      id: 'modern-data-science',
      title: 'Modern Data Science',
      description: 'Modern layout ideal for data science and analytics positions',
      accentColor: 'purple',
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      description: 'Strategic layout highlighting product management experience',
      accentColor: 'green',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Resume Template</h1>
          <p className="text-lg text-gray-600">
            Select from our professionally designed templates to create your perfect resume
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplatePreview
              key={template.id}
              templateId={template.id}
              title={template.title}
              description={template.description}
              accentColor={template.accentColor}
              selected={template.id === 'professional-erp'} // Example of setting a selected template
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage; 