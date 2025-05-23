
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

interface MinimalTechTemplateProps {
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

const MinimalTechTemplate: React.FC<MinimalTechTemplateProps> = ({ 
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
  // Handle field click for initial selection - updated for all fields
  const handleFieldFocus = (field: string) => {
    if (field === 'fullName' && resumeData.fullName === 'YOUR NAME') {
      onChangeData('fullName', '');
    } else if (field === 'jobTitle' && resumeData.jobTitle === 'The role you are applying for?') {
      onChangeData('jobTitle', '');
    } else if (field === 'summary' && resumeData.summary === 'Brief overview of your professional background and career objectives...') {
      onChangeData('summary', '');
    } else if (field === 'email' && (resumeData.email === 'Email' || resumeData.email === '')) {
      onChangeData('email', ''); 
    } else if (field === 'phone' && (resumeData.phone === 'Phone' || resumeData.phone === '')) {
      onChangeData('phone', '');
    } else if (field === 'linkedin' && (resumeData.linkedin === 'LinkedIn/Portfolio' || resumeData.linkedin === '')) {
      onChangeData('linkedin', '');
    } else if (field === 'location' && (resumeData.location === 'Location' || resumeData.location === '')) {
      onChangeData('location', '');
    }
  };

  // Handle skill focus for initial value - updated to clear placeholder text
  const handleSkillFocus = (index: number) => {
    if (resumeData.skills[index] === 'Your Skill' || resumeData.skills[index] === 'New Skill') {
      onChangeSkill(index, '');
    }
  };

  // Handle experience field focus to clear placeholder text - updated
  const handleExperienceFieldFocus = (index: number, field: string) => {
    const exp = resumeData.experience![index];
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

  // Handle experience highlight focus to clear placeholder text - updated
  const handleExperienceHighlightFocus = (expIndex: number, highlightIndex: number) => {
    const highlight = resumeData.experience![expIndex].highlights[highlightIndex];
    if (highlight === 'Add your accomplishment...' || highlight === '') {
      onUpdateExperienceHighlight(expIndex, highlightIndex, '');
    }
  };

  // Handle project field focus to clear placeholder text - updated
  const handleProjectFieldFocus = (index: number, field: string) => {
    const project = resumeData.projects![index];
    if (field === 'name' && (project.name === 'Project Name' || project.name === '')) {
      onUpdateProject(index, 'name', '');
    } else if (field === 'period' && (project.period === 'Date Period' || project.period === '')) {
      onUpdateProject(index, 'period', '');
    } else if (field === 'description' && (project.description === 'Project description...' || project.description === '')) {
      onUpdateProject(index, 'description', '');
    }
  };

  // Handle project highlight focus to clear placeholder text - updated
  const handleProjectHighlightFocus = (projectIndex: number, highlightIndex: number) => {
    const highlight = resumeData.projects![projectIndex].highlights[highlightIndex];
    if (highlight === 'Add project highlight...' || highlight === '') {
      onUpdateProjectHighlight(projectIndex, highlightIndex, '');
    }
  };

  // Handle education field focus to clear placeholder text - updated
  const handleEducationFieldFocus = (index: number, field: string) => {
    const edu = resumeData.education![index];
    if (field === 'degree' && (edu.degree === 'Degree and Field of Study' || edu.degree === '')) {
      onUpdateEducation(index, 'degree', '');
    } else if (field === 'school' && (edu.school === 'School or University' || edu.school === '')) {
      onUpdateEducation(index, 'school', '');
    } else if (field === 'period' && (edu.period === 'Date Period' || edu.period === '')) {
      onUpdateEducation(index, 'period', '');
    }
  };

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-900 mx-auto p-12 shadow-lg resume-content print:shadow-none print:border-0">
      {/* Header Section */}
      <div className="border-b-2 border-gray-200 dark:border-gray-700 pb-6 mb-6 print:border-gray-300">
        <div className="flex justify-between items-start">
          <div>
            {isEditable ? (
              <input
                type="text"
                value={resumeData.fullName}
                onChange={(e) => onChangeData('fullName', e.target.value)}
                onFocus={() => handleFieldFocus('fullName')}
                className="text-3xl font-mono font-bold text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 mb-1 bg-transparent print:text-black"
                placeholder="YOUR NAME"
              />
            ) : (
              <h1 className="text-3xl font-mono font-bold text-gray-800 dark:text-gray-100 mb-1 print:text-black">{resumeData.fullName}</h1>
            )}
            
            {isEditable ? (
              <input
                type="text"
                value={resumeData.jobTitle}
                onChange={(e) => onChangeData('jobTitle', e.target.value)}
                onFocus={() => handleFieldFocus('jobTitle')}
                className="text-lg font-mono text-gray-600 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-600"
                placeholder="The role you are applying for?"
              />
            ) : (
              <p className="text-lg font-mono text-gray-600 dark:text-gray-400 print:text-gray-600">{resumeData.jobTitle}</p>
            )}
          </div>
          <div className="font-mono text-right text-sm dark:text-gray-300 print:text-gray-700">
            <div className="mb-1">
              {isEditable ? (
                <input
                  type="text"
                  value={resumeData.email}
                  onChange={(e) => onChangeData('email', e.target.value)}
                  onFocus={() => handleFieldFocus('email')}
                  className="text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="Email"
                />
              ) : (
                <div>{resumeData.email || "Email"}</div>
              )}
            </div>
            <div className="mb-1">
              {isEditable ? (
                <input
                  type="text"
                  value={resumeData.phone}
                  onChange={(e) => onChangeData('phone', e.target.value)}
                  onFocus={() => handleFieldFocus('phone')}
                  className="text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="Phone"
                />
              ) : (
                <div>{resumeData.phone || "Phone"}</div>
              )}
            </div>
            <div className="mb-1">
              {isEditable ? (
                <input
                  type="text"
                  value={resumeData.linkedin}
                  onChange={(e) => onChangeData('linkedin', e.target.value)}
                  onFocus={() => handleFieldFocus('linkedin')}
                  className="text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="LinkedIn/Portfolio"
                />
              ) : (
                <div>{resumeData.linkedin || "LinkedIn/Portfolio"}</div>
              )}
            </div>
            <div>
              {isEditable ? (
                <input
                  type="text"
                  value={resumeData.location}
                  onChange={(e) => onChangeData('location', e.target.value)}
                  onFocus={() => handleFieldFocus('location')}
                  className="text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="Location"
                />
              ) : (
                <div>{resumeData.location || "Location"}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 print:text-black">
        {/* Left Wide Column */}
        <div className="col-span-8">
          {/* Summary Section */}
          <div className="mb-6">
            <h2 className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase print:text-black">$ cat summary.txt</h2>
            {isEditable ? (
              <textarea
                value={resumeData.summary}
                onChange={(e) => onChangeData('summary', e.target.value)}
                onFocus={() => handleFieldFocus('summary')}
                className="w-full min-h-[100px] border-gray-200 dark:border-gray-700 bg-transparent rounded font-mono focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 dark:text-gray-300 print:text-black print:border-gray-300"
                placeholder="Briefly explain why you're a great fit for the role..."
              />
            ) : (
              <p className="font-mono text-gray-600 dark:text-gray-400 print:text-gray-700">{resumeData.summary}</p>
            )}
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <h2 className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase print:text-black">$ ls -l experience/</h2>
            <div className="space-y-5">
              {resumeData.experience && resumeData.experience.map((exp, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between font-mono">
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) => onUpdateExperience(index, 'title', e.target.value)}
                      onFocus={() => handleExperienceFieldFocus(index, 'title')}
                      className="text-base font-bold text-gray-800 dark:text-gray-200 w-7/12 border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                      placeholder="Job Title"
                    />
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => onUpdateExperience(index, 'period', e.target.value)}
                      onFocus={() => handleExperienceFieldFocus(index, 'period')}
                      className="text-sm text-gray-500 dark:text-gray-400 text-right w-4/12 border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-600"
                      placeholder="Date Period"
                    />
                  </div>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => onUpdateExperience(index, 'company', e.target.value)}
                    onFocus={() => handleExperienceFieldFocus(index, 'company')}
                    className="text-sm text-green-600 dark:text-green-400 w-full border-none focus:outline-none focus:ring-0 mt-1 font-mono bg-transparent print:text-green-700"
                    placeholder="Company Name"
                  />
                  <div className="mt-1 space-y-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 group">
                        <span className="text-gray-400 dark:text-gray-500 font-mono mt-1 print:text-gray-600">_</span>
                        <div className="flex flex-1 items-center gap-2">
                          <input
                            type="text"
                            value={highlight}
                            onChange={(e) => onUpdateExperienceHighlight(index, hIndex, e.target.value)}
                            onFocus={() => handleExperienceHighlightFocus(index, hIndex)}
                            className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 bg-transparent font-mono dark:text-gray-300 text-sm print:text-black print:border-gray-300"
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
                        className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-1 ml-6 font-mono print:hidden"
                        type="button"
                      >
                        + Add Point
                      </button>
                    )}
                  </div>
                  {isEditable && resumeData.experience && resumeData.experience.length > 1 && (
                    <button
                      onClick={() => onRemoveExperience(index)}
                      className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300 mt-2 font-mono print:hidden"
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
                className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-3 font-mono print:hidden" 
                type="button"
              >
                + Add Experience
              </button>
            )}
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase print:text-black">$ ls projects/</h2>
            <div className="space-y-4">
              {resumeData.projects && resumeData.projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between font-mono">
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => onUpdateProject(index, 'name', e.target.value)}
                      onFocus={() => handleProjectFieldFocus(index, 'name')}
                      className="text-base font-bold text-gray-800 dark:text-gray-200 border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                      placeholder="Project Name"
                    />
                    <input
                      type="text"
                      value={project.period}
                      onChange={(e) => onUpdateProject(index, 'period', e.target.value)}
                      onFocus={() => handleProjectFieldFocus(index, 'period')}
                      className="text-sm text-gray-500 dark:text-gray-400 text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-600"
                      placeholder="Date Period"
                    />
                  </div>
                  <div className="mt-1 space-y-1">
                    <input
                      type="text" 
                      value={project.description}
                      onChange={(e) => onUpdateProject(index, 'description', e.target.value)}
                      onFocus={() => handleProjectFieldFocus(index, 'description')}
                      className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 bg-transparent font-mono dark:text-gray-300 text-sm w-full print:text-black print:border-gray-300"
                      placeholder="Tech stack: React, TypeScript, Node.js"
                    />
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 group">
                        <span className="text-gray-400 dark:text-gray-500 font-mono mt-1 print:text-gray-600">_</span>
                        <div className="flex flex-1 items-center gap-2">
                          <input
                            type="text"
                            value={highlight}
                            onChange={(e) => onUpdateProjectHighlight(index, hIndex, e.target.value)}
                            onFocus={() => handleProjectHighlightFocus(index, hIndex)}
                            className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 bg-transparent font-mono dark:text-gray-300 text-sm print:text-black print:border-gray-300"
                            placeholder="Describe what you accomplished..."
                          />
                          {isEditable && project.highlights.length > 1 && (
                            <button
                              onClick={() => onRemoveProjectHighlight(index, hIndex)}
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
                        onClick={() => onAddProjectHighlight(index)}
                        className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-1 ml-6 font-mono print:hidden"
                        type="button"
                      >
                        + Add Point
                      </button>
                    )}
                  </div>
                  {isEditable && resumeData.projects && resumeData.projects.length > 1 && (
                    <button
                      onClick={() => onRemoveProject(index)}
                      className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300 mt-2 font-mono print:hidden"
                      type="button"
                    >
                      Remove Project
                    </button>
                  )}
                </div>
              ))}
            </div>
            {isEditable && (
              <button 
                onClick={onAddProject}
                className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-3 font-mono print:hidden" 
                type="button"
              >
                + Add Project
              </button>
            )}
          </div>
        </div>

        {/* Right Narrower Column */}
        <div className="col-span-4">
          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase print:text-black">$ cat skills.json</h2>
            <div className="space-y-2 font-mono">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="text-green-600 dark:text-green-400 print:text-green-700">"</span>
                  {isEditable ? (
                    <div className="flex items-center gap-2 w-full">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => onChangeSkill(index, e.target.value)}
                        onFocus={() => handleSkillFocus(index)}
                        className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
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
                  <span className="text-green-600 dark:text-green-400 print:text-green-700">"</span>
                </div>
              ))}
              {isEditable && (
                <button
                  onClick={onAddSkill}
                  className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-2 print:hidden"
                  type="button"
                >
                  + Add Skill
                </button>
              )}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h2 className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase print:text-black">$ cat education.log</h2>
            <div className="space-y-3 font-mono">
              {resumeData.education && resumeData.education.map((edu, index) => (
                <div key={index} className="group">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => onUpdateEducation(index, 'degree', e.target.value)}
                    onFocus={() => handleEducationFieldFocus(index, 'degree')}
                    className="text-base font-bold text-gray-800 dark:text-gray-200 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                    placeholder="Degree and Field"
                  />
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => onUpdateEducation(index, 'school', e.target.value)}
                    onFocus={() => handleEducationFieldFocus(index, 'school')}
                    className="text-sm text-green-600 dark:text-green-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-green-700"
                    placeholder="School or University"
                  />
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => onUpdateEducation(index, 'period', e.target.value)}
                      onFocus={() => handleEducationFieldFocus(index, 'period')}
                      className="text-xs text-gray-500 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-600"
                      placeholder="Date Period"
                    />
                    {isEditable && resumeData.education && resumeData.education.length > 1 && (
                      <button
                        onClick={() => onRemoveEducation(index)}
                        className="text-red-500 dark:text-red-400 text-xs opacity-0 group-hover:opacity-100 hover:text-red-700 dark:hover:text-red-300 print:hidden"
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
                className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-3 print:hidden" 
                type="button"
              >
                + Add Education
              </button>
            )}
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200 mb-3 uppercase print:text-black">$ ls certs/</h2>
            <div className="space-y-2 font-mono">
              <input
                type="text"
                className="text-base text-gray-700 dark:text-gray-300 w-full border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 bg-transparent print:text-black print:border-gray-300"
                placeholder="Certification Name"
                onFocus={(e) => e.target.value = ""}
                onBlur={(e) => e.target.value === "" && (e.target.value = "Certification Name")}
              />
            </div>
            <button className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 mt-3 print:hidden" type="button">
              + Add Certification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTechTemplate;
