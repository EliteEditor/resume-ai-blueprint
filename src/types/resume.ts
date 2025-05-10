export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
  };
  summary: string;
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }[];
  skills: {
    [category: string]: string[];
  };
  education: {
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
  }[];
  achievements?: string[];
  references?: {
    name: string;
    title: string;
    contact: string;
  }[];
}