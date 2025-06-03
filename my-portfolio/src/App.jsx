import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Skills from "./pages/Skils"
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main>
        <section id="home" className="py-20 md:py-32">
          <Home />
        </section>
        <section id="about" className="py-20 md:py-32">
          <About />
        </section>
        <section id="experience" className="py-20 md:py-32">
          <Experience />
        </section>
        <section id="skills" className="py-20 md:py-32">
          <Skills />
        </section>
        <section id="projects" className="py-20 md:py-32">
          <Projects />
        </section>
        <section id="certifications" className="py-20 md:py-32">
          <Certifications />
        </section>
        <section id="contact" className="py-20 md:py-32">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;



// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import {
// //   Home as HomeIcon,
// //   User as UserIcon,
// //   Briefcase as BriefcaseIcon,
// //   Code as CodeIcon,
// //   Award as AwardIcon,
// //   Mail as MailIcon,
// //   FileText as FileTextIcon,
// //   MoreHorizontal as MoreHorizontalIcon,
// //   Github, Linkedin, Twitter, ExternalLink, ArrowRight
// // } from 'lucide-react';

// // // Helper for smooth scrolling
// // const scrollToSection = (id) => {
// //   const element = document.getElementById(id);
// //   if (element) {
// //     element.scrollIntoView({ behavior: 'smooth' });
// //   }
// // };

// // // --- Navbar Component ---
// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isSticky, setIsSticky] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsSticky(window.scrollY > 0);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: 'Home', id: 'home', icon: <HomeIcon size={18} /> },
// //     { name: 'About', id: 'about', icon: <UserIcon size={18} /> },
// //     { name: 'Experience', id: 'experience', icon: <BriefcaseIcon size={18} /> },
// //     { name: 'Projects', id: 'projects', icon: <CodeIcon size={18} /> },
// //     { name: 'Certificates', id: 'certificates', icon: <AwardIcon size={18} /> },
// //     { name: 'Contact', id: 'contact', icon: <MailIcon size={18} /> },
// //     { name: 'Resume', id: 'resume', icon: <FileTextIcon size={18} /> },
// //   ];

// //   return (
// //     <nav className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
// //       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="text-2xl font-bold text-gray-800"
// //         >
// //           YourName.dev
// //         </motion.div>
// //         <div className="hidden md:flex space-x-6">
// //           {navLinks.map((link) => (
// //             link.id === 'resume' ? (
// //               <motion.a
// //                 key={link.id}
// //                 href="/your-resume.pdf" // Replace with your resume PDF link
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 {link.icon}
// //                 <span>{link.name}</span>
// //               </motion.a>
// //             ) : (
// //               <motion.button
// //                 key={link.id}
// //                 onClick={() => scrollToSection(link.id)}
// //                 className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 {link.icon}
// //                 <span>{link.name}</span>
// //               </motion.button>
// //             )
// //           ))}
// //         </div>
// //         <div className="md:hidden">
// //           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               {isOpen ? (
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
// //               ) : (
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// //               )}
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             transition={{ duration: 0.3 }}
// //             className="md:hidden bg-white shadow-md pb-4"
// //           >
// //             {navLinks.map((link) => (
// //               link.id === 'resume' ? (
// //                 <motion.a
// //                   key={link.id}
// //                   href="/your-resume.pdf" // Replace with your resume PDF link
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="block px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   {link.icon}
// //                   <span>{link.name}</span>
// //                 </motion.a>
// //               ) : (
// //                 <motion.button
// //                   key={link.id}
// //                   onClick={() => { scrollToSection(link.id); setIsOpen(false); }}
// //                   className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
// //                 >
// //                   {link.icon}
// //                   <span>{link.name}</span>
// //                 </motion.button>
// //               )
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // };

// // // --- Section Wrapper for Animations ---
// // const AnimatedSection = ({ id, children, className }) => {
// //   const { ref, inView } = useInView({
// //     triggerOnce: true,
// //     threshold: 0.1,
// //   });

// //   return (
// //     <motion.section
// //       id={id}
// //       ref={ref}
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={inView ? { opacity: 1, y: 0 } : {}}
// //       transition={{ duration: 0.6, ease: "easeOut" }}
// //       className={`py-20 px-4 min-h-screen flex items-center justify-center ${className}`}
// //     >
// //       <div className="container mx-auto max-w-4xl">
// //         {children}
// //       </div>
// //     </motion.section>
// //   );
// // };

