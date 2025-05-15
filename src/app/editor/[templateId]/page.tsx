
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DirectEditTemplate from '@/components/DirectEditTemplate';
import ProfessionalTemplate from '@/components/resume-templates/ProfessionalTemplate';
import CreativeTemplate from '@/components/resume-templates/CreativeTemplate';
import MinimalTechTemplate from '@/components/resume-templates/MinimalTechTemplate';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Plus, Edit, X } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ResumeData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  linkedin: string;
  location: string;
  skills: string[];
  summary: string;
  industryExpertise?: {
    field: string;
    level: number;
  };
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
    industryExpertise: {
      field: 'Field or industry',
      level: 33
    }
  });
  
  const [fieldBeingEdited, setFieldBeingEdited] = useState<string | null>(null);
  const [tempFieldValue, setTempFieldValue] = useState('');
  const [isExpertiseDialogOpen, setIsExpertiseDialogOpen] = useState(false);
  
  const handleExpertiseChange = (field: string, value: string | number) => {
    setResumeData(prev => ({
      ...prev,
      industryExpertise: {
        ...prev.industryExpertise!,
        [field]: value
      }
    }));
  };
  
  const handleFieldClick = (field: keyof ResumeData, value: any) => {
    // Don't handle clicks on complex objects
    if (typeof value === 'object' && value !== null) return;
    
    setFieldBeingEdited(field);
    setTempFieldValue(value);
  };
  
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempFieldValue(e.target.value);
  };
  
  const handleFieldSave = () => {
    if (!fieldBeingEdited) return;
    
    setResumeData(prev => ({
      ...prev,
      [fieldBeingEdited]: tempFieldValue
    }));
    
    setFieldBeingEdited(null);
  };
  
  const handleSkillAdd = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, 'New Skill']
    }));
  };
  
  const handleSkillChange = (index: number, value: string) => {
    setResumeData(prev => {
      const newSkills = [...prev.skills];
      newSkills[index] = value;
      return {
        ...prev,
        skills: newSkills
      };
    });
  };
  
  const handleSkillRemove = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
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
      
      // Clone the element to avoid modifying the original
      const clone = resumeElement.cloneNode(true) as HTMLElement;
      
      // Remove any edit controls or unnecessary elements for the PDF
      const editControls = clone.querySelectorAll('.edit-control');
      editControls.forEach(control => control.remove());
      
      // Add special class for print styling
      clone.classList.add('for-pdf-export');
      
      // Set A4 dimensions and position off-screen
      clone.style.width = '210mm';
      clone.style.height = '297mm';
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      clone.style.background = 'white';
      document.body.appendChild(clone);
      
      // Use higher scale for better quality
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: clone.offsetWidth,
        height: clone.offsetHeight,
        windowWidth: clone.scrollWidth,
        windowHeight: clone.scrollHeight
      });
      
      // Remove the clone after capturing
      document.body.removeChild(clone);
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Calculate correct dimensions to maintain aspect ratio
      const imgWidth = 210; // A4 width in mm
      const ratio = canvas.width / canvas.height;
      const imgHeight = imgWidth / ratio;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      // If content exceeds one page, create additional pages as needed
      if (imgHeight > 297) { // 297mm is A4 height
        let heightLeft = imgHeight - 297;
        let position = -297;
        
        while (heightLeft > 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= 297;
          position -= 297;
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
    if (templateId === 'professional-erp') {
      return (
        <div className="resume-content relative" onClick={(e) => e.target === e.currentTarget && setFieldBeingEdited(null)}>
          <ProfessionalTemplate resumeData={resumeData} />
          
          {/* Field editing interface */}
          {fieldBeingEdited && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full" onClick={e => e.stopPropagation()}>
                <h3 className="text-lg font-semibold mb-4">Edit {fieldBeingEdited}</h3>
                <Input 
                  value={tempFieldValue} 
                  onChange={handleFieldChange} 
                  autoFocus
                  className="mb-4"
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setFieldBeingEdited(null)}>Cancel</Button>
                  <Button onClick={handleFieldSave}>Save</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
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
                      value={resumeData.industryExpertise?.field || ''} 
                      onChange={(e) => handleExpertiseChange('field', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Expertise Level: {resumeData.industryExpertise?.level || 0}%</Label>
                    <Slider 
                      value={[resumeData.industryExpertise?.level || 0]} 
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

        {/* Skills editor */}
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                <Input
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="w-auto h-6 min-w-[100px] bg-transparent border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-5 w-5 rounded-full" 
                  onClick={() => handleSkillRemove(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" className="rounded-full" onClick={handleSkillAdd}>
              <Plus className="h-4 w-4 mr-1" /> Add Skill
            </Button>
          </div>
        </div>

        {/* Resume content */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm overflow-auto">
          <div className="relative" onClick={(e) => {
            if (fieldBeingEdited) {
              setFieldBeingEdited(null);
            }
          }}>
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
