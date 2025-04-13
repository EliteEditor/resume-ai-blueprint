
import React from 'react';
import { FileText, Home, Settings, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Resume + LinkedIn Optimizer</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link 
            to="/app" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary flex items-center gap-1"
          >
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">App</span>
          </Link>
          <Button 
            variant="outline" 
            asChild
            className="hidden sm:flex hover-scale"
          >
            <a 
              href="#" 
              className="text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Get Help
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
