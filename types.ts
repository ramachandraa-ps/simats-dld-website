export type Role = 'SUPER_ADMIN' | 'DEPT_ADMIN' | 'FACULTY' | 'GUEST';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  photoUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Conference Paper' | 'Journal Article' | 'Book Chapter';
  doi?: string;
  tags?: string[];
  pdfLink?: string;
}

export interface Project {
  name: string;
  funding: string;
  amount: string;
  status: 'Ongoing' | 'Completed' | 'Deployed';
}

export interface Faculty {
  id: string;
  userId?: string;
  name: string;
  designation: string;
  qualification?: string;
  experience?: string;
  bio: string;
  photo: string;
  specialization: string[];
  researchInterests?: string[]; // Legacy support
  email: string;
  phone?: string;
  office?: string;
  publications: Publication[] | number; // Support count or array
  publicationsCount?: number;
  patentsCount?: number;
  hIndex?: number;
  googleScholar?: string;
  achievements: string[];
  courses?: string[];
  currentProjects?: Project[];
}

export interface ResearchCentre {
  id: string;
  name: string;
  shortName: string;
  head: string;
  description: string;
  color: string;
  icon: string;
  focusAreas: string[];
  keyProjects: Project[];
  facilities: string[];
  publicationsCount: number;
  patentsCount: number;
}

export interface PageSection {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export interface PageContent {
  pageId: string;
  slug: string;
  title: string;
  sections: PageSection[];
  lastUpdated: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src: string;
}

export interface Stat {
  label: string;
  value: number | string;
  trend?: string;
  color: string;
  bg?: string;
  icon?: any;
}