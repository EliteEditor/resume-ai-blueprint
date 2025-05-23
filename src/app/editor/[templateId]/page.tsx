
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DirectEditTemplate from '@/components/DirectEditTemplate';
import ProfessionalTemplate from '@/components/resume-templates/ProfessionalTemplate';
import CreativeTemplate from '@/components/resume-templates/CreativeTemplate';
import MinimalTechTemplate from '@/components/resume-templates/MinimalTechTemplate';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from '@/hooks/use-toast';

const EditorPage: React.FC = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  
  // Add resume data state that will be editable
  const [resumeData, setResumeData] = useState({
    fullName: 'YOUR NAME',
    jobTitle: 'The role you are applying for?',
    phone: '',
    email: '',
    linkedin: '',
    location: '',
    skills: ['Your Skill'],
    summary: 'Brief overview of your professional background and career objectives...',
    profileImage: undefined as string | undefined,
    education: [
      {
        degree: 'Degree and Field of Study',
        school: 'School or University',
        period: 'Date Period'
      }
    ],
    experience: [
      {
        title: 'Job Title',
        company: 'Company Name',
        location: 'Location',
        period: 'Date Period',
        highlights: ['Add your accomplishment...']
      }
    ],
    projects: [
      {
        name: 'Project Name',
        period: 'Date Period',
        description: 'Project description...',
        highlights: ['Add project highlight...']
      }
    ]
  });
  
  // Add handler for resume data changes
  const handleResumeDataChange = (field: string, value: any) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Add handler for skill changes
  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = value;
    setResumeData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };
  
  // Add/remove skill handlers
  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, 'New Skill']
    }));
  };
  
  const removeSkill = (index: number) => {
    if (resumeData.skills.length > 1) {
      const newSkills = [...resumeData.skills];
      newSkills.splice(index, 1);
      setResumeData(prev => ({
        ...prev,
        skills: newSkills
      }));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one skill listed.",
        variant: "destructive"
      });
    }
  };

  // Education handlers
  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: 'Degree and Field of Study',
          school: 'School or University',
          period: 'Date Period'
        }
      ]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = {
      ...newEducation[index],
      [field]: value
    };
    setResumeData(prev => ({
      ...prev,
      education: newEducation
    }));
  };

  const removeEducation = (index: number) => {
    if (resumeData.education.length > 1) {
      const newEducation = [...resumeData.education];
      newEducation.splice(index, 1);
      setResumeData(prev => ({
        ...prev,
        education: newEducation
      }));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one education entry.",
        variant: "destructive"
      });
    }
  };

  // Experience handlers
  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: 'Job Title',
          company: 'Company Name',
          location: 'Location',
          period: 'Date Period',
          highlights: ['Add your accomplishment...']
        }
      ]
    }));
  };

  const updateExperience = (index: number, field: string, value: any) => {
    const newExperience = [...resumeData.experience];
    newExperience[index] = {
      ...newExperience[index],
      [field]: value
    };
    setResumeData(prev => ({
      ...prev,
      experience: newExperience
    }));
  };

  const updateExperienceHighlight = (expIndex: number, highlightIndex: number, value: string) => {
    const newExperience = [...resumeData.experience];
    newExperience[expIndex].highlights[highlightIndex] = value;
    setResumeData(prev => ({
      ...prev,
      experience: newExperience
    }));
  };

  const addExperienceHighlight = (expIndex: number) => {
    const newExperience = [...resumeData.experience];
    newExperience[expIndex].highlights.push('Add your accomplishment...');
    setResumeData(prev => ({
      ...prev,
      experience: newExperience
    }));
  };

  const removeExperienceHighlight = (expIndex: number, highlightIndex: number) => {
    if (resumeData.experience[expIndex].highlights.length > 1) {
      const newExperience = [...resumeData.experience];
      newExperience[expIndex].highlights.splice(highlightIndex, 1);
      setResumeData(prev => ({
        ...prev,
        experience: newExperience
      }));
    }
  };

  const removeExperience = (index: number) => {
    if (resumeData.experience.length > 1) {
      const newExperience = [...resumeData.experience];
      newExperience.splice(index, 1);
      setResumeData(prev => ({
        ...prev,
        experience: newExperience
      }));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one experience entry.",
        variant: "destructive"
      });
    }
  };

  // Projects handlers
  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: 'Project Name',
          period: 'Date Period',
          description: 'Project description...',
          highlights: ['Add project highlight...']
        }
      ]
    }));
  };

  const updateProject = (index: number, field: string, value: any) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    };
    setResumeData(prev => ({
      ...prev,
      projects: newProjects
    }));
  };

  const updateProjectHighlight = (projectIndex: number, highlightIndex: number, value: string) => {
    const newProjects = [...resumeData.projects];
    newProjects[projectIndex].highlights[highlightIndex] = value;
    setResumeData(prev => ({
      ...prev,
      projects: newProjects
    }));
  };

  const addProjectHighlight = (projectIndex: number) => {
    const newProjects = [...resumeData.projects];
    newProjects[projectIndex].highlights.push('Add project highlight...');
    setResumeData(prev => ({
      ...prev,
      projects: newProjects
    }));
  };

  const removeProjectHighlight = (projectIndex: number, highlightIndex: number) => {
    if (resumeData.projects[projectIndex].highlights.length > 1) {
      const newProjects = [...resumeData.projects];
      newProjects[projectIndex].highlights.splice(highlightIndex, 1);
      setResumeData(prev => ({
        ...prev,
        projects: newProjects
      }));
    }
  };

  const removeProject = (index: number) => {
    if (resumeData.projects.length > 1) {
      const newProjects = [...resumeData.projects];
      newProjects.splice(index, 1);
      setResumeData(prev => ({
        ...prev,
        projects: newProjects
      }));
    } else {
      toast({
        title: "Cannot Remove",
        description: "You must have at least one project entry.",
        variant: "destructive"
      });
    }
  };
  
  const handleDownload = async () => {
    try {
      const resumeElement = document.querySelector('.resume-content') as HTMLElement;
      
      if (!resumeElement) {
        toast({
          title: "Error",
          description: "Could not find the resume content to download",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Processing",
        description: "Preparing your resume for download..."
      });
      
      // Add print class to hide edit controls
      resumeElement.classList.add('for-print');
      
      // Set fixed dimensions for A4 paper
      const a4Width = 210; // mm
      const a4Height = 297; // mm
      const scaleFactor = 1.5; // Higher scale factor for better quality
      
      // Create a clone for PDF export with enhanced styling
      const clone = resumeElement.cloneNode(true) as HTMLElement;
      
      // Remove any buttons or edit controls from the clone
      const elementsToRemove = clone.querySelectorAll('button, .edit-control, [type="file"], label[for="profile-upload"]');
      elementsToRemove.forEach(el => el.remove());
      
      // Replace input fields with properly styled spans
      const inputsToReplace = clone.querySelectorAll('input, textarea');
      inputsToReplace.forEach(input => {
        const span = document.createElement('span');
        span.textContent = (input as HTMLInputElement).value || (input as HTMLInputElement).placeholder;
        span.style.color = window.getComputedStyle(input).color;
        span.style.fontFamily = window.getComputedStyle(input).fontFamily;
        span.style.fontSize = window.getComputedStyle(input).fontSize;
        span.style.fontWeight = window.getComputedStyle(input).fontWeight;
        span.style.lineHeight = "1.4"; 
        span.style.display = "block";
        span.style.margin = "0 0 0.2rem 0";
        span.style.wordBreak = "break-word";
        input.parentNode?.replaceChild(span, input);
      });
      
      // Enhance document for print
      clone.style.width = `${a4Width}mm`;
      clone.style.height = `${a4Height}mm`;
      clone.style.position = 'fixed';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.backgroundColor = '#ffffff';
      clone.style.overflow = 'hidden';
      clone.style.fontSize = '9pt'; // Smaller font size to fit more content
      
      document.body.appendChild(clone);
      
      // Remove print class from original
      resumeElement.classList.remove('for-print');
      
      // Use html2canvas with higher quality settings
      const canvas = await html2canvas(clone, {
        scale: scaleFactor,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: (clonedDoc, element) => {
          // Apply print-specific styling
          const style = clonedDoc.createElement('style');
          style.innerHTML = `
            * {
              box-sizing: border-box !important;
            }
            h1, h2, h3, h4, h5, h6 {
              margin-top: 0.4em !important;
              margin-bottom: 0.4em !important;
              page-break-after: avoid !important;
            }
            p, li, div, span {
              line-height: 1.4 !important;
              margin-bottom: 0.2em !important;
            }
            .col-span-1, .col-span-2, .col-span-3 {
              overflow: hidden !important;
            }
          `;
          clonedDoc.head.appendChild(style);
          
          // Enforce text color for all text elements
          element.querySelectorAll('*').forEach((el) => {
            if (el.textContent && el.textContent.trim()) {
              const computedStyle = window.getComputedStyle(el as HTMLElement);
              if (computedStyle.color === 'rgba(0, 0, 0, 0)' || computedStyle.color === 'transparent') {
                (el as HTMLElement).style.color = '#000000';
              }
            }
          });
          
          // Scale down if content is too large
          const sections = element.querySelectorAll('section, div[class*="col-span"]');
          if (sections.length > 8) {
            element.style.transform = 'scale(0.95)';
            element.style.transformOrigin = 'top left';
          }
        }
      });
      
      // Remove the clone after capturing
      document.body.removeChild(clone);
      
      // Create PDF with improved settings for single page
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      
      // Calculate dimensions to fit content to a single page
      const imgWidth = 210;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const maxHeight = 297; // A4 height
      
      // If content is taller than page, scale it down to fit
      if (imgHeight > maxHeight) {
        const scaleFactor = maxHeight / imgHeight;
        imgHeight = maxHeight;
        
        // Add compressed version to fit on single page
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth * scaleFactor, imgHeight, undefined, 'FAST');
      } else {
        // Add image normally if it fits
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      }
      
      pdf.save(`resume-${templateId}.pdf`);
      toast({
        title: "Success",
        description: "Resume downloaded successfully!"
      });
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Render appropriate template with editable functionality
  const renderTemplate = () => {
    // Common props for all templates to make them editable
    const editableProps = {
      resumeData,
      onChangeData: handleResumeDataChange,
      onChangeSkill: handleSkillChange,
      onAddSkill: addSkill,
      onRemoveSkill: removeSkill,
      isEditing: true,
      // Education handlers
      onAddEducation: addEducation,
      onUpdateEducation: updateEducation,
      onRemoveEducation: removeEducation,
      // Experience handlers
      onAddExperience: addExperience,
      onUpdateExperience: updateExperience,
      onUpdateExperienceHighlight: updateExperienceHighlight,
      onAddExperienceHighlight: addExperienceHighlight,
      onRemoveExperienceHighlight: removeExperienceHighlight,
      onRemoveExperience: removeExperience,
      // Project handlers
      onAddProject: addProject,
      onUpdateProject: updateProject,
      onUpdateProjectHighlight: updateProjectHighlight,
      onAddProjectHighlight: addProjectHighlight,
      onRemoveProjectHighlight: removeProjectHighlight,
      onRemoveProject: removeProject
    };

    switch(templateId) {
      case 'professional-erp':
        return <ProfessionalTemplate 
          resumeData={resumeData}
          isEditable={true}
          onChangeData={handleResumeDataChange}
          onChangeSkill={handleSkillChange}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
          onAddEducation={addEducation}
          onUpdateEducation={updateEducation}
          onRemoveEducation={removeEducation}
          onAddExperience={addExperience}
          onUpdateExperience={updateExperience}
          onUpdateExperienceHighlight={updateExperienceHighlight}
          onAddExperienceHighlight={addExperienceHighlight}
          onRemoveExperienceHighlight={removeExperienceHighlight}
          onRemoveExperience={removeExperience}
          onAddProject={addProject}
          onUpdateProject={updateProject}
          onUpdateProjectHighlight={updateProjectHighlight}
          onAddProjectHighlight={addProjectHighlight}
          onRemoveProjectHighlight={removeProjectHighlight}
          onRemoveProject={removeProject}
        />;
      case 'creative-design':
        return <CreativeTemplate 
          resumeData={resumeData}
          isEditable={true}
          onChangeData={handleResumeDataChange}
          onChangeSkill={handleSkillChange}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
          onAddEducation={addEducation}
          onUpdateEducation={updateEducation}
          onRemoveEducation={removeEducation}
          onAddExperience={addExperience}
          onUpdateExperience={updateExperience}
          onUpdateExperienceHighlight={updateExperienceHighlight}
          onAddExperienceHighlight={addExperienceHighlight}
          onRemoveExperienceHighlight={removeExperienceHighlight}
          onRemoveExperience={removeExperience}
          onAddProject={addProject}
          onUpdateProject={updateProject}
          onUpdateProjectHighlight={updateProjectHighlight}
          onAddProjectHighlight={addProjectHighlight}
          onRemoveProjectHighlight={removeProjectHighlight}
          onRemoveProject={removeProject}
        />;
      case 'minimal-tech':
        return <MinimalTechTemplate 
          resumeData={resumeData}
          isEditable={true}
          onChangeData={handleResumeDataChange}
          onChangeSkill={handleSkillChange}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
          onAddEducation={addEducation}
          onUpdateEducation={updateEducation}
          onRemoveEducation={removeEducation}
          onAddExperience={addExperience}
          onUpdateExperience={updateExperience}
          onUpdateExperienceHighlight={updateExperienceHighlight}
          onAddExperienceHighlight={addExperienceHighlight}
          onRemoveExperienceHighlight={removeExperienceHighlight}
          onRemoveExperience={removeExperience}
          onAddProject={addProject}
          onUpdateProject={updateProject}
          onUpdateProjectHighlight={updateProjectHighlight}
          onAddProjectHighlight={addProjectHighlight}
          onRemoveProjectHighlight={removeProjectHighlight}
          onRemoveProject={removeProject}
        />;
      default:
        return <DirectEditTemplate />;
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6 sm:p-8">
        {/* Header with back button and download button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link to="/templates">
              <Button variant="ghost" className="pl-0 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Templates
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-4">Edit Your Resume</h1>
            <p className="text-gray-600 dark:text-gray-400">Customize your resume directly by clicking on any section you want to edit</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleDownload} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Resume content */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm overflow-auto">
          <div className="resume-content">
            {renderTemplate()}
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
          }
          .for-print button, 
          .for-print .edit-control,
          .for-print [type="file"],
          .for-print label[for="profile-upload"] {
            display: none !important;
          }
          .for-print * {
            color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .for-print input, 
          .for-print textarea {
            border: none !important;
            padding: 0 !important;
            line-height: 1.4 !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: normal !important;
            word-break: break-word !important;
            max-width: 100% !important;
          }
          .for-print h1 {
            font-size: 24px !important;
          }
          .for-print h2 {
            font-size: 18px !important;
          }
          .for-print h3, .for-print h4 {
            font-size: 14px !important;
          }
          .for-print p, .for-print span, .for-print div, .for-print li {
            font-size: 9pt !important;
          }
        }
      `}} />
    </div>
  );
};

export default EditorPage;
