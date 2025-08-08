import React from 'react';
import { Achievement, Interest } from '../types';
import Section from './Section';

const achievementData: Achievement[] = [
    { description: "Demonstrated leadership and technical proficiency by successfully completing 3 major web/AI projects." },
    { description: "Drove operational excellence by contributing to 2 open-source repositories (50+ lines of optimized code)." },
];

const interestData: Interest[] = [
    { description: "Mentored 5 first-year students in Python and Git workflows at a “Code for Good\" hackathon (Oct 2023 – Present)." },
    { description: "Organized 3 workshops on NLP and ML fundamentals as a member of the college \"AI Club,\" reaching 100+ participants." },
    { description: "Passionate about open-source contributions, competitive programming, and staying current with technology trends." },
];

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="More About Me">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-2xl font-bold font-display text-heading mb-4 text-center">Achievements & Activities</h3>
          <ul className="space-y-3 text-text">
            {achievementData.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#10003;</span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-2xl font-bold font-display text-heading mb-4 text-center">Volunteer & Interests</h3>
          <ul className="space-y-3 text-text">
            {interestData.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#10003;</span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;