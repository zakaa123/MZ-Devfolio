import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#home">MZ Devfolio</a>
        </motion.div>

        {/* Menu Icon (Mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>

        {/* Nav Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}

        <a
  href="#contact"
  className="nav-link"
  onClick={(e) => {
    e.preventDefault(); // prevent page jump
    onContactClick();
    setIsOpen(false);
  }}
>
  <strong>Contact</strong>
</a>

        </ul>

        {/* Mobile Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
