// import React from 'react';
// import SectionWrapper from '../components/SectionWrapper';
// import { motion } from 'framer-motion';
// import { textVariant, fadeIn, staggerContainer } from '../utils/animationVariants';
// import { certificationsData } from '../data/certificationsData'; // You'll create this file

// const CertificationBadge = ({ cert, index }) => {
//   return (
//     <motion.a
//       href={cert?.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       variants={fadeIn('up', 'spring', index * 0.1, 0.5)} // Staggered animation
//       className="block bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//     >
//       <div className="flex flex-col items-center justify-center h-full text-center">
//         {cert.icon && (
//           <img src={cert.icon} alt={cert.name} className="w-24 h-24 object-contain mb-4" />
//         )}
//         <h3 className="text-white font-bold text-[20px] mb-2">{cert.name}</h3>
//         <p className="text-teal-400 text-[14px] font-medium">{cert.provider}</p>
//         <p className="text-gray-400 text-[12px] mt-1">{cert.date}</p>
//         {cert.description && (
//           <p className="text-gray-300 text-[14px] mt-3">{cert.description}</p>
//         )}
//       </div>
//     </motion.a>
//   );
// };

// const Certifications = () => {
//   return (
//     <SectionWrapper idName="certifications">
//       <motion.div variants={textVariant(0)}>
//         <p className="text-sm text-teal-400 uppercase tracking-wider">My Achievements</p>
//         <h2 className="text-4xl font-bold text-white mt-2 mb-8">Certifications.</h2>
//       </motion.div>

//       <motion.div
//         variants={staggerContainer(0.2, 0.5)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//         className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {certificationsData.map((cert, index) => (
//           <CertificationBadge key={`cert-${index}`} cert={cert} index={index} />
//         ))}
//       </motion.div>
//     </SectionWrapper>
//   );
// };

// export default Certifications;

import React from 'react';
import { motion } from 'framer-motion';
// Assuming SectionWrapper, textVariant, fadeIn, staggerContainer are correctly defined elsewhere
// For this example, I'll provide simplified versions or assume their existence.
// You should keep your original imports for these if they are working.
import SectionWrapper from '../components/SectionWrapper'; // Your existing SectionWrapper
import { textVariant, fadeIn, staggerContainer } from '../utils/animationVariants'; // Your existing animation variants

// Import your certifications data
import { certificationsData } from '../data/certificationsData'; 

/**
 * CertificationBadge Component
 * Displays a single certification badge. It dynamically renders either an <a> tag
 * (if a link is provided) or a <div> (if no link), ensuring robustness.
 *
 * @param {object} props - Component props.
 * @param {object} props.cert - The certification object containing details.
 * @param {number} props.index - The index of the certification for staggered animation.
 */
const CertificationBadge = ({ cert, index }) => {
  // Determine if the badge should be a clickable link or just a display block
  // If cert.link exists, it will be an <a> tag, otherwise a <div>
  const Component = cert?.link ? motion.a : motion.div;

  return (
    <Component
      // Only apply href, target, and rel if a link is actually present
      href={cert?.link || undefined} // Use undefined if no link, so it doesn't add an empty href
      target={cert?.link ? "_blank" : undefined}
      rel={cert?.link ? "noopener noreferrer" : undefined}
      
      // Apply Framer Motion variants for animation
      variants={fadeIn('up', 'spring', index * 0.1, 0.5)} 
      
      // Tailwind CSS classes for styling
      className="block bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer" // Added cursor-pointer for visual feedback
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        {/* Conditionally render the icon if it exists */}
        {cert.icon && (
          <img 
            src={cert.icon} 
            alt={cert.name} 
            className="w-24 h-24 object-contain mb-4" 
            // Optional: Add onError to handle broken image links gracefully
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/cccccc/000000?text=No+Icon"; }}
          />
        )}
        {/* Certification Name */}
        <h3 className="text-white font-bold text-[20px] mb-2">{cert.name}</h3>
        {/* Provider */}
        <p className="text-teal-400 text-[14px] font-medium">{cert.provider}</p>
        {/* Date */}
        <p className="text-gray-400 text-[12px] mt-1">{cert.date}</p>
        {/* Description (optional) */}
        {cert.description && (
          <p className="text-gray-300 text-[14px] mt-3">{cert.description}</p>
        )}
      </div>
    </Component>
  );
};

/**
 * Certifications Component
 * Displays a section with a grid of certification badges.
 */
const Certifications = () => {
  // Added a console log to help debug if certificationsData is loaded correctly on deployment
  console.log('Certifications Data:', certificationsData);

  return (
    <SectionWrapper idName="certifications">
      {/* Section Title and Subtitle */}
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider">My Achievements</p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-8">Certifications.</h2>
      </motion.div>

      {/* Grid for Certification Badges */}
      <motion.div
        variants={staggerContainer(0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} // Triggers animation when 25% of element is in view
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Conditionally render badges or a message if no data */}
        {certificationsData && certificationsData.length > 0 ? (
          certificationsData.map((cert, index) => (
            <CertificationBadge key={`cert-${index}`} cert={cert} index={index} />
          ))
        ) : (
          // Message displayed if no certifications are found in the data file
          <p className="text-gray-400 text-lg col-span-full text-center">
            No certifications to display yet. Check your `certificationsData.js` file.
          </p>
        )}
      </motion.div>
    </SectionWrapper>
  );
};

export default Certifications;
