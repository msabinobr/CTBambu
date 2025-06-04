
import React from 'react';
import LeafIcon from '../icons/LeafIcon';
import HeartIcon from '../icons/HeartIcon';
import SparklesIcon from '../icons/SparklesIcon';
import TrendingUpIcon from '../icons/TrendingUpIcon';
import { IconProps } from '../../types';

interface BenefitItemProps {
  icon: React.ReactElement<IconProps>;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
    <div className="text-accent mb-4">{React.cloneElement(icon, { className: 'w-12 h-12' })}</div>
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const benefits = [
  {
    icon: <LeafIcon />,
    title: 'Soluções Inovadoras e Sustentáveis',
    description: 'Especialização em técnicas ancestrais e modernas para um resultado surpreendente e de baixo impacto ambiental.',
  },
  {
    icon: <HeartIcon />,
    title: 'Ambientes que Inspiram Bem-Estar',
    description: 'Crie espaços que promovem saúde, conforto térmico e uma conexão genuína com a natureza.',
  },
  {
    icon: <SparklesIcon />,
    title: 'Design Único e Personalizado',
    description: 'Seu projeto com identidade própria, valorizando a estética natural dos materiais.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Valorização do Seu Imóvel',
    description: 'Um investimento inteligente em construções duráveis, ecológicas e com crescente apelo no mercado.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-serif">
          Por que Bioconstruir com a Conexão Terra Bambu?
        </h2>
        {/* Introductory paragraph removed to match new content structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Removed mt-16 as the direct heading provides spacing */}
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;