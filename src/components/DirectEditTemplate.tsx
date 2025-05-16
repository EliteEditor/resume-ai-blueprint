
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

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

  const [fieldClicked, setFieldClicked] = useState<{ [key: string]: boolean }>({});

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
      skills: [...prev.skills, 'New Skill'],
    }));
  };

  const removeSkill = (index: number) => {
    const newSkills = [...resumeData.skills];
    newSkills.splice(index, 1);
    setResumeData(prev => ({
      ...prev,
      skills: newSkills,
    }));
  };

  const handleFieldFocus = (field: string) => {
    if (!fieldClicked[field]) {
      if (field === 'fullName' && resumeData.fullName === 'YOUR NAME') {
        handleChange('fullName', '');
      } else if (field === 'jobTitle' && resumeData.jobTitle === 'The role you are applying for?') {
        handleChange('jobTitle', '');
      } else if (field === 'summary' && resumeData.summary === 'Brief overview of your professional background and career objectives...') {
        handleChange('summary', '');
      }
      
      setFieldClicked(prev => ({
        ...prev,
        [field]: true,
      }));
    }
  };

  const handleSkillFocus = (index: number) => {
    if (resumeData.skills[index] === 'Your Skill' || resumeData.skills[index] === 'New Skill') {
      const newSkills = [...resumeData.skills];
      newSkills[index] = '';
      setResumeData(prev => ({
        ...prev,
        skills: newSkills,
      }));
    }
  };

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white dark:bg-gray-800 mx-auto p-12 shadow-lg resume-content print:shadow-none print:border-0">
      {/* Header Section */}
      <div className="mb-8">
        <input
          type="text"
          value={resumeData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          onFocus={() => handleFieldFocus('fullName')}
          className="text-4xl font-light text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 mb-2 bg-transparent print:text-black"
          placeholder="YOUR NAME"
        />
        <input
          type="text"
          value={resumeData.jobTitle}
          onChange={(e) => handleChange('jobTitle', e.target.value)}
          onFocus={() => handleFieldFocus('jobTitle')}
          className="text-xl text-gray-600 dark:text-gray-300 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
          placeholder="The role you are applying for?"
        />
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300 mb-8 print:text-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 dark:text-gray-500 print:text-gray-600">📞</span>
          <input
            type="text"
            value={resumeData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
            placeholder="Phone"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 dark:text-gray-500 print:text-gray-600">✉️</span>
          <input
            type="text"
            value={resumeData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 dark:text-gray-500 print:text-gray-600">🔗</span>
          <input
            type="text"
            value={resumeData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
            placeholder="LinkedIn/Portfolio"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 dark:text-gray-500 print:text-gray-600">📍</span>
          <input
            type="text"
            value={resumeData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 bg-transparent print:border-gray-300 print:text-black"
            placeholder="Location"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 print:text-black">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 uppercase print:text-black">SKILLS</h2>
            <div className="space-y-2">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="text-gray-400 dark:text-gray-500 print:text-gray-600">•</span>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    onFocus={() => handleSkillFocus(index)}
                    className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                    placeholder="Your skill"
                  />
                  <button 
                    onClick={() => removeSkill(index)}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-opacity print:hidden"
                    type="button"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={addSkill}
                className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-2 print:hidden"
                type="button"
              >
                + Add Skill
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 uppercase print:text-black">INDUSTRY EXPERTISE</h2>
            <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded print:bg-gray-300">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded print:bg-blue-700"></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 print:text-gray-700">Field or industry</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 uppercase print:text-black">SUMMARY</h2>
            <textarea
              value={resumeData.summary}
              onChange={(e) => handleChange('summary', e.target.value)}
              onFocus={() => handleFieldFocus('summary')}
              className="w-full min-h-[100px] border-gray-200 dark:border-gray-700 bg-transparent rounded focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 dark:text-gray-300 print:text-black print:border-gray-300"
              placeholder="Briefly explain why you're a great fit for the role..."
            />
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 uppercase print:text-black">EXPERIENCE</h2>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-6 print:border-gray-400">
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-4 h-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full print:bg-white print:border-gray-500"></div>
                <input
                  type="text"
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  className="text-gray-600 dark:text-gray-300 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                  placeholder="Company Name"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1 print:text-gray-600">
                  <input
                    type="text"
                    className="border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                    placeholder="Location"
                  />
                  <input
                    type="text"
                    className="text-right border-none focus:outline-none focus:ring-0 bg-transparent print:text-gray-700"
                    placeholder="Date Period"
                  />
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 dark:text-gray-500 mt-1.5 print:text-gray-600">•</span>
                    <input
                      type="text"
                      className="flex-1 border-b border-gray-200 dark:border-gray-700 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 bg-transparent dark:text-gray-300 print:text-black print:border-gray-300"
                      placeholder="Add your accomplishment..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-4 print:hidden" type="button">
              + Add Experience
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 uppercase print:text-black">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 w-full border-none focus:outline-none focus:ring-0 bg-transparent print:text-black"
                  placeholder="Degree and Field of Study"
                />
                <input
                  type="text"
                  className="text-gray-600 dark:text-gray-300 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                  placeholder="School or University"
                />
                <input
                  type="text"
                  className="text-sm text-gray-500 dark:text-gray-400 w-full border-none focus:outline-none focus:ring-0 mt-1 bg-transparent print:text-gray-700"
                  placeholder="Date Period"
                />
              </div>
            </div>
            <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 mt-4 print:hidden" type="button">
              + Add Education
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .resume-content {
            padding: 0;
            margin: 0;
            box-shadow: none;
            border: none;
            background-color: white !important;
            color: black !important;
          }
          input, textarea {
            border: none !important;
          }
          .print-hidden {
            display: none !important;
          }
          body {
            background-color: white;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DirectEditTemplate;
