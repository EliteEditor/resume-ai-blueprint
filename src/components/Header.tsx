
import React from 'react';
import { FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Resume + LinkedIn Optimizer</h1>
        </div>
        <div>
          <a 
            href="#" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            Get Help
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
