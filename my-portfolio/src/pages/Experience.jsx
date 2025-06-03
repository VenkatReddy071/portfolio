import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/animationVariants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../data/experiencesData'; // You'll create this file

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1a202c', color: '#fff', border: '1px solid #2dd4bf' }} // Tailwind's gray-900 & teal-400
      contentArrowStyle={{ borderRight: '7px solid #2dd4bf' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon} // e.g., company logo
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div
        variants={fadeIn('up', 'spring', 0.2, 0.75)} // Animation for each card
      >
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-teal-400 text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </motion.div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <SectionWrapper idName="experience">
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider">What I have done so far</p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-8">Work Experience & Internships.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiencesData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;