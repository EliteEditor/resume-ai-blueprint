
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
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
                        <NavigationMenuLink asChild>
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
                        </NavigationMenuLink>
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
                  <Link to="/dashboard" className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 hover:text-gray-900">
                    Dashboard
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="#" className="h-10 px-4 py-2 group inline-flex items-center rounded-md text-sm font-medium text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex">
              Sign in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
