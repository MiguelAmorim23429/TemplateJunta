import { motion } from 'framer-motion';
import { Icon } from '../utils/icons';
import CONFIG from '../config';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Footer() {
  const c = CONFIG.contacto;

  return (
    <motion.footer
      id="contactos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      <motion.div className="footer-grid" variants={fadeInUp}>
        <div>
          <div className="f-logo-row">
            <div className="f-logo-badge">{CONFIG.sigla}</div>
            <div className="f-logo-name" dangerouslySetInnerHTML={{ __html: `Junta de Freguesia<br>de ${CONFIG.municipio}` }} />
          </div>
          <div className="f-contact">
            <div className="f-contact-row">
              <Icon name="map-pin" size={15} color="currentColor" style={{ marginTop: 3, flexShrink: 0 }} />
              <span dangerouslySetInnerHTML={{ __html: c.morada.replace('\n', '<br>') }} />
            </div>
            <div className="f-contact-row">
              <Icon name="phone" size={14} color="currentColor" style={{ flexShrink: 0 }} />
              <span>{c.telefone}</span>
            </div>
            <div className="f-contact-row">
              <Icon name="mail" size={14} color="currentColor" style={{ flexShrink: 0 }} />
              <span>{c.email}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="f-col-title">Servicos</div>
          <div className="f-links">
            <a href="#servicos">Balcao Virtual</a>
            <a href="#servicos">Taxas e IMI</a>
            <a href="#servicos">Licenciamento</a>
            <a href="#servicos">Reclamacoes e Sugestoes</a>
          </div>
        </div>
        <div>
          <div className="f-col-title">O Municipio</div>
          <div className="f-links">
            <a href="#noticias">Noticias</a>
            <a href="#agenda">Agenda de Eventos</a>
            <a href="#transparencia">Transparencia</a>
          </div>
        </div>
        <div>
          <div className="f-col-title">Acompanhe-nos</div>
          <div className="socials">
            <a className="social-a" href="#contactos" aria-label="Facebook">
              <Icon name="facebook" size={18} color="#fff" />
            </a>
            <a className="social-a" href="#contactos" aria-label="Instagram">
              <Icon name="instagram" size={18} color="#fff" />
            </a>
            <a className="social-a" href="#contactos" aria-label="YouTube">
              <Icon name="youtube" size={18} color="#fff" />
            </a>
            <a className="social-a" href="#contactos" aria-label="LinkedIn">
              <Icon name="linkedin" size={18} color="#fff" />
            </a>
          </div>
          <div className="wcag-badge">
            <span className="wcag-pill">AA</span>Conforme WCAG 2.1
          </div>
        </div>
      </motion.div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>{c.copyright}. Todos os direitos reservados.</span>
          <div className="footer-legal">
            <a href="#contactos">Declaracao de Acessibilidade</a>
            <a href="#contactos">Politica de Privacidade</a>
            <a href="#contactos">Mapa do Site</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
