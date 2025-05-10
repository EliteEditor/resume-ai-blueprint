
import React, { useState } from 'react';

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

const DirectEditTemplate: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: 'YOUR NAME',
    jobTitle: 'The role you are applying for?',
    phone: '',
    email: '',
    linkedin: '',
    location: '',
    skills: ['Your Skill'],
    summary: 'Brief overview of your professional background and career objectives...',
  });

  const handleChange = (field: keyof ResumeData, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = value;
    setResumeData(prev => ({
      ...prev,
      skills: newSkills,
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, ''],
    }));
  };

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white mx-auto p-12 shadow-lg resume-content">
      {/* Header Section */}
      <div className="mb-8">
        <input
          type="text"
          value={resumeData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className="text-4xl font-light text-gray-800 w-full border-none focus:outline-none focus:ring-0 mb-2"
          placeholder="YOUR NAME"
        />
        <input
          type="text"
          value={resumeData.jobTitle}
          onChange={(e) => handleChange('jobTitle', e.target.value)}
          className="text-xl text-gray-600 w-full border-none focus:outline-none focus:ring-0"
          placeholder="The role you are applying for?"
        />
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">📞</span>
          <input
            type="text"
            value={resumeData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="border-b border-gray-200 focus:border-gray-400 focus:ring-0"
            placeholder="Phone"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">✉️</span>
          <input
            type="text"
            value={resumeData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="border-b border-gray-200 focus:border-gray-400 focus:ring-0"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">🔗</span>
          <input
            type="text"
            value={resumeData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="border-b border-gray-200 focus:border-gray-400 focus:ring-0"
            placeholder="LinkedIn/Portfolio"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">📍</span>
          <input
            type="text"
            value={resumeData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="border-b border-gray-200 focus:border-gray-400 focus:ring-0"
            placeholder="Location"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">SKILLS</h2>
            <div className="space-y-2">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-400">•</span>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="flex-1 border-b border-gray-200 focus:border-gray-400 focus:ring-0"
                    placeholder="Your skill"
                  />
                </div>
              ))}
              <button
                onClick={addSkill}
                className="text-blue-600 text-sm hover:text-blue-700 mt-2"
              >
                + Add Skill
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">INDUSTRY EXPERTISE</h2>
            <div className="relative h-1 bg-gray-200 rounded">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded"></div>
            </div>
            <div className="text-sm text-gray-600 mt-2">Field or industry</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">SUMMARY</h2>
            <textarea
              value={resumeData.summary}
              onChange={(e) => handleChange('summary', e.target.value)}
              className="w-full min-h-[100px] border-gray-200 rounded focus:border-gray-400 focus:ring-0"
              placeholder="Briefly explain why you're a great fit for the role..."
            />
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">EXPERIENCE</h2>
            <div className="border-l-2 border-gray-200 pl-4 space-y-6">
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                <input
                  type="text"
                  className="text-lg font-medium text-gray-800 w-full border-none focus:outline-none focus:ring-0"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  className="text-gray-600 w-full border-none focus:outline-none focus:ring-0 mt-1"
                  placeholder="Company Name"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <input
                    type="text"
                    className="border-none focus:outline-none focus:ring-0"
                    placeholder="Location"
                  />
                  <input
                    type="text"
                    className="text-right border-none focus:outline-none focus:ring-0"
                    placeholder="Date Period"
                  />
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <input
                      type="text"
                      className="flex-1 border-b border-gray-200 focus:border-gray-400 focus:ring-0"
                      placeholder="Add your accomplishment..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="text-blue-600 text-sm hover:text-blue-700 mt-4">
              + Add Experience
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 uppercase">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  className="text-lg font-medium text-gray-800 w-full border-none focus:outline-none focus:ring-0"
                  placeholder="Degree and Field of Study"
                />
                <input
                  type="text"
                  className="text-gray-600 w-full border-none focus:outline-none focus:ring-0 mt-1"
                  placeholder="School or University"
                />
                <input
                  type="text"
                  className="text-sm text-gray-500 w-full border-none focus:outline-none focus:ring-0 mt-1"
                  placeholder="Date Period"
                />
              </div>
            </div>
            <button className="text-blue-600 text-sm hover:text-blue-700 mt-4">
              + Add Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectEditTemplate;
