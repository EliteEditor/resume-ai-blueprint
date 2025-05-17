
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

interface Education {
  degree: string;
  school: string;
  period: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

interface Project {
  name: string;
  period: string;
  description: string;
  highlights: string[];
}

interface ResumeData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  linkedin: string;
  location: string;
  skills: string[];
  summary: string;
  profileImage?: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

interface CreativeTemplateProps {
  resumeData: ResumeData;
  isEditable?: boolean;
  onChangeData?: (field: string, value: string | undefined) => void;
  onChangeSkill?: (index: number, value: string) => void;
  onAddSkill?: () => void;
  onRemoveSkill?: (index: number) => void;
  onAddEducation?: () => void;
  onUpdateEducation?: (index: number, field: string, value: string) => void;
  onRemoveEducation?: (index: number) => void;
  onAddExperience?: () => void;
  onUpdateExperience?: (index: number, field: string, value: any) => void;
  onUpdateExperienceHighlight?: (expIndex: number, highlightIndex: number, value: string) => void;
  onAddExperienceHighlight?: (expIndex: number) => void;
  onRemoveExperienceHighlight?: (expIndex: number, highlightIndex: number) => void;
  onRemoveExperience?: (index: number) => void;
  onAddProject?: () => void;
  onUpdateProject?: (index: number, field: string, value: any) => void;
  onUpdateProjectHighlight?: (projectIndex: number, highlightIndex: number, value: string) => void;
  onAddProjectHighlight?: (projectIndex: number) => void;
  onRemoveProjectHighlight?: (projectIndex: number, highlightIndex: number) => void;
  onRemoveProject?: (index: number) => void;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ 
  resumeData, 
  isEditable = false,
  onChangeData = () => {},
  onChangeSkill = () => {},
  onAddSkill = () => {},
  onRemoveSkill = () => {},
  onAddEducation = () => {},
  onUpdateEducation = () => {},
  onRemoveEducation = () => {},
  onAddExperience = () => {},
  onUpdateExperience = () => {},
  onUpdateExperienceHighlight = () => {},
  onAddExperienceHighlight = () => {},
  onRemoveExperienceHighlight = () => {},
  onRemoveExperience = () => {},
  onAddProject = () => {},
  onUpdateProject = () => {},
  onUpdateProjectHighlight = () => {},
  onAddProjectHighlight = () => {},
  onRemoveProjectHighlight = () => {},
  onRemoveProject = () => {}
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Handle field click for initial selection
  const handleFieldFocus = (field: string) => {
    if (field === 'fullName' && resumeData.fullName === 'YOUR NAME') {
      onChangeData('fullName', '');
    } else if (field === 'jobTitle' && resumeData.jobTitle === 'The role you are applying for?') {
      onChangeData('jobTitle', '');
    } else if (field === 'summary' && resumeData.summary === 'Brief overview of your professional background and career objectives...') {
      onChangeData('summary', '');
    }
  };

  // Handle skill focus for initial value
  const handleSkillFocus = (index: number) => {
    if (resumeData.skills[index] === 'Your Skill' || resumeData.skills[index] === 'New Skill') {
      onChangeSkill(index, '');
    }
  };

