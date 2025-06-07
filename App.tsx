
import React from 'react';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-lightBg min-h-screen font-sans text-darkText px-4"> {/* Added some padding */}
      <main className="container mx-auto py-8"> {/* Centered container with padding */}
        <section className="hero-section text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            A saúde do nosso corpo e da mente são reflexos diretos da saúde do nosso lar.
          </h1>
          <p className="text-lg md:text-xl text-darkText mb-8 max-w-3xl mx-auto">
            Cansado do convencional, sonha com um ambiente único, saudável e em ressonância com a natureza? A Conexão Terra Bambu materializa seu projeto.
          </p>
          <a
            href="https://wa.me/5511992908488"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            QUERO CONSTRUIR
          </a>
        </section>
        <section className="solucoes-section py-12 bg-white"> {/* Added a contrasting background for example */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">
              Soluções Funcionais e Sustentáveis
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 p-6 bg-lightBg rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Resgatamos a sabedoria construtiva ancestral</h3>
                <p className="text-lg text-darkText">
                  E integramos às inovações contemporâneas para criar edificações eficientes e de baixo impacto ambiental.
                </p>
              </div>
              <div className="mb-8 p-6 bg-lightBg rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Ambientes que Inspiram Bem-Estar</h3>
                <p className="text-lg text-darkText">
                  Crie espaços que promovem saúde, conforto térmico e uma conexão genuína com a natureza.
                </p>
              </div>
              <div className="p-6 bg-lightBg rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Valorização do Seu Imóvel</h3>
                <p className="text-lg text-darkText">
                  Um investimento inteligente em construções duráveis, ecológicas e com crescente apelo no mercado.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="especialidades-section py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
              Nossas Especialidades em Bioconstrução
            </h2>
            <p className="text-lg text-darkText text-center mb-12 max-w-3xl mx-auto">
              Realize seu sonho de construir ou renovar com quem entende do assunto.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-lightBg p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Bambu</h3>
                <p className="text-md text-darkText">
                  Estruturas versáteis, resistentes e de beleza incomparável – de residências a galpões rurais até espaços comerciais, gourmet e terapêuticos.
                </p>
              </div>
              <div className="bg-lightBg p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Taipa de Mão (Pau a Pique)</h3>
                <p className="text-md text-darkText">
                  Tradição e eficiência para paredes com excelente conforto térmico e acústico.
                </p>
              </div>
              <div className="bg-lightBg p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Madeira de Demolição</h3>
                <p className="text-md text-darkText">
                  Charme, história e sustentabilidade reutilizando materiais nobres.
                </p>
              </div>
              <div className="bg-lightBg p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Rebocos Naturais</h3>
                <p className="text-md text-darkText">
                  Acabamentos que deixam sua casa respirar, utilizando argamassas à base de terra, cal e outros agregados naturais.
                </p>
              </div>
              <div className="bg-lightBg p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Tinta de Terra</h3>
                <p className="text-md text-darkText">
                  Cores e texturas autênticas da natureza para seus ambientes, sem componentes tóxicos.
                </p>
              </div>
              <div className="bg-lightBg p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-primary mb-3">Consultoria Especializada</h3>
                <p className="text-md text-darkText">
                  Orientação completa para viabilizar sua obra, do planejamento à capacitação de mão de obra e execução.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="imagine-espaco-section py-16 bg-white"> {/* Added a contrasting background */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Imagine seu espaço ideal. Nós construímos!
            </h2>
            <p className="text-lg text-darkText mb-10 max-w-3xl mx-auto">
              Seja uma casa aconchegante, um refúgio terapêutico ou um espaço comercial inovador, trazemos sua visão à vida com materiais naturais e design consciente.
            </p>
            <a
              href="https://wa.me/5511992908488"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary font-semibold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Solicite um Orçamento
            </a>
          </div>
        </section>
        <section className="pronto-construir-section py-16"> {/* Using default bg from body, or could be bg-lightBg */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Pronto para Construir com Consciência e Originalidade?
            </h2>
            <p className="text-lg text-darkText max-w-3xl mx-auto">
              Na Conexão Terra Bambu, estamos prontos para transformar sua visão em uma realidade construída com respeito pela terra e foco nos seus desejos. Entre em contato hoje mesmo!
            </p>
          </div>
        </section>
        {/* Footer/Contact section will be added below this */}
      </main>
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fale Conosco
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar a torná-lo realidade.
          </p>

          <div className="max-w-xl mx-auto bg-white text-darkText p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Envie uma Mensagem Rápida</h3>
            <form action="https://wa.me/5511992908488" method="get" target="_blank"> {/* Fallback to WhatsApp */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-left text-sm font-medium mb-1">Nome Completo</label>
                <input type="text" id="fullName" name="fullName" placeholder="Seu nome" className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-left text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-left text-sm font-medium mb-1">Sua Mensagem</label>
                <textarea id="message" name="message" rows={4} placeholder="Conte-nos sobre seu projeto ou dúvida..." className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>
              <button
                type="submit" // Button will open WhatsApp link due to form action
                className="bg-primary text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300 ease-in-out w-full"
              >
                Enviar Mensagem (via WhatsApp)
              </button>
            </form>
            <p className="text-xs mt-4">Nota: O envio funcional de formulários de email requer configuração adicional de backend ou serviço de terceiros. Este botão direciona para o WhatsApp.</p>
          </div>
        </div>
      </footer>
      <AIChatWidget />
    </div>
  );
};

export default App;