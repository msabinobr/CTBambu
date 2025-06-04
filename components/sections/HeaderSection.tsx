
import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <header className="bg-primary py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <a href="#" aria-label="Conexão Terra Bambu Home">
          <img 
            src="/assets/logo1.jpg" 
            alt="Conexão Terra Bambu Logo" 
            className="h-16 md:h-20 w-auto" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // prevent infinite loop if placeholder also fails
              target.alt = "Conexão Terra Bambu - Logo não carregado";
              target.style.display = 'none'; // Hide broken image icon
              // Optionally, display text as fallback
              const fallbackText = document.createElement('h1');
              fallbackText.className = "text-3xl md:text-4xl font-bold text-center text-white font-serif";
              fallbackText.textContent = "CONEXÃO TERRA BAMBU";
              target.parentNode?.insertBefore(fallbackText, target);
            }}
          />
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;