// // // --- Hero Section ---
// // const HeroSection = () => {
// //   return (
// //     <AnimatedSection id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 pt-20">
// //       <div className="text-center">
// //         <motion.h1
// //           initial={{ opacity: 0, y: -50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
// //         >
// //           Welcome to My Portfolio!
// //         </motion.h1>
// //         <motion.p
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.4 }}
// //           className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
// //         >
// //           Showcasing my journey in software development,
// //           innovative projects, and professional expertise.
// //         </motion.p>
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, delay: 0.6 }}
// //           className="flex justify-center space-x-4"
// //         >
// //           <motion.button
// //             onClick={() => scrollToSection('projects')}
// //             className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2"
// //             whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             View Projects <ArrowRight size={20} />
// //           </motion.button>
// //           <motion.a
// //             href="#contact"
// //             onClick={() => scrollToSection('contact')}
// //             className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
// //             whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             Contact Me <MailIcon size={20} />
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </AnimatedSection>
// //   );
// // };

// // // --- About Section ---
// // const AboutSection = () => {
// //   return (
// //     <AnimatedSection id="about" className="bg-white text-gray-800">
// //       <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">About Me</h2>
// //       <div className="grid md:grid-cols-2 gap-12 items-center">
// //         <motion.div
// //           initial={{ opacity: 0, x: -50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //         >
// //           <img
// //             src="https://placehold.co/400x400/E0F2F7/17A2B8?text=Your+Photo" // Replace with your photo
// //             alt="Your Photo"
// //             className="rounded-full w-64 h-64 mx-auto object-cover shadow-xl border-4 border-blue-200"
// //           />
// //         </motion.div>
// //         <motion.div
// //           initial={{ opacity: 0, x: 50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           className="text-lg leading-relaxed"
// //         >
// //           <p className="mb-4">
// //             Hello! I'm <span className="font-semibold text-blue-600">Your Name</span>, a passionate
// //             [Your Profession, e.g., Software Developer] with [Number] years of experience
// //             in building robust and scalable web applications. My expertise lies in
// //             [mention key technologies like React, Node.js, Python, etc.].
// //           </p>
// //           <p className="mb-4">
// //             I thrive on solving complex problems and creating intuitive user experiences.
// //             I'm always eager to learn new technologies and contribute to impactful projects.
// //             Outside of coding, I enjoy [mention a hobby, e.g., hiking, reading, gaming].
// //           </p>
// //           <p>
// //             Feel free to explore my work and get in touch!
// //           </p>
// //         </motion.div>
// //       </div>
// //     </AnimatedSection>
// //   );
// // };

// // // --- Experience Section ---
// // const ExperienceSection = () => {
// //   const experiences = [
// //     {
// //       title: "Senior Software Engineer",
// //       company: "Tech Solutions Inc.",
// //       duration: "Jan 2022 - Present",
// //       description: [
// //         "Led development of a new microservices architecture, improving system scalability by 30%.",
// //         "Mentored junior developers and conducted code reviews.",
// //         "Implemented CI/CD pipelines, reducing deployment time by 50%."
// //       ],
// //       skills: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
// //     },
// //     {
// //       title: "Software Developer",
// //       company: "Innovate Apps Co.",
// //       duration: "Mar 2019 - Dec 2021",
// //       description: [
// //         "Developed and maintained front-end features using React and Redux.",
// //         "Collaborated with UX/UI designers to translate wireframes into interactive web applications.",
// //         "Optimized application performance, leading to a 20% faster load time."
// //       ],
// //       skills: ["React", "JavaScript", "HTML", "CSS", "REST APIs"]
// //     },
// //     {
// //       title: "Junior Developer Intern",
// //       company: "Startup X",
// //       duration: "Jun 2018 - Feb 2019",
// //       description: [
// //         "Assisted in developing and testing new features for a customer management system.",
// //         "Learned version control (Git) and agile methodologies.",
// //         "Contributed to bug fixes and documentation."
// //       ],
// //       skills: ["Python", "Django", "SQL", "Git"]
// //     }
// //   ];

// //   return (
// //     <AnimatedSection id="experience" className="bg-gray-50 text-gray-800">
// //       <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Experience</h2>
// //       <div className="space-y-10">
// //         {experiences.map((exp, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
// //           >
// //             <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
// //             <p className="text-blue-600 text-lg mb-1">{exp.company}</p>
// //             <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
// //             <ul className="list-disc list-inside text-gray-700 space-y-2">
// //               {exp.description.map((item, i) => (
// //                 <li key={i}>{item}</li>
// //               ))}
// //             </ul>
// //             <div className="mt-4 flex flex-wrap gap-2">
// //               {exp.skills.map((skill, i) => (
// //                 <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
// //                   {skill}
// //                 </span>
// //               ))}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </AnimatedSection>
// //   );
// // };

// // // --- Projects Section ---
// // const ProjectsSection = () => {
// //   const projects = [
// //     {
// //       title: "E-commerce Platform",
// //       description: "A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment gateway integration.",
// //       techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
// //       githubLink: "https://github.com/yourusername/ecommerce-platform",
// //       liveLink: "https://ecommerce-demo.vercel.app"
// //     },
// //     {
// //       title: "Task Management App",
// //       description: "A responsive task management application with drag-and-drop functionality, real-time updates, and user collaboration features.",
// //       techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
// //       githubLink: "https://github.com/yourusername/task-manager-app",
// //       liveLink: "https://task-manager-demo.vercel.app"
// //     },
// //     {
// //       title: "AI Chatbot Integration",
// //       description: "Integrated a custom AI chatbot into a customer service portal, improving response times by 40%.",
// //       techStack: ["Python", "Flask", "OpenAI API", "React"],
// //       githubLink: "https://github.com/yourusername/ai-chatbot-integration",
// //       liveLink: null // No live link for this example
// //     }
// //   ];

// //   return (
// //     <AnimatedSection id="projects" className="bg-white text-gray-800">
// //       <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Projects</h2>
// //       <div className="grid md:grid-cols-2 gap-8">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
// //           >
// //             <div>
// //               <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
// //               <p className="text-gray-700 mb-4">{project.description}</p>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {project.techStack.map((tech, i) => (
// //                   <span key={i} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="flex space-x-4 mt-4">
// //               {project.githubLink && (
// //                 <motion.a
// //                   href={project.githubLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
// //                   whileHover={{ scale: 1.1 }}
// //                 >
// //                   <Github size={20} />
// //                   <span>GitHub</span>
// //                 </motion.a>
// //               )}
// //               {project.liveLink && (
// //                 <motion.a
// //                   href={project.liveLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
// //                   whileHover={{ scale: 1.1 }}
// //                 >
// //                   <ExternalLink size={20} />
// //                   <span>Live Demo</span>
// //                 </motion.a>
// //               )}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </AnimatedSection>
// //   );
// // };

// // // --- Certificates Section ---
// // const CertificatesSection = () => {
// //   const certificates = [
// //     {
// //       name: "AWS Certified Solutions Architect – Associate",
// //       issuer: "Amazon Web Services",
// //       date: "March 2023",
// //       link: "https://www.credly.com/badges/your-aws-badge-id" // Replace with your certificate link
// //     },
// //     {
// //       name: "Google Professional Cloud Developer",
// //       issuer: "Google Cloud",
// //       date: "November 2022",
// //       link: "https://www.credly.com/badges/your-gcp-badge-id" // Replace with your certificate link
// //     },
// //     {
// //       name: "React - The Complete Guide",
// //       issuer: "Udemy (Maximilian Schwarzmüller)",
// //       date: "July 2021",
// //       link: null // No public link for this example
// //     }
// //   ];

// //   return (
// //     <AnimatedSection id="certificates" className="bg-gray-50 text-gray-800">
// //       <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Certificates</h2>
// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {certificates.map((cert, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
// //           >
// //             <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
// //             <p className="text-blue-600 mb-1">{cert.issuer}</p>
// //             <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
// //             {cert.link && (
// //               <motion.a
// //                 href={cert.link}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="mt-auto inline-flex items-center space-x-2 text-blue-600 hover:underline"
// //                 whileHover={{ x: 5 }}
// //               >
// //                 View Certificate <ArrowRight size={16} />
// //               </motion.a>
// //             )}
// //           </motion.div>
// //         ))}
// //       </div>
// //     </AnimatedSection>
// //   );
// // };

