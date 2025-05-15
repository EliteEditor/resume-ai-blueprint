
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

interface MinimalTechTemplateProps {
  resumeData: ResumeData;
}

const MinimalTechTemplate: React.FC<MinimalTechTemplateProps> = ({ resumeData }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-900 mx-auto shadow-lg p-10">
      {/* Header with name and title */}
      <header className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{resumeData.fullName}</h1>
        <h2 className="text-xl text-gray-500 dark:text-gray-400 mt-1">{resumeData.jobTitle}</h2>
      </header>
      
      {/* Two column layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left column */}
        <div className="col-span-1 space-y-8">
          {/* Contact */}
          <section>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-300 mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {resumeData.phone && <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">📞</div>
                <span>{resumeData.phone}</span>
              </div>}
              {resumeData.email && <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">✉️</div>
                <span>{resumeData.email}</span>
              </div>}
              {resumeData.linkedin && <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">🔗</div>
                <span>{resumeData.linkedin}</span>
              </div>}
              {resumeData.location && <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">📍</div>
                <span>{resumeData.location}</span>
              </div>}
            </div>
          </section>
          
          {/* Skills */}
          <section>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-300 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-sm text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          
          {/* Industry Expertise */}
          <section>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-300 mb-3">Expertise</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                  <span>Field or industry</span>
                  <span>33%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-sm">
                  <div className="h-full w-1/3 bg-gray-400 dark:bg-gray-600"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Right column */}
        <div className="col-span-2 space-y-8">
          {/* Summary */}
          <section>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-300 mb-3">Profile</h3>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{resumeData.summary}</p>
          </section>
          
          {/* Experience */}
          <section>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-300 mb-3">Experience</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-end mb-1">
                  <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Job Title</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-500">Date Period</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mb-2">Company Name</div>
                <ul className="list-disc list-outside ml-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Accomplishment with quantifiable results</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Education */}
          <section>
            <h3 className="text-sm tracking-widest uppercase font-semibold text-gray-700 dark:text-gray-300 mb-3">Education</h3>
            <div>
              <div className="flex justify-between items-end mb-1">
                <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Degree and Field of Study</h4>
                <span className="text-xs text-gray-500 dark:text-gray-500">Date Period</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">School or University</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MinimalTechTemplate;
