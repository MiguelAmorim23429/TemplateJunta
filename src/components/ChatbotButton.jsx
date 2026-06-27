import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';

export default function ChatbotButton() {
  return (
    <motion.button
      className="chatbot-btn"
      aria-label="Assistente Virtual"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon name="message-circle" size={28} color="#fff" />
      <span className="chatbot-notif">1</span>
    </motion.button>
  );
}
