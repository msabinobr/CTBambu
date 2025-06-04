import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';
import { IconProps } from '../../types'; 
// import useGeminiImageGenerator from '../hooks/useGeminiImageGenerator'; // Removed

const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2-1.2-.5-.5-.8-1-1.2-1.7-.1-.2-.1-.4 0-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.2.1-.3s0-.5-.1-.6L9.7 8c-.1-.1-.3-.2-.5-.2h-.4c-.2 0-.4.1-.6.2-.2.2-.8.7-.8 1.7s.8 2 .9 2.1c.1.1 1.5 2.4 3.7 3.3.5.2.9.3 1.2.4.5.1.9.1 1.2.1.3-.1.9-.4 1.1-.8.2-.3.2-.6.1-.8l-.3-.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/>
  </svg>
);

// Removed ImagePlaceholderContact as dynamic generation is removed

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Removed useGeminiImageGenerator hook and related states
  // const { imageUrl: contactImageUrl, isLoading: isImageLoading, error: imageError, generateImage } = useGeminiImageGenerator();
  // const contactImagePrompt = "A friendly and diverse team of builders and designers collaborating on a sustainable construction site. They are smiling, looking at plans, with bamboo or earth building materials in the background. Teamwork, eco-construction, natural light.";

  // useEffect(() => {
    // if (typeof process !== 'undefined' && process.env?.API_KEY) {
        // generateImage(contactImagePrompt);
    // }
  // }, [generateImage]);

  const staticContactImageUrl = "/assets/team.jpg"; // Static image path

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000); 
  };
  
  const whatsappNumber = "5511992908488";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Marcel, visitei o site da Conexão Terra Bambu e gostaria de mais informações!")}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 font-serif">
          Pronto para Construir com Consciência e Originalidade?
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Na Conexão Terra Bambu, estamos prontos para transformar sua visão em uma realidade construída com respeito pela terra e foco nos seus desejos. Entre em contato hoje mesmo!
        </p>

        <div className="flex flex-wrap md:flex-nowrap gap-12 items-stretch">
          <div className="w-full md:w-1/2 flex flex-col"> 
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Fale Conosco:</h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="font-semibold">Marcel (WhatsApp):</p>
                  <Button 
                    href={whatsappLink}
                    variant="secondary"
                    className="mt-2 inline-flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5"/> 
                    <span>Chamar no WhatsApp</span>
                  </Button>
                </div>
                <div>
                  <p className="font-semibold">Email:</p> 
                  <a href="mailto:contato@conexaoterrabambu.com.br" className="text-secondary hover:underline break-all">contato@conexaoterrabambu.com.br</a> 
                </div>
                <p>Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar a torná-lo realidade.</p>
              </div>
            </div>
            <div className="mt-auto">
              <img 
                src={staticContactImageUrl} 
                alt="Equipe Conexão Terra Bambu em um projeto de bioconstrução" 
                className="rounded-lg shadow-lg w-full h-64 md:h-auto object-cover"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.alt = "Equipe Conexão Terra Bambu - Imagem não disponível";
                    // Optionally, replace with a placeholder style or element
                     target.style.display = 'none'; // Hide broken image
                    const placeholder = document.createElement('div');
                    placeholder.className = "w-full h-64 md:h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-lg shadow-lg";
                    placeholder.textContent = "Imagem da equipe não carregada";
                    target.parentNode?.insertBefore(placeholder, target);
                }}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">Envie uma Mensagem Rápida</h3>
            {isSubmitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg animate-fadeIn">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Seu nome"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="seuemail@exemplo.com"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  aria-required="true"
                />
              </div>
              <div>
                <Button type="submit" variant="secondary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;