import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { rootMargin: '-40% 0px -60% 0px' }
    );

    sections.forEach((section) => {
      animationObserver.observe(section);
      navObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        animationObserver.unobserve(section);
        navObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 pb-24">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;