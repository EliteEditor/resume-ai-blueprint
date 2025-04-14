
import React from 'react';
import { ResumeData } from '../../types/resume';

interface ScientistTemplateProps {
  resumeData: ResumeData;
}

const ScientistTemplate: React.FC<ScientistTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800 font-['Roboto',sans-serif]">
      {/* Header with name and title */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{resumeData.personalInfo.fullName}</h1>
        <p className="text-blue-600 font-medium">{resumeData.personalInfo.jobTitle}</p>
        
        {/* Contact info */}
        <div className="flex flex-wrap gap-3 mt-2 text-sm">
          <div className="flex items-center">
            <span className="mr-1">📱</span>
            {resumeData.personalInfo.phone}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📧</span>
            {resumeData.personalInfo.email}
          </div>
          <div className="flex items-center">
            <span className="mr-1">🔗</span>
            {resumeData.personalInfo.linkedIn || "www.linkedin.com"}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📍</span>
            {resumeData.personalInfo.location}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">SUMMARY</h2>
            <p className="text-sm">{resumeData.summary}</p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-sm">{exp.title} - {exp.company}</h3>
                  </div>
                  <div className="text-sm">
                    <span className="mr-2">📍 {exp.location}</span>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>
                <ul className="list-disc ml-5 text-sm">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="mb-1">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
        
        <div className="col-span-1">
          {/* Tech Stack */}
          <section className="mb-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">TECH STACK</h2>
            <div className="grid grid-cols-2 gap-2">
              {resumeData.techStack?.map((tech, index) => (
                <div key={index} className="bg-white py-1 px-2 text-sm rounded">{tech}</div>
              )) || (
                Object.entries(resumeData.skills).slice(0, 1).map(([category, skills]) => (
                  skills.map((skill, i) => (
                    <div key={i} className="bg-white py-1 px-2 text-sm rounded">{skill}</div>
                  ))
                ))
              )}
            </div>
          </section>

          {/* Key Accomplishments */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3">KEY ACCOMPLISHMENTS</h2>
            <div className="space-y-3">
              {resumeData.keyAccomplishments?.map((accomplishment, index) => (
                <div key={index} className="text-sm">
                  <p className="font-semibold">{accomplishment}</p>
                </div>
              )) || (
                resumeData.achievements?.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-semibold">{achievement}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Strengths */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3">STRENGTHS</h2>
            <div className="space-y-4">
              {resumeData.strengths?.map((strength, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-center">
                    <span className="mr-2">✈️</span>
                    <p className="font-semibold">{strength.title}</p>
                  </div>
                  <p className="mt-1 ml-6">{strength.description}</p>
                </div>
              )) || (
                Object.entries(resumeData.skills).slice(1, 4).map(([category, skills]) => (
                  <div key={category} className="text-sm">
                    <div className="flex items-center">
                      <span className="mr-2">✈️</span>
                      <p className="font-semibold">{category}</p>
                    </div>
                    <p className="mt-1 ml-6">{skills.join(', ')}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Display a database icon in the top right */}
      <div className="absolute top-8 right-8 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      </div>
    </div>
  );
};

export default ScientistTemplate;
