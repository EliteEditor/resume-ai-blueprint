
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { 
  SunMoon,
  Languages,
  Type,
  Save
} from 'lucide-react';

interface SettingsProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ theme, setTheme }) => {
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  const handleSaveSettings = () => {
    // In a real app, this would save to localStorage or backend
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <SunMoon className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Theme</Label>
              <RadioGroup 
                value={theme} 
                onValueChange={setTheme} 
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
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system">System Default</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Type className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Text</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Font Size</Label>
              <RadioGroup 
                value={fontSize} 
                onValueChange={setFontSize} 
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="size-small" />
                  <Label htmlFor="size-small">Small</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="size-medium" />
                  <Label htmlFor="size-medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="size-large" />
                  <Label htmlFor="size-large">Large</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Language</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Resume Language</Label>
              <RadioGroup 
                value={language} 
                onValueChange={setLanguage} 
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="english" id="lang-english" />
                  <Label htmlFor="lang-english">English</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hindi" id="lang-hindi" />
                  <Label htmlFor="lang-hindi">Hindi</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>
        
        <div className="md:col-span-2">
          <Button 
            className="w-full flex items-center justify-center gap-2"
            onClick={handleSaveSettings}
          >
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
