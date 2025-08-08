import React from 'react';
import { TimelineEvent } from '../types';
import Section from './Section';

const experienceData: TimelineEvent[] = [
    {
        role: 'AI Project Participant & Creators Intern',
        company: 'Swecha, Hyderabad, Telangana',
        duration: 'Cultural Preservation',
        description: [
            'Collaborated in a 4-member team to develop a web-based AI solution, focusing on front-end and API integration.',
            'Integrated a Python back-end with the user interface, handling asynchronous data requests for efficient results display.',
            'Developed and consumed RESTful APIs to deliver real-time classification results to over 500 daily active users with low latency.',
        ],
    },
];


const TimelineCard: React.FC<TimelineEvent> = ({ role, company, duration, description }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        <div className="absolute top-5 left-0 h-full w-0.5 bg-border group-hover:bg-primary transition-colors duration-300"></div>
        <div className="absolute top-5 left-[-9px] h-5 w-5 rounded-full bg-card border-2 border-border group-hover:border-primary transition-colors duration-300"></div>

        <div className="mb-4">
            <h3 className="text-xl font-bold text-heading">{role}</h3>
            <p className="text-primary font-semibold">{company}</p>
            {duration && <p className="text-sm text-text mt-1">{duration}</p>}
        </div>
        <ul className="list-disc list-inside space-y-2 text-text">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);


const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Work Experience">
            <div className="max-w-3xl mx-auto">
                {experienceData.map((event, index) => (
                    <TimelineCard key={index} {...event} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;