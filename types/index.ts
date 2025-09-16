export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  link?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export interface Member {
  name: string;
  photo: string;
  role: string;
  blurb: string;
  linkedin: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

export interface Project {
  title: string;
  summary: string;
  impact: string;
  tags: string[];
  link?: string;
}

export interface CompanyLogo {
  name: string;
  logo: string;
  alt: string;
}
