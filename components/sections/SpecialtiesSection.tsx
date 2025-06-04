import React from 'react';
import ChatBubbleIcon from '../icons/ChatBubbleIcon';
import LeafIcon from '../icons/LeafIcon'; 
import HomeIcon from '../icons/HomeIcon';
import TreeIcon from '../icons/TreeIcon';
import PaintBrushIcon from '../icons/PaintBrushIcon';
import PaletteIcon from '../icons/PaletteIcon';
import { IconProps } from '../../types';

interface SpecialtyItemProps {
  icon: React.ReactElement<IconProps>;
  title: string;
  description: string;
  imageUrl: string; // Changed from imagePrompt to imageUrl for static images
}

const SpecialtyItem: React.FC<SpecialtyItemProps> = ({ icon, title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
        onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.alt = `${title} - Imagem não disponível`;
            // Optionally, replace with a placeholder style or element
            target.style.display = 'none'; // Hide broken image
            const placeholder = document.createElement('div');
            placeholder.className = "w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm";
            placeholder.textContent = "Imagem não carregada";
            target.parentNode?.insertBefore(placeholder, target);
        }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <div className="text-primary mr-3">{React.cloneElement(icon, { className: 'w-8 h-8' })}</div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

const specialties = [
  {
    icon: <LeafIcon />,
    title: 'Bambu',
    description: 'Estruturas versáteis, resistentes e de beleza incomparável – de residências a espaços terapêuticos e cúpulas geodésicas.',
    imageUrl: "/assets/specialty-bambu.jpg", // Placeholder static image path
  },
  {
    icon: <HomeIcon />,
    title: 'Taipa de Mão (Pau a Pique)',
    description: 'Tradição e eficiência para paredes com excelente conforto térmico e acústico.',
    imageUrl: "/assets/specialty-taipa.jpg", // Placeholder static image path
  },
  {
    icon: <TreeIcon />,
    title: 'Madeira de Demolição',
    description: 'Charme, história e sustentabilidade reutilizando materiais nobres.',
    imageUrl: "/assets/specialty-madeira.jpg", // Placeholder static image path
  },
  {
    icon: <PaintBrushIcon />,
    title: 'Rebocos Naturais',
    description: 'Acabamentos que deixam sua casa respirar, utilizando argamassas à base de terra, cal e outros agregados naturais.',
    imageUrl: "/assets/specialty-reboco.jpg", // Placeholder static image path
  },
  {
    icon: <PaletteIcon />,
    title: 'Tinta de Terra',
    description: 'Cores e texturas autênticas da natureza para seus ambientes, sem componentes tóxicos.',
    imageUrl: "/assets/specialty-tinta.jpg", // Placeholder static image path
  },
  {
    icon: <ChatBubbleIcon />,
    title: 'Consultoria Especializada',
    description: 'Orientação completa para viabilizar sua obra ecológica, do planejamento à execução.',
    imageUrl: "/assets/specialty-consultoria.jpg", // Placeholder static image path
  },
];

const SpecialtiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-lightBg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 font-serif">
          Nossas Especialidades em Bioconstrução
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
          Realize seu sonho de construir ou renovar com quem entende do assunto. Somos especialistas em diversas técnicas de bioconstrução para criar o espaço ideal para você:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyItem 
              key={index} 
              icon={specialty.icon} 
              title={specialty.title} 
              description={specialty.description}
              imageUrl={specialty.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;