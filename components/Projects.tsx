import React from 'react';
import { Project } from '../types';
import Section from './Section';
import { GitHubIcon, ExternalLinkIcon } from './IconComponents';

const projectData: Project[] = [
  {
    title: 'WanderLust – Airbnb Clone Web App',
    description: [
      'Developed a full-stack web app with a focus on a feature-rich, responsive front-end for 1,000+ monthly user sessions.',
      'Engineered a responsive, mobile-first UI with Bootstrap, achieving a 30% improvement in mobile load times.',
      'Created reusable UX components and integrated Google Maps API for interactive previews.',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'EJS'],
    imageUrl: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87c9b?q=80&w=500&h=350&auto=format&fit=crop',
    link: 'https://github.com/rahul30i',
  },
  {
    title: 'AI Interview Chatbot',
    description: [
      'Developed an AI chatbot with a user-friendly web interface using Flask, supporting over 500 simulated interviews.',
      'Designed an interactive web UI with HTML/CSS and JavaScript to provide real-time feedback and enhance user engagement.',
      'Achieved 85% intent detection accuracy using a custom classifier, with fallback heuristics for ambiguous queries.',
    ],
    techStack: ['Python', 'NLTK', 'spaCy', 'scikit-learn', 'Flask'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=500&h=350&auto=format&fit=crop',
    link: 'https://github.com/rahul30i',
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, techStack, imageUrl, link }) => (
  <div className="bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 flex flex-col">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-heading mb-2">{title}</h3>
      <ul className="list-disc list-inside text-text space-y-1 mb-4 flex-grow">
        {description.slice(0, 2).map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span key={tech} className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-border">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover"
          >
            View on GitHub <GitHubIcon className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;