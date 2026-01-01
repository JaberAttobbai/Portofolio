import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;