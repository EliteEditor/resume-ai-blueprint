
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

interface VisualTemplateProps {
  data: ResumeData;
}

const VisualTemplate: React.FC<VisualTemplateProps> = ({ data }) => {
  return (
    <div className="w-full bg-white text-black shadow-md resume-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{data.personalInfo.fullName || 'Your Name'}</h1>
            <div className="flex flex-col mt-2 gap-1 text-white/90">
              {data.personalInfo.email && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>{data.personalInfo.email}</span>
                </span>
              )}
              {data.personalInfo.phone && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>{data.personalInfo.phone}</span>
                </span>
              )}
              {data.personalInfo.location && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{data.personalInfo.location}</span>
                </span>
              )}
            </div>
          </div>
          
          {/* Visual element */}
          <div className="hidden md:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm">
            <span className="text-4xl font-bold">
              {data.personalInfo.fullName 
                ? data.personalInfo.fullName.split(' ').map(name => name[0]).join('')
                : 'YN'
              }
            </span>
          </div>
        </div>
        
        {/* Objective */}
        {data.objective && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-white/90">{data.objective}</p>
          </div>
        )}
      </div>

      <div className="p-8">
        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill} className="bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {data.workExperience.length > 0 && data.workExperience[0].company && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
              Work Experience
            </h2>
            
            <div className="border-l-2 border-primary/30 pl-4 space-y-6">
              {data.workExperience.map((exp) => (
                exp.company && (
                  <div key={exp.id} className="relative">
                    <div className="absolute -left-6 w-4 h-4 rounded-full bg-primary"></div>
                    <div>
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <h3 className="font-semibold text-gray-800 text-lg">{exp.position || 'Position'}</h3>
                        <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                          {exp.startDate || 'Start Date'} - {exp.endDate || 'Present'}
                        </span>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projects */}
          {data.projects.length > 0 && data.projects[0].title && (
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                Projects
              </h2>
              
              <div className="space-y-4">
                {data.projects.map((project) => (
                  project.title && (
                    <div key={project.id} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold text-gray-800">{project.title}</h3>
                      <p className="text-gray-700 mt-1">{project.description}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          <div className="space-y-8">
            {/* Education */}
            {data.education.length > 0 && data.education[0].institution && (
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                  Education
                </h2>
                
                {data.education.map((edu) => (
                  edu.institution && (
                    <div key={edu.id} className="mb-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                        <span className="text-sm text-primary font-medium">{edu.year}</span>
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
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Certifications
                </h2>
                
                {data.certifications.map((cert) => (
                  cert.name && (
                    <div key={cert.id} className="mb-3">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                        <span className="text-sm text-primary font-medium">{cert.year}</span>
                      </div>
                      <p className="text-gray-700">{cert.issuer}</p>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualTemplate;
