import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Services() {
  return (
    <section id="servicos" className="section bg-light">
      <div className="section-inner">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Servicos ao Cidadao</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Acesso rapido aos servicos municipais</motion.h2>
          <motion.p className="s-desc" variants={fadeInUp}>
            Resolva sem sair de casa. Os servicos mais procurados pelos cidadaos, a um clique de distancia.
          </motion.p>
        </motion.div>
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {CONFIG.servicos.map((s, i) => (
            <TiltCard key={i} s={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TiltCard({ s }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.a
      href="#servicos"
      className="service-card"
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="service-icon">
        <Icon name={s.icon} color="var(--c-primary)" size={24} />
      </div>
      <div>
        <div className="service-label">{s.label}</div>
        <div className="service-desc">{s.desc}</div>
      </div>
    </motion.a>
  );
}
