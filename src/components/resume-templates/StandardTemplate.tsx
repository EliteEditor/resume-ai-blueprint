
import React from 'react';
import { ResumeData } from '../../types/resume';

interface StandardTemplateProps {
  resumeData: ResumeData;
  isEditable?: boolean;
  onChangeData?: (field: string, value: string) => void;
  onAddSkill?: () => void;
  onChangeSkill?: (category: string, index: number, value: string) => void;
  onRemoveSkill?: (category: string, index: number) => void;
  onAddCategory?: (category: string) => void;
  onRemoveCategory?: (category: string) => void;
}

const StandardTemplate: React.FC<StandardTemplateProps> = ({ 
  resumeData,
  isEditable = false,
  onChangeData = () => {},
  onAddSkill = () => {},
  onChangeSkill = () => {},
  onRemoveSkill = () => {},
  onAddCategory = () => {},
  onRemoveCategory = () => {}
}) => {
  // Handle field focus to clear placeholder text
  const handleFieldFocus = (field: string) => {
    // Clear placeholder text when field is focused
    if (isEditable) {
      const personalInfo = resumeData.personalInfo;
      
      if (field === 'fullName' && (personalInfo.fullName === 'YOUR NAME' || personalInfo.fullName === '')) {
        onChangeData('personalInfo.fullName', '');
      } else if (field === 'jobTitle' && (personalInfo.jobTitle === 'Job Title' || personalInfo.jobTitle === '')) {
        onChangeData('personalInfo.jobTitle', '');
      } else if (field === 'phone' && (personalInfo.phone === 'Phone' || personalInfo.phone === '')) {
        onChangeData('personalInfo.phone', '');
      } else if (field === 'email' && (personalInfo.email === 'Email' || personalInfo.email === '')) {
        onChangeData('personalInfo.email', '');
      } else if (field === 'location' && (personalInfo.location === 'Location' || personalInfo.location === '')) {
        onChangeData('personalInfo.location', '');
      } else if (field === 'website' && (personalInfo.website === 'Website' || personalInfo.website === '')) {
        onChangeData('personalInfo.website', '');
      } else if (field === 'summary' && (resumeData.summary === 'Write a brief summary about yourself...' || resumeData.summary === '')) {
        onChangeData('summary', '');
      }
    }
  };

  return (
    <div className="p-8 max-w-[850px] mx-auto bg-white text-gray-800 font-['Roboto',sans-serif] shadow-lg resume-content">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-emerald-700 resume-heading">{resumeData.personalInfo.fullName}</h1>
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
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1 resume-heading">SUMMARY</h2>
          <p className="mt-2 resume-body whitespace-pre-wrap">{resumeData.summary}</p>
        </section>
      )}

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1 resume-heading">PROFESSIONAL EXPERIENCE</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <div>
                <h3 className="font-bold">{exp.title}</h3>
                <p className="text-emerald-600">{exp.company}</p>
              </div>
              <div className="text-right text-sm">
                <p>{exp.location}</p>
                <p>{exp.startDate} - {exp.endDate}</p>
              </div>
            </div>
            <ul className="list-disc ml-5">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="mb-1 resume-body whitespace-pre-wrap">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1 resume-heading">SKILLS</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="font-bold mb-1">{category}</h3>
              <p className="resume-body">{skills.join(' • ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1 resume-heading">EDUCATION</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="font-bold">{edu.degree}</h3>
                <p>{edu.school}</p>
              </div>
              <div className="text-right text-sm">
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
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1 resume-heading">ACHIEVEMENTS</h2>
          <ul className="list-disc ml-5 mt-2">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index} className="mb-1 break-words resume-body whitespace-pre-wrap">{achievement}</li>
            ))}
          </ul>
        </section>
      )}

      {/* References */}
      {resumeData.references && resumeData.references.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1 resume-heading">REFERENCES</h2>
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
