import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-teal-400">
          <motion.span whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
            VenkatReddy.dev
          </motion.span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'experience', 'skills','projects', 'certifications', 'contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#2dd4bf' }} // Tailwind's teal-400
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => scrollToSection(item)}
                className="text-lg font-medium capitalize hover:text-teal-400 transition-colors"
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden bg-gray-800 p-4 mt-2 rounded-lg shadow-xl"
        >
          {['home', 'about', 'experience','skils', 'projects', 'certifications', 'contact'].map((item) => (
            <motion.li
              key={item}
              variants={menuItemVariants}
              className="py-2 border-b border-gray-700 last:border-b-0"
            >
              <button
                onClick={() => scrollToSection(item)}
                className="block text-center text-xl w-full capitalize hover:text-teal-400 transition-colors"
              >
                {item}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;