  // Handle profile image upload
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        onChangeData('profileImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-800 mx-auto shadow-lg resume-content print:shadow-none print:border-0 overflow-hidden">
      {/* Header Section with Accent Color */}
      <div className="bg-purple-600 dark:bg-purple-800 p-8 text-white print:bg-purple-700 print:text-white relative">
        <div className="flex items-center space-x-6">
          {/* Profile Image */}
          <div className="relative min-w-[100px]">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-300 dark:border-purple-500 print:border-purple-300 bg-white flex items-center justify-center">
              {resumeData.profileImage ? (
                <img 
                  src={resumeData.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-purple-300 text-4xl">
                  {resumeData.fullName?.charAt(0) || "?"}
                </div>
              )}
            </div>
            {isEditable && (
              <label 
                htmlFor="profile-upload" 
                className="absolute bottom-0 right-0 bg-purple-800 hover:bg-purple-900 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer print:hidden"
              >
                +
                <input 
                  id="profile-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden"
                  onChange={handleProfileImageChange} 
                />
              </label>
            )}
          </div>
          
          {/* Name and Title */}
          <div className="flex-1">
            {isEditable ? (
              <input
                type="text"
                value={resumeData.fullName}
                onChange={(e) => onChangeData('fullName', e.target.value)}
                onFocus={() => handleFieldFocus('fullName')}
                className="text-4xl font-bold w-full border-none focus:outline-none focus:ring-0 mb-2 bg-transparent text-white print:text-white"
                placeholder="YOUR NAME"
              />
            ) : (
              <h1 className="text-4xl font-bold mb-2 text-white print:text-white">{resumeData.fullName}</h1>
            )}
            
            {isEditable ? (
              <input
                type="text"
                value={resumeData.jobTitle}
                onChange={(e) => onChangeData('jobTitle', e.target.value)}
                onFocus={() => handleFieldFocus('jobTitle')}
                className="text-xl w-full border-none focus:outline-none focus:ring-0 mb-6 bg-transparent text-purple-100 dark:text-purple-100 print:text-purple-100"
                placeholder="The role you are applying for?"
              />
            ) : (
              <p className="text-xl mb-6 text-purple-100 dark:text-purple-100 print:text-purple-100">{resumeData.jobTitle}</p>
            )}
          </div>
        </div>
        
        {/* Contact Information Row */}
        <div className="flex flex-wrap gap-4 text-sm text-purple-100 dark:text-purple-100 print:text-purple-100 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-purple-200 dark:text-purple-200 print:text-purple-200">📞</span>
            {isEditable ? (
              <input
                type="text"
                value={resumeData.phone}
                onChange={(e) => onChangeData('phone', e.target.value)}
                className="border-b border-purple-400 dark:border-purple-500 focus:border-white dark:focus:border-white focus:ring-0 bg-transparent text-white print:text-white"
                placeholder="Phone"
              />
            ) : (
              <span>{resumeData.phone || "Phone"}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-200 dark:text-purple-200 print:text-purple-200">✉️</span>
            {isEditable ? (
              <input
                type="text"
                value={resumeData.email}
                onChange={(e) => onChangeData('email', e.target.value)}
                className="border-b border-purple-400 dark:border-purple-500 focus:border-white dark:focus:border-white focus:ring-0 bg-transparent text-white print:text-white"
                placeholder="Email"
              />
            ) : (
              <span>{resumeData.email || "Email"}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-200 dark:text-purple-200 print:text-purple-200">🔗</span>
            {isEditable ? (
              <input
                type="text"
                value={resumeData.linkedin}
                onChange={(e) => onChangeData('linkedin', e.target.value)}
                className="border-b border-purple-400 dark:border-purple-500 focus:border-white dark:focus:border-white focus:ring-0 bg-transparent text-white print:text-white"
                placeholder="LinkedIn/Portfolio"
              />
            ) : (
              <span>{resumeData.linkedin || "LinkedIn/Portfolio"}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-200 dark:text-purple-200 print:text-purple-200">📍</span>
            {isEditable ? (
              <input
                type="text"
                value={resumeData.location}
                onChange={(e) => onChangeData('location', e.target.value)}
                className="border-b border-purple-400 dark:border-purple-500 focus:border-white dark:focus:border-white focus:ring-0 bg-transparent text-white print:text-white"
                placeholder="Location"
              />
            ) : (
              <span>{resumeData.location || "Location"}</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 p-8 print:text-black">
        {/* Left Column */}
        <div className="col-span-1 space-y-8">
          {/* Skills Section */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase border-b-2 border-purple-200 dark:border-purple-800 pb-1 print:text-purple-700 print:border-purple-300">SKILLS</h2>
            <div className="space-y-2">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="text-purple-500 dark:text-purple-400 print:text-purple-600">•</span>
                  {isEditable ? (
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => onChangeSkill(index, e.target.value)}
                        onFocus={() => handleSkillFocus(index)}
                        className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                        placeholder="Your skill"
                      />
                      <button 
                        onClick={() => onRemoveSkill(index)}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                        type="button"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <span className="dark:text-gray-300">{skill}</span>
                  )}
                </div>
              ))}
              {isEditable && (
                <button
                  onClick={onAddSkill}
                  className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-2 print:hidden"
                  type="button"
                >
                  + Add Skill
                </button>
              )}
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase border-b-2 border-purple-200 dark:border-purple-800 pb-1 print:text-purple-700 print:border-purple-300">EDUCATION</h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="group">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => onUpdateEducation(index, 'degree', e.target.value)}
                    className="text-base font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                    placeholder="Degree and Field of Study"
                  />
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => onUpdateEducation(index, 'school', e.target.value)}
                    className="text-purple-600 dark:text-purple-400 w-full border-none focus:outline-none focus:ring-0 mt-1 text-sm bg-transparent print:text-purple-700"
                    placeholder="School or University"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => onUpdateEducation(index, 'period', e.target.value)}
                      className="flex-1 text-sm text-gray-500 dark:text-gray-400 border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                      placeholder="Date Period"
                    />
                    {isEditable && index > 0 && (
                      <button 
                        onClick={() => onRemoveEducation(index)}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                        type="button"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {isEditable && (
              <button 
                onClick={onAddEducation} 
                className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-4 print:hidden" 
                type="button"
              >
                + Add Education
              </button>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-8">
          {/* Summary Section */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase border-b-2 border-purple-200 dark:border-purple-800 pb-1 print:text-purple-700 print:border-purple-300">SUMMARY</h2>
            {isEditable ? (
              <textarea
                value={resumeData.summary}
                onChange={(e) => onChangeData('summary', e.target.value)}
                onFocus={() => handleFieldFocus('summary')}
                className="w-full min-h-[100px] border-gray-200 dark:border-gray-700 bg-transparent rounded focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 dark:text-gray-300 print:text-black print:border-gray-300"
                placeholder="Briefly explain why you're a great fit for the role..."
              />
            ) : (
              <p className="text-gray-600 dark:text-gray-300 print:text-gray-700">{resumeData.summary}</p>
            )}
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase border-b-2 border-purple-200 dark:border-purple-800 pb-1 print:text-purple-700 print:border-purple-300">EXPERIENCE</h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp, expIndex) => (
                <div key={expIndex} className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => onUpdateExperience(expIndex, 'title', e.target.value)}
                        className="text-base font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                        placeholder="Job Title"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => onUpdateExperience(expIndex, 'company', e.target.value)}
                        className="text-purple-600 dark:text-purple-400 w-full border-none focus:outline-none focus:ring-0 mt-1 text-sm bg-transparent print:text-purple-700"
                        placeholder="Company Name"
                      />
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => onUpdateExperience(expIndex, 'location', e.target.value)}
                        className="text-sm text-gray-500 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                        placeholder="Location"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => onUpdateExperience(expIndex, 'period', e.target.value)}
                        className="text-sm text-gray-500 dark:text-gray-400 text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                        placeholder="Date Period"
                      />
                      {isEditable && expIndex > 0 && (
                        <button 
                          onClick={() => onRemoveExperience(expIndex)}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                          type="button"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2 group/highlight">
                        <span className="text-purple-500 dark:text-purple-400 mt-1.5 print:text-purple-600">•</span>
                        <div className="flex-1 flex items-center gap-2">
                          <input
                            type="text"
                            value={highlight}
                            onChange={(e) => onUpdateExperienceHighlight(expIndex, highlightIndex, e.target.value)}
                            className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                            placeholder="Add your accomplishment..."
                          />
                          {isEditable && exp.highlights.length > 1 && (
                            <button 
                              onClick={() => onRemoveExperienceHighlight(expIndex, highlightIndex)}
                              className="opacity-0 group-hover/highlight:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                              type="button"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    {isEditable && (
                      <button 
                        onClick={() => onAddExperienceHighlight(expIndex)}
                        className="ml-4 text-purple-600 dark:text-purple-400 text-xs hover:text-purple-700 dark:hover:text-purple-300 print:hidden"
                        type="button"
                      >
                        + Add Highlight
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {isEditable && (
              <button 
                onClick={onAddExperience}
                className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-4 print:hidden" 
                type="button"
              >
                + Add Experience
              </button>
            )}
          </div>
          
          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase border-b-2 border-purple-200 dark:border-purple-800 pb-1 print:text-purple-700 print:border-purple-300">PROJECTS</h2>
            <div className="space-y-4">
              {resumeData.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="group">
                  <div className="flex justify-between items-start">
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => onUpdateProject(projectIndex, 'name', e.target.value)}
                      className="text-base font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                      placeholder="Project Name"
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={project.period}
                        onChange={(e) => onUpdateProject(projectIndex, 'period', e.target.value)}
                        className="text-sm text-gray-500 dark:text-gray-400 text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                        placeholder="Date Period"
                      />
                      {isEditable && projectIndex > 0 && (
                        <button 
                          onClick={() => onRemoveProject(projectIndex)}
                          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                          type="button"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={project.description}
                    onChange={(e) => onUpdateProject(projectIndex, 'description', e.target.value)}
                    className="text-sm text-gray-600 dark:text-gray-300 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                    placeholder="Project description..."
                  />
                  <div className="mt-2 space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2 group/highlight">
                        <span className="text-purple-500 dark:text-purple-400 mt-1.5 print:text-purple-600">•</span>
                        <div className="flex-1 flex items-center gap-2">
                          <input
                            type="text"
                            value={highlight}
                            onChange={(e) => onUpdateProjectHighlight(projectIndex, highlightIndex, e.target.value)}
                            className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                            placeholder="Add project highlight..."
                          />
                          {isEditable && project.highlights.length > 1 && (
                            <button 
                              onClick={() => onRemoveProjectHighlight(projectIndex, highlightIndex)}
                              className="opacity-0 group-hover/highlight:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                              type="button"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    {isEditable && (
                      <button 
                        onClick={() => onAddProjectHighlight(projectIndex)}
                        className="ml-4 text-purple-600 dark:text-purple-400 text-xs hover:text-purple-700 dark:hover:text-purple-300 print:hidden"
                        type="button"
                      >
                        + Add Highlight
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {isEditable && (
              <button 
                onClick={onAddProject}
                className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-4 print:hidden" 
                type="button"
              >
                + Add Project
              </button>
            )}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          .resume-content {
            padding: 0;
            margin: 0;
            box-shadow: none;
            border: none;
            font-size: 9pt !important;
          }
          .resume-content .bg-purple-600,
          .resume-content .bg-purple-800 {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            background-color: #9333ea !important;
          }
          .resume-content .text-white {
            color: white !important;
          }
          .resume-content .text-purple-100 {
            color: #f3e8ff !important;
          }
          button, .print-hidden {
            display: none !important;
          }
          input, textarea {
            border: none !important;
            padding: 0 !important;
            word-break: break-word !important;
            overflow: hidden !important;
          }
          h1, h2, h3, h4 {
            margin-bottom: 0.4em !important;
            page-break-after: avoid !important;
          }
          .resume-content h1 {
            font-size: 20pt !important;
          }
          .resume-content h2 {
            font-size: 14pt !important;
          }
          p, li, div, span {
            line-height: 1.4 !important;
            margin-bottom: 0.2em !important;
          }
        }
      `}} />
    </div>
  );
};

export default CreativeTemplate;
