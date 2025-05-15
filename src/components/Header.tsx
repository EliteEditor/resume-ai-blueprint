
import React from 'react';
import { Home, Settings, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const Header: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

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
                <NavigationMenuTrigger className="h-10 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Templates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 dark:bg-gray-800">
                    <li className="row-span-3">
                      <Link
                        to="/templates"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium dark:text-white">
                          Browse Templates
                        </div>
                        <p className="text-sm leading-tight text-gray-600 dark:text-gray-300">
                          Explore professional resume templates designed to impress hiring managers.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/templates?category=professional"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-white dark:text-gray-300"
                      >
                        <div className="text-sm font-medium leading-none">Professional</div>
                        <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                          Clean and elegant templates for corporate roles
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/templates?category=creative"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-white dark:text-gray-300"
                      >
                        <div className="text-sm font-medium leading-none">Creative</div>
                        <p className="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                          Stand out with distinctive designs for creative fields
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/app" className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Dashboard
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
                <Link to="/app" className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="h-5 w-5" />
                </Link>
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
