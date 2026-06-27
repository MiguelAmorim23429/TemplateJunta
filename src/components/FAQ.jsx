import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="section bg-white">
      <div className="section-inner faq-wrap">
        <motion.div
          className="s-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="s-label" variants={fadeInUp}>Ajuda</motion.span>
          <motion.h2 className="s-title" variants={fadeInUp}>Perguntas frequentes</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {CONFIG.faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div key={i} className="faq-item" variants={fadeInUp}>
                <button
                  className="faq-btn"
                  aria-expanded={isOpen}
                  aria-controls={`fb-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span>{f.q}</span>
                  <motion.span
                    className="faq-chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Icon name="chevron-down" size={22} color="var(--c-primary)" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`fb-${i}`}
                      className="faq-body-animated"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ padding: '0 4px 24px', fontSize: '15.5px', color: '#4b5563', lineHeight: 1.7 }}>
                        {f.r}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
