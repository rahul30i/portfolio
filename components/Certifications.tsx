import React from 'react';
import Section from './Section';

// Define the type directly here
type Certification = {
  name: string;
  issuer: string;
  imageUrl: string;
};

const certificationData: Certification[] = [
  {
    name: "AI For All",
    issuer: "Infosys springboard",
    imageUrl: new URL('/images/ai-for-all.jpg', import.meta.url).href,
  },
  {
    name: "Apna College",
    issuer: "Apna College",
    imageUrl: new URL('/images/apna-college.jpg', import.meta.url).href,
  },
  {
    name: "Python for Data Science",
    issuer: "Infosys Springboard",
    imageUrl: new URL('/images/python-datascience-infosys.jpg', import.meta.url).href,
  },
];

const CertificationCard: React.FC<{ name: string; issuer: string; imageUrl: string }> = ({
  name,
  issuer,
  imageUrl,
}) => (
  <div className="group bg-card rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-heading text-md">{name}</h3>
      <p className="text-sm text-text">{issuer}</p>
    </div>
  </div>
);

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationData.map((cert) => (
          <CertificationCard key={cert.name} {...cert} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;

