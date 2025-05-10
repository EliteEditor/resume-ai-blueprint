import React from 'react';
import { Card } from './ui/card';
import { Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  color: string;
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
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    id: 'grace-jackson',
    name: 'Modern Data Science',
    description: 'Modern layout ideal for data science and analytics positions',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    id: 'alexander-taylor',
    name: 'Product Manager',
    description: 'Strategic layout highlighting product management experience',
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    id: 'aiden-williams',
    name: 'Project Manager',
    description: 'Organized layout emphasizing project management skills',
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    id: 'mason-turner',
    name: 'Sales Professional',
    description: 'Results-focused template for sales and business development',
    color: 'from-red-500/20 to-red-600/20'
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
          className={`group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
            selectedTemplate === template.id
              ? 'ring-2 ring-primary'
              : 'hover:ring-1 hover:ring-primary/50'
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          <div className={`aspect-[210/297] relative bg-gradient-to-br ${template.color} p-6`}>
            {/* Enhanced preview with hover effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-sm p-6">
              {/* Template preview content */}
              <div className="space-y-4">
                <div className="w-2/3 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-100 dark:bg-gray-600 rounded" />
                  <div className="w-5/6 h-4 bg-gray-100 dark:bg-gray-600 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced template info */}
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