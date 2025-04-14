import React from 'react';
import { ResumeData } from '../../types/resume';

interface StandardTemplateProps {
  resumeData: ResumeData;
}

const StandardTemplate: React.FC<StandardTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{resumeData.personalInfo.fullName}</h1>
        <p className="text-emerald-500 font-medium mb-2">{resumeData.personalInfo.jobTitle}</p>
        <div className="flex gap-4 text-sm">
          <span>{resumeData.personalInfo.phone}</span>
          <span>{resumeData.personalInfo.email}</span>
          <span>{resumeData.personalInfo.location}</span>
          {resumeData.personalInfo.website && (
            <span>{resumeData.personalInfo.website}</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {resumeData.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase">Summary</h2>
          <p>{resumeData.summary}</p>
        </section>
      )}

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase">Professional Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">{exp.title}</h3>
                <p className="text-emerald-500">{exp.company}</p>
              </div>
              <div className="text-right">
                <p>{exp.location}</p>
                <p>{exp.startDate} - {exp.endDate}</p>
              </div>
            </div>
            <ul className="list-disc ml-4">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="mb-1">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 uppercase">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
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
        <h2 className="text-lg font-bold mb-3 uppercase">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between">
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
          <h2 className="text-lg font-bold mb-2 uppercase">Achievements</h2>
          <ul className="list-disc ml-4">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index} className="mb-1">{achievement}</li>
            ))}
          </ul>
        </section>
      )}

      {/* References */}
      {resumeData.references && resumeData.references.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-2 uppercase">References</h2>
          <div className="grid grid-cols-2 gap-4">
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