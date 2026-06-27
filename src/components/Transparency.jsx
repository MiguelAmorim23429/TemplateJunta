import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export default function Transparency() {
  return (
    <section id="transparencia" className="section bg-light">
      <div className="section-inner">
        <motion.div
          className="s-head"
          style={{ maxWidth: 640 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Transparencia &amp; Dados Abertos</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Uma autarquia aberta e responsavel</motion.h2>
          <motion.p className="s-desc" variants={fadeInUp}>
            Informacao sobre decisoes, contas e contratos da freguesia — clara, acessivel e sempre disponivel.
          </motion.p>
        </motion.div>
        <motion.div
          className="transp-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {CONFIG.transparencia.map((tr, i) => (
            <motion.a
              key={i}
              href="#transparencia"
              className="transp-card"
              variants={scaleIn}
            >
              <motion.div
                className="transp-icon"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Icon name={tr.icon} color="var(--c-primary)" size={26} />
              </motion.div>
              <div className="transp-title">{tr.titulo}</div>
              <p className="transp-desc">{tr.desc}</p>
              <span className="transp-link">
                Consultar
                <Icon name="arrow-right" size={14} color="var(--c-primary)" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
