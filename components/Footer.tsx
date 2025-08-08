import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background text-text animated-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-display text-heading mb-4">Get In Touch</h2>
          <p className="text-text max-w-2xl mx-auto mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a href="mailto:korivirahul43@gmail.com" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
              <MailIcon className="h-6 w-6" />
              <span>korivirahul43@gmail.com</span>
            </a>
            <span className="hidden sm:block text-gray-500">|</span>
            <div className="flex items-center gap-3 text-lg">
              <PhoneIcon className="h-6 w-6" />
              <span>+91 6300033149</span>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/rahul-korivi-578429259" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-8 w-8" />
            </a>
            <a href="https://github.com/rahul30i" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Korivi Rahul. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;