// // // --- Contact Section ---
// // const ContactSection = () => {
// //   return (
// //     <AnimatedSection id="contact" className="bg-white text-gray-800">
// //       <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Get In Touch</h2>
// //       <div className="text-center max-w-2xl mx-auto">
// //         <p className="text-lg mb-8">
// //           I'm always open to new opportunities and collaborations. Feel free to reach out!
// //         </p>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //           className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200"
// //         >
// //           <p className="text-xl font-semibold mb-4">Email Me:</p>
// //           <motion.a
// //             href="mailto:your.email@example.com" // Replace with your email
// //             className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
// //             whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             your.email@example.com
// //           </motion.a>
// //           <p className="text-xl font-semibold mt-8 mb-4">Connect on Social Media:</p>
// //           <div className="flex justify-center space-x-6">
// //             <motion.a
// //               href="https://github.com/yourusername" // Replace with your GitHub
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
// //               whileHover={{ scale: 1.2 }}
// //             >
// //               <Github size={36} />
// //             </motion.a>
// //             <motion.a
// //               href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
// //               whileHover={{ scale: 1.2 }}
// //             >
// //               <Linkedin size={36} />
// //             </motion.a>
// //             <motion.a
// //               href="https://twitter.com/yourhandle" // Replace with your Twitter
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
// //               whileHover={{ scale: 1.2 }}
// //             >
// //               <Twitter size={36} />
// //             </motion.a>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </AnimatedSection>
// //   );
// // };

// // // --- Footer Section ---
// // const Footer = () => {
// //   return (
// //     <footer className="bg-gray-800 text-white py-10 px-4">
// //       <div className="container mx-auto text-center">
// //         <p className="mb-4 text-lg">
// //           &copy; {new Date().getFullYear()} Your Name. All rights reserved.
// //         </p>
// //         <div className="flex justify-center space-x-6 mb-4">
// //           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
// //             <Github size={24} />
// //           </a>
// //           <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
// //             <Linkedin size={24} />
// //           </a>
// //           <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
// //             <Twitter size={24} />
// //           </a>
// //         </div>
// //         <p className="text-sm text-gray-400">Built with React, Tailwind CSS, and Framer Motion.</p>
// //       </div>
// //     </footer>
// //   );
// // };


// // // --- Main App Component ---
// // export default function App() {
// //   return (
// //     <div className="font-inter antialiased text-gray-900">
// //       <Navbar />
// //       <main>
// //         <HeroSection />
// //         <AboutSection />
// //         <ExperienceSection />
// //         <ProjectsSection />
// //         <CertificatesSection />
// //         <ContactSection />
// //         {/* You can add more sections here following the AnimatedSection pattern */}
// //         <AnimatedSection id="more" className="bg-white text-gray-800">
// //           <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">More to Explore</h2>
// //           <div className="text-center text-lg">
// //             <p className="mb-4">
// //               This section is a placeholder for any additional content you'd like to add!
// //             </p>
// //             <p>
// //               Ideas: Blog posts, testimonials, specific skills breakdown, or fun facts.
// //             </p>
// //           </div>
// //         </AnimatedSection>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }


// import React, { useState, useEffect, useRef, useCallback } from 'react';

// // Main App Component
// function App() {
//   // State to manage the active section for potential future navigation or highlighting
//   const [activeSection, setActiveSection] = useState('hero');

//   // Ref for the main content area to observe scroll
//   const mainContentRef = useRef(null);

//   // Callback to update active section based on scroll position
//   const handleScroll = useCallback(() => {
//     const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
//     let currentActive = 'hero';

//     for (const sectionId of sections) {
//       const sectionElement = document.getElementById(sectionId);
//       if (sectionElement) {
//         const rect = sectionElement.getBoundingClientRect();
//         // Check if the section is mostly in view
//         if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//           currentActive = sectionId;
//           break;
//         }
//       }
//     }
//     setActiveSection(currentActive);
//   }, []);

