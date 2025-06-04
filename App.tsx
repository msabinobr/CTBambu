
import React from 'react';
import HeaderSection from './components/sections/HeaderSection';
import HeroSection from './components/sections/HeroSection';
import BenefitsSection from './components/sections/BenefitsSection';
import SpecialtiesSection from './components/sections/SpecialtiesSection';
import CallToActionMid from './components/sections/CallToActionMid';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-lightBg min-h-screen font-sans text-darkText">
      <HeaderSection />
      <main>
        <HeroSection />
        <BenefitsSection />
        <SpecialtiesSection />
        <CallToActionMid />
        <ContactSection />
      </main>
      <FooterSection />
      <AIChatWidget />
    </div>
  );
};

export default App;