
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon, Home, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  activeTab, 
  setActiveTab, 
  isDarkMode, 
  toggleDarkMode 
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 border-b dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          <Home className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 mr-4">
          <Briefcase className="h-5 w-5 text-primary dark:text-blue-400" />
          <span className="font-bold text-primary dark:text-blue-400">ResumeAI</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-800">
            <SheetHeader>
              <div className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary dark:text-blue-400" />
                <SheetTitle className="text-left text-primary dark:text-blue-400">ResumeAI</SheetTitle>
              </div>
            </SheetHeader>
            <div className="mt-4 space-y-2">
              <Button
                variant={activeTab === 'resume' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('resume')}
              >
                Resume Builder
              </Button>
              <Button
                variant={activeTab === 'linkedin' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('linkedin')}
              >
                LinkedIn Optimizer
              </Button>
              <Button
                variant={activeTab === 'settings' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={toggleDarkMode}
        className="ml-auto text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default MobileNav;
