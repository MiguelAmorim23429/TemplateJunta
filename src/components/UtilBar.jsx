import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';

export default function UtilBar({ themeIdx, onThemeChange }) {
  const [lang, setLang] = useState('pt');

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={themeIdx}
        className="util-bar"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="util-inner">
          <div className="util-left">
            <a className="util-link" href="tel:+351200000000">
              <Icon name="phone" size={13} color="currentColor" />+351 200 000 000
            </a>
            <a className="util-link" href="#servicos">
              <Icon name="headphones" size={13} color="currentColor" />Atendimento Online
            </a>
            <span style={{ opacity: .6, fontSize: '12.5px' }}>Seg&ndash;Sex &middot; 9h&ndash;16h30</span>
          </div>
          <div className="util-right">
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="globe" size={13} color="rgba(255,255,255,.8)" />
              <button
                className={`lang-btn${lang === 'pt' ? ' active' : ''}`}
                onClick={() => setLang('pt')}
              >PT</button>
              <span style={{ opacity: .3 }}>|</span>
              <button
                className={`lang-btn${lang === 'en' ? ' active' : ''}`}
                onClick={() => setLang('en')}
              >EN</button>
            </div>
            <div className="theme-pill">
              <span>Tema</span>
              <div className="theme-swatches">
                {CONFIG.temas.map((t, i) => (
                  <motion.button
                    key={i}
                    className={`swatch${i === themeIdx ? ' active' : ''}`}
                    style={{ background: t.p }}
                    title={t.nome}
                    aria-label={`Tema ${t.nome}`}
                    onClick={() => onThemeChange(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
