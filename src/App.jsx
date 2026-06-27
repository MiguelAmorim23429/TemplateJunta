import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CONFIG from './config';
import SplashScreen from './components/SplashScreen';
import DemoBanner from './components/DemoBanner';
import UtilBar from './components/UtilBar';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import News from './components/News';
import Avisos from './components/Avisos';
import Events from './components/Events';
import Transparency from './components/Transparency';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatbotButton from './components/ChatbotButton';

function applyThemeToDOM(i) {
  const t = CONFIG.temas[i];
  const r = document.documentElement.style;
  r.setProperty('--c-primary', t.p);
  r.setProperty('--c-secondary', t.s);
  r.setProperty('--c-accent', t.a);
  r.setProperty('--c-text', t.t);
  r.setProperty('--bg-light', t.bl);
  r.setProperty('--bg-soft', t.bs);
  r.setProperty('--c-tint', t.ti);
}

export default function App() {
  const [themeIdx, setThemeIdx] = useState(CONFIG.temaInicial);
  const [showSplash, setShowSplash] = useState(true);

  const [siteReady, setSiteReady] = useState(false);

  useEffect(() => {
    applyThemeToDOM(CONFIG.temaInicial);
    document.title = 'Portal da Freguesia \u00b7 Junta de Freguesia de ' + CONFIG.municipio;
    document.body.style.overflow = 'hidden';
    // Splash duration: ~2.5s content + 0.6s exit
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (i) => {
    setThemeIdx(i);
    applyThemeToDOM(i);
  };

  // When splash exit animation finishes, show site
  const handleSplashExited = () => {
    setSiteReady(true);
    document.body.style.overflow = '';
  };

  return (
    <>
      <AnimatePresence onExitComplete={handleSplashExited}>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {siteReady && (
        <>
          <div className="reading-progress" aria-hidden="true" />
          <a className="skip-link" href="#servicos">Saltar para o conteudo</a>
          <DemoBanner />
          <UtilBar themeIdx={themeIdx} onThemeChange={handleThemeChange} />
          <Header />
          <Hero />
          <StatsBar />
          <Services />
          <News />
          <Avisos />
          <Events />
          <Transparency />
          <FAQ />
          <Footer />
          <ChatbotButton />
        </>
      )}
    </>
  );
}
