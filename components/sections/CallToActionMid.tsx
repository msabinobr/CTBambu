
import React from 'react';
import Button from '../shared/Button';

const CallToActionMid: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
          Imagine seu espaço ideal. Nós construímos!
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Seja uma casa aconchegante, um refúgio terapêutico ou um espaço comercial inovador, trazemos sua visão à vida com materiais naturais e design consciente.
        </p>
        <Button href="#contact" variant="primary">
          Solicite um Orçamento
        </Button>
      </div>
    </section>
  );
};

export default CallToActionMid;