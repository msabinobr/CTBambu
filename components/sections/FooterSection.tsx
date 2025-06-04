
import React from 'react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {currentYear} Conexão Terra Bambu - Bioconstrução e Sustentabilidade.
        </p>
        <p className="text-xs mt-1">
          Transformando ideias em realidade.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;