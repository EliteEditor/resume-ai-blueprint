
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add utility functions for resume-related tasks
export const formatDate = (dateString: string) => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short'
    });
  } catch (e) {
    return dateString;
  }
};

// Add a global CSS class for PDF export
// This is used to ensure consistent styling during PDF export
const addPrintStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      .resume-document {
        box-shadow: none !important;
        border: none !important;
      }
      
      .resume-document .border-r,
      .resume-document .border-b,
      .resume-document .border-l,
      .resume-document .border-t {
        border-color: transparent !important;
      }
      
      .resume-heading {
        color: #2563eb !important;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }
      
      .resume-body {
        color: #374151 !important;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }
    }
  `;
  document.head.appendChild(style);
};

// Call this function when the app starts
if (typeof window !== 'undefined') {
  addPrintStyles();
}
