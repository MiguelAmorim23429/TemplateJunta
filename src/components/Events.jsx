import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Events() {
  return (
    <section id="agenda" className="section bg-white">
      <div className="section-inner">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Agenda</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Proximos eventos</motion.h2>
        </motion.div>
        <motion.div
          className="events-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {CONFIG.eventos.map((ev, i) => (
            <motion.a
              key={i}
              href="#agenda"
              className="event-card"
              variants={slideInRight}
            >
              <motion.div
                className="event-date"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <div className="event-day">{ev.dia}</div>
                <div className="event-month">{ev.mes}</div>
              </motion.div>
              <div className="event-info">
                <div className="event-title">{ev.titulo}</div>
                <div className="event-meta">
                  <span>
                    <Icon name="map-pin" size={14} color="var(--c-muted)" />
                    {ev.local}
                  </span>
                  <span>
                    <Icon name="clock" size={14} color="var(--c-muted)" />
                    {ev.hora}
                  </span>
                </div>
              </div>
              <Icon name="chevron-right" size={18} color="var(--c-primary)" style={{ flexShrink: 0 }} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
