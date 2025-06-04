
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import ChatBubbleOvalLeftEllipsisIcon from './icons/ChatBubbleOvalLeftEllipsisIcon'; // New Icon

const UserMessageBubble: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex justify-end mb-3">
    <div className="bg-accent text-primary p-3 rounded-lg max-w-xs lg:max-w-md shadow">
      {text}
    </div>
  </div>
);

const AIMessageBubble: React.FC<{ text: string; isLoading?: boolean }> = ({ text, isLoading }) => (
  <div className="flex justify-start mb-3">
    <div className="bg-gray-200 text-darkText p-3 rounded-lg max-w-xs lg:max-w-md shadow">
      {isLoading ? <TypingIndicator /> : text}
    </div>
  </div>
);

const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1">
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75-custom"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150-custom"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300-custom"></div>
  </div>
);

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  isLoading?: boolean;
}

const chatWidgetStyles = `
  .animate-slideIn {
    animation: slideInChatWidget 0.3s ease-out forwards;
  }
  @keyframes slideInChatWidget {
    from { 
      opacity: 0;
      transform: translateY(20px) scale(0.95); 
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .animate-bounce {
    animation: bounceChatWidget 1s infinite;
  }
  @keyframes bounceChatWidget {
    0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
    50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
  }
  .delay-75-custom { animation-delay: -0.45s; }
  .delay-150-custom { animation-delay: -0.3s; }
  .delay-300-custom { animation-delay: -0.15s; }
`;


const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chat, setChat] = useState<Chat | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const portalElement = typeof document !== 'undefined' ? document.getElementById('chat-widget-portal') : null;

  useEffect(() => {
    if (!process.env.API_KEY) {
      console.error("API_KEY is not set. AI Chat Widget will not function.");
      setError("Configuração da API ausente. O chat não está disponível.");
      return;
    }
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash-preview-04-17',
        config: {
          systemInstruction: "Você é um assistente virtual amigável e prestativo da Conexão Terra Bambu, uma empresa especializada em bioconstrução com bambu e outros materiais naturais. Seu objetivo é ajudar os visitantes do site, responder suas perguntas sobre nossos serviços (construção com bambu, taipa de mão, rebocos naturais, tinta de terra, consultoria), os benefícios da bioconstrução, e gentilmente guiá-los a solicitar um orçamento ou entrar em contato para mais informações. Seja cordial, informativo e proativo em oferecer ajuda. Incentive o usuário a dar o próximo passo para realizar seu projeto de bioconstrução. Não se apresente na primeira mensagem, apenas responda às perguntas do usuário.",
        },
      });
      setChat(newChat);
      // Initial AI message (optional, but good for engagement)
      // setMessages([{ id: Date.now().toString(), text: "Olá! Sou o assistente virtual da Conexão Terra Bambu. Como posso ajudar com seu projeto de bioconstrução hoje?", sender: 'ai' }]);
    } catch (e) {
        console.error("Failed to initialize Gemini chat:", e);
        setError("Falha ao iniciar o chat. Tente novamente mais tarde.");
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !chat || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    const aiPlaceholderMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: aiPlaceholderMessageId, text: '', sender: 'ai', isLoading: true }]);

    try {
      const stream = await chat.sendMessageStream({ message: userMessage.text });
      let accumulatedResponse = "";
      for await (const chunk of stream) {
        // Ensure chunk and chunk.text exist
        const text = chunk.text;
        if (text) {
          accumulatedResponse += text;
           setMessages(prev => prev.map(msg => 
            msg.id === aiPlaceholderMessageId ? { ...msg, text: accumulatedResponse, isLoading: true } : msg
          ));
        }
      }
      setMessages(prev => prev.map(msg => 
        msg.id === aiPlaceholderMessageId ? { ...msg, text: accumulatedResponse || "Não consegui processar sua solicitação no momento.", isLoading: false } : msg
      ));

    } catch (e) {
      console.error('Error sending message to Gemini:', e);
      const errorMessage = "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.";
      setMessages(prev => prev.map(msg => 
        msg.id === aiPlaceholderMessageId ? { ...msg, text: errorMessage, sender: 'ai', isLoading: false } : msg
      ));
      setError(errorMessage);
    } finally {
      setIsLoading(false);
       setMessages(prev => prev.map(msg => 
        msg.id === aiPlaceholderMessageId ? { ...msg, isLoading: false } : msg
      ));
    }
  };

  if (!portalElement) {
    return null; // Don't render if portal element is not found
  }
  
  const chatWidgetContent = (
    <>
      <style dangerouslySetInnerHTML={{ __html: chatWidgetStyles }} />
      <button
        aria-label={isOpen ? "Fechar chat" : "Abrir chat com assistente virtual"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 ${isOpen ? 'transform scale-0 opacity-0' : 'transform scale-100 opacity-100'}`}
      >
        <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
      </button>

      {isOpen && (
        <div 
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full h-full sm:w-96 sm:h-[70vh] max-h-[600px] bg-white shadow-2xl rounded-t-lg sm:rounded-lg flex flex-col overflow-hidden border border-gray-300 animate-slideIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-widget-title"
        >
          <header className="bg-primary text-white p-4 flex justify-between items-center">
            <h2 id="chat-widget-title" className="font-semibold text-lg">Assistente Virtual</h2>
            <button 
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Fechar chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div className="flex-grow p-4 overflow-y-auto bg-lightBg">
            {messages.map((msg) => 
              msg.sender === 'user' 
                ? <UserMessageBubble key={msg.id} text={msg.text} />
                : <AIMessageBubble key={msg.id} text={msg.text} isLoading={msg.isLoading} />
            )}
            {error && <div className="text-red-500 text-sm p-2 bg-red-100 rounded">{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          <footer className="p-4 border-t border-gray-200 bg-white">
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                handleSendMessage(); 
              }} 
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isLoading ? "Aguarde..." : "Digite sua mensagem..."}
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                disabled={isLoading || !chat}
                aria-label="Sua mensagem para o assistente virtual"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputValue.trim() || !chat}
                className="bg-accent text-primary p-3 rounded-lg font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensagem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </footer>
        </div>
      )}
    </>
  );

  return ReactDOM.createPortal(chatWidgetContent, portalElement);
};

export default AIChatWidget;
