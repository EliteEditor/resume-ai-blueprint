import React from 'react';
import DirectEditTemplate from '@/components/DirectEditTemplate';

interface EditorPageProps {
  params: {
    templateId: string;
  };
}

const EditorPage: React.FC<EditorPageProps> = ({ params }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header and Progress */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Edit Resume</h1>
          <div className="text-sm text-gray-500">Step 2 of 6</div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-full bg-gray-100 rounded-full mb-8">
          <div className="h-full w-2/6 bg-blue-500 rounded-full"></div>
        </div>

        {/* Template Editor */}
        <DirectEditTemplate />
      </div>
    </div>
  );
};

export default EditorPage; 