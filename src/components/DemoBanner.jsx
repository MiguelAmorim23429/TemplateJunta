import { motion } from 'framer-motion';

export default function DemoBanner() {
  return (
    <motion.div
      className="demo-banner"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="demo-inner">
        <span className="demo-badge">Prototipo</span>
        <span className="demo-text">
          Este site e uma <strong>demonstracao</strong> do que desenvolvemos para Juntas de Freguesia. Cada solucao e <strong>adaptada a sua identidade e necessidades</strong>.
        </span>
        <a className="demo-contact" href="mailto:contacto@exemplo.pt">Fale connosco</a>
      </div>
    </motion.div>
  );
}
