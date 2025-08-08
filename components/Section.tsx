import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 animated-section">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-heading sm:text-4xl">
          {title}
        </h2>
        <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="mt-16">{children}</div>
    </section>
  );
};

export default Section;