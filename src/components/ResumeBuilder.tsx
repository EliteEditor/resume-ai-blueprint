import React, { useState, useRef } from 'react';
<<<<<<< HEAD
import ChristianTorresTemplate from './resume-templates/ChristianTorresTemplate';
import GraceJacksonTemplate from './resume-templates/GraceJacksonTemplate';
import AlexanderTaylorTemplate from './resume-templates/AlexanderTaylorTemplate';
import AidenWilliamsTemplate from './resume-templates/AidenWilliamsTemplate';
import MasonTurnerTemplate from './resume-templates/MasonTurnerTemplate';
import ResumeTemplates from './ResumeTemplates';
=======
import StandardTemplate from './resume-templates/StandardTemplate';
import AnalystTemplate from './resume-templates/AnalystTemplate';
import ScientistTemplate from './resume-templates/ScientistTemplate';
import EngineerTemplate from './resume-templates/EngineerTemplate';
>>>>>>> c357b2bd0947de87665cb81cb48ab30105c118a4
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
<<<<<<< HEAD
    linkedin: ""
=======
    linkedIn: "",
    github: ""
>>>>>>> c357b2bd0947de87665cb81cb48ab30105c118a4
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
<<<<<<< HEAD
      clone.style.width = '210mm'; // A4 width
      clone.style.height = '297mm'; // A4 height
=======
      clone.style.width = '794px';
      clone.style.height = '1123px';
>>>>>>> c357b2bd0947de87665cb81cb48ab30105c118a4
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

