import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div
      className="splash"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background particles */}
      <div className="splash-particles">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="splash-dot"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -30 - Math.random() * 40],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <motion.div
        className="splash-glow"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Logo */}
      <motion.div
        className="splash-logo"
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        JF
      </motion.div>

      {/* Lines */}
      <motion.div
        className="splash-line splash-line-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="splash-line splash-line-right"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Subtitle */}
      <motion.div
        className="splash-subtitle"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
      >
        A sua Freguesia
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="splash-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        Soluções digitais para a sua comunidade
      </motion.p>

      {/* Progress bar — triggers exit */}
      <motion.div
        className="splash-progress"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="splash-progress-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}
