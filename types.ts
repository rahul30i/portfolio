import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineEvent {
  role: string;
  company: string;
  duration?: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  imageUrl: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  imageUrl: string;
}

export interface Achievement {
    description: string;
}

export interface Interest {
    description: string;
}
