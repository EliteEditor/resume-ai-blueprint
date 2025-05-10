
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DirectEditTemplate from '@/components/DirectEditTemplate';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

const EditorPage: React.FC = () => {
  const { templateId } = useParams();
  
  const handleDownload = async () => {
    try {
      const resumeElement = document.querySelector('.resume-content') as HTMLElement;
      
      if (!resumeElement) {
        toast.error("Could not find the resume content to download");
        return;
      }

      toast.info("Preparing your resume for download...");
      
      const canvas = await html2canvas(resumeElement, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`resume-${templateId}.pdf`);
      
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error('Download failed:', error);
      toast.error("Failed to download resume. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6 sm:p-8">
        {/* Header with back button and download button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link to="/templates">
              <Button variant="ghost" className="pl-0 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Templates
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-4">Edit Your Resume</h1>
            <p className="text-gray-600">Customize your resume to match your experience and job requirements</p>
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
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <DirectEditTemplate />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
