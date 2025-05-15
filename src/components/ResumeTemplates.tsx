
import React from 'react';
import { Card } from './ui/card';
import { Check, FileText, PieChart, Briefcase, Code, LineChart } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: React.ElementType;
  previewContent: React.ReactNode;
}

interface ResumeTemplatesProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const templates: Template[] = [
  {
    id: 'christian-torres',
    name: 'Professional ERP',
    description: 'Clean and professional template perfect for enterprise roles',
    color: 'from-blue-500/20 to-blue-600/20',
    icon: Briefcase,
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
    id: 'grace-jackson',
    name: 'Modern Data Science',
    description: 'Modern layout ideal for data science and analytics positions',
    color: 'from-purple-500/20 to-purple-600/20',
    icon: PieChart,
    previewContent: (
      <>
        <div className="w-full bg-purple-50 dark:bg-purple-900/20 rounded-t-lg h-24 flex items-center justify-center mb-2">
          <div className="w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full -mb-16 flex items-center justify-center">
            <div className="w-28 h-28 bg-purple-100 dark:bg-purple-700 rounded-full"></div>
          </div>
        </div>
        <div className="pt-16 px-4">
          <div className="w-3/4 mx-auto h-4 bg-purple-200 dark:bg-purple-800 rounded mb-2"></div>
          <div className="w-1/2 mx-auto h-3 bg-purple-100 dark:bg-purple-700/60 rounded mb-4"></div>
          
          <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-span-4">
              <div className="w-full h-3 bg-purple-200 dark:bg-purple-800 rounded mb-2"></div>
              <div className="w-5/6 h-2 bg-purple-100 dark:bg-purple-700/60 rounded mb-1"></div>
              <div className="w-full h-2 bg-purple-100 dark:bg-purple-700/60 rounded"></div>
            </div>
            <div className="col-span-8">
              <div className="w-full h-3 bg-purple-200 dark:bg-purple-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-purple-100 dark:bg-purple-700/60 rounded mb-1"></div>
              <div className="w-5/6 h-2 bg-purple-100 dark:bg-purple-700/60 rounded"></div>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'alexander-taylor',
    name: 'Product Manager',
    description: 'Strategic layout highlighting product management experience',
    color: 'from-green-500/20 to-green-600/20',
    icon: FileText,
    previewContent: (
      <>
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-4 bg-green-100 dark:bg-green-900/30 h-full p-3">
            <div className="w-20 h-20 mx-auto bg-green-200 dark:bg-green-800 rounded-full mb-3"></div>
            <div className="w-3/4 mx-auto h-3 bg-green-300 dark:bg-green-700 rounded mb-2"></div>
            <div className="w-1/2 mx-auto h-2 bg-green-200 dark:bg-green-800/60 rounded mb-4"></div>
            
            <div className="space-y-2 mt-4">
              <div className="w-full h-2 bg-green-200 dark:bg-green-800/60 rounded"></div>
              <div className="w-5/6 h-2 bg-green-200 dark:bg-green-800/60 rounded"></div>
              <div className="w-full h-2 bg-green-200 dark:bg-green-800/60 rounded"></div>
            </div>
          </div>
          <div className="col-span-8 p-3">
            <div className="w-1/2 h-4 bg-green-200 dark:bg-green-800 rounded mb-3"></div>
            <div className="w-full h-2 bg-green-100 dark:bg-green-900/30 rounded mb-1"></div>
            <div className="w-5/6 h-2 bg-green-100 dark:bg-green-900/30 rounded mb-1"></div>
            <div className="w-full h-2 bg-green-100 dark:bg-green-900/30 rounded mb-4"></div>
            
            <div className="w-2/3 h-3 bg-green-200 dark:bg-green-800 rounded mt-3 mb-2"></div>
            <div className="w-full h-2 bg-green-100 dark:bg-green-900/30 rounded mb-1"></div>
            <div className="w-5/6 h-2 bg-green-100 dark:bg-green-900/30 rounded"></div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'aiden-williams',
    name: 'Project Manager',
    description: 'Organized layout emphasizing project management skills',
    color: 'from-orange-500/20 to-orange-600/20',
    icon: Briefcase,
    previewContent: (
      <>
        <div className="p-3">
          <div className="flex justify-between items-center mb-4">
            <div className="space-y-1">
              <div className="w-40 h-5 bg-orange-200 dark:bg-orange-800 rounded"></div>
              <div className="w-32 h-3 bg-orange-100 dark:bg-orange-900/30 rounded"></div>
            </div>
            <div className="w-16 h-16 bg-orange-300 dark:bg-orange-700 rounded"></div>
          </div>
          
          <div className="w-full h-[1px] bg-orange-200 dark:bg-orange-800/50 my-3"></div>
          
          <div className="space-y-3">
            <div className="w-1/3 h-3 bg-orange-200 dark:bg-orange-800 rounded"></div>
            <div className="grid grid-cols-8 gap-2">
              <div className="col-span-3">
                <div className="w-full h-8 bg-orange-100 dark:bg-orange-900/30 rounded p-1">
                  <div className="w-2/3 h-2 bg-orange-200 dark:bg-orange-800 rounded"></div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="w-full h-8 bg-orange-100 dark:bg-orange-900/30 rounded p-1">
                  <div className="w-5/6 h-2 bg-orange-200 dark:bg-orange-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'mason-turner',
    name: 'Sales Professional',
    description: 'Results-focused template for sales and business development',
    color: 'from-red-500/20 to-red-600/20',
    icon: LineChart,
    previewContent: (
      <>
        <div className="relative h-full">
          <div className="absolute top-0 left-0 right-0 h-20 bg-red-500 dark:bg-red-800"></div>
          <div className="absolute top-8 left-8 right-8 bottom-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="w-32 h-4 bg-red-200 dark:bg-red-800/50 rounded"></div>
                <div className="w-24 h-3 bg-red-100 dark:bg-red-900/30 rounded"></div>
              </div>
              <div className="w-10 h-10 bg-red-400 dark:bg-red-700 rounded"></div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="w-full h-[1px] bg-red-100 dark:bg-red-900/30"></div>
              <div className="w-1/4 h-3 bg-red-300 dark:bg-red-700 rounded"></div>
              <div className="w-full h-2 bg-red-100 dark:bg-red-900/20 rounded"></div>
              <div className="w-5/6 h-2 bg-red-100 dark:bg-red-900/20 rounded"></div>
              <div className="w-full h-2 bg-red-100 dark:bg-red-900/20 rounded"></div>
            </div>
            
            <div className="absolute bottom-3 right-3">
              <div className="w-8 h-8 bg-red-300 dark:bg-red-700 rounded-full"></div>
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
            <h3 className="font-semibold text-lg text-foreground mb-2">
              {template.name}
            </h3>
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
