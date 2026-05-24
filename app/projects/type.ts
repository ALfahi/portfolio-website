export type Project = {
    id: string;
    title: string;
    images: string[];
    description: string;
    technologies: string[];
    featured?: boolean;
    githubLink?: string;
  };