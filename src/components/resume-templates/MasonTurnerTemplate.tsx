
import React from 'react';
import { ResumeData } from '../../types/resume';

interface MasonTurnerTemplateProps {
  resumeData: ResumeData;
}

const MasonTurnerTemplate: React.FC<MasonTurnerTemplateProps> = ({ resumeData }) => {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white mx-auto border border-gray-200 shadow-sm">
      <div className="p-8">
        {/* Header */}
        <div className="border-b-2 border-indigo-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.personalInfo.fullName}</h1>
          <h2 className="text-lg text-indigo-600 mb-4">{resumeData.personalInfo.jobTitle}</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {resumeData.personalInfo.email && (
              <span>{resumeData.personalInfo.email}</span>
            )}
            {resumeData.personalInfo.phone && (
              <span>{resumeData.personalInfo.phone}</span>
            )}
            {resumeData.personalInfo.location && (
              <span>{resumeData.personalInfo.location}</span>
            )}
            {resumeData.personalInfo.website && (
              <a href={resumeData.personalInfo.website} className="text-indigo-600 hover:underline">
                {resumeData.personalInfo.website}
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        {resumeData.summary && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-indigo-200 pb-2">
              Professional Summary
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{resumeData.summary}</p>
          </div>
        )}

        {/* Technical Skills */}
        {Object.keys(resumeData.skills).length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-indigo-200 pb-2">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-base font-medium text-gray-900 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm border border-indigo-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-indigo-200 pb-2">
              Software Engineering Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-base font-medium text-gray-900">{exp.title}</h4>
                      <div className="text-indigo-600">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-indigo-200 pb-2">
              Technical Projects
            </h3>
            <div className="space-y-4">
              {resumeData.projects.map((project, index) => (
                <div key={index}>
                  <h4 className="text-base font-medium text-gray-900">{project.name}</h4>
                  {/* Display project description instead of non-existent technologies */}
                  <p className="text-indigo-600 mb-2">{project.description}</p>
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-indigo-200 pb-2">
              Education
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{edu.degree}</h4>
                    <div className="text-indigo-600">
                      {edu.school} • {edu.location}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasonTurnerTemplate;
