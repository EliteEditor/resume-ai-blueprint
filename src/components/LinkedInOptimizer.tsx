
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { CircleCheck, Sparkles, ClipboardCopy } from 'lucide-react';
import { optimizeLinkedIn } from '@/utils/apiService';

const LinkedInOptimizer: React.FC = () => {
  const [input, setInput] = useState('');
  const [optimizing, setOptimizing] = useState(false);
  const [results, setResults] = useState<{
    bio: string;
    headlines: string[];
    skills: string[];
  } | null>(null);

  const handleOptimize = async () => {
    if (!input.trim()) {
      toast.error("Please enter your current LinkedIn text");
      return;
    }

    setOptimizing(true);

    try {
      const response = await optimizeLinkedIn(input);
      
      if (response.error) {
        toast.error(response.error);
      } else if (response.data) {
        setResults(response.data);
        toast.success("LinkedIn profile optimized successfully!");
      }
    } catch (error) {
      toast.error("Failed to optimize LinkedIn content. Please try again.");
      console.error("LinkedIn optimization error:", error);
    } finally {
      setOptimizing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">LinkedIn Profile Optimizer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="p-6">
            <Label htmlFor="linkedin-input" className="mb-2 block text-base font-medium">
              Paste your current LinkedIn bio or job title
            </Label>
            <Textarea
              id="linkedin-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="I am a web developer with experience in JavaScript and React..."
              className="h-40 mb-4"
            />
            <Button 
              onClick={handleOptimize} 
              disabled={optimizing} 
              className="w-full flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {optimizing ? "Optimizing..." : "Optimize with AI"}
            </Button>
          </Card>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">How it works:</h2>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-medium">1</span>
                <span>Paste your current LinkedIn bio, headline, or job title</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-medium">2</span>
                <span>Click "Optimize" to generate AI-powered suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-medium">3</span>
                <span>Review the optimized content and copy what you like</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center font-medium">4</span>
                <span>Update your LinkedIn profile with the enhanced content</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div>
          {!results && !optimizing ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
              <Sparkles className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-2">Optimize your LinkedIn Profile</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enter your current LinkedIn content and let AI help you create a more impactful profile
              </p>
            </div>
          ) : optimizing ? (
            <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700">
              <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">Generating optimized content...</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
                  Our AI is analyzing your content and creating keyword-rich suggestions
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Optimized LinkedIn Bio</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex gap-2 items-center"
                    onClick={() => copyToClipboard(results!.bio)}
                  >
                    <ClipboardCopy className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
                  <p className="text-gray-700 dark:text-gray-300">{results!.bio}</p>
                </div>
                <div className="flex items-center gap-1 mt-2 text-green-600">
                  <CircleCheck className="h-4 w-4" />
                  <span className="text-sm">Keyword-rich and professional</span>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Headline Suggestions</h3>
                </div>
                <div className="space-y-3">
                  {results!.headlines.map((headline, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md flex justify-between items-center group">
                      <p className="text-gray-700 dark:text-gray-300">{headline}</p>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard(headline)}
                      >
                        <ClipboardCopy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Recommended Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results!.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={() => copyToClipboard(skill)}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkedInOptimizer;
