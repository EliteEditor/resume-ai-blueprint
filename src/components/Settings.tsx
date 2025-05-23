import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { 
  SunMoon,
  Save,
  MessageCircle
} from 'lucide-react';

interface SettingsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Settings: React.FC<SettingsProps> = ({
  isDarkMode,
  toggleDarkMode
}) => {
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };

  // Add state for the contact message
  const [contactMessage, setContactMessage] = React.useState('');

  const handleContactMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactMessage(event.target.value);
  };

  const sendContactMessage = () => {
    // TODO: Implement actual sending logic (e.g., API call)
    console.log('Sending contact message:', contactMessage);
    toast.success("Message sent!");
    setContactMessage(''); // Clear the text box after sending
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
          </div>
        </Card>
        
        {/* New Contact Us Section */}
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block" htmlFor="contact-message">Your Message</Label>
              <textarea
                id="contact-message"
                value={contactMessage}
                onChange={handleContactMessageChange}
                className="w-full min-h-[150px] p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Enter your message here..."
              />
            </div>
            <Button 
              onClick={sendContactMessage}
              className="flex items-center gap-2"
            >
              Send Message
            </Button>
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
