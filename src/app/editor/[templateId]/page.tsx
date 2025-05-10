
import React from 'react';
import Link from 'next/link';
import DirectEditTemplate from '@/components/DirectEditTemplate';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface EditorPageProps {
  params: {
    templateId: string;
  };
}

const EditorPage: React.FC<EditorPageProps> = ({ params }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6 sm:p-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/templates">
            <Button variant="ghost" className="pl-0 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Button>
          </Link>
        </div>
        
        {/* Header and Progress */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">Edit Your Resume</h1>
            <p className="text-gray-600 mt-1">Customize your resume to match your experience and the job requirements</p>
          </div>
          <div className="text-sm text-gray-600 flex items-center">
            <span className="font-medium text-blue-600">Step 2</span>
            <span className="mx-1">/</span>
            <span>6</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={33} className="h-2 bg-gray-100" />
        </div>

        {/* Template editing interface with improved styling */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <DirectEditTemplate />
        </div>
        
        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Step
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
