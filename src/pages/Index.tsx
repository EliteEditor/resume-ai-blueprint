
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeTemplates from '@/components/ResumeTemplates';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Index: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('christian-torres');
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    // Navigate to editor with selected template
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
      <main className="transition-colors duration-200 text-gray-900 dark:text-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resume Templates</h1>
              <Button 
                variant="outline"
                onClick={() => navigate('/templates')}
                className="bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                <Download className="mr-2 h-4 w-4" />
                View All Templates
              </Button>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Choose a template to create your professional resume
            </p>
            
            <div className="glass-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <ResumeTemplates
                selectedTemplate={selectedTemplate}
                onSelectTemplate={handleTemplateSelect}
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
