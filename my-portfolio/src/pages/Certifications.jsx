import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant, fadeIn, staggerContainer } from '../utils/animationVariants';
import { certificationsData } from '../data/certificationsData'; // You'll create this file

const CertificationBadge = ({ cert, index }) => {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn('up', 'spring', index * 0.1, 0.5)} // Staggered animation
      className="block bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        {cert.icon && (
          <img src={cert.icon} alt={cert.name} className="w-24 h-24 object-contain mb-4" />
        )}
        <h3 className="text-white font-bold text-[20px] mb-2">{cert.name}</h3>
        <p className="text-teal-400 text-[14px] font-medium">{cert.provider}</p>
        <p className="text-gray-400 text-[12px] mt-1">{cert.date}</p>
        {cert.description && (
          <p className="text-gray-300 text-[14px] mt-3">{cert.description}</p>
        )}
      </div>
    </motion.a>
  );
};

const Certifications = () => {
  return (
    <SectionWrapper idName="certifications">
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider">My Achievements</p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-8">Certifications.</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificationsData.map((cert, index) => (
          <CertificationBadge key={`cert-${index}`} cert={cert} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Certifications;