//   // Add scroll event listener
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     // Clean up the event listener on component unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 font-inter antialiased">
//       {/* Tailwind CSS CDN - This would typically be configured in your project's build process, but included for self-containment */}
//       <script src="https://cdn.tailwindcss.com"></script>
//       {/* Google Fonts - Inter */}
//       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

//       {/* Custom CSS for animations and base styles */}
//       <style>
//         {`
//           html {
//             scroll-behavior: smooth; /* Smooth scrolling for anchor links */
//           }
//           body {
//             font-family: 'Inter', sans-serif;
//           }
//           .fade-in {
//             opacity: 0;
//             transform: translateY(20px);
//             animation: fadeInAnimation 0.8s ease-out forwards;
//           }
//           .fade-in-delay-1 { animation-delay: 0.2s; }
//           .fade-in-delay-2 { animation-delay: 0.4s; }
//           .fade-in-delay-3 { animation-delay: 0.6s; }
//           .fade-in-delay-4 { animation-delay: 0.8s; }
//           .fade-in-delay-5 { animation-delay: 1s; }

//           @keyframes fadeInAnimation {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .typewriter-text {
//             overflow: hidden; /* Ensures the text is hidden until typed */
//             white-space: nowrap; /* Prevents text from wrapping */
//             border-right: .15em solid #3B82F6; /* Blinking cursor effect */
//             animation:
//               typing 3.5s steps(40, end),
//               blink-caret .75s step-end infinite;
//           }

//           /* Typing animation */
//           @keyframes typing {
//             from { width: 0 }
//             to { width: 100% }
//           }

//           /* Blinking cursor animation */
//           @keyframes blink-caret {
//             from, to { border-color: transparent }
//             50% { border-color: #3B82F6; }
//           }

//           /* General card hover effect */
//           .card-hover-effect {
//             transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//           }
//           .card-hover-effect:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//           }
//         `}
//       </style>

//       {/* Navigation Bar */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <a href="#hero" className="text-2xl font-bold text-blue-600 rounded-md p-2 hover:bg-blue-50 transition-colors duration-300">YourName</a>
//           <div className="hidden md:flex space-x-6">
//             <NavLink href="#about" text="About" active={activeSection === 'about'} />
//             <NavLink href="#skills" text="Skills" active={activeSection === 'skills'} />
//             <NavLink href="#projects" text="Projects" active={activeSection === 'projects'} />
//             <NavLink href="#contact" text="Contact" active={activeSection === 'contact'} />
//           </div>
//           {/* Mobile Menu Button (Hamburger) */}
//           <div className="md:hidden">
//             {/* You would typically implement a mobile menu toggle here */}
//             <button className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Main content sections */}
//       <div ref={mainContentRef} className="pt-20"> {/* Add padding-top to account for fixed nav */}
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         <ContactSection />
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8 text-center">
//         <div className="container mx-auto px-4">
//           <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
//           <div className="flex justify-center space-x-4 mt-4">
//             <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
//             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">GitHub</a>
//             {/* Add more social links as needed */}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // NavLink Component for cleaner navigation rendering
// const NavLink = ({ href, text, active }) => (
//   <a
//     href={href}
//     className={`text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 rounded-md px-3 py-2
//       ${active ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
//   >
//     {text}
//   </a>
// );

// // Hero Section Component
// const HeroSection = () => {
//   const [typedText, setTypedText] = useState('');
//   const fullText = "Building Innovative Web Solutions."; // Text for typewriter effect
//   const indexRef = useRef(0);

//   useEffect(() => {
//     // Typewriter effect logic
//     const typingInterval = setInterval(() => {
//       if (indexRef.current < fullText.length) {
//         setTypedText((prev) => prev + fullText.charAt(indexRef.current));
//         indexRef.current += 1;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 70); // Typing speed

//     return () => clearInterval(typingInterval); // Cleanup on unmount
//   }, []);

//   return (
//     <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
//       {/* Background shapes/particles (simple CSS for demonstration) */}
//       <div className="absolute inset-0 z-0 opacity-20">
//         <div className="absolute w-40 h-40 bg-blue-200 rounded-full top-10 left-10 animate-pulse-slow"></div>
//         <div className="absolute w-60 h-60 bg-indigo-200 rounded-full bottom-20 right-20 animate-pulse-slow delay-500"></div>
//         <div className="absolute w-32 h-32 bg-purple-200 rounded-full top-1/3 right-1/4 animate-pulse-slow delay-1000"></div>
//       </div>

