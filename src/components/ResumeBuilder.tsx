import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Trash2, 
  Download,
  Check,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

// Resume template components
import CleanTemplate from './resume-templates/CleanTemplate';
import ModernTemplate from './resume-templates/ModernTemplate';
import VisualTemplate from './resume-templates/VisualTemplate';

interface FormData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
  };
  objective: string;
  workExperience: {
    id: number;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    id: number;
    title: string;
    description: string;
  }[];
  education: {
    id: number;
    institution: string;
    degree: string;
    field: string;
    year: string;
  }[];
  certifications: {
    id: number;
    name: string;
    issuer: string;
    year: string;
  }[];
}

const ResumeBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [skillInput, setSkillInput] = useState('');
  const isMobile = useIsMobile();
  
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
    },
    objective: '',
    workExperience: [
      { 
        id: 1, 
        company: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        description: '' 
      }
    ],
    skills: [],
    projects: [{ id: 1, title: '', description: '' }],
    education: [{ id: 1, institution: '', degree: '', field: '', year: '' }],
    certifications: [{ id: 1, name: '', issuer: '', year: '' }],
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowTemplates(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value
      }
    });
  };

  const handleObjectiveChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      objective: e.target.value
    });
  };

  const handleWorkExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newWorkExperience = [...formData.workExperience];
    newWorkExperience[index] = {
      ...newWorkExperience[index],
      [name]: value
    };
    
    setFormData({
      ...formData,
      workExperience: newWorkExperience
    });
  };

  const addWorkExperience = () => {
    const newId = formData.workExperience.length > 0 
      ? Math.max(...formData.workExperience.map(item => item.id)) + 1 
      : 1;
      
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        { 
          id: newId, 
          company: '', 
          position: '', 
          startDate: '', 
          endDate: '', 
          description: '' 
        }
      ]
    });
  };

  const removeWorkExperience = (id: number) => {
    if (formData.workExperience.length > 1) {
      setFormData({
        ...formData,
        workExperience: formData.workExperience.filter(item => item.id !== id)
      });
    }
  };

  const handleSkillInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim() !== '') {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData({
          ...formData,
          skills: [...formData.skills, skillInput.trim()]
        });
      }
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(s => s !== skill)
    });
  };

  const handleProjectChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newProjects = [...formData.projects];
    newProjects[index] = {
      ...newProjects[index],
      [name]: value
    };
    
    setFormData({
      ...formData,
      projects: newProjects
    });
  };

  const addProject = () => {
    const newId = formData.projects.length > 0 
      ? Math.max(...formData.projects.map(item => item.id)) + 1 
      : 1;
      
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { id: newId, title: '', description: '' }
      ]
    });
  };

  const removeProject = (id: number) => {
    if (formData.projects.length > 1) {
      setFormData({
        ...formData,
        projects: formData.projects.filter(item => item.id !== id)
      });
    }
  };

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value
    };
    
    setFormData({
      ...formData,
      education: newEducation
    });
  };

  const addEducation = () => {
    const newId = formData.education.length > 0 
      ? Math.max(...formData.education.map(item => item.id)) + 1 
      : 1;
      
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { id: newId, institution: '', degree: '', field: '', year: '' }
      ]
    });
  };

  const removeEducation = (id: number) => {
    if (formData.education.length > 1) {
      setFormData({
        ...formData,
        education: formData.education.filter(item => item.id !== id)
      });
    }
  };

  const handleCertificationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCertifications = [...formData.certifications];
    newCertifications[index] = {
      ...newCertifications[index],
      [name]: value
    };
    
    setFormData({
      ...formData,
      certifications: newCertifications
    });
  };

  const addCertification = () => {
    const newId = formData.certifications.length > 0 
      ? Math.max(...formData.certifications.map(item => item.id)) + 1 
      : 1;
      
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        { id: newId, name: '', issuer: '', year: '' }
      ]
    });
  };

  const removeCertification = (id: number) => {
    if (formData.certifications.length > 1) {
      setFormData({
        ...formData,
        certifications: formData.certifications.filter(item => item.id !== id)
      });
    }
  };

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    toast.success(`${template} template selected!`);
  };

  const handleDownload = () => {
    // In a real app, this would call the backend API to generate a PDF
    toast.success("Resume downloaded successfully!");
  };

  if (showTemplates) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Choose a Resume Template</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={`p-4 cursor-pointer hover:shadow-lg transition-shadow ${selectedTemplate === 'clean' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleTemplateSelect('clean')}>
            <div className="h-80 overflow-hidden border border-gray-200 dark:border-gray-800 mb-3">
              <div className="transform scale-[0.4] origin-top-left h-[250%] w-[250%]">
                <CleanTemplate data={formData} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Clean Template</h3>
              {selectedTemplate === 'clean' && <Check className="h-5 w-5 text-primary" />}
            </div>
          </Card>

          <Card className={`p-4 cursor-pointer hover:shadow-lg transition-shadow ${selectedTemplate === 'modern' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleTemplateSelect('modern')}>
            <div className="h-80 overflow-hidden border border-gray-200 dark:border-gray-800 mb-3">
              <div className="transform scale-[0.4] origin-top-left h-[250%] w-[250%]">
                <ModernTemplate data={formData} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Modern Template</h3>
              {selectedTemplate === 'modern' && <Check className="h-5 w-5 text-primary" />}
            </div>
          </Card>

          <Card className={`p-4 cursor-pointer hover:shadow-lg transition-shadow ${selectedTemplate === 'visual' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleTemplateSelect('visual')}>
            <div className="h-80 overflow-hidden border border-gray-200 dark:border-gray-800 mb-3">
              <div className="transform scale-[0.4] origin-top-left h-[250%] w-[250%]">
                <VisualTemplate data={formData} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Visual Template</h3>
              {selectedTemplate === 'visual' && <Check className="h-5 w-5 text-primary" />}
            </div>
          </Card>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={() => setShowTemplates(false)}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Form
          </Button>
          
          <Button 
            disabled={!selectedTemplate} 
            onClick={handleDownload}
            className="flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Build Your Resume</h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${
              currentStep >= 2 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
            }`}></div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}>
              2
            </div>
            <div className={`w-16 h-1 ${
              currentStep >= 3 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
            }`}></div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}>
              3
            </div>
            {!isMobile && (
              <>
                <div className={`w-16 h-1 ${
                  currentStep >= 4 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentStep >= 4 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}>
                  4
                </div>
                <div className={`w-16 h-1 ${
                  currentStep >= 5 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentStep >= 5 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}>
                  5
                </div>
                <div className={`w-16 h-1 ${
                  currentStep >= 6 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentStep >= 6 ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}>
                  6
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.personalInfo.fullName}
                  onChange={handlePersonalInfoChange}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  placeholder="john.doe@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.personalInfo.location}
                  onChange={handlePersonalInfoChange}
                  placeholder="New York, NY"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Career Objective */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Career Objective</h2>
            <div className="mb-4">
              <Label htmlFor="objective">Write a brief career objective</Label>
              <Textarea
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleObjectiveChange}
                placeholder="Dedicated and detail-oriented professional seeking to leverage my skills in..."
                className="mt-1 h-32"
              />
            </div>
          </div>
        )}

        {/* Step 3: Work Experience */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            
            {formData.workExperience.map((exp, index) => (
              <div key={exp.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Experience {index + 1}</h3>
                  {formData.workExperience.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeWorkExperience(exp.id)}
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor={`company-${exp.id}`}>Company</Label>
                    <Input
                      id={`company-${exp.id}`}
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      placeholder="ABC Corporation"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`position-${exp.id}`}>Position</Label>
                    <Input
                      id={`position-${exp.id}`}
                      name="position"
                      value={exp.position}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      placeholder="Software Engineer"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                    <Input
                      id={`startDate-${exp.id}`}
                      name="startDate"
                      value={exp.startDate}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      placeholder="Jan 2020"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                    <Input
                      id={`endDate-${exp.id}`}
                      name="endDate"
                      value={exp.endDate}
                      onChange={(e) => handleWorkExperienceChange(index, e)}
                      placeholder="Present"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor={`description-${exp.id}`}>Description</Label>
                  <Textarea
                    id={`description-${exp.id}`}
                    name="description"
                    value={exp.description}
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    placeholder="Describe your responsibilities and achievements..."
                    className="mt-1 h-24"
                  />
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              className="flex items-center"
              onClick={addWorkExperience}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Experience
            </Button>
          </div>
        )}

        {/* Step 4: Skills */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            
            <div className="mb-6">
              <Label htmlFor="skills">Add your skills (press Enter after each skill)</Label>
              <Input
                id="skills"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleSkillInput}
                placeholder="JavaScript, React, Python..."
                className="mt-1 tag-input"
              />
              
              <div className="flex flex-wrap gap-2 mt-4">
                {formData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center"
                  >
                    <span>{skill}</span>
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-2 focus:outline-none"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Projects */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            
            {formData.projects.map((project, index) => (
              <div key={project.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Project {index + 1}</h3>
                  {formData.projects.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeProject(project.id)}
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  )}
                </div>
                
                <div className="mb-4">
                  <Label htmlFor={`title-${project.id}`}>Project Title</Label>
                  <Input
                    id={`title-${project.id}`}
                    name="title"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, e)}
                    placeholder="E-commerce Website"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor={`description-${project.id}`}>Description</Label>
                  <Textarea
                    id={`description-${project.id}`}
                    name="description"
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, e)}
                    placeholder="Describe the project, technologies used, and your role..."
                    className="mt-1 h-24"
                  />
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              className="flex items-center"
              onClick={addProject}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Project
            </Button>
          </div>
        )}

        {/* Step 6: Education and Certifications */}
        {currentStep === 6 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Education</h2>
            
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Education {index + 1}</h3>
                  {formData.education.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeEducation(edu.id)}
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                    <Input
                      id={`institution-${edu.id}`}
                      name="institution"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="University of Example"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Bachelor's"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                    <Input
                      id={`field-${edu.id}`}
                      name="field"
                      value={edu.field}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Computer Science"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`year-${edu.id}`}>Year of Completion</Label>
                    <Input
                      id={`year-${edu.id}`}
                      name="year"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="2020"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              className="flex items-center mb-6"
              onClick={addEducation}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Education
            </Button>

            <h2 className="text-xl font-semibold mb-6 mt-8">Certifications</h2>
            
            {formData.certifications.map((cert, index) => (
              <div key={cert.id} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Certification {index + 1}</h3>
                  {formData.certifications.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeCertification(cert.id)}
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor={`name-${cert.id}`}>Certificate Name</Label>
                    <Input
                      id={`name-${cert.id}`}
                      name="name"
                      value={cert.name}
                      onChange={(e) => handleCertificationChange(index, e)}
                      placeholder="AWS Certified Solutions Architect"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`issuer-${cert.id}`}>Issuing Organization</Label>
                    <Input
                      id={`issuer-${cert.id}`}
                      name="issuer"
                      value={cert.issuer}
                      onChange={(e) => handleCertificationChange(index, e)}
                      placeholder="Amazon Web Services"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`year-${cert.id}`}>Year</Label>
                    <Input
                      id={`year-${cert.id}`}
                      name="year"
                      value={cert.year}
                      onChange={(e) => handleCertificationChange(index, e)}
                      placeholder="2023"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              className="flex items-center"
              onClick={addCertification}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Certification
            </Button>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          )}
          {currentStep === 1 && <div></div>}
          
          <Button onClick={handleNext}>
            {currentStep < totalSteps ? (
              <>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </>
            ) : (
              'Choose Template'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
