import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function News() {
  return (
    <section id="noticias" className="section bg-white">
      <div className="section-inner">
        <div className="news-head-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="s-label" variants={fadeInUp}>Atualidade da Freguesia</motion.span>
            <motion.h2 className="s-title" variants={fadeInUp}>Ultimas noticias</motion.h2>
          </motion.div>
          <motion.a
            className="link-all"
            href="#noticias"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Ver todas
            <Icon name="arrow-right" size={14} color="var(--c-primary)" />
          </motion.a>
        </div>
        <motion.div
          className="news-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {CONFIG.noticias.map((n, i) => (
            <motion.a
              key={i}
              href="#noticias"
              className="news-card"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: '0 32px 56px -22px rgba(0,0,0,.32)',
                transition: { duration: 0.3 },
              }}
            >
              <div className="news-thumb">
                {n.img && (
                  <motion.img
                    className="news-thumb-photo"
                    src={n.img}
                    alt={n.titulo}
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <div className="news-icon">
                  <Icon name={n.icon} color="var(--c-primary)" size={22} />
                </div>
                <span className="news-tag">{n.tag}</span>
              </div>
              <div className="news-body">
                <div className="news-date">{n.data}</div>
                <h3 className="news-title">{n.titulo}</h3>
                <p className="news-text">{n.excerto}</p>
                <span className="news-read">
                  Ler mais
                  <Icon name="arrow-right" size={14} color="var(--c-primary)" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