//       <div className="container mx-auto px-4 text-center z-10">
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//           {/* Profile Image (fade-in animation) */}
//           <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white fade-in">
//             <img
//               src="https://placehold.co/256x256/ADD8E6/000000?text=Your+Photo" // Placeholder image
//               alt="Your Name"
//               className="w-full h-full object-cover"
//               onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/256x256/CCCCCC/333333?text=Image+Error"; }}
//             />
//           </div>
//           {/* Text Content (fade-in and typewriter animation) */}
//           <div className="max-w-xl fade-in fade-in-delay-1">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
//               Hi, I'm <span className="text-blue-600">Your Name</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 mb-6 typewriter-text">
//               {typedText}
//             </p>
//             <a
//               href="#projects"
//               className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105 fade-in fade-in-delay-2"
//             >
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // About Section Component
// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target); // Stop observing once visible
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="about" ref={sectionRef} className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isVisible ? 'fade-in' : ''}`}>About Me</h2>
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           {/* About Text */}
//           <div className={`md:w-1/2 text-lg text-gray-700 leading-relaxed ${isVisible ? 'fade-in fade-in-delay-1' : ''}`}>
//             <p className="mb-4">
//               Hello! I'm <span className="font-semibold text-blue-600">Your Name</span>, a passionate and results-driven [Your Profession, e.g., Full-Stack Developer] with a knack for crafting robust and user-friendly web applications. My journey in technology began [mention how/when, e.g., during my college days building small projects], and since then, I've been fascinated by how code can bring ideas to life.
//             </p>
//             <p className="mb-4">
//               I specialize in [mention your primary tech stack/focus, e.g., React, Node.js, and modern JavaScript], and I'm always eager to learn new technologies and best practices. I thrive in collaborative environments where I can contribute to meaningful projects and continuously grow my skillset.
//             </p>
//             <p>
//               Beyond coding, I enjoy [mention a hobby or interest, e.g., exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes]. I believe that a well-rounded life fuels creativity and problem-solving in my professional work.
//             </p>
//             <a
//               href="#contact"
//               className="inline-block mt-8 bg-blue-600 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
//             >
//               Let's Connect
//             </a>
//           </div>
//           {/* Certifications (fade-in animation) */}
//           <div className={`md:w-1/2 ${isVisible ? 'fade-in fade-in-delay-2' : ''}`}>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Example Certification 1 */}
//               <div className="bg-gray-100 p-6 rounded-lg shadow-sm card-hover-effect">
//                 <img
//                   src="https://placehold.co/60x60/F0F0F0/000000?text=Google" // Placeholder for Google logo
//                   alt="Google Logo"
//                   className="w-16 h-16 mb-4 mx-auto"
//                   onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/CCCCCC/333333?text=Logo"; }}
//                 />
//                 <h4 className="font-semibold text-xl text-gray-800 mb-2 text-center">Google Certified Associate Android Developer</h4>
//                 <p className="text-sm text-gray-600 text-center">
//                   Demonstrates proficiency in building Android applications.
//                 </p>
//                 <a
//                   href="https://www.credly.com/badges/your-google-cert-id" // Replace with actual link
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block mt-4 text-center text-blue-600 hover:underline text-sm"
//                 >
//                   View Credential
//                 </a>
//               </div>
//               {/* Example Certification 2 */}
//               <div className="bg-gray-100 p-6 rounded-lg shadow-sm card-hover-effect">
//                 <img
//                   src="https://placehold.co/60x60/F0F0F0/000000?text=AWS" // Placeholder for AWS logo
//                   alt="AWS Logo"
//                   className="w-16 h-16 mb-4 mx-auto"
//                   onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/CCCCCC/333333?text=Logo"; }}
//                 />
//                 <h4 className="font-semibold text-xl text-gray-800 mb-2 text-center">AWS Certified Cloud Practitioner</h4>
//                 <p className="text-sm text-gray-600 text-center">
//                   Foundational understanding of AWS cloud concepts.
//                 </p>
//                 <a
//                   href="https://www.credly.com/badges/your-aws-cert-id" // Replace with actual link
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block mt-4 text-center text-blue-600 hover:underline text-sm"
//                 >
//                   View Credential
//                 </a>
//               </div>
//               {/* Add more certifications as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Skills Section Component
// const SkillsSection = () => {
//   const skills = [
//     { name: 'JavaScript', level: 'Advanced', icon: 'JS' },
//     { name: 'React.js', level: 'Advanced', icon: 'React' },
//     { name: 'Node.js', level: 'Intermediate', icon: 'Node' },
//     { name: 'Tailwind CSS', level: 'Advanced', icon: 'Tailwind' },
//     { name: 'HTML5', level: 'Advanced', icon: 'HTML' },
//     { name: 'CSS3', level: 'Advanced', icon: 'CSS' },
//     { name: 'Python', level: 'Intermediate', icon: 'Python' },
//     { name: 'SQL', level: 'Intermediate', icon: 'SQL' },
//     { name: 'Git', level: 'Advanced', icon: 'Git' },
//     { name: 'Figma', level: 'Basic', icon: 'Figma' },
//   ];

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isVisible ? 'fade-in' : ''}`}>My Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={skill.name}
//               className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center card-hover-effect ${isVisible ? `fade-in fade-in-delay-${Math.min(index, 5)}` : ''}`}
//             >
//               {/* Simple SVG icon or text icon for demonstration */}
//               <div className="w-16 h-16 mb-4 flex items-center justify-center text-blue-600 text-3xl font-bold bg-blue-50 rounded-full">
//                 {skill.icon}
//               </div>
//               <h3 className="font-semibold text-xl text-gray-800">{skill.name}</h3>
//               <p className="text-sm text-gray-600">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Projects Section Component
// const ProjectsSection = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       title: 'E-commerce Storefront',
//       category: 'Full-Stack Development',
//       image: 'https://placehold.co/400x300/ADD8E6/000000?text=Project+1', // Placeholder
//       shortDescription: 'A responsive e-commerce platform with user authentication and product management.',
//       longDescription: 'Developed a full-stack e-commerce application using React for the frontend, Node.js with Express for the backend API, and MongoDB for the database. Features include user registration, login, product browsing, shopping cart functionality, and order processing. Implemented secure authentication with JWT and integrated Stripe for payment processing. The design is fully responsive and optimized for various devices.',
//       technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Stripe API'],
//       liveDemo: 'https://your-ecommerce-demo.com', // Replace with actual link
//       githubRepo: 'https://github.com/yourusername/ecommerce-project', // Replace with actual link
//     },
//     {
//       id: 2,
//       title: 'Task Management App',
//       category: 'Frontend Development',
//       image: 'https://placehold.co/400x300/ADD8E6/000000?text=Project+2', // Placeholder
//       shortDescription: 'An intuitive task management application with drag-and-drop functionality.',
//       longDescription: 'Built a single-page application for task management using React. Features include creating, editing, deleting, and marking tasks as complete. Implemented drag-and-drop functionality for reordering tasks and categorizing them into different lists. Utilized local storage for data persistence. Focused on a clean UI/UX and smooth animations.',
//       technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Local Storage'],
//       liveDemo: 'https://your-task-app-demo.com',
//       githubRepo: 'https://github.com/yourusername/task-manager-app',
//     },
//     {
//       id: 3,
//       title: 'Personal Blog Platform',
//       category: 'Content Management',
//       image: 'https://placehold.co/400x300/ADD8E6/000000?text=Project+3', // Placeholder
//       shortDescription: 'A custom blog platform with a markdown editor and comment system.',
//       longDescription: 'Designed and developed a personal blogging platform. The frontend was built with React, allowing users to view blog posts. The backend was powered by Node.js and a PostgreSQL database, providing an API for post creation, retrieval, and comment management. Implemented a rich text editor for markdown support and a basic comment system. Focused on SEO-friendly routing and fast content loading.',
//       technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Markdown-it', 'RESTful API'],
//       liveDemo: 'https://your-blog-demo.com',
//       githubRepo: 'https://github.com/yourusername/personal-blog',
//     },
//     {
//       id: 4,
//       title: 'Weather Dashboard',
//       category: 'API Integration',
//       image: 'https://placehold.co/400x300/ADD8E6/000000?text=Project+4', // Placeholder
//       shortDescription: 'A real-time weather dashboard fetching data from a public API.',
//       longDescription: 'Created a dynamic weather dashboard that fetches and displays current weather conditions and forecasts for any city using a public weather API. The application is built with vanilla JavaScript, HTML, and CSS, demonstrating strong fundamentals in API integration and asynchronous programming. Includes features like city search, temperature conversion, and responsive layout.',
//       technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeatherMap API', 'Fetch API'],
//       liveDemo: 'https://your-weather-app-demo.com',
//       githubRepo: 'https://github.com/yourusername/weather-dashboard',
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="projects" ref={sectionRef} className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isVisible ? 'fade-in' : ''}`}>My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`bg-gray-100 rounded-lg shadow-lg overflow-hidden card-hover-effect cursor-pointer ${isVisible ? `fade-in fade-in-delay-${Math.min(index, 5)}` : ''}`}
//               onClick={() => setSelectedProject(project)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//                 onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/333333?text=Image+Error"; }}
//               />
//               <div className="p-6">
//                 <h3 className="font-semibold text-2xl text-gray-800 mb-2">{project.title}</h3>
//                 <p className="text-blue-600 text-sm font-medium mb-3">{project.category}</p>
//                 <p className="text-gray-700 text-base mb-4">{project.shortDescription}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, i) => (
//                     <span key={i} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Project Detail Modal */}
//         {selectedProject && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 animate-modal-open">
//               <div className="p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
//                   <button
//                     onClick={() => setSelectedProject(null)}
//                     className="text-gray-500 hover:text-gray-800 text-3xl font-bold"
//                   >
//                     &times;
//                   </button>
//                 </div>
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-64 object-cover rounded-md mb-6"
//                   onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Image+Error"; }}
//                 />
//                 <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-xl text-gray-800 mb-3">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.technologies.map((tech, i) => (
//                       <span key={i} className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex justify-end space-x-4">
//                   {selectedProject.liveDemo && (
//                     <a
//                       href={selectedProject.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
//                     >
//                       Live Demo
//                     </a>
//                   )}
//                   {selectedProject.githubRepo && (
//                     <a
//                       href={selectedProject.githubRepo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
//                     >
//                       GitHub Repo
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* Modal animation styles */}
//       <style>
//         {`
//           @keyframes modalOpen {
//             from {
//               opacity: 0;
//               transform: scale(0.95);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }
//           .animate-modal-open {
//             animation: modalOpen 0.3s ease-out forwards;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// // Contact Section Component
// const ContactSection = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would send this form data to a backend service
//     // For now, we'll just log it and show a simple message.
//     console.log("Form submitted!");
//     const form = e.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
//     // You could show a success message here in the UI
//     alert("Thank you for your message! I'll get back to you soon."); // Using alert for simple demo, replace with custom modal in production
//     form.reset(); // Clear the form
//   };

//   return (
//     <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className={`text-4xl font-bold text-center text-gray-900 mb-12 ${isVisible ? 'fade-in' : ''}`}>Get In Touch</h2>
//         <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg ${isVisible ? 'fade-in fade-in-delay-1' : ''}">
//           <p className="text-lg text-gray-700 text-center mb-8">
//             Have a project in mind or just want to chat? Feel free to reach out!
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-105"
//             >
//               Send Message
//             </button>
//           </form>
//           <div className="mt-8 text-center text-gray-600">
//             <p className="mb-2">You can also reach me directly at:</p>
//             <p className="text-blue-600 font-semibold text-lg">your.email@example.com</p>
//             <div className="flex justify-center space-x-6 mt-4">
//               <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                 {/* LinkedIn Icon (using inline SVG for simplicity) */}
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//               </a>
//               <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                 {/* GitHub Icon (using inline SVG for simplicity) */}
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.23 1.838 1.23 1.07 1.835 2.809 1.305 3.49.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.091 8.197-11.387c0-6.627-5.373-12-12-12z"/></svg>
//               </a>
//               {/* Add more social icons as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;
