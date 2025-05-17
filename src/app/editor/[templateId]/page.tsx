import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    profileImage: undefined as string | undefined
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
      
      // Create a clone for PDF export with enhanced styling
      const clone = resumeElement.cloneNode(true) as HTMLElement;
      
      // Remove any buttons or edit controls from the clone
      const buttonsToRemove = clone.querySelectorAll('button');
      buttonsToRemove.forEach(button => button.remove());
      
      // Replace input fields with properly styled spans to prevent overlapping
      const inputsToReplace = clone.querySelectorAll('input, textarea');
      inputsToReplace.forEach(input => {
        const span = document.createElement('span');
        span.textContent = (input as HTMLInputElement).value;
        span.style.color = window.getComputedStyle(input).color;
        span.style.fontFamily = window.getComputedStyle(input).fontFamily;
        span.style.fontSize = window.getComputedStyle(input).fontSize;
        span.style.fontWeight = window.getComputedStyle(input).fontWeight;
        span.style.lineHeight = "1.5"; // Add proper line height to prevent overlapping
        span.style.display = "block"; // Make each text block its own line
        span.style.margin = "0 0 0.25rem 0"; // Add small margin between text blocks
        input.parentNode?.replaceChild(span, input);
      });
      
      // Fix spacing in the PDF layout
      const contentSections = clone.querySelectorAll('.col-span-1, .col-span-2');
      contentSections.forEach(section => {
        (section as HTMLElement).style.pageBreakInside = "avoid";
        (section as HTMLElement).style.padding = "4px";
      });
      
      // Enhance styling for print
      clone.style.width = '210mm';
      clone.style.minHeight = '297mm';
      clone.style.padding = '15mm'; // Adjusted padding to ensure content fits
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.backgroundColor = '#ffffff';
      document.body.appendChild(clone);
      
      // Remove print class from original
      resumeElement.classList.remove('for-print');
      
      // Use html2canvas with higher quality settings
      const canvas = await html2canvas(clone, {
        scale: 5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: true,
        onclone: (document, element) => {
          // Enhanced styling preservation for PDF generation
          element.querySelectorAll('[class*="bg-"]').forEach((el) => {
            const computedStyle = window.getComputedStyle(el as HTMLElement);
            (el as HTMLElement).style.backgroundColor = computedStyle.backgroundColor;
          });
          
          element.querySelectorAll('[class*="text-"]').forEach((el) => {
            const computedStyle = window.getComputedStyle(el as HTMLElement);
            (el as HTMLElement).style.color = computedStyle.color;
          });
          
          // Fix any spacing issues
          element.querySelectorAll('.space-y-2, .space-y-4, .space-y-6').forEach((el) => {
            const children = el.children;
            for (let i = 0; i < children.length; i++) {
              (children[i] as HTMLElement).style.marginBottom = '0.75rem';
            }
          });
        }
      });
      
      // Remove the clone after capturing
      document.body.removeChild(clone);
      
      // Create PDF with improved settings
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      // Handle multi-page resumes with proper scaling
      if (imgHeight > pageHeight) {
        let heightLeft = imgHeight - pageHeight;
        let position = -pageHeight;
        
        while (heightLeft > 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          position -= pageHeight;
        }
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
      isEditing: true
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
        />;
      case 'creative-design':
        return <CreativeTemplate 
          resumeData={resumeData}
          isEditable={true}
          onChangeData={handleResumeDataChange}
          onChangeSkill={handleSkillChange}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
        />;
      case 'minimal-tech':
        return <MinimalTechTemplate 
          resumeData={resumeData}
          isEditable={true}
          onChangeData={handleResumeDataChange}
          onChangeSkill={handleSkillChange}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
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
          .for-print .edit-control {
            display: none !important;
          }
          .for-print * {
            color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Additional styles to prevent text overlapping */
          .for-print input, 
          .for-print textarea {
            display: inline-block;
            width: auto;
            overflow: visible;
            text-overflow: clip;
            white-space: normal;
          }
          .for-print .space-y-2 > * {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .for-print .space-y-4 > * {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .for-print .space-y-6 > * {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default EditorPage;
