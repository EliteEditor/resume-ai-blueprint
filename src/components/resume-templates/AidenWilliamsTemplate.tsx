import React from 'react';
import { ResumeData } from '../../types/resume';

interface AidenWilliamsTemplateProps {
  resumeData: ResumeData;
}

const AidenWilliamsTemplate: React.FC<AidenWilliamsTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800">
      {/* Header with professional project manager style */}
      <header className="mb-8 border-b-4 border-indigo-600 pb-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{resumeData.personalInfo.fullName}</h1>
        <p className="text-indigo-600 text-xl mb-4">{resumeData.personalInfo.jobTitle}</p>
        <div className="flex flex-wrap gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span>{resumeData.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{resumeData.personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{resumeData.personalInfo.location}</span>
          </div>
          {resumeData.personalInfo.website && (
            <div className="flex items-center gap-2">
              <span>{resumeData.personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary with project management focus */}
      {resumeData.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">SUMMARY</h2>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-600">
            <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
          </div>
        </section>
      )}

      {/* Experience with project timeline style */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">EXPERIENCE</h2>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full before:shadow-lg">
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">{exp.title}</h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-gray-600">
                    <p>{exp.location}</p>
                    <p className="font-medium">{exp.startDate} - {exp.endDate}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 list-disc ml-5">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills with project management focus */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">SKILLS</h2>
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white text-indigo-600 px-3 py-1 rounded-md text-sm border border-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education with clean layout */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">EDUCATION</h2>
        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{edu.degree}</h3>
                  <p className="text-indigo-600">{edu.school}</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>{edu.location}</p>
                  <p>{edu.startDate} - {edu.endDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements with project impact focus */}
      {resumeData.achievements && resumeData.achievements.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">KEY ACHIEVEMENTS</h2>
          <div className="grid grid-cols-1 gap-4">
            {resumeData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-indigo-600 font-bold text-xl">•</span>
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AidenWilliamsTemplate; 