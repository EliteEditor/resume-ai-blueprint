
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { 
  SunMoon,
  Languages,
  Save
} from 'lucide-react';

interface SettingsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: string;
  onFontSizeChange: (size: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ 
  isDarkMode, 
  toggleDarkMode, 
  fontSize, 
  onFontSizeChange,
  language,
  onLanguageChange
}) => {
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="p-6 transition-colors duration-200 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="space-y-6">
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <SunMoon className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Theme</Label>
              <RadioGroup 
                value={isDarkMode ? "dark" : "light"} 
                onValueChange={(value) => {
                  if (value === "dark" && !isDarkMode) {
                    toggleDarkMode();
                  } else if (value === "light" && isDarkMode) {
                    toggleDarkMode();
                  }
                }}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark">Dark</Label>
                </div>
              </RadioGroup>
          </div>
          
            <div>
              <Label className="mb-2 block">Font Size</Label>
              <RadioGroup 
                value={fontSize} 
                onValueChange={onFontSizeChange} 
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="font-small" />
                  <Label htmlFor="font-small">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="font-medium" />
                  <Label htmlFor="font-medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="font-large" />
                  <Label htmlFor="font-large">Large</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Language</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Interface Language</Label>
              <RadioGroup 
                value={language} 
                onValueChange={onLanguageChange} 
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="english" id="lang-english" />
                  <Label htmlFor="lang-english">English</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spanish" id="lang-spanish" />
                  <Label htmlFor="lang-spanish">Spanish</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="french" id="lang-french" />
                  <Label htmlFor="lang-french">French</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>
      </div>
        
      <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
      </div>
    </div>
  );
};

export default Settings;
