
import React from 'react';
import { ResumeData } from '../../types/resume';

interface EngineerTemplateProps {
  resumeData: ResumeData;
}

const EngineerTemplate: React.FC<EngineerTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800 font-['Source_Sans_Pro',sans-serif]">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-8">
          {/* Header with name and title */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-teal-700">{resumeData.personalInfo.fullName}</h1>
            <p className="text-teal-500 text-lg">{resumeData.personalInfo.jobTitle}</p>
            
            {/* Contact info */}
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="mr-1">📱</span>
                {resumeData.personalInfo.phone}
              </div>
              <div className="flex items-center">
                <span className="mr-1">📧</span>
                {resumeData.personalInfo.email}
              </div>
              {resumeData.personalInfo.github && (
                <div className="flex items-center">
                  <span className="mr-1">🔗</span>
                  {resumeData.personalInfo.github}
                </div>
              )}
              <div className="flex items-center">
                <span className="mr-1">📍</span>
                {resumeData.personalInfo.location}
              </div>
            </div>
          </header>
          
          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3">SUMMARY</h2>
            <p className="text-sm">{resumeData.summary}</p>
          </section>

          {/* Professional Experience */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3">PROFESSIONAL EXPERIENCE</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="text-teal-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase mb-3">EDUCATION</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-sm">{edu.school}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p>{edu.startDate} - {edu.endDate}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4">
          {/* Profile Image (if available) */}
          <div className="mb-6 bg-teal-800 rounded-lg p-4">
            <img 
              src="/public/lovable-uploads/79a60cbc-87d7-403d-a814-43dc48605414.png" 
              alt="Profile"
              className="w-32 h-32 object-cover rounded-lg mx-auto"
            />
          </div>

          {/* Achievements */}
          <section className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500">
            <h2 className="text-lg font-bold mb-3">ACHIEVEMENTS</h2>
            {resumeData.achievements && resumeData.achievements.length > 0 ? (
              <ul className="space-y-2">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic">Add your key achievements here</p>
            )}
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3">SKILLS</h2>
            <div className="space-y-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-sm mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strengths */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3">STRENGTHS</h2>
            <div className="space-y-3">
              {resumeData.strengths?.map((strength, index) => (
                <div key={index} className="flex gap-2">
                  <div className="text-teal-500 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{strength.title}</p>
                    <p className="text-xs text-gray-600">{strength.description}</p>
                  </div>
                </div>
              )) || (
                Object.entries(resumeData.skills).slice(0, 3).map(([category, skills]) => (
                  <div key={category} className="flex gap-2">
                    <div className="text-teal-500 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{category}</p>
                      <p className="text-xs text-gray-600">{skills.join(', ')}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* References (if available) */}
          {resumeData.references && resumeData.references.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-3">REFERENCES</h2>
              <div className="space-y-3">
                {resumeData.references.map((ref, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-semibold">{ref.name}</p>
                    <p>{ref.title}</p>
                    <p className="text-gray-600">{ref.contact}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Display a laptop icon in the top right */}
      <div className="absolute top-8 right-8 bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
};

export default EngineerTemplate;
