import React from 'react';
import { GitHubIcon, LinkedInIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-heading leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Korivi Rahul
            </h1>
          
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a href="https://linkedin.com/in/rahul-korivi-578429259" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-transform transform hover:scale-105 shadow-lg">
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
              <a href="https://github.com/rahul30i" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card border border-border text-text px-6 py-3 rounded-lg font-semibold hover:bg-border transition-transform transform hover:scale-105 shadow-lg">
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full blur-xl opacity-60"></div>
              <img
                src={`${(import.meta as any).env.BASE_URL}images/rahul.jpg`}
                alt="Korivi Rahul"
                className="relative rounded-full h-64 w-64 sm:h-80 sm:w-80 md:h-[400px] md:w-[400px] object-cover shadow-2xl border-4 border-background"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;