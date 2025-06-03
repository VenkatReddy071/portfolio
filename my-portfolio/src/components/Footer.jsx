import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="bg-gray-900 py-8 text-center text-gray-400 text-sm border-t border-gray-700"
    >
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Venkat Reddy Jonnagiri. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <motion.a
            href="https://github.com/VenkatReddy071/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#2dd4bf' }} // Tailwind teal-400 equivalent
            transition={{ type: "spring", stiffness: 400 }}
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-github text-2xl"><FaGithub /></i> {/* GitHub Icon */}
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jonnagiri-venkat-reddy-48b610295/" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#0A66C2' }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-linkedin text-2xl"><FaLinkedinIn /></i> {/* LinkedIn Icon */}
          </motion.a>
          <motion.a
            href="mailto:venkatreddy30301@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#EA4335' }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-gray-400 hover:text-white"
          >
            <i className="fas fa-envelope text-2xl"><AiOutlineMail /></i>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
