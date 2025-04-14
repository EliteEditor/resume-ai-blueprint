
import React from 'react';
import { ResumeData } from '../../types/resume';

interface StandardTemplateProps {
  resumeData: ResumeData;
}

const StandardTemplate: React.FC<StandardTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800 font-['Roboto',sans-serif] shadow-lg">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-emerald-700">{resumeData.personalInfo.fullName}</h1>
        <p className="text-emerald-600 font-medium mb-2">{resumeData.personalInfo.jobTitle}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {resumeData.personalInfo.phone && (
            <span className="flex items-center">
              <span className="mr-1">📱</span>
              {resumeData.personalInfo.phone}
            </span>
          )}
          {resumeData.personalInfo.email && (
            <span className="flex items-center">
              <span className="mr-1">📧</span>
              {resumeData.personalInfo.email}
            </span>
          )}
          {resumeData.personalInfo.location && (
            <span className="flex items-center">
              <span className="mr-1">📍</span>
              {resumeData.personalInfo.location}
            </span>
          )}
          {resumeData.personalInfo.website && (
            <span className="flex items-center">
              <span className="mr-1">🔗</span>
              {resumeData.personalInfo.website}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {resumeData.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1">SUMMARY</h2>
          <p className="mt-2">{resumeData.summary}</p>
        </section>
      )}

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1">PROFESSIONAL EXPERIENCE</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <div>
                <h3 className="font-bold">{exp.title}</h3>
                <p className="text-emerald-600">{exp.company}</p>
              </div>
              <div className="text-right">
                <p>{exp.location}</p>
                <p>{exp.startDate} - {exp.endDate}</p>
              </div>
            </div>
            <ul className="list-disc ml-5">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="mb-1">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1">SKILLS</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-bold mb-1">{category}</h3>
              <p>{skills.join(' • ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1">EDUCATION</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="font-bold">{edu.degree}</h3>
                <p>{edu.school}</p>
              </div>
              <div className="text-right">
                <p>{edu.location}</p>
                <p>{edu.startDate} - {edu.endDate}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Achievements */}
      {resumeData.achievements && resumeData.achievements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1">ACHIEVEMENTS</h2>
          <ul className="list-disc ml-5 mt-2">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index} className="mb-1 break-words">{achievement}</li>
            ))}
          </ul>
        </section>
      )}

      {/* References */}
      {resumeData.references && resumeData.references.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1">REFERENCES</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {resumeData.references.map((ref, index) => (
              <div key={index}>
                <p className="font-bold">{ref.name}</p>
                <p>{ref.title}</p>
                <p>{ref.contact}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default StandardTemplate;
