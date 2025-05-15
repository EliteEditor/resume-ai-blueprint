
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

interface ProfessionalTemplateProps {
  resumeData: ResumeData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ resumeData }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-800 mx-auto shadow-lg">
      {/* Header with name and title */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white px-8 py-6">
        <h1 className="text-3xl font-bold">{resumeData.fullName}</h1>
        <h2 className="text-xl mt-1">{resumeData.jobTitle}</h2>
      </div>
      
      {/* Contact info strip */}
      <div className="bg-blue-100 dark:bg-blue-900/30 px-8 py-3 flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300">
        {resumeData.phone && <div className="flex items-center gap-1">📞 {resumeData.phone}</div>}
        {resumeData.email && <div className="flex items-center gap-1">✉️ {resumeData.email}</div>}
        {resumeData.linkedin && <div className="flex items-center gap-1">🔗 {resumeData.linkedin}</div>}
        {resumeData.location && <div className="flex items-center gap-1">📍 {resumeData.location}</div>}
      </div>

      <div className="px-8 py-6 grid grid-cols-3 gap-6">
        {/* Left sidebar */}
        <div className="col-span-1 border-r border-gray-200 dark:border-gray-700 pr-4">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase border-b border-gray-200 dark:border-gray-700 pb-1">Skills</h3>
            <ul className="space-y-1">
              {resumeData.skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-500 dark:text-blue-400">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase border-b border-gray-200 dark:border-gray-700 pb-1">Industry Expertise</h3>
            <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded-full"></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Field or industry</div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="col-span-2">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase border-b border-gray-200 dark:border-gray-700 pb-1">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{resumeData.summary}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase border-b border-gray-200 dark:border-gray-700 pb-1">Experience</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Job Title</h4>
                    <div className="text-gray-600 dark:text-gray-400">Company Name</div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Date Period</div>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Accomplishment details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase border-b border-gray-200 dark:border-gray-700 pb-1">Education</h3>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Degree and Field of Study</h4>
                  <div className="text-gray-600 dark:text-gray-400">School or University</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Date Period</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
