
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

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 font-heading">ResumeAI</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex ml-8">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 text-sm font-medium text-gray-600 hover:text-gray-900">Templates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <Link
                        to="/templates"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Browse Templates
                        </div>
                        <p className="text-sm leading-tight text-gray-600">
                          Explore professional resume templates designed to impress hiring managers.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/templates?category=professional"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                      >
                        <div className="text-sm font-medium leading-none">Professional</div>
                        <p className="text-sm leading-snug text-gray-500 line-clamp-2">
                          Clean and elegant templates for corporate roles
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/templates?category=creative"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                      >
                        <div className="text-sm font-medium leading-none">Creative</div>
                        <p className="text-sm leading-snug text-gray-500 line-clamp-2">
                          Stand out with distinctive designs for creative fields
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/app" className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 hover:text-gray-900">
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
                <Link to="/" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  <Home className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/app" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  <Settings className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="#" className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Get Help</TooltipContent>
            </Tooltip>
          </div>

          <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                <Button variant="ghost" size="icon" className="rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
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
