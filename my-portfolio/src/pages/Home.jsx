import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/animationVariants'; // Import variants
import Venkat from "../assets/venkat.jpg"
import VenkatPdf from "../assets/fullStackVenkat.pdf"
const Home = () => {
  return (
    <div className="container   md:px-8 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-6rem)]">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <motion.h1
          variants={textVariant(0.5)}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold text-teal-400 leading-tight mb-4"
        >
          Hi, I'm <span className="text-white">Venkat Reddy Jonnagiri</span>
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 'tween', 0.8, 1)}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          A <span className="font-semibold text-teal-300">Software Developer</span> passionate about building{' '}
          <span className="font-semibold text-teal-300">innovative and scalable solutions.</span>
        </motion.p>
        <motion.div
          variants={fadeIn('up', 'tween', 1.2, 1)}
          initial="hidden"
          animate="show"
        >
          <a
            href="#projects"
            className="inline-block   bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={VenkatPdf} // Update with your resume path
            download
            className="mt-4 inline-block border-2 border-teal-600 text-teal-300 hover:bg-teal-600 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Image/Illustration */}
      <motion.div
        variants={fadeIn('left', 'tween', 1, 1)}
        initial="hidden"
        animate="show"
        className="md:w-1/3 flex justify-center md:justify-end"
      >
        {/* Replace with your professional photo or a cool illustration */}
        <img
          src={Venkat}
          alt="Your Name"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-teal-500"
        />
      </motion.div>
    </div>
  );
};

export default Home;