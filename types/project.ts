export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  cover: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  logo: string;
  preview: string;
  color: string;
}