<<<<<<< HEAD
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
=======
  const renderResumeTemplate = () => {
    switch (resumeData.templateType) {
      case "analyst":
        return <AnalystTemplate resumeData={resumeData} />;
      case "scientist":
        return <ScientistTemplate resumeData={resumeData} />;
      case "engineer":
        return <EngineerTemplate resumeData={resumeData} />;
      default:
        return <StandardTemplate resumeData={resumeData} />;
>>>>>>> c357b2bd0947de87665cb81cb48ab30105c118a4
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
<<<<<<< HEAD
        <div className="overflow-auto py-8">
          <div ref={resumeRef} className="resume-shadow animate-fade-up">
            {getSelectedTemplate()}
          </div>
=======
        <div ref={resumeRef}>
          {renderResumeTemplate()}
>>>>>>> c357b2bd0947de87665cb81cb48ab30105c118a4
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
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
=======
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold dark:text-white">
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Experience"}
              {currentStep === 3 && "Skills"}
              {currentStep === 4 && "Education & Achievements"}
              {currentStep === 5 && "Choose Template"}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">Step {currentStep} of 5</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="dark:text-gray-100">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={resumeData.personalInfo.fullName}
                onChange={handlePersonalInfoChange}
                placeholder="John Doe"
                className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                value={resumeData.personalInfo.jobTitle}
                onChange={handlePersonalInfoChange}
                placeholder="Software Engineer"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={resumeData.personalInfo.email}
                onChange={handlePersonalInfoChange}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={resumeData.personalInfo.phone}
                onChange={handlePersonalInfoChange}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={resumeData.personalInfo.location}
                onChange={handlePersonalInfoChange}
                placeholder="New York, NY"
              />
            </div>
            <div>
              <Label htmlFor="website">Website (Optional)</Label>
              <Input
                id="website"
                name="website"
                value={resumeData.personalInfo.website}
                onChange={handlePersonalInfoChange}
                placeholder="www.example.com"
              />
            </div>
            <div>
              <Label htmlFor="linkedIn">LinkedIn (Optional)</Label>
              <Input
                id="linkedIn"
                name="linkedIn"
                value={resumeData.personalInfo.linkedIn}
                onChange={handlePersonalInfoChange}
                placeholder="linkedin.com/in/johndoe"
              />
            </div>
            <div>
              <Label htmlFor="github">GitHub (Optional)</Label>
              <Input
                id="github"
                name="github"
                value={resumeData.personalInfo.github}
                onChange={handlePersonalInfoChange}
                placeholder="github.com/johndoe"
              />
            </div>
            <div>
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={resumeData.summary}
                onChange={handleSummaryChange}
                placeholder="Brief overview of your professional background and career objectives..."
                className="h-32"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="p-4 border dark:border-gray-600 rounded-lg space-y-4 dark:bg-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Experience {index + 1}</h3>
                  {resumeData.experience.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Job Title</Label>
                    <Input
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                      placeholder="New York, NY"
                    />
                  </div>
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                      placeholder="Jan 2020"
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                      placeholder="Present"
                    />
                  </div>
                </div>
                <div>
                  <Label>Key Achievements/Responsibilities</Label>
                  <Textarea
                    value={exp.highlights.join('\n')}
                    onChange={(e) => handleExperienceChange(index, 'highlights', e.target.value)}
                    placeholder="• Achievement 1&#10;• Achievement 2&#10;• Achievement 3"
                    className="h-32"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Add each achievement on a new line
                  </p>
                </div>
              </div>
            ))}
            <Button onClick={addExperience} variant="outline" className="w-full dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Another Experience
            </Button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="font-semibold dark:text-gray-100">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full flex items-center"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(category, index)}
                        className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={skillInput.category === category ? skillInput.skill : ''}
                    onChange={(e) => setSkillInput({ category, skill: e.target.value })}
                    placeholder={`Add ${category.toLowerCase()}`}
                    className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSkillAdd(category);
                      }
                    }}
                  />
                  <Button onClick={() => handleSkillAdd(category)} className="dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="p-4 border dark:border-gray-600 rounded-lg space-y-4 dark:bg-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Education {index + 1}</h3>
                  {resumeData.education.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  <div>
                    <Label>School</Label>
                    <Input
                      value={edu.school}
                      onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                      placeholder="University Name"
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={edu.location}
                      onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      value={edu.startDate}
                      onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                      placeholder="Sep 2016"
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      value={edu.endDate}
                      onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                      placeholder="May 2020"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={addEducation} variant="outline" className="w-full dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 mb-6">
              <Plus className="w-4 h-4 mr-2" />
              Add Another Education
            </Button>
            
            <div className="mt-8">
              <Label htmlFor="achievements">Key Achievements (Optional)</Label>
              <Textarea
                id="achievements"
                value={resumeData.achievements?.join('\n') || ''}
                onChange={handleAchievementChange}
                placeholder="• Led a cross-functional team to deliver project under budget&#10;• Increased department efficiency by 25%&#10;• Recognized with Employee of the Year award"
                className="h-32 whitespace-pre-wrap" 
              />
              <p className="text-sm text-gray-500 mt-1">
                Add each achievement on a new line. Formatting will be preserved.
              </p>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <h3 className="font-semibold dark:text-gray-100 mb-4">Choose a Resume Template</h3>
            
            <RadioGroup 
              value={resumeData.templateType} 
              onValueChange={(value) => handleTemplateChange(value as "standard" | "analyst" | "scientist" | "engineer")}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className={`border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all ${resumeData.templateType === 'standard' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                <div className="flex items-start">
                  <RadioGroupItem value="standard" id="standard" className="mt-1" />
                  <div className="ml-2">
                    <Label htmlFor="standard" className="font-medium">Standard Template</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">A clean, professional layout suitable for most industries</p>
                    <div className="mt-2 h-32 border rounded bg-gray-50 flex items-center justify-center">
                      <FileText className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all ${resumeData.templateType === 'analyst' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                <div className="flex items-start">
                  <RadioGroupItem value="analyst" id="analyst" className="mt-1" />
                  <div className="ml-2">
                    <Label htmlFor="analyst" className="font-medium">Business Analyst</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for data analysts and business professionals</p>
                    <div className="mt-2 h-32 border rounded overflow-hidden">
                      <img 
                        src="/lovable-uploads/85a6511a-3129-4e8a-9134-6ca86b3af5a6.png" 
                        alt="Analyst Template" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all ${resumeData.templateType === 'scientist' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                <div className="flex items-start">
                  <RadioGroupItem value="scientist" id="scientist" className="mt-1" />
                  <div className="ml-2">
                    <Label htmlFor="scientist" className="font-medium">Data Scientist</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ideal for technical roles and research positions</p>
                    <div className="mt-2 h-32 border rounded overflow-hidden">
                      <img 
                        src="/lovable-uploads/6fe3dd91-389b-414e-9de5-e24ba30e9cc1.png" 
                        alt="Scientist Template" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all ${resumeData.templateType === 'engineer' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                <div className="flex items-start">
                  <RadioGroupItem value="engineer" id="engineer" className="mt-1" />
                  <div className="ml-2">
                    <Label htmlFor="engineer" className="font-medium">Software Engineer</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Modern layout for software developers and engineers</p>
                    <div className="mt-2 h-32 border rounded overflow-hidden">
                      <img 
                        src="/lovable-uploads/79a60cbc-87d7-403d-a814-43dc48605414.png" 
                        alt="Engineer Template" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 1}
            className="dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-500"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button 
            onClick={handleNext}
            className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
          >
            {currentStep === 5 ? 'Preview Resume' : 'Next'}
            {currentStep !== 5 && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
>>>>>>> c357b2bd0947de87665cb81cb48ab30105c118a4
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
