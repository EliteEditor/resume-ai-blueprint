
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

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  return (
    <div className="w-full bg-white text-black shadow-md resume-shadow">
      {/* Header */}
      <div className="bg-primary text-white p-8">
        <h1 className="text-3xl font-bold">{data.personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap mt-3 gap-4 text-white/90">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
        
        {/* Objective */}
        {data.objective && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-white/90">{data.objective}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6 p-8">
        <div className="col-span-3 md:col-span-1">
          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3 text-primary border-b border-gray-200 pb-1">Skills</h2>
              <div className="flex flex-col gap-2">
                {data.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && data.education[0].institution && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3 text-primary border-b border-gray-200 pb-1">Education</h2>
              {data.education.map((edu) => (
                edu.institution && (
                  <div key={edu.id} className="mb-4">
                    <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                    <p className="text-gray-700">{edu.degree} in {edu.field}</p>
                    <p className="text-sm text-gray-600">{edu.year}</p>
                  </div>
                )
              ))}
            </div>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && data.certifications[0].name && (
            <div>
              <h2 className="text-xl font-bold mb-3 text-primary border-b border-gray-200 pb-1">Certifications</h2>
              {data.certifications.map((cert) => (
                cert.name && (
                  <div key={cert.id} className="mb-4">
                    <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                    <p className="text-gray-700">{cert.issuer}</p>
                    <p className="text-sm text-gray-600">{cert.year}</p>
                  </div>
                )
              ))}
            </div>
          )}
        </div>

        <div className="col-span-3 md:col-span-2">
          {/* Work Experience */}
          {data.workExperience.length > 0 && data.workExperience[0].company && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3 text-primary border-b border-gray-200 pb-1">Work Experience</h2>
              {data.workExperience.map((exp) => (
                exp.company && (
                  <div key={exp.id} className="mb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">{exp.position || 'Position'}</h3>
                      <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                        {exp.startDate || 'Start Date'} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  </div>
                )
              ))}
            </div>
          )}

          {/* Projects */}
          {data.projects.length > 0 && data.projects[0].title && (
            <div>
              <h2 className="text-xl font-bold mb-3 text-primary border-b border-gray-200 pb-1">Projects</h2>
              {data.projects.map((project) => (
                project.title && (
                  <div key={project.id} className="mb-5">
                    <h3 className="font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-gray-700 mt-1">{project.description}</p>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
