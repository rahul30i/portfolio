import React from 'react';
import { SkillCategory } from '../types';
import Section from './Section';
import { 
  JavaScriptIcon, ReactIcon, NodeJSIcon, PythonIcon, MongoDbIcon, AwsIcon, 
  DockerIcon, TailwindIcon, HtmlIcon, CssIcon, GitIcon, AngularIcon, JavaIcon, CppIcon 
} from './IconComponents';

const skillData: SkillCategory[] = [
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'JavaScript', icon: <JavaScriptIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Node.js', icon: <NodeJSIcon /> },
      { name: 'Angular', icon: <AngularIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'HTML5', icon: <HtmlIcon /> },
      { name: 'CSS3', icon: <CssIcon /> },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'Java', icon: <JavaIcon /> },
      { name: 'C++', icon: <CppIcon /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <MongoDbIcon /> },
      { name: 'PostgreSQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-8 w-8" /> },
      { name: 'SQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="h-8 w-8" /> },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git', icon: <GitIcon /> },
      { name: 'GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-8 w-8" /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'AWS (EC2, S3)', icon: <AwsIcon /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="space-y-12">
        {skillData.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-bold text-center text-heading mb-6">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group flex flex-col items-center gap-2 p-4 bg-card rounded-lg shadow-sm border border-border w-32 h-32 justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  {skill.icon}
                  <span className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;