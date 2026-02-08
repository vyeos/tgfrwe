export interface Project {
  id: string;
  name: string;
  description: string;
  duration: string;
  techStack: string[];
  githubUrl: string;
  deployedUrl: string;
  media: {
    type: "image" | "video";
    url: string;
    alt: string;
  };
}

export interface Skill {
  name: string;
  category: "primary" | "language" | "tool" | "database";
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
  tagline:
    "Crafting performant, pixel-perfect interfaces with obsessive attention to detail",
  bio: `I'm a frontend developer with a knack for building web experiences that don't just work—they feel right. I spend my days (and many nights) architecting interfaces with Next.js, TypeScript, and Tailwind CSS or doing systems programming when I feel like doing it.`,
  location: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    full: "Ahmedabad, Gujarat, India",
  },
  email: "rudranpatel0980@gmail.com",
  education: {
    institution: "Adani University",
    degree: "Bachelor's in Computer Science",
    year: "2nd Year",
    status: "Currently Pursuing",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/vyeos",
      handle: "@vyeos",
    },
    {
      platform: "X",
      url: "https://x.com/vye_os",
      handle: "@vye_os",
    },
    {
      platform: "Email",
      url: "mailto:rudranpatel0980@gmail.com",
      handle: "rudranpatel0980@gmail.com",
    },
  ],
  resume: "/resume.pdf",
};

// =====================
// SKILLS & EXPERTISE
// =====================
export const skills: Skill[] = [
  // Primary Stack
  { name: "Next.js", category: "primary" },
  { name: "TypeScript", category: "primary" },
  { name: "Tailwind CSS", category: "primary" },
  { name: "Shadcn", category: "primary" },
  { name: "Better Auth", category: "primary" },
  { name: "PostgreSQL", category: "primary" },
  { name: "Drizzle ORM", category: "primary" },
  { name: "Framer Motion", category: "primary" },

  // Languages
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "C", category: "language" },
  { name: "Lua", category: "language" },
  { name: "Golang", category: "language" },
  { name: "Python", category: "language" },

  // Tools & Frameworks
  { name: "Neovim", category: "tool" },
  { name: "Opencode", category: "tool" },
  { name: "TanStack Start", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "curl", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "Docker", category: "tool" },

  // Databases
  { name: "PostgreSQL", category: "database" },
  { name: "SQL", category: "database" },
  { name: "NoSQL", category: "database" },
  { name: "Drizzle ORM", category: "database" },
  { name: "Prisma ORM", category: "database" },
];

// Special emphasis on Neovim
export const neovimHighlight = {
  title: "Neovim Enthusiast",
  description:
    "My editor of choice. I've configured it to be a powerful, lightning-fast development environment that rivals any modern IDE. Keyboard-driven workflow, custom LSP configurations, and a setup that makes coding feel like playing an instrument.",
  configRepo: "https://github.com/vyeos/dotmac",
};

// =====================
// PROJECTS
// =====================
export const projects: Project[] = [
  {
    id: "zendra-pdf",
    name: "Zendra PDF",
    description:
      "Built a full-stack platform that transforms tedious PDF-generation into a one-click automated process. Integrates authentication, storage, and AI-powered document generation to provide a seamless user experience.",
    duration: "Sept 2025 - Nov 2025",
    techStack: [
      "Next.js",
      "TS",
      "Better Auth",
      "Supabase (PostgreSQL)",
      "Drizzle",
      "TailwindCSS",
      "Shadcn",
      "Python",
      "FastAPI",
      "Pincone",
      "Langchain",
      "Cloudflare",
    ],
    githubUrl: "https://github.com/vyeos/zendrapdf",
    deployedUrl: "https://zendrapdf.app",
    media: {
      type: "video",
      url: "/zendra.mp4",
      alt: "Zendra PDF Preview",
    },
  },
  {
    id: "aspdc-website",
    name: "ASPDC Website",
    description:
      "Designed and developed a modern, visually appealing website for our university’s programming club — ASPDC. Focused on performance, clean transitions, and a content-driven experience powered by Zenblog.",
    duration: "Aug 2025 - Sept 2025",
    techStack: [
      "Next.js",
      "TS",
      "NeonDB",
      "Drizzle",
      "TailwindCSS",
      "Shadcn",
      "Zenblog",
    ],
    githubUrl: "https://github.com/aspdc/aspdc-revamped",
    deployedUrl: "https://aspdc.vercel.app",
    media: {
      type: "video",
      url: "/aspdc.mp4",
      alt: "ASPDC Website Preview",
    },
  },
  {
    id: "vshl",
    name: "Vshl",
    description:
      "Started to see Magicalbat's YT channel and got inspired to write C. A shell was the first thing that struck my mind as my first C project",
    duration: "Jan 2026",
    techStack: ["C", "A lot of brain cells"],
    githubUrl: "https://github.com/vyeos/vshl",
    deployedUrl: "",
    media: {
      type: "video",
      url: "/vshl.mp4",
      alt: "Vshl Preview",
    },
  },
  {
    id: "snake-game",
    name: "Snake Game",
    description:
      "My first attempt on creating a game. Started with the basics and added my touches onto it. (Try the game with sound)",
    duration: "Feb 2025",
    techStack: ["Lua", "Love2D"],
    githubUrl: "https://github.com/vyeos/love-snake",
    deployedUrl: "",
    media: {
      type: "video",
      url: "/snake.mp4",
      alt: "Snake Game Preview",
    },
  },
];

// =====================
// ADDITIONAL CONTENT
// =====================
export const siteMetadata = {
  title: "Rudra Patel | Frontend Developer",
  description:
    "Frontend developer crafting performant, pixel-perfect web experiences. Specializing in Next.js, TypeScript, and modern web technologies.",
  url: "vyeos.me",
  ogImage: "/me.jpg",
};

// Fun facts or personal touches
export const personalTouches = {
  currentlyLearning: [],
  interests: [],
  funFact: "",
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
