import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Avisos() {
  return (
    <section id="avisos" className="section bg-soft">
      <div className="section-inner">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Avisos e Comunicacoes</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Avisos oficiais</motion.h2>
          <motion.p className="s-desc" variants={fadeInUp}>
            Comunicacoes, prazos e informacoes importantes para os cidadaos.
          </motion.p>
        </motion.div>
        <motion.div
          className="avisos-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {CONFIG.avisos.map((av, i) => (
            <motion.a
              key={i}
              href="#avisos"
              className="aviso-card"
              variants={slideInLeft}
            >
              <motion.div
                className="aviso-stripe"
                style={{ background: av.cor }}
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
              <div className="aviso-body">
                <span className="aviso-tipo" style={{ background: av.cor }}>{av.tipo}</span>
                <div className="aviso-info">
                  <div className="aviso-titulo">{av.titulo}</div>
                  <div className="aviso-desc">{av.desc}</div>
                </div>
                <div className="aviso-meta">
                  <span>{av.data}</span>
                  <span className="aviso-read">
                    Ver mais
                    <Icon name="arrow-right" size={13} color="var(--c-primary)" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
