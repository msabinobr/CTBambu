import React from 'react';
import Button from '../shared/Button';

const HeroSection: React.FC = () => {
  const primaryLocalImageUrl = '/assets/pergola.jpg'; // Static image path

  return (
    <section 
      className="relative py-20 md:py-32 text-white bg-gray-700" // Added bg-gray-700 for base background
      style={{
        backgroundImage: `url("${primaryLocalImageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="A saúde do nosso corpo e da nossa mente são reflexos diretos da saúde do nosso lar."
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Removed isLoading and error display related to dynamic image generation */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
          A saúde do nosso corpo e da nossa mente são reflexos diretos da saúde do nosso lar.
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Cansado do convencional, sonha com um ambiente único, saudável e em harmonia com a natureza, tornamos o seu sonho em realidade.
        </p>
        <Button href="#contact" variant="primary">
          Fale Conosco e Comece Seu Projeto!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;