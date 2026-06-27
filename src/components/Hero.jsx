import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleWords = 'A sua Junta de Freguesia, acessível a qualquer hora.'.split(' ');

function TypingTitle() {
  return (
    <motion.h1
      id="hero-title"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
      }}
    >
      {titleWords.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          variants={{
            hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  useEffect(() => {
    // GSAP parallax for particles
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('#hero-particles', {
        yPercent: -20, ease: 'none',
        scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true }
      });
    }

    // tsParticles
    async function initParticles() {
      if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
      if (typeof tsParticles === 'undefined') return;
      try {
        await tsParticles.load({
          id: 'hero-particles', options: {
            background: { color: { value: 'transparent' } }, fullScreen: { enable: false }, fpsLimit: 60,
            particles: {
              number: { value: 28, density: { enable: true, area: 900 } },
              color: { value: ['#ffffff', '#c79a3e'] },
              opacity: { value: { min: .05, max: .18 }, animation: { enable: true, speed: .5 } },
              size: { value: { min: 1, max: 2.5 } },
              links: { enable: true, distance: 150, color: '#ffffff', opacity: .08, width: .7 },
              move: { enable: true, speed: .6, direction: 'none', random: true, outModes: 'out' }
            },
            interactivity: { events: { onHover: { enable: true, mode: 'grab' } }, modes: { grab: { distance: 160, links: { opacity: .18 } } } }
          }
        });
      } catch (e) { }
    }
    initParticles();
  }, []);

  return (
    <section id="inicio" aria-label="Apresentacao">
      <div id="hero">
        <img
          id="hero-bg-img"
          src="https://images.unsplash.com/photo-1568435726702-d59e257e4521?w=1800&h=1000&fit=crop&q=80"
          alt="" role="presentation" loading="eager" fetchPriority="high"
        />
        <div id="hero-gradient" aria-hidden="true" />
        <div id="hero-particles" aria-hidden="true" />
        <div className="hero-inner">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" id="hero-badge" variants={itemVariants} style={{ opacity: 1 }}>
              <span className="badge-dot" />
              Portal da Freguesia &middot; disponivel 24h
            </motion.div>
            <TypingTitle />
            <motion.p className="hero-sub" id="hero-sub" variants={itemVariants} style={{ opacity: 1 }}>
              Pedidos, informacoes, servicos e atendimento — tudo num portal moderno, pensado para os cidadaos da freguesia.
            </motion.p>
            <motion.div className="hero-btns" id="hero-btns" variants={itemVariants} style={{ opacity: 1 }}>
              <a href="#servicos" className="btn-hero-primary">
                Aceder ao Balcao Virtual
                <Icon name="arrow-right" size={16} color="var(--c-primary)" />
              </a>
              <a href="#avisos" className="btn-hero-ghost">Ver avisos oficiais</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
