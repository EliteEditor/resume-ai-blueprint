
import React from 'react';
import { ResumeData } from '../../types/resume';

interface AnalystTemplateProps {
  resumeData: ResumeData;
}

const AnalystTemplate: React.FC<AnalystTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800 font-['Open_Sans',sans-serif] shadow-lg">
      <div className="grid grid-cols-12 gap-6">
        {/* Left sidebar */}
        <div className="col-span-4 bg-emerald-700 text-white p-6 rounded-l-lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold uppercase mb-2">{resumeData.personalInfo.fullName}</h1>
          </div>
          
          {/* Achievements Section */}
          <div className="mb-8">
            <h2 className="uppercase text-lg font-bold border-b border-white pb-1 mb-4">ACHIEVEMENTS</h2>
            {resumeData.achievements && resumeData.achievements.length > 0 && (
              <ul className="space-y-4">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm break-words">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="uppercase text-lg font-bold border-b border-white pb-1 mb-4">SKILLS</h2>
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <p className="text-sm font-semibold mb-2">{category}</p>
                <p className="text-sm">{skills.join(' • ')}</p>
              </div>
            ))}
          </div>
          
          {/* Certifications Section */}
          <div className="mb-8">
            <h2 className="uppercase text-lg font-bold border-b border-white pb-1 mb-4">CERTIFICATION</h2>
            {resumeData.certifications && resumeData.certifications.map((cert, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-semibold">{cert.name}</p>
                <p className="text-sm">{cert.issuer}</p>
                <p className="text-xs">{cert.date}</p>
              </div>
            ))}
          </div>
          
          {/* Projects Section */}
          <div className="mb-6">
            <h2 className="uppercase text-lg font-bold border-b border-white pb-1 mb-4">PROJECTS</h2>
            {resumeData.projects && resumeData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-semibold mb-1">{project.name}</h3>
                <p className="text-xs">{project.startDate} - {project.endDate}</p>
                <p className="text-sm mt-1 break-words">{project.description}</p>
                {project.highlights && (
                  <ul className="list-disc ml-4 mt-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs break-words">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right content area */}
        <div className="col-span-8 p-6">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm mb-4">
            <div className="flex items-center">
              <span className="mr-1">📧</span>
              <span>{resumeData.personalInfo.email}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🔗</span>
              <span>{resumeData.personalInfo.linkedIn || resumeData.personalInfo.website}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📍</span>
              <span>{resumeData.personalInfo.location}</span>
            </div>
            {resumeData.personalInfo.phone && (
              <div className="flex items-center">
                <span className="mr-1">📱</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
          </div>
          
          {/* Job Title */}
          <div className="mb-6">
            <h3 className="text-emerald-700 text-lg font-semibold">{resumeData.personalInfo.jobTitle}</h3>
          </div>
          
          {/* Summary */}
          <div className="mb-6">
            <h2 className="uppercase text-lg font-bold border-b border-gray-300 pb-1 mb-3">SUMMARY</h2>
            <p className="text-sm">{resumeData.summary}</p>
          </div>
          
          {/* Experience */}
          <div className="mb-6">
            <h2 className="uppercase text-lg font-bold border-b border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <div>
                    <h3 className="text-sm font-bold">{exp.title}</h3>
                    <p className="text-emerald-700 text-sm">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-4 mt-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm mb-1 break-words">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="mb-6">
            <h2 className="uppercase text-lg font-bold border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-sm font-bold">{edu.degree}</h3>
                    <p className="text-sm">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Display a green icon in the top right */}
          <div className="absolute top-8 right-8 bg-emerald-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystTemplate;
