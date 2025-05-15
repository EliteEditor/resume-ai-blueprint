
import React from 'react';
import { useTheme } from 'next-themes';

interface ResumeData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  linkedin: string;
  location: string;
  skills: string[];
  summary: string;
}

interface CreativeTemplateProps {
  resumeData: ResumeData;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ resumeData }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 dark:bg-gray-800 mx-auto shadow-lg">
      <div className="grid grid-cols-5">
        {/* Left sidebar - colorful accent */}
        <div className="col-span-1 bg-gradient-to-b from-pink-400 to-purple-600 dark:from-pink-600 dark:to-purple-800 min-h-[297mm] p-6 text-white">
          <div className="w-24 h-24 bg-white dark:bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600">
              {resumeData.fullName.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-white/20 pb-1">Contact</h3>
            <div className="space-y-2 text-sm">
              {resumeData.phone && <div className="flex items-center gap-2"><span>📞</span> {resumeData.phone}</div>}
              {resumeData.email && <div className="flex items-center gap-2"><span>✉️</span> {resumeData.email}</div>}
              {resumeData.linkedin && <div className="flex items-center gap-2"><span>🔗</span> {resumeData.linkedin}</div>}
              {resumeData.location && <div className="flex items-center gap-2"><span>📍</span> {resumeData.location}</div>}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-white/20 pb-1">Skills</h3>
            <div className="space-y-3">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="text-xs mb-1">{skill}</div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full"
                      style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="col-span-4 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">{resumeData.fullName}</h1>
            <h2 className="text-2xl font-light text-pink-500 dark:text-pink-400">{resumeData.jobTitle}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-600 dark:from-pink-500 dark:to-purple-500 mt-3"></div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{resumeData.summary}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase">Experience</h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-pink-300 dark:border-pink-600">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-pink-400 dark:bg-pink-500"></div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Job Title</h4>
                <div className="flex justify-between text-pink-500 dark:text-pink-400 italic mb-2">
                  <span>Company Name</span>
                  <span>Date Period</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Accomplishment details with metrics whenever possible</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase">Education</h3>
            <div className="pl-6 border-l-2 border-purple-300 dark:border-purple-600 relative">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-400 dark:bg-purple-500"></div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Degree and Field of Study</h4>
              <div className="flex justify-between text-purple-500 dark:text-purple-400 italic">
                <span>School or University</span>
                <span>Date Period</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
