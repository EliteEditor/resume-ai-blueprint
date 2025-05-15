
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, CheckCircle, Copy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const LinkedinOptimizerPage: React.FC = () => {
  const [profile, setProfile] = React.useState('');
  const [optimizedProfile, setOptimizedProfile] = React.useState('');
  const [isOptimizing, setIsOptimizing] = React.useState(false);

  const handleOptimize = () => {
    if (!profile.trim()) {
      toast({
        title: "Error",
        description: "Please paste your LinkedIn profile text",
        variant: "destructive",
      });
      return;
    }

    setIsOptimizing(true);

    // Simulate optimization process
    setTimeout(() => {
      const optimized = generateOptimizedProfile(profile);
      setOptimizedProfile(optimized);
      setIsOptimizing(false);
      
      toast({
        title: "Profile Optimized",
        description: "Your LinkedIn profile has been optimized for better visibility",
      });
    }, 1500);
  };

  const generateOptimizedProfile = (originalProfile: string): string => {
    // This is a placeholder for actual optimization logic
    // In a real app, this would connect to an API or use AI
    const keywords = ['specialized', 'expert', 'accomplished', 'results-driven', 'innovative'];
    let improved = originalProfile;
    
    // Add some keywords
    keywords.forEach(keyword => {
      if (Math.random() > 0.7 && !improved.includes(keyword)) {
        const sentences = improved.split('.');
        const randomIndex = Math.floor(Math.random() * sentences.length);
        sentences[randomIndex] += ` I am ${keyword} in my approach`;
        improved = sentences.join('.');
      }
    });
    
    // Add a LinkedIn-friendly headline if none exists
    if (!improved.includes('| ') && improved.length > 0) {
      const profession = ['Software Engineer', 'Product Manager', 'Data Scientist', 'Marketing Specialist', 'Project Manager'][Math.floor(Math.random() * 5)];
      improved = `${profession} | Experienced Professional | Passionate about Innovation\n\n` + improved;
    }
    
    return improved;
  };

  const handleCopy = () => {
    if (optimizedProfile) {
      navigator.clipboard.writeText(optimizedProfile);
      toast({
        title: "Copied!",
        description: "Profile copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Linkedin className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">LinkedIn Profile Optimizer</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enhance your LinkedIn profile visibility and attract more recruiters with our AI-powered optimization tool
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Original Profile</CardTitle>
              <CardDescription>Paste your current LinkedIn profile text</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Paste your LinkedIn profile content here..." 
                className="h-80 resize-none bg-white dark:bg-gray-800"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              />
              <Button 
                onClick={handleOptimize} 
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                disabled={isOptimizing || !profile.trim()}
              >
                {isOptimizing ? "Optimizing..." : "Optimize Profile"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Optimized Profile</span>
                {optimizedProfile && (
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </Button>
                )}
              </CardTitle>
              <CardDescription>SEO optimized for better visibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`h-80 overflow-auto p-4 rounded-md border ${
                optimizedProfile ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900/50'
              }`}>
                {optimizedProfile ? (
                  <div className="whitespace-pre-line text-gray-800 dark:text-gray-200">
                    {optimizedProfile.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    <p>Your optimized profile will appear here</p>
                  </div>
                )}
              </div>
              {optimizedProfile && (
                <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-md flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div className="text-sm text-green-700 dark:text-green-300">
                    <p className="font-medium">Profile Optimized</p>
                    <p className="mt-1">Your profile has been enhanced with industry-specific keywords and improved formatting for better visibility.</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">LinkedIn Optimization Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Use Industry Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Include relevant industry keywords throughout your profile to improve visibility in LinkedIn searches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quantify Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Use numbers to showcase your accomplishments, like "Increased sales by 25%" instead of "Increased sales".
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compelling Headline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Create a headline that goes beyond just your job title. Include your specialty and value proposition.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Engage Regularly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Post content, comment on others' posts, and engage with your network to maintain visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinOptimizerPage;
