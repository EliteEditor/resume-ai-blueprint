
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const EditorPage: React.FC = () => {
  const { templateId } = useParams();
  const [isExpertiseDialogOpen, setIsExpertiseDialogOpen] = useState(false);
  const [industryExpertise, setIndustryExpertise] = useState({
    field: 'Field or industry',
    level: 33
  });
  
  const handleExpertiseChange = (field: string, value: string | number) => {
    setIndustryExpertise(prev => ({
      ...prev,
      [field]: value
    }));
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
      
      // Create a clone for PDF export
      const clone = resumeElement.cloneNode(true) as HTMLElement;
      
      // Remove any buttons or edit controls from the clone
      const buttonsToRemove = clone.querySelectorAll('button');
      buttonsToRemove.forEach(button => button.remove());
      
      // Set up for PDF export
      clone.style.width = '210mm';
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.padding = '20mm';
      clone.style.backgroundColor = 'white';
      clone.style.color = 'black';
      document.body.appendChild(clone);
      
      // Remove print class from original
      resumeElement.classList.remove('for-print');
      
      // Use html2canvas with higher quality settings
      const canvas = await html2canvas(clone, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: true
      });
      
      // Remove the clone after capturing
      document.body.removeChild(clone);
      
      // Create PDF
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      // Add more pages if content exceeds one page
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

  // Render appropriate template based on templateId
  const renderTemplate = () => {
    switch(templateId) {
      case 'professional-erp':
        return <ProfessionalTemplate resumeData={{
          fullName: 'YOUR NAME',
          jobTitle: 'The role you are applying for?',
          phone: '',
          email: '',
          linkedin: '',
          location: '',
          skills: ['Your Skill'],
          summary: 'Brief overview of your professional background and career objectives...',
          industryExpertise: industryExpertise
        }} />;
      case 'creative-design':
        return <CreativeTemplate resumeData={{
          fullName: 'YOUR NAME',
          jobTitle: 'The role you are applying for?',
          phone: '',
          email: '',
          linkedin: '',
          location: '',
          skills: ['Your Skill'],
          summary: 'Brief overview of your professional background and career objectives...'
        }} />;
      case 'minimal-tech':
        return <MinimalTechTemplate resumeData={{
          fullName: 'YOUR NAME',
          jobTitle: 'The role you are applying for?',
          phone: '',
          email: '',
          linkedin: '',
          location: '',
          skills: ['Your Skill'],
          summary: 'Brief overview of your professional background and career objectives...'
        }} />;
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
            <Dialog open={isExpertiseDialogOpen} onOpenChange={setIsExpertiseDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  Edit Industry Expertise
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Industry Expertise</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="field">Industry Field</Label>
                    <Input 
                      id="field" 
                      value={industryExpertise.field} 
                      onChange={(e) => handleExpertiseChange('field', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Expertise Level: {industryExpertise.level}%</Label>
                    <Slider 
                      value={[industryExpertise.level]} 
                      onValueChange={(value) => handleExpertiseChange('level', value[0])} 
                      max={100} 
                      step={1}
                    />
                  </div>
                  <Button onClick={() => setIsExpertiseDialogOpen(false)} className="w-full">
                    Save
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
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
            background-color: white !important;
          }
          .for-print button, 
          .for-print .edit-control {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default EditorPage;
