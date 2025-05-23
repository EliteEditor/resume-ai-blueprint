
import React from 'react';
import { Home, Settings, MessageCircle, User, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTheme } from 'next-themes';
import { toast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDarkTheme = theme === 'dark';

  const handleLinkedInOptimizerClick = () => {
    navigate('/linkedin-optimizer');
    toast({
      title: "LinkedIn Optimizer",
      description: "Now you can optimize your LinkedIn profile",
    });
  };
  
  const handleSettingsClick = () => {
    // Navigate to the settings page
    navigate('/app', { state: { activeTab: 'settings' } });
    toast({
      title: "Settings",
      description: "Adjusting your application settings",
    });
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-heading">ResumeAI</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex ml-8">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/templates" className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Templates
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/app" className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Dashboard
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/linkedin-optimizer" 
                  className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Optimizer
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/" className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Home className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={handleSettingsClick}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Settings className="h-5 w-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="#" className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Get Help</TooltipContent>
            </Tooltip>
          </div>

          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2 hidden md:block"></div>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                <Button variant="ghost" size="icon" className="rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/40">
                  <User className="h-5 w-5" />
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>User Profile</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
