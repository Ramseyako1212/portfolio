export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'web' | 'mobile' | 'ml' | 'management' | 'uiux';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  role: string;
  problemStatement: string;
  keyFeatures: string[];
  architecture: string[];
  metrics?: string;
  images: string[];
  highlights?: string[];
  repoName?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfUrl?: string;
  category: 'ai-data' | 'cybersecurity' | 'cloud' | 'literacy';
  skills: string[];
  verified: boolean;
}

export interface DesignProject {
  id: string;
  title: string;
  type: string;
  description: string;
  figmaUrl: string;
  tool: string;
  previewImage: string;
  problem: string;
  solution: string;
  features: string[];
  tokens?: {
    palette: string[];
    typography: string;
    components: string[];
  };
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    badge?: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  subtitle: string;
  bio: string;
  longBio: string;
  location: string;
  email: string;
  phone: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    status: string;
    location: string;
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
