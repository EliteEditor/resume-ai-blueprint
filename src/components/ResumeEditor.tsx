import React, { useState } from 'react';

interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  skills: string[];
  industryExpertise: {
    field: string;
    level: number;
  };
  timeAllocation: {
    activities: {
      label: string;
      value: string;
    }[];
  };
  summary: string;
  experience: {
    title: string;
    companyName: string;
    location: string;
    datePeriod: string;
    description: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    school: string;
    datePeriod: string;
  }[];
  openSource: {
    projectName: string;
    location: string;
    datePeriod: string;
    summary: string;
    outcomes: string[];
  }[];
}

const ResumeEditor: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: 'YOUR NAME',
      jobTitle: 'The role you are applying for?',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
    },
    skills: ['Your Skill'],
    industryExpertise: {
      field: 'Field or industry',
      level: 30,
    },
    timeAllocation: {
      activities: Array.from({ length: 6 }, (_, i) => ({
        label: String.fromCharCode(65 + i),
        value: 'Activity / Initiative',
      })),
    },
    summary: 'Briefly explain why you\'re a great fit for the role - use the AI assistant to tailor this summary for each job posting.',
    experience: [{
      title: 'Title',
      companyName: 'Company Name',
      location: 'Location',
      datePeriod: 'Date period',
      description: 'Company Description',
      highlights: ['Highlight your accomplishments, using numbers if possible.'],
    }],
    education: [{
      degree: 'Degree and Field of Study',
      school: 'School or University',
      datePeriod: 'Date period',
    }],
    openSource: [{
      projectName: 'Project Name',
      location: 'Location',
      datePeriod: 'Date period',
      summary: 'Short summary of your work',
      outcomes: ['What was a successful outcome of your work? (e.g. Raised $3,000 for the charity)'],
    }],
  });

  const handlePersonalInfoChange = (field: keyof typeof resumeData.personalInfo, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  return (
    <div className="max-w-[850px] mx-auto bg-white shadow-lg rounded-lg p-8 my-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex-1">
          <input
            type="text"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
            className="text-4xl font-light text-emerald-700 w-full border-none focus:outline-none focus:ring-0"
            placeholder="YOUR NAME"
          />
          <input
            type="text"
            value={resumeData.personalInfo.jobTitle}
            onChange={(e) => handlePersonalInfoChange('jobTitle', e.target.value)}
            className="text-lg text-gray-600 w-full mt-2 border-none focus:outline-none focus:ring-0"
            placeholder="The role you are applying for?"
          />
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span>📞</span>
              <input
                type="text"
                value={resumeData.personalInfo.phone}
                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                className="border-none focus:outline-none focus:ring-0"
                placeholder="Phone"
              />
            </div>
            <div className="flex items-center gap-1">
              <span>✉️</span>
              <input
                type="text"
                value={resumeData.personalInfo.email}
                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                className="border-none focus:outline-none focus:ring-0"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-1">
              <span>🔗</span>
              <input
                type="text"
                value={resumeData.personalInfo.linkedin}
                onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                className="border-none focus:outline-none focus:ring-0"
                placeholder="LinkedIn/Portfolio"
              />
            </div>
            <div className="flex items-center gap-1">
              <span>📍</span>
              <input
                type="text"
                value={resumeData.personalInfo.location}
                onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                className="border-none focus:outline-none focus:ring-0"
                placeholder="Location"
              />
            </div>
          </div>
        </div>
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400">Photo</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Skills</h2>
            <div className="space-y-2">
              {resumeData.skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...resumeData.skills];
                    newSkills[index] = e.target.value;
                    setResumeData(prev => ({ ...prev, skills: newSkills }));
                  }}
                  className="w-full border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-700"
                  placeholder="Add a skill"
                />
              ))}
              <button
                onClick={() => setResumeData(prev => ({
                  ...prev,
                  skills: [...prev.skills, ''],
                }))}
                className="text-emerald-600 text-sm mt-2"
              >
                + Add Skill
              </button>
            </div>
          </section>

          {/* Industry Expertise */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Industry Expertise</h2>
            <input
              type="text"
              value={resumeData.industryExpertise.field}
              onChange={(e) => setResumeData(prev => ({
                ...prev,
                industryExpertise: {
                  ...prev.industryExpertise,
                  field: e.target.value,
                },
              }))}
              className="w-full border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-700 mb-2"
            />
            <input
              type="range"
              value={resumeData.industryExpertise.level}
              onChange={(e) => setResumeData(prev => ({
                ...prev,
                industryExpertise: {
                  ...prev.industryExpertise,
                  level: parseInt(e.target.value),
                },
              }))}
              className="w-full"
              min="0"
              max="100"
            />
          </section>

          {/* Time Allocation */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">My Time</h2>
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-emerald-500 relative">
                {resumeData.timeAllocation.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${index * 60}deg) translateY(-50%)`,
                    }}
                  >
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      {activity.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {resumeData.timeAllocation.activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      {activity.label}
                    </span>
                    <input
                      type="text"
                      value={activity.value}
                      onChange={(e) => {
                        const newActivities = [...resumeData.timeAllocation.activities];
                        newActivities[index] = {
                          ...newActivities[index],
                          value: e.target.value,
                        };
                        setResumeData(prev => ({
                          ...prev,
                          timeAllocation: {
                            activities: newActivities,
                          },
                        }));
                      }}
                      className="flex-1 border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Summary</h2>
            <textarea
              value={resumeData.summary}
              onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
              className="w-full min-h-[100px] border-gray-200 rounded-md focus:border-emerald-500 focus:ring-0 text-gray-700"
              placeholder="Write your professional summary..."
            />
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index] = { ...newExp[index], title: e.target.value };
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                    className="col-span-2 border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-900 font-medium"
                    placeholder="Job Title"
                  />
                  <input
                    type="text"
                    value={exp.datePeriod}
                    onChange={(e) => {
                      const newExp = [...resumeData.experience];
                      newExp[index] = { ...newExp[index], datePeriod: e.target.value };
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                    className="text-right border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-600"
                    placeholder="Date Period"
                  />
                </div>
                <input
                  type="text"
                  value={exp.companyName}
                  onChange={(e) => {
                    const newExp = [...resumeData.experience];
                    newExp[index] = { ...newExp[index], companyName: e.target.value };
                    setResumeData(prev => ({ ...prev, experience: newExp }));
                  }}
                  className="w-full border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-emerald-600 mb-2"
                  placeholder="Company Name"
                />
                <div className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2">
                      <span className="text-emerald-600">•</span>
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => {
                          const newExp = [...resumeData.experience];
                          newExp[index] = {
                            ...newExp[index],
                            highlights: newExp[index].highlights.map((h, i) =>
                              i === hIndex ? e.target.value : h
                            ),
                          };
                          setResumeData(prev => ({ ...prev, experience: newExp }));
                        }}
                        className="flex-1 border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-700"
                        placeholder="Add highlight"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newExp = [...resumeData.experience];
                      newExp[index] = {
                        ...newExp[index],
                        highlights: [...newExp[index].highlights, ''],
                      };
                      setResumeData(prev => ({ ...prev, experience: newExp }));
                    }}
                    className="text-emerald-600 text-sm"
                  >
                    + Add Highlight
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => setResumeData(prev => ({
                ...prev,
                experience: [
                  ...prev.experience,
                  {
                    title: '',
                    companyName: '',
                    location: '',
                    datePeriod: '',
                    description: '',
                    highlights: [''],
                  },
                ],
              }))}
              className="text-emerald-600 text-sm"
            >
              + Add Experience
            </button>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => {
                      const newEdu = [...resumeData.education];
                      newEdu[index] = { ...newEdu[index], degree: e.target.value };
                      setResumeData(prev => ({ ...prev, education: newEdu }));
                    }}
                    className="col-span-2 border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-900 font-medium"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    value={edu.datePeriod}
                    onChange={(e) => {
                      const newEdu = [...resumeData.education];
                      newEdu[index] = { ...newEdu[index], datePeriod: e.target.value };
                      setResumeData(prev => ({ ...prev, education: newEdu }));
                    }}
                    className="text-right border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-600"
                    placeholder="Date Period"
                  />
                </div>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => {
                    const newEdu = [...resumeData.education];
                    newEdu[index] = { ...newEdu[index], school: e.target.value };
                    setResumeData(prev => ({ ...prev, education: newEdu }));
                  }}
                  className="w-full border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-emerald-600"
                  placeholder="School/University"
                />
              </div>
            ))}
            <button
              onClick={() => setResumeData(prev => ({
                ...prev,
                education: [
                  ...prev.education,
                  {
                    degree: '',
                    school: '',
                    datePeriod: '',
                  },
                ],
              }))}
              className="text-emerald-600 text-sm"
            >
              + Add Education
            </button>
          </section>

          {/* Open Source Work Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Open Source Work</h2>
            {resumeData.openSource.map((project, index) => (
              <div key={index} className="mb-6">
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    value={project.projectName}
                    onChange={(e) => {
                      const newProjects = [...resumeData.openSource];
                      newProjects[index] = { ...newProjects[index], projectName: e.target.value };
                      setResumeData(prev => ({ ...prev, openSource: newProjects }));
                    }}
                    className="col-span-2 border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-900 font-medium"
                    placeholder="Project Name"
                  />
                  <input
                    type="text"
                    value={project.datePeriod}
                    onChange={(e) => {
                      const newProjects = [...resumeData.openSource];
                      newProjects[index] = { ...newProjects[index], datePeriod: e.target.value };
                      setResumeData(prev => ({ ...prev, openSource: newProjects }));
                    }}
                    className="text-right border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-600"
                    placeholder="Date Period"
                  />
                </div>
                <input
                  type="text"
                  value={project.location}
                  onChange={(e) => {
                    const newProjects = [...resumeData.openSource];
                    newProjects[index] = { ...newProjects[index], location: e.target.value };
                    setResumeData(prev => ({ ...prev, openSource: newProjects }));
                  }}
                  className="w-full border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-emerald-600 mb-2"
                  placeholder="Location"
                />
                <textarea
                  value={project.summary}
                  onChange={(e) => {
                    const newProjects = [...resumeData.openSource];
                    newProjects[index] = { ...newProjects[index], summary: e.target.value };
                    setResumeData(prev => ({ ...prev, openSource: newProjects }));
                  }}
                  className="w-full border-gray-200 rounded-md focus:border-emerald-500 focus:ring-0 text-gray-700 mb-2"
                  placeholder="Project summary"
                  rows={2}
                />
                <div className="space-y-2">
                  {project.outcomes.map((outcome, oIndex) => (
                    <div key={oIndex} className="flex items-start gap-2">
                      <span className="text-emerald-600">•</span>
                      <input
                        type="text"
                        value={outcome}
                        onChange={(e) => {
                          const newProjects = [...resumeData.openSource];
                          newProjects[index] = {
                            ...newProjects[index],
                            outcomes: newProjects[index].outcomes.map((o, i) =>
                              i === oIndex ? e.target.value : o
                            ),
                          };
                          setResumeData(prev => ({ ...prev, openSource: newProjects }));
                        }}
                        className="flex-1 border-b border-gray-200 focus:border-emerald-500 focus:ring-0 text-gray-700"
                        placeholder="Add outcome"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newProjects = [...resumeData.openSource];
                      newProjects[index] = {
                        ...newProjects[index],
                        outcomes: [...newProjects[index].outcomes, ''],
                      };
                      setResumeData(prev => ({ ...prev, openSource: newProjects }));
                    }}
                    className="text-emerald-600 text-sm"
                  >
                    + Add Outcome
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => setResumeData(prev => ({
                ...prev,
                openSource: [
                  ...prev.openSource,
                  {
                    projectName: '',
                    location: '',
                    datePeriod: '',
                    summary: '',
                    outcomes: [''],
                  },
                ],
              }))}
              className="text-emerald-600 text-sm"
            >
              + Add Project
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
