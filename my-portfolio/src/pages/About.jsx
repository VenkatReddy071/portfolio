// import React from 'react';
// import SectionWrapper from '../components/SectionWrapper';
// import { motion } from 'framer-motion';
// import { fadeIn, textVariant } from '../utils/animationVariants';

// const About = () => {
//   return (
//     <SectionWrapper idName="about">
//       <motion.div variants={textVariant(0)}>
//         <p className="text-sm text-teal-400 uppercase tracking-wider">Introduction</p>
//         <h2 className="text-4xl font-bold text-white mt-2 mb-8">About Me</h2>
//       </motion.div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <motion.div
//           variants={fadeIn('right', 'tween', 0.2, 1)}
//           className="lg:w-2/3"
//         >
//            <p className="mb-4">
//               Hello! I'm <span className="font-semibold text-teal-400">Venkat Reddy Jonnagiri</span>, a passionate Full-Stack Developer with a keen eye for detail and a drive to create impactful solutions. My journey in tech began with a strong foundation in Java and Data Structures & Algorithms (DSA), which ignited my passion for problem-solving and building robust applications.
//             </p>
//             <p className="mb-4">
//               I specialize in the <span className="font-semibold text-teal-400">MERN stack (MongoDB, Express.js, React.js, Node.js)</span>, focusing on building scalable, and user-friendly web applications. With approximately 1.5 years of hands-on experience in full-stack development, complemented by a 6-month web development internship, I've had the opportunity to contribute to various projects and learn continuously.
//             </p>
//             <p>
//               Beyond my professional experience, I actively participate in hackathons and coding activities, which allows me to explore new technologies, collaborate with diverse teams, and continuously hone my skills. I thrive in dynamic environments and love tackling complex challenges that push me to learn and grow.
//             </p>
//             <a
//               href="#contact"
//               className="inline-block mt-8 bg-blue-600 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
//             >
//               Let's Connect
//             </a>
//         </motion.div>
        
//       </div>
//     </SectionWrapper>
//   );
// };

// export default About;

import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/animationVariants';

const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant(0)}>
        <p className="text-sm text-teal-400 uppercase tracking-wider">Introduction</p>
        <h2 className="text-4xl font-bold text-white mt-2 mb-8">About Me</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="lg:w-full"
        >
          <p className="mb-4">
            Namaste! I'm <span className="font-semibold text-teal-400">Venkat Reddy Jonnagiri</span>, a Full-Stack Developer driven by a passion for crafting digital experiences that are both functional and engaging. My journey into the world of technology began with a deep dive into the fundamentals of Java and Data Structures & Algorithms, which instilled in me a strong analytical mindset and a love for elegant problem-solving.
          </p>
          <p className="mb-4">
            My expertise lies in the <span className="font-semibold text-teal-400">MERN (MongoDB, Express.js, React.js, Node.js)</span> stack, where I enjoy building end-to-end solutions for web applications. With around 1.5 years of practical experience, complemented by a valuable 6-month web development internship, I've gained hands-on experience in developing and deploying scalable and user-centric applications.
          </p>
          <p className="mb-4">
            I am particularly drawn to the dynamic nature of web development and am constantly seeking opportunities to expand my skillset. My involvement in hackathons and regular coding activities allows me to stay at the forefront of emerging technologies and collaborate with fellow enthusiasts on exciting projects. I believe in continuous learning and am always eager to tackle new challenges that push my boundaries.
          </p>
          <p>
            Based in India, I am looking for opportunities to contribute my skills and passion to innovative projects. If you're interested in collaborating or learning more about my work, feel free to reach out!
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;