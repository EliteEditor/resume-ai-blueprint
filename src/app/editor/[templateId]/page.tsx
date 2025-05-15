
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DirectEditTemplate from '@/components/DirectEditTemplate';
import ProfessionalTemplate from '@/components/resume-templates/ProfessionalTemplate';
import CreativeTemplate from '@/components/resume-templates/CreativeTemplate';
import MinimalTechTemplate from '@/components/resume-templates/MinimalTechTemplate';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

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

const EditorPage: React.FC = () => {
  const { templateId } = useParams();
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
  
  const handleDownload = async () => {
    try {
      const resumeElement = document.querySelector('.resume-content') as HTMLElement;
      
      if (!resumeElement) {
        toast.error("Could not find the resume content to download");
        return;
      }

      toast.info("Preparing your resume for download...");
      
      // Set A4 dimensions
      const a4Width = 210; // mm
      const a4Height = 297; // mm
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Clone the element to avoid modifying the original
      const clone = resumeElement.cloneNode(true) as HTMLElement;
      clone.style.width = '210mm';
      clone.style.height = '297mm';
      clone.style.background = 'white';
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);
      
      // Use higher scale for better quality
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        // Set canvas size to match A4 proportions
        width: clone.offsetWidth,
        height: clone.offsetHeight,
        // Ensure we capture all of the content
        windowWidth: clone.scrollWidth,
        windowHeight: clone.scrollHeight
      });
      
      // Remove the clone after capturing
      document.body.removeChild(clone);
      
      // Calculate scaling to fit A4 proportions
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const imgWidth = a4Width;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add image to PDF, properly scaled
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, Math.min(imgHeight, a4Height));
      
      // If content exceeds one page, create additional pages
      if (imgHeight > a4Height) {
        let heightLeft = imgHeight - a4Height;
        let position = -a4Height;
        
        while (heightLeft > 0) {
          position = position - a4Height;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= a4Height;
        }
      }
      
      pdf.save(`resume-${templateId}.pdf`);
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error('Download failed:', error);
      toast.error("Failed to download resume. Please try again.");
    }
  };

  // Render appropriate template based on templateId
  const renderTemplate = () => {
    if (templateId === 'professional-erp') {
      return <div className="resume-content"><ProfessionalTemplate resumeData={resumeData} /></div>;
    }
    if (templateId === 'creative-design') {
      return <div className="resume-content"><CreativeTemplate resumeData={resumeData} /></div>;
    }
    if (templateId === 'minimal-tech') {
      return <div className="resume-content"><MinimalTechTemplate resumeData={resumeData} /></div>;
    }
    // Default to DirectEditTemplate
    return <DirectEditTemplate />;
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
            <p className="text-gray-600 dark:text-gray-400">Customize your resume to match your experience and job requirements</p>
          </div>
          <Button 
            onClick={handleDownload} 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Template editing interface */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm overflow-auto">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
