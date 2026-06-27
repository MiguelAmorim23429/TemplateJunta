import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import CONFIG from '../config';

function AnimatedCounter({ target, sufixo }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString('pt-PT') + sufixo);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, target, count]);

  return <motion.span className="stat-number" ref={ref}>{rounded}</motion.span>;
}

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <motion.div
        className="stats-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {CONFIG.stats.map((s, i) => (
          <motion.div
            key={i}
            className="stat-item in-view"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <AnimatedCounter target={s.valor} sufixo={s.sufixo} />
            <div className="stat-label">{s.label}</div>
            <div className="stat-bar">
              <motion.div
                className="stat-bar-fill"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                style={{ transformOrigin: '0 50%' }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
