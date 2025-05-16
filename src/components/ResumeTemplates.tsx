
import React from 'react';
import { Card } from './ui/card';
import { Check, FileText, Briefcase, Code } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: React.ElementType;
  previewContent: React.ReactNode;
  category: string;
}

interface ResumeTemplatesProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const templates: Template[] = [
  {
    id: 'professional-erp',
    name: 'Professional ERP',
    description: 'Clean and professional template perfect for enterprise roles',
    color: 'from-blue-500/20 to-blue-600/20',
    icon: Briefcase,
    category: 'professional',
    previewContent: (
      <>
        <div className="w-full h-16 bg-blue-100 dark:bg-blue-900/30 rounded mb-4 flex items-center justify-between px-4">
          <div className="w-1/3 h-6 bg-blue-200 dark:bg-blue-800 rounded"></div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-300 dark:bg-blue-700"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 space-y-2">
            <div className="w-full h-24 bg-blue-50 dark:bg-blue-900/20 rounded p-2">
              <div className="w-3/4 h-3 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-blue-100 dark:bg-blue-800/60 rounded mb-1"></div>
              <div className="w-5/6 h-2 bg-blue-100 dark:bg-blue-800/60 rounded mb-1"></div>
            </div>
            <div className="w-full h-20 bg-blue-50 dark:bg-blue-900/20 rounded p-2">
              <div className="w-3/4 h-3 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-blue-100 dark:bg-blue-800/60 rounded"></div>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <div className="w-full h-12 bg-blue-50 dark:bg-blue-900/20 rounded p-2">
              <div className="w-1/3 h-3 bg-blue-200 dark:bg-blue-800 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-blue-100 dark:bg-blue-800/60 rounded"></div>
            </div>
            <div className="w-full h-32 bg-blue-50 dark:bg-blue-900/20 rounded p-2">
              <div className="w-1/2 h-3 bg-blue-200 dark:bg-blue-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-blue-100 dark:bg-blue-800/60 rounded mb-1"></div>
              <div className="w-5/6 h-2 bg-blue-100 dark:bg-blue-800/60 rounded mb-1"></div>
              <div className="w-full h-2 bg-blue-100 dark:bg-blue-800/60 rounded mb-1"></div>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'creative-design',
    name: 'Creative Design',
    description: 'Bold layout for creative professionals',
    color: 'from-pink-500/20 to-pink-600/20',
    icon: FileText,
    category: 'creative',
    previewContent: (
      <>
        <div className="grid grid-cols-5 h-full">
          <div className="col-span-1 bg-pink-200 dark:bg-pink-800/30 h-full p-2">
            <div className="w-10 h-10 mx-auto bg-pink-300 dark:bg-pink-700 rounded-full mb-3"></div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-pink-300 dark:bg-pink-700/60 rounded"></div>
              <div className="w-5/6 h-2 bg-pink-300 dark:bg-pink-700/60 rounded"></div>
            </div>
          </div>
          <div className="col-span-4 p-3">
            <div className="w-1/2 h-4 bg-pink-300 dark:bg-pink-700 rounded mb-2"></div>
            <div className="w-1/3 h-3 bg-pink-200 dark:bg-pink-800/60 rounded mb-3"></div>
            <div className="w-full h-2 bg-pink-100 dark:bg-pink-900/20 rounded mb-1"></div>
            <div className="w-full h-2 bg-pink-100 dark:bg-pink-900/20 rounded mb-1"></div>
            <div className="w-full h-2 bg-pink-100 dark:bg-pink-900/20 rounded mb-3"></div>
            
            <div className="w-2/3 h-3 bg-pink-200 dark:bg-pink-800/60 rounded mt-3"></div>
            <div className="w-full h-2 bg-pink-100 dark:bg-pink-900/20 rounded mt-1"></div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'minimal-tech',
    name: 'Minimal Tech',
    description: 'Clean minimal design for technical roles',
    color: 'from-gray-500/20 to-gray-600/20',
    icon: Code,
    category: 'modern',
    previewContent: (
      <>
        <div className="p-3">
          <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-3 mb-4">
            <div className="w-1/2 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-1"></div>
            <div className="w-1/3 h-3 bg-gray-100 dark:bg-gray-700 rounded"></div>
          </div>
          
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-2">
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
              <div className="space-y-1">
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
                <div className="w-4/5 h-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded mb-1"></div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded mb-1"></div>
              <div className="w-4/5 h-2 bg-gray-100 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
];

const ResumeTemplates: React.FC<ResumeTemplatesProps> = ({
  selectedTemplate,
  onSelectTemplate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
            selectedTemplate === template.id
              ? 'ring-2 ring-primary border-primary'
              : 'hover:ring-1 hover:ring-primary/50 border-transparent'
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          <div className={`aspect-[210/297] relative bg-gradient-to-br ${template.color} p-6`}>
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1 z-10">
                <Check className="h-4 w-4" />
              </div>
            )}
            
            <div className="absolute top-3 left-3">
              <div className="bg-white dark:bg-gray-800 rounded-full p-2">
                <template.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            
            {/* Distinct template preview */}
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 overflow-hidden">
              {template.previewContent}
            </div>
          </div>

          <div className="p-4 bg-card">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg text-foreground">
                {template.name}
              </h3>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                {template.category}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {template.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ResumeTemplates;
