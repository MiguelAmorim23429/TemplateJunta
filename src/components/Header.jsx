import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { href: '#inicio', label: 'Freguesia' },
    { href: '#servicos', label: 'Cidadao' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#noticias', label: 'Noticias' },
    { href: '#transparencia', label: 'Transparencia' },
    { href: '#contactos', label: 'Contactos' },
  ];

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="header-inner">
        <a className="logo" href="#inicio" aria-label="Pagina inicial">
          <div className="logo-badge">{CONFIG.sigla}</div>
          <div>
            <div className="logo-label">Junta de Freguesia</div>
            <div className="logo-name">{CONFIG.municipio}</div>
          </div>
        </a>
        <nav className="main-nav" aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.href} className="nav-a" href={l.href}>{l.label}</a>
          ))}
          <a className="cta-btn" href="#servicos">
            Balcao Virtual
            <Icon name="arrow-right" size={14} color="#fff" />
          </a>
        </nav>
        <button
          className={`burger${mobileOpen ? ' open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-nav open"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', display: 'block' }}
          >
            <div className="mobile-nav-links">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={closeMobile}>{l.label}</a>
              ))}
            </div>
            <a href="#servicos" className="mobile-cta-full" onClick={closeMobile}>Aceder ao Balcao Virtual</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
