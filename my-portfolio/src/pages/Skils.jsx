import React from 'react';
import SectionWrapper from '../components/SectionWrapper'; // Assuming you have this wrapper
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/animationVariants'; // Assuming these utility functions exist

// Define your skills data
// IMPORTANT: Replace the 'icon' URLs with paths to your actual local image files.
// For example:
// icon: '/assets/icons/react.png' (if in public folder)
// OR:
// import reactIcon from '../assets/icons/react.png';
// icon: reactIcon (if imported from src folder)
const skillsData = [
  { name: 'HTML', icon: 'https://placehold.co/64x64/E34F26/FFFFFF/png?text=HTML' },
  { name: 'CSS', icon: 'https://placehold.co/64x64/1572B6/FFFFFF/png?text=CSS' },
  { name: 'JavaScript', icon: 'https://placehold.co/64x64/F7DF1E/000000/png?text=JS' },
  { name: 'React.js', icon: 'https://placehold.co/64x64/61DAFB/000000/png?text=React' },
  { name: 'Node.js', icon: 'https://placehold.co/64x64/339933/FFFFFF/png?text=Node' },
  { name: 'Express.js', icon: 'https://placehold.co/64x64/000000/FFFFFF/png?text=Express' },
  { name: 'MongoDB', icon: 'https://placehold.co/64x64/47A248/FFFFFF/png?text=Mongo' },
  { name: 'SQL', icon: 'https://placehold.co/64x64/47A248/FFFFFF/png?text=SQL' },
  { name: 'Tailwind CSS', icon: 'https://placehold.co/64x64/06B6D4/FFFFFF/png?text=Tailwind' },
  { name: 'Java', icon: 'https://placehold.co/64x64/007396/FFFFFF/png?text=Java' },
  { name: 'DSA', icon: 'https://placehold.co/64x64/FF4500/FFFFFF/png?text=DSA' },
  { name: 'Git', icon: 'https://placehold.co/64x64/F05032/FFFFFF/png?text=Git' },
  { name: 'GitHub', icon: 'https://placehold.co/64x64/181717/FFFFFF/png?text=GitHub' },
];

const SkillCard = ({ index, name, icon }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)} // Staggered animation
      className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center
                 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer
                 border border-gray-700 hover:border-teal-400"
    >
      <img src={icon} alt={name} className="w-16 h-16 object-contain mb-4" />
      <p className="text-white text-lg font-semibold text-center">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper idName="skills">
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider text-center">What I Excel At</p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-12 text-center">Top Skills</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
