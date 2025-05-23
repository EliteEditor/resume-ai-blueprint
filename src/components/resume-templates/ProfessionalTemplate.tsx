
import React from 'react';

interface ResumeData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  linkedin: string;
  location: string;
  skills: string[];
  summary: string;
  education?: {
    degree: string;
    school: string;
    period: string;
  }[];
  experience?: {
    title: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  projects?: {
    name: string;
    period: string;
    description: string;
    highlights: string[];
  }[];
}

interface ProfessionalTemplateProps {
  resumeData: ResumeData;
  isEditable?: boolean;
  onChangeData?: (field: string, value: string) => void;
  onChangeSkill?: (index: number, value: string) => void;
  onAddSkill?: () => void;
  onRemoveSkill?: (index: number) => void;
  // Add education handlers
  onAddEducation?: () => void;
  onUpdateEducation?: (index: number, field: string, value: string) => void;
  onRemoveEducation?: (index: number) => void;
  // Add experience handlers
  onAddExperience?: () => void;
  onUpdateExperience?: (index: number, field: string, value: any) => void;
  onUpdateExperienceHighlight?: (expIndex: number, highlightIndex: number, value: string) => void;
  onAddExperienceHighlight?: (expIndex: number) => void;
  onRemoveExperienceHighlight?: (expIndex: number, highlightIndex: number) => void;
  onRemoveExperience?: (index: number) => void;
  // Add project handlers
  onAddProject?: () => void;
  onUpdateProject?: (index: number, field: string, value: any) => void;
  onUpdateProjectHighlight?: (projectIndex: number, highlightIndex: number, value: string) => void;
  onAddProjectHighlight?: (projectIndex: number) => void;
  onRemoveProjectHighlight?: (projectIndex: number, highlightIndex: number) => void;
  onRemoveProject?: (index: number) => void;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ 
  resumeData, 
  isEditable = false,
  onChangeData = () => {},
  onChangeSkill = () => {},
  onAddSkill = () => {},
  onRemoveSkill = () => {},
  // Initialize education handlers
  onAddEducation = () => {},
  onUpdateEducation = () => {},
  onRemoveEducation = () => {},
  // Initialize experience handlers
  onAddExperience = () => {},
  onUpdateExperience = () => {},
  onUpdateExperienceHighlight = () => {},
  onAddExperienceHighlight = () => {},
  onRemoveExperienceHighlight = () => {},
  onRemoveExperience = () => {},
  // Initialize project handlers
  onAddProject = () => {},
  onUpdateProject = () => {},
  onUpdateProjectHighlight = () => {},
  onAddProjectHighlight = () => {},
  onRemoveProjectHighlight = () => {},
  onRemoveProject = () => {}
}) => {
  // Handle field click for initial selection
  const handleFieldFocus = (field: string) => {
    if (field === 'fullName' && (resumeData.fullName === 'YOUR NAME' || resumeData.fullName === '')) {
      onChangeData('fullName', '');
    } else if (field === 'jobTitle' && (resumeData.jobTitle === 'The role you are applying for?' || resumeData.jobTitle === '')) {
      onChangeData('jobTitle', '');
    } else if (field === 'summary' && (resumeData.summary === 'Brief overview of your professional background and career objectives...' || resumeData.summary === '')) {
      onChangeData('summary', '');
    } else if (field === 'phone' && (resumeData.phone === 'Phone' || resumeData.phone === '')) {
      onChangeData('phone', '');
    } else if (field === 'email' && (resumeData.email === 'Email' || resumeData.email === '')) {
      onChangeData('email', '');
    } else if (field === 'linkedin' && (resumeData.linkedin === 'LinkedIn/Portfolio' || resumeData.linkedin === '')) {
      onChangeData('linkedin', '');
    } else if (field === 'location' && (resumeData.location === 'Location' || resumeData.location === '')) {
      onChangeData('location', '');
    }
  };

  // Handle skill focus for initial value
  const handleSkillFocus = (index: number) => {
    if (resumeData.skills[index] === 'Your Skill' || resumeData.skills[index] === 'New Skill' || resumeData.skills[index] === '') {
      onChangeSkill(index, '');
    }
  };

  // Handle experience field focus
  const handleExperienceFieldFocus = (index: number, field: string) => {
    if (!resumeData.experience) return;
    const exp = resumeData.experience[index];
    
    if (field === 'title' && (exp.title === 'Job Title' || exp.title === '')) {
      onUpdateExperience(index, 'title', '');
    } else if (field === 'company' && (exp.company === 'Company Name' || exp.company === '')) {
      onUpdateExperience(index, 'company', '');
    } else if (field === 'location' && (exp.location === 'Location' || exp.location === '')) {
      onUpdateExperience(index, 'location', '');
    } else if (field === 'period' && (exp.period === 'Date Period' || exp.period === '')) {
      onUpdateExperience(index, 'period', '');
    }
  };
  
  // Handle experience highlight focus
  const handleExperienceHighlightFocus = (expIndex: number, highlightIndex: number) => {
    if (!resumeData.experience) return;
    const highlight = resumeData.experience[expIndex].highlights[highlightIndex];
    
    if (highlight === 'Add your accomplishment...' || highlight === '') {
      onUpdateExperienceHighlight(expIndex, highlightIndex, '');
    }
  };
  
  // Handle education field focus
  const handleEducationFieldFocus = (index: number, field: string) => {
    if (!resumeData.education) return;
    const edu = resumeData.education[index];
    
    if (field === 'degree' && (edu.degree === 'Degree and Field of Study' || edu.degree === '')) {
      onUpdateEducation(index, 'degree', '');
    } else if (field === 'school' && (edu.school === 'School or University' || edu.school === '')) {
      onUpdateEducation(index, 'school', '');
    } else if (field === 'period' && (edu.period === 'Date Period' || edu.period === '')) {
      onUpdateEducation(index, 'period', '');
    }
  };

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-800 mx-auto p-12 shadow-lg resume-content print:shadow-none print:border-0">
      {/* Header Section */}
      <div className="mb-8">
        {isEditable ? (
          <input
            type="text"
            value={resumeData.fullName}
            onChange={(e) => onChangeData('fullName', e.target.value)}
            onFocus={() => handleFieldFocus('fullName')}
            className="text-4xl font-bold text-blue-700 dark:text-blue-300 w-full border-none focus:outline-none focus:ring-0 mb-2 bg-transparent print:text-blue-700"
            placeholder="YOUR NAME"
          />
        ) : (
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-2 print:text-blue-700">{resumeData.fullName}</h1>
        )}
        
        {isEditable ? (
          <input
            type="text"
            value={resumeData.jobTitle}
            onChange={(e) => onChangeData('jobTitle', e.target.value)}
            onFocus={() => handleFieldFocus('jobTitle')}
            className="text-xl text-gray-600 dark:text-gray-300 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
            placeholder="The role you are applying for?"
          />
        ) : (
          <p className="text-xl text-gray-600 dark:text-gray-300 print:text-gray-700">{resumeData.jobTitle}</p>
        )}
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300 mb-8 print:text-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400 print:text-blue-600">📞</span>
          {isEditable ? (
            <input
              type="text"
              value={resumeData.phone}
              onChange={(e) => onChangeData('phone', e.target.value)}
              onFocus={() => handleFieldFocus('phone')}
              className="border-b border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
              placeholder="Phone"
            />
          ) : (
            <span>{resumeData.phone || "Phone"}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400 print:text-blue-600">✉️</span>
          {isEditable ? (
            <input
              type="text"
              value={resumeData.email}
              onChange={(e) => onChangeData('email', e.target.value)}
              onFocus={() => handleFieldFocus('email')}
              className="border-b border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
              placeholder="Email"
            />
          ) : (
            <span>{resumeData.email || "Email"}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400 print:text-blue-600">🔗</span>
          {isEditable ? (
            <input
              type="text"
              value={resumeData.linkedin}
              onChange={(e) => onChangeData('linkedin', e.target.value)}
              onFocus={() => handleFieldFocus('linkedin')}
              className="border-b border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
              placeholder="LinkedIn/Portfolio"
            />
          ) : (
            <span>{resumeData.linkedin || "LinkedIn/Portfolio"}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400 print:text-blue-600">📍</span>
          {isEditable ? (
            <input
              type="text"
              value={resumeData.location}
              onChange={(e) => onChangeData('location', e.target.value)}
              onFocus={() => handleFieldFocus('location')}
              className="border-b border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
              placeholder="Location"
            />
          ) : (
            <span>{resumeData.location || "Location"}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 print:text-black">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 uppercase print:text-blue-700">SKILLS</h2>
            <div className="space-y-2">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="text-blue-500 dark:text-blue-400 print:text-blue-600">•</span>
                  {isEditable ? (
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => onChangeSkill(index, e.target.value)}
                        onFocus={() => handleSkillFocus(index)}
                        className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
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
                  className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-2 print:hidden"
                  type="button"
                >
                  + Add Skill
                </button>
              )}
            </div>
          </div>
          
          {/* Industry Expertise section removed */}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 uppercase print:text-blue-700">SUMMARY</h2>
            {isEditable ? (
              <textarea
                value={resumeData.summary}
                onChange={(e) => onChangeData('summary', e.target.value)}
                onFocus={() => handleFieldFocus('summary')}
                className="w-full min-h-[100px] border-gray-200 dark:border-gray-700 bg-transparent rounded focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 dark:text-gray-300 print:text-black print:border-gray-300"
                placeholder="Briefly explain why you're a great fit for the role..."
              />
            ) : (
              <p className="text-gray-600 dark:text-gray-300 print:text-gray-700">{resumeData.summary}</p>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 uppercase print:text-blue-700">EXPERIENCE</h2>
            <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4 space-y-6 print:border-blue-300">
              {resumeData.experience && resumeData.experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-4 h-4 bg-white dark:bg-gray-800 border-2 border-blue-400 dark:border-blue-500 rounded-full print:bg-white print:border-blue-500"></div>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => onUpdateExperience(index, 'title', e.target.value)}
                    onFocus={() => handleExperienceFieldFocus(index, 'title')}
                    className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                    placeholder="Job Title"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => onUpdateExperience(index, 'company', e.target.value)}
                    onFocus={() => handleExperienceFieldFocus(index, 'company')}
                    className="text-blue-600 dark:text-blue-300 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-blue-700"
                    placeholder="Company Name"
                  />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1 print:text-gray-600">
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => onUpdateExperience(index, 'location', e.target.value)}
                      onFocus={() => handleExperienceFieldFocus(index, 'location')}
                      className="border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                      placeholder="Location"
                    />
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => onUpdateExperience(index, 'period', e.target.value)}
                      onFocus={() => handleExperienceFieldFocus(index, 'period')}
                      className="text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                      placeholder="Date Period"
                    />
                  </div>
                  <div className="mt-2 space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 group">
                        <span className="text-blue-500 dark:text-blue-400 mt-1.5 print:text-blue-600">•</span>
                        <div className="flex flex-1 items-center gap-2">
                          <input
                            type="text"
                            value={highlight}
                            onChange={(e) => onUpdateExperienceHighlight(index, hIndex, e.target.value)}
                            onFocus={() => handleExperienceHighlightFocus(index, hIndex)}
                            className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                            placeholder="Add your accomplishment..."
                          />
                          {isEditable && exp.highlights.length > 1 && (
                            <button
                              onClick={() => onRemoveExperienceHighlight(index, hIndex)}
                              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
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
                        onClick={() => onAddExperienceHighlight(index)}
                        className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-1 ml-6 print:hidden"
                        type="button"
                      >
                        + Add Point
                      </button>
                    )}
                  </div>
                  {isEditable && resumeData.experience && resumeData.experience.length > 1 && (
                    <button
                      onClick={() => onRemoveExperience(index)}
                      className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300 mt-2 print:hidden"
                      type="button"
                    >
                      Remove Experience
                    </button>
                  )}
                </div>
              ))}
            </div>
            {isEditable && (
              <button 
                onClick={onAddExperience} 
                className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-4 print:hidden" 
                type="button"
              >
                + Add Experience
              </button>
            )}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 uppercase print:text-blue-700">EDUCATION</h2>
            <div className="space-y-4">
              {resumeData.education && resumeData.education.map((edu, index) => (
                <div key={index} className="group">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => onUpdateEducation(index, 'degree', e.target.value)}
                    onFocus={() => handleEducationFieldFocus(index, 'degree')}
                    className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                    placeholder="Degree and Field of Study"
                  />
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => onUpdateEducation(index, 'school', e.target.value)}
                    onFocus={() => handleEducationFieldFocus(index, 'school')}
                    className="text-blue-600 dark:text-blue-300 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-blue-700"
                    placeholder="School or University"
                  />
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => onUpdateEducation(index, 'period', e.target.value)}
                      onFocus={() => handleEducationFieldFocus(index, 'period')}
                      className="text-sm text-gray-500 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                      placeholder="Date Period"
                    />
                    {isEditable && resumeData.education && resumeData.education.length > 1 && (
                      <button
                        onClick={() => onRemoveEducation(index)}
                        className="text-red-500 dark:text-red-400 text-sm opacity-0 group-hover:opacity-100 hover:text-red-700 dark:hover:text-red-300 print:hidden"
                        type="button"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {isEditable && (
              <button 
                onClick={onAddEducation} 
                className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-4 print:hidden" 
                type="button"
              >
                + Add Education
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
