export type Project = {
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
};

export type SkillCategory = 'primary' | 'language' | 'tool' | 'database';

export type Skill = {
  name: string;
  category: SkillCategory;
  icon?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  handle: string;
};

export type PersonalInfo = {
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
};
