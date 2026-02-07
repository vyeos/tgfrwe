// Portfolio Data - Rudra Patel
// All personal and project information stored here for easy updates

export interface Project {
  id: string;
  name: string;
  description: string;
  duration: string;
  techStack: string[];
  githubUrl: string;
  deployedUrl: string;
  media: {
    type: 'image' | 'video';
    url: string;
    alt: string;
  };
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'primary' | 'language' | 'tool' | 'database';
  proficiency: 'expert' | 'advanced' | 'intermediate';
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  bio: string;
  location: {
    city: string;
    state: string;
    country: string;
    full: string;
  };
  email: string;
  education: {
    institution: string;
    degree: string;
    year: string;
    status: string;
  };
  socials: SocialLink[];
  resume?: string;
}

// =====================
// PERSONAL INFORMATION
// =====================
export const personalInfo: PersonalInfo = {
  name: "Rudra Patel",
  firstName: "Rudra",
  lastName: "Patel",
  title: "Frontend Developer",
  tagline: "Crafting performant, pixel-perfect interfaces with obsessive attention to detail",
  bio: `I'm a frontend developer with a knack for building web experiences that don't just work—they feel right. Currently in my 2nd year at Adani University, I spend my days (and many nights) in Neovim, architecting interfaces with Next.js, TypeScript, and Tailwind CSS.

I believe great software is invisible—users shouldn't notice the code, only the seamless experience. When I'm not pushing pixels or optimizing bundle sizes, I'm diving into backend challenges because good frontends need solid foundations.`,
  location: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    full: "Ahmedabad, Gujarat, India"
  },
  email: "rudranpatel0980@gmail.com",
  education: {
    institution: "Adani University",
    degree: "Bachelor's in Computer Science", // Update with actual degree
    year: "2nd Year",
    status: "Currently Pursuing"
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/vyeos",
      handle: "@vyeos"
    },
    {
      platform: "X",
      url: "https://x.com/vye_os",
      handle: "@vye_os"
    },
    {
      platform: "Email",
      url: "mailto:rudranpatel0980@gmail.com",
      handle: "rudranpatel0980@gmail.com"
    }
  ],
  resume: "" // Add resume URL when available
};

// =====================
// SKILLS & EXPERTISE
// =====================
export const skills: Skill[] = [
  // Primary Stack
  { name: "Next.js", category: "primary", proficiency: "expert" },
  { name: "TypeScript", category: "primary", proficiency: "expert" },
  { name: "Tailwind CSS", category: "primary", proficiency: "expert" },
  { name: "React", category: "primary", proficiency: "expert" },
  
  // Languages
  { name: "JavaScript", category: "language", proficiency: "expert" },
  { name: "Python", category: "language", proficiency: "advanced" },
  { name: "C", category: "language", proficiency: "intermediate" },
  
  // Tools & Frameworks
  { name: "Neovim", category: "tool", proficiency: "expert" },
  { name: "TanStack Query", category: "tool", proficiency: "advanced" },
  { name: "TanStack Router", category: "tool", proficiency: "advanced" },
  { name: "Node.js", category: "tool", proficiency: "advanced" },
  { name: "Git", category: "tool", proficiency: "advanced" },
  
  // Databases
  { name: "PostgreSQL", category: "database", proficiency: "advanced" },
  { name: "NoSQL", category: "database", proficiency: "intermediate" },
];

// Special emphasis on Neovim
export const neovimHighlight = {
  title: "Neovim Enthusiast",
  description: "My editor of choice. I've configured it to be a powerful, lightning-fast development environment that rivals any modern IDE. Keyboard-driven workflow, custom LSP configurations, and a setup that makes coding feel like playing an instrument.",
  configRepo: "", // Add your dotfiles/neovim config repo if available
};

// =====================
// PROJECTS
// =====================
export const projects: Project[] = [
  {
    id: "zendra-pdf",
    name: "Zendra PDF",
    description: "", // Add project description
    duration: "", // e.g., "Jan 2024 - Present" or "3 months"
    techStack: [], // e.g., ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
    githubUrl: "", // Add GitHub URL
    deployedUrl: "", // Add deployed URL
    media: {
      type: "image",
      url: "", // Add image/video URL
      alt: "Zendra PDF Preview"
    },
    featured: true
  },
  {
    id: "aspdc-website",
    name: "ASPDC Website",
    description: "", // Add project description
    duration: "", // e.g., "Feb 2024 - Apr 2024"
    techStack: [], // Add tech stack
    githubUrl: "", // Add GitHub URL
    deployedUrl: "", // Add deployed URL
    media: {
      type: "image",
      url: "", // Add image/video URL
      alt: "ASPDC Website Preview"
    },
    featured: true
  },
  {
    id: "vshl",
    name: "Vshl",
    description: "", // Add project description
    duration: "", // Add duration
    techStack: [], // Add tech stack
    githubUrl: "", // Add GitHub URL
    deployedUrl: "", // Add deployed URL
    media: {
      type: "image",
      url: "", // Add image/video URL
      alt: "Vshl Preview"
    },
    featured: true
  },
  {
    id: "snake-game",
    name: "Snake Game",
    description: "", // Add project description
    duration: "", // Add duration
    techStack: [], // e.g., ["JavaScript", "HTML Canvas", "CSS"]
    githubUrl: "", // Add GitHub URL
    deployedUrl: "", // Add deployed URL
    media: {
      type: "image",
      url: "", // Add image/video URL
      alt: "Snake Game Preview"
    },
    featured: false
  }
];

// =====================
// ADDITIONAL CONTENT
// =====================
export const siteMetadata = {
  title: "Rudra Patel | Frontend Developer",
  description: "Frontend developer crafting performant, pixel-perfect web experiences. Specializing in Next.js, TypeScript, and modern web technologies.",
  url: "", // Add your domain when available
  ogImage: "", // Add OG image URL
};

// Fun facts or personal touches
export const personalTouches = {
  currentlyLearning: [], // e.g., ["Rust", "WebGL", "System Design"]
  interests: [], // e.g., ["Open Source", "UI/UX Design", "Performance Optimization"]
  funFact: "", // Add a fun fact about yourself
};

// Export everything as a single object for convenience
export const portfolioData = {
  personal: personalInfo,
  skills,
  neovim: neovimHighlight,
  projects,
  metadata: siteMetadata,
  extras: personalTouches,
};

export default portfolioData;
