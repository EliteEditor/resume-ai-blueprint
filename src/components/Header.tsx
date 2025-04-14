import React from 'react';
import { Home, Settings, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 py-4 sticky top-0 z-40"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <User className="h-5 w-5 text-primary" />
          </motion.div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            AI Resume + LinkedIn Optimizer
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  to="/" 
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <Home className="h-5 w-5" />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              Home
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  to="/app" 
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <Settings className="h-5 w-5" />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              App
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a 
                  href="#" 
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              Get Help
            </TooltipContent>
          </Tooltip>

          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer"
              >
                <User className="h-5 w-5 text-primary" />
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              User Profile
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
