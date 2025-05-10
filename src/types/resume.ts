
export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
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
  techStack?: string[];
  keyAccomplishments?: string[];
  strengths?: {
    title: string;
    description: string;
  }[];
  projects?: {
    name: string;
    description: string;
    startDate?: string;
    endDate?: string;
    highlights?: string[];
  }[];
  certifications?: {
    name: string;
    issuer: string;
    date: string;
  }[];
  references?: {
    name: string;
    title: string;
    contact: string;
  }[];
  templateType?: "standard" | "analyst" | "scientist" | "engineer";
}
