
import React from 'react';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
  };
  objective: string;
  workExperience: {
    id: number;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    id: number;
    title: string;
    description: string;
  }[];
  education: {
    id: number;
    institution: string;
    degree: string;
    field: string;
    year: string;
  }[];
  certifications: {
    id: number;
    name: string;
    issuer: string;
    year: string;
  }[];
}

interface CleanTemplateProps {
  data: ResumeData;
}

const CleanTemplate: React.FC<CleanTemplateProps> = ({ data }) => {
  return (
    <div className="w-full bg-white text-black p-8 shadow-md resume-shadow">
      {/* Header */}
      <div className="text-center mb-6 pb-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold">{data.personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex justify-center items-center flex-wrap mt-2 gap-3 text-gray-600">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.email && data.personalInfo.phone && <span>•</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.phone && data.personalInfo.location && <span>•</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Objective */}
      {data.objective && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Professional Summary</h2>
          <p className="text-gray-700">{data.objective}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && data.workExperience[0].company && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Work Experience</h2>
          {data.workExperience.map((exp) => (
            exp.company && (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{exp.position || 'Position'}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate || 'Start Date'} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-gray-700 mt-1">{exp.description}</p>
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill} className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && data.projects[0].title && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Projects</h2>
          {data.projects.map((project) => (
            project.title && (
              <div key={project.id} className="mb-3">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && data.education[0].institution && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-gray-800">Education</h2>
          {data.education.map((edu) => (
            edu.institution && (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">{edu.year}</span>
                </div>
                <p className="text-gray-700">{edu.degree} in {edu.field}</p>
              </div>
            )
          ))}
        </div>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && data.certifications[0].name && (
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-800">Certifications</h2>
          {data.certifications.map((cert) => (
            cert.name && (
              <div key={cert.id} className="mb-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                  <span className="text-sm text-gray-600">{cert.year}</span>
                </div>
                <p className="text-gray-700">Issued by: {cert.issuer}</p>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default CleanTemplate;
