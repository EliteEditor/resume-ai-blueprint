import React, { useState, useRef } from 'react';
import ChristianTorresTemplate from './resume-templates/ChristianTorresTemplate';
import GraceJacksonTemplate from './resume-templates/GraceJacksonTemplate';
import AlexanderTaylorTemplate from './resume-templates/AlexanderTaylorTemplate';
import AidenWilliamsTemplate from './resume-templates/AidenWilliamsTemplate';
import MasonTurnerTemplate from './resume-templates/MasonTurnerTemplate';
import ResumeTemplates from './ResumeTemplates';
import StandardTemplate from './resume-templates/StandardTemplate';
import AnalystTemplate from './resume-templates/AnalystTemplate';
import ScientistTemplate from './resume-templates/ScientistTemplate';
import EngineerTemplate from './resume-templates/EngineerTemplate';
import { ResumeData } from '../types/resume';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ChevronRight, ChevronLeft, Plus, Trash2, Download, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    location: "",
    website: "",
    linkedin: "",
    github: ""
  },
  summary: "",
  experience: [
    {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      highlights: [""]
    }
  ],
  skills: {
    "Technical Skills": [],
    "Soft Skills": []
  },
  education: [
    {
      degree: "",
      school: "",
      location: "",
      startDate: "",
      endDate: ""
    }
  ],
  achievements: [],
  references: [],
  templateType: "standard"
};

const sections = [
  { id: 0, name: "Template" },
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Summary" },
  { id: 3, name: "Experience" },
  { id: 4, name: "Skills" },
  { id: 5, name: "Education" }
];

const ResumeBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [showPreview, setShowPreview] = useState(false);
  const [skillInput, setSkillInput] = useState({ category: '', skill: '' });
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('christian-torres');
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value
      }
    }));
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeData(prev => ({
      ...prev,
      summary: e.target.value
    }));
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    setResumeData(prev => {
      const newExperience = [...prev.experience];
      if (field === 'highlights') {
        newExperience[index] = {
          ...newExperience[index],
          highlights: value.split('\n').map(h => h.trim()).filter(h => h)
        };
      } else {
        newExperience[index] = {
          ...newExperience[index],
          [field]: value
        };
      }
      return { ...prev, experience: newExperience };
    });
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          highlights: [""]
        }
      ]
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleSkillAdd = (category: string) => {
    if (skillInput.skill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          [category]: [...(prev.skills[category] || []), skillInput.skill.trim()]
        }
      }));
      setSkillInput(prev => ({ ...prev, skill: '' }));
    }
  };

  const removeSkill = (category: string, skillIndex: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter((_, i) => i !== skillIndex)
      }
    }));
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    setResumeData(prev => {
      const newEducation = [...prev.education];
      newEducation[index] = {
        ...newEducation[index],
        [field]: value
      };
      return { ...prev, education: newEducation };
    });
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: ""
        }
      ]
    }));
  };

  const removeEducation = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleAchievementChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const achievements = e.target.value
      .split('\n')
      .filter(Boolean);
    
    setResumeData(prev => ({
      ...prev,
      achievements
    }));
  };

  const handleTemplateChange = (value: "standard" | "analyst" | "scientist" | "engineer") => {
    setResumeData(prev => ({
      ...prev,
      templateType: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowPreview(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    
    setIsDownloading(true);
    try {
      await document.fonts.ready;
      
      const clone = resumeRef.current.cloneNode(true) as HTMLElement;
      clone.style.width = '210mm'; // A4 width
      clone.style.height = '297mm'; // A4 height
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.background = 'white';
      clone.style.padding = '20mm'; // Add some padding
      document.body.appendChild(clone);
      
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        windowWidth: clone.scrollWidth,
        windowHeight: clone.scrollHeight,
      });
      
      document.body.removeChild(clone);
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getSelectedTemplate = () => {
    switch (selectedTemplate) {
      case 'christian-torres':
        return <ChristianTorresTemplate resumeData={resumeData} />;
      case 'grace-jackson':
        return <GraceJacksonTemplate resumeData={resumeData} />;
      case 'alexander-taylor':
        return <AlexanderTaylorTemplate resumeData={resumeData} />;
      case 'aiden-williams':
        return <AidenWilliamsTemplate resumeData={resumeData} />;
      case 'mason-turner':
        return <MasonTurnerTemplate resumeData={resumeData} />;
      default:
        return <ChristianTorresTemplate resumeData={resumeData} />;
    }
  };

  if (showPreview) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="mb-6 flex justify-between items-center max-w-[210mm] mx-auto animate-fade-up">
          <Button 
            onClick={() => setShowPreview(false)} 
            variant="outline" 
            className="button-secondary flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Edit
          </Button>
          <Button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="button-primary flex items-center gap-2"
          >
            {isDownloading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Generating PDF...
              </div>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download PDF
              </>
            )}
          </Button>
        </div>
        <div className="overflow-auto py-8">
          <div ref={resumeRef} className="resume-shadow animate-fade-up">
            {getSelectedTemplate()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between animate-fade-up">
            <h1 className="text-4xl font-bold gradient-text">
              Resume Builder
            </h1>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowPreview(true)}
                className="button-secondary"
              >
                Preview
              </Button>
              <Button 
                onClick={handleDownload}
                className="button-primary"
              >
                Download PDF
              </Button>
            </div>
          </div>
          
          <nav className="flex gap-2 border-b border-border/50 pb-2 animate-slide-in">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentStep(section.id)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  currentStep === section.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-105'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
      
          <div className="glass-card p-6 animate-fade-up">
            {(() => {
              switch (currentStep) {
                case 0:
                  return (
                    <div className="animate-fade-up">
                      <ResumeTemplates
                        selectedTemplate={selectedTemplate}
                        onSelectTemplate={setSelectedTemplate}
                      />
                    </div>
                  );
                case 1:
                  return (
                    <div className="space-y-6 animate-fade-up">
                      <h2 className="text-2xl font-semibold gradient-text">Personal Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={resumeData.personalInfo.fullName}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle" className="text-sm font-medium">Job Title</Label>
                          <Input
                            id="jobTitle"
                            name="jobTitle"
                            value={resumeData.personalInfo.jobTitle}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={resumeData.personalInfo.email}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={resumeData.personalInfo.phone}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                          <Input
                            id="location"
                            name="location"
                            value={resumeData.personalInfo.location}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website" className="text-sm font-medium">Website (Optional)</Label>
                          <Input
                            id="website"
                            name="website"
                            value={resumeData.personalInfo.website}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn (Optional)</Label>
                          <Input
                            id="linkedin"
                            name="linkedin"
                            value={resumeData.personalInfo.linkedin}
                            onChange={handlePersonalInfoChange}
                            className="glass-input"
                          />
                        </div>
                      </div>
                    </div>
                  );
                case 2:
                  return (
                    <div className="space-y-6 animate-fade-up">
                      <h2 className="text-2xl font-semibold gradient-text">Professional Summary</h2>
                      <div className="space-y-2">
                        <Label htmlFor="summary" className="text-sm font-medium">Write a compelling summary of your professional background</Label>
                        <Textarea
                          id="summary"
                          value={resumeData.summary}
                          onChange={handleSummaryChange}
                          rows={6}
                          className="glass-input"
                          placeholder="Highlight your key skills, experience, and career objectives..."
                        />
                      </div>
                    </div>
                  );
                case 3:
                  return (
                    <div className="space-y-6 animate-fade-up">
                      <h2 className="text-2xl font-semibold gradient-text">Work Experience</h2>
                      {resumeData.experience.map((exp, index) => (
                        <div key={index} className="glass-card p-6 space-y-4 relative card-hover">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
                            onClick={() => removeExperience(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">Job Title</Label>
                              <Input
                                value={exp.title}
                                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                className="glass-input"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">Company</Label>
                              <Input
                                value={exp.company}
                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                className="glass-input"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">Location</Label>
                              <Input
                                value={exp.location}
                                onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                                className="glass-input"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-sm font-medium">Start Date</Label>
                                <Input
                                  type="date"
                                  value={exp.startDate}
                                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                                  className="glass-input"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-sm font-medium">End Date</Label>
                                <Input
                                  type="date"
                                  value={exp.endDate}
                                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                                  className="glass-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Key Achievements/Responsibilities</Label>
                            <Textarea
                              value={exp.highlights.join('\n')}
                              onChange={(e) => handleExperienceChange(index, 'highlights', e.target.value)}
                              rows={4}
                              className="glass-input"
                              placeholder="Enter each achievement on a new line..."
                            />
                          </div>
                        </div>
                      ))}
                      <Button 
                        onClick={addExperience} 
                        className="w-full button-secondary"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  );
                case 4:
                  return (
                    <div className="space-y-6 animate-fade-up">
                      <h2 className="text-2xl font-semibold gradient-text">Skills</h2>
                      {Object.entries(resumeData.skills).map(([category, skills]) => (
                        <div key={category} className="glass-card p-6 space-y-4 card-hover">
                          <h3 className="font-semibold text-lg">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                              <div
                                key={index}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center gap-2 hover-scale"
                              >
                                <span>{skill}</span>
                                <button
                                  onClick={() => removeSkill(category, index)}
                                  className="text-primary/60 hover:text-primary hover:scale-110 transition-transform"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              value={skillInput.skill}
                              onChange={(e) => setSkillInput(prev => ({ ...prev, skill: e.target.value }))}
                              placeholder={`Add ${category}`}
                              className="glass-input"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleSkillAdd(category);
                                }
                              }}
                            />
                            <Button 
                              onClick={() => handleSkillAdd(category)}
                              className="button-primary"
                            >
                              Add
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                case 5:
                  return (
                    <div className="space-y-6 animate-fade-up">
                      <h2 className="text-2xl font-semibold gradient-text">Education</h2>
                      {resumeData.education.map((edu, index) => (
                        <div key={index} className="glass-card p-6 space-y-4 relative card-hover">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
                            onClick={() => removeEducation(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">Degree</Label>
                              <Input
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                className="glass-input"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">School</Label>
                              <Input
                                value={edu.school}
                                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                                className="glass-input"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">Location</Label>
                              <Input
                                value={edu.location}
                                onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                                className="glass-input"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-sm font-medium">Start Date</Label>
                                <Input
                                  type="date"
                                  value={edu.startDate}
                                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                                  className="glass-input"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-sm font-medium">End Date</Label>
                                <Input
                                  type="date"
                                  value={edu.endDate}
                                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                                  className="glass-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button 
                        onClick={addEducation} 
                        className="w-full button-secondary"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
