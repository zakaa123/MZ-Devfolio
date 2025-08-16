import { FaEnvelope, FaWhatsapp, FaLinkedin, FaTimes } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import '../Styles/main.css';

const ContactModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="contact-modal">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out to me through any of the following platforms:
        </p>
        <div className="contact-option">
          <FaEnvelope className="icon email" />
          <a href="mailto:muhammadzakaa82@gmail.com">
            Email
          </a>
        </div>
        <div className="contact-option">
          <FaWhatsapp className="icon whatsapp" />
          <a
            href="https://wa.me/923455197844"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="contact-option">
          <FaLinkedin className="icon linkedin" />
          <a
            href="https://www.linkedin.com/in/muhammad-zaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-option">
          <SiUpwork className="icon upwork" />
          <span>Upwork</span>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;
