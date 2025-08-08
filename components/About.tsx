import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-text leading-relaxed">
        Hello! I'm Rahul, a Computer Science engineer passionate about building intelligent and user-centric applications from end to end. 🚀

My expertise lies at the unique intersection of Artificial Intelligence and Full-Stack Development. I leverage AI and Machine Learning with Python to create smart, data-driven solutions, and I build robust, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) to bring those solutions to life.

All of my work is built on a strong foundation in core computer science principles, including Data Structures & Algorithms (DSA) and object-oriented programming with Java. I thrive on tackling complex challenges and turning innovative ideas into functional, seamless products. Welcome to my portfolio!
        </p>
        <div className="mt-12 p-6 bg-card border border-border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-heading mb-2">Education</h3>
            <p className="text-lg font-semibold text-primary">Bachelor of Technology in Computer Science & Engineering (AI & Machine Learning)</p>
            <p className="text-md text-text">Institute of Aeronautical Engineering, Hyderabad</p>
  
        </div>
      </div>
    </Section>
  );
};

export default About;