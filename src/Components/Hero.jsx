import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../Styles/main.css';
import heroImage from '../assets/me2.jpeg'; // ⬅️ replace with your image

const Hero = ({ onViewWorkClick, onContactClick }) => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-container">
        {/* Left content */}
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="highlight">Zakaa</span>
          </h1>
          <h2>
            I am{' '}
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Shopify Expert', 2000,
                'React Enthusiast', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </h2>
          <p>
            I build high-performance websites and e-commerce solutions. With 3+ years of experience and 50+ successful projects, I help businesses grow online.
          </p>

          <div className="hero-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={onContactClick}   // ✅ this triggers Contact Modal
            >
              LET's CONNECT
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={() => {
                if (typeof onViewWorkClick === "function") onViewWorkClick();
              }}
            >
              VIEW MY WORK
            </motion.button>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
