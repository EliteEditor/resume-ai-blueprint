
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
}

interface CreativeTemplateProps {
  resumeData: ResumeData;
  isEditable?: boolean;
  onChangeData?: (field: string, value: string) => void;
  onChangeSkill?: (index: number, value: string) => void;
  onAddSkill?: () => void;
  onRemoveSkill?: (index: number) => void;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ 
  resumeData, 
  isEditable = false,
  onChangeData = () => {},
  onChangeSkill = () => {},
  onAddSkill = () => {},
  onRemoveSkill = () => {}
}) => {
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

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-800 mx-auto shadow-lg resume-content print:shadow-none print:border-0 overflow-hidden">
      {/* Header Section with Accent Color */}
      <div className="bg-purple-600 dark:bg-purple-800 p-8 text-white print:bg-purple-700 print:text-white">
        {isEditable ? (
          <input
            type="text"
            value={resumeData.fullName}
            onChange={(e) => onChangeData('fullName', e.target.value)}
            onFocus={() => handleFieldFocus('fullName')}
            className="text-4xl font-bold w-full border-none focus:outline-none focus:ring-0 mb-3 bg-transparent text-white print:text-white"
            placeholder="YOUR NAME"
          />
        ) : (
          <h1 className="text-4xl font-bold mb-3 text-white print:text-white">{resumeData.fullName}</h1>
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
        
        {/* Contact Information Row */}
        <div className="flex flex-wrap gap-4 text-sm text-purple-100 dark:text-purple-100 print:text-purple-100">
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
              <div>
                <input
                  type="text"
                  className="text-base font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="Degree and Field of Study"
                />
                <input
                  type="text"
                  className="text-purple-600 dark:text-purple-400 w-full border-none focus:outline-none focus:ring-0 mt-1 text-sm bg-transparent print:text-purple-700"
                  placeholder="School or University"
                />
                <input
                  type="text"
                  className="text-sm text-gray-500 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                  placeholder="Date Period"
                />
              </div>
            </div>
            <button className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-4 print:hidden" type="button">
              + Add Education
            </button>
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
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <input
                      type="text"
                      className="text-base font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                      placeholder="Job Title"
                    />
                    <input
                      type="text"
                      className="text-purple-600 dark:text-purple-400 w-full border-none focus:outline-none focus:ring-0 mt-1 text-sm bg-transparent print:text-purple-700"
                      placeholder="Company Name"
                    />
                    <input
                      type="text"
                      className="text-sm text-gray-500 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                      placeholder="Location"
                    />
                  </div>
                  <input
                    type="text"
                    className="text-sm text-gray-500 dark:text-gray-400 text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                    placeholder="Date Period"
                  />
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 dark:text-purple-400 mt-1.5 print:text-purple-600">•</span>
                    <input
                      type="text"
                      className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                      placeholder="Add your accomplishment..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-4 print:hidden" type="button">
              + Add Experience
            </button>
          </div>
          
          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 uppercase border-b-2 border-purple-200 dark:border-purple-800 pb-1 print:text-purple-700 print:border-purple-300">PROJECTS</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <input
                    type="text"
                    className="text-base font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                    placeholder="Project Name"
                  />
                  <input
                    type="text"
                    className="text-sm text-gray-500 dark:text-gray-400 text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                    placeholder="Date Period"
                  />
                </div>
                <input
                  type="text"
                  className="text-sm text-gray-600 dark:text-gray-300 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                  placeholder="Project description..."
                />
                <div className="mt-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 dark:text-purple-400 mt-1.5 print:text-purple-600">•</span>
                    <input
                      type="text"
                      className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                      placeholder="Add project highlight..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300 mt-4 print:hidden" type="button">
              + Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
