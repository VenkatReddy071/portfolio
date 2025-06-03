// import React, { useState, useRef } from 'react';
// import SectionWrapper from '../components/SectionWrapper';
// import { motion } from 'framer-motion';
// import { textVariant, fadeIn } from '../utils/animationVariants';

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // --- Backend Integration Placeholder ---
//     // If using EmailJS:
//     // emailjs.send(
//     //   'YOUR_SERVICE_ID', // Replace with your service ID
//     //   'YOUR_TEMPLATE_ID', // Replace with your template ID
//     //   {
//     //     from_name: form.name,
//     //     to_name: 'Your Name',
//     //     from_email: form.email,
//     //     to_email: 'your_email@example.com', // Your actual email
//     //     message: form.message,
//     //   },
//     //   'YOUR_PUBLIC_KEY' // Replace with your public key
//     // )
//     // .then(() => {
//     //   setLoading(false);
//     //   alert('Thank you! I will get back to you as soon as possible.');
//     //   setForm({ name: '', email: '', message: '' });
//     // }, (error) => {
//     //   setLoading(false);
//     //   console.error(error);
//     //   alert('Something went wrong. Please try again.');
//     // });

//     // For now, just simulate success:
//     setTimeout(() => {
//       setLoading(false);
//       alert('Thank you! Your message has been sent.');
//       setForm({ name: '', email: '', message: '' });
//     }, 2000); // Simulate network request
//   };

//   return (
//     <SectionWrapper idName="contact">
//       <div className="xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
//         <motion.div
//           variants={fadeIn('left', 'tween', 0.2, 1)}
//           className="flex-[0.75] bg-gray-800 p-8 rounded-2xl shadow-xl"
//         >
//           <p className="text-sm text-teal-400 uppercase tracking-wider">Get in touch</p>
//           <h2 className="text-4xl font-bold text-white mt-2 mb-8">Contact.</h2>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="mt-12 flex flex-col gap-8"
//           >
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="What's your name?"
//                 className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="What's your email?"
//                 className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Message</span>
//               <textarea
//                 rows="7"
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="What do you want to say?"
//                 className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none"
//                 required
//               />
//             </label>

//             <button
//               type="submit"
//               className="bg-teal-600 hover:bg-teal-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </motion.div>

//         {/* You can add a 3D model here (e.g., using Three.js / React Three Fiber) or a map */}
//         <motion.div
//           variants={fadeIn('right', 'tween', 0.2, 1)}
//           className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-gray-900 rounded-2xl flex justify-center items-center"
//         >
//           {/* Placeholder for 3D model or illustration */}
//           <p className="text-gray-400 text-center">
//             [Optional: Add a cool 3D model here or a contact illustration/map]
//           </p>
//         </motion.div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default Contact;


// import React, { useState, useRef, Suspense } from 'react';
// import SectionWrapper from '../components/SectionWrapper';
// import { motion } from 'framer-motion';
// import { textVariant, fadeIn } from '../utils/animationVariants';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import axios from "axios"
// import * as THREE from 'three';

// const SphereModel = () => {
//   const meshRef = useRef();
//   return (
//     <mesh ref={meshRef} scale={2.5}> {/* Adjust scale as needed */}
//       <sphereGeometry args={[1, 32, 32]} /> {/* Sphere geometry */}
//       <meshStandardMaterial
//         color="#00bcd4" // Teal color for the sphere
//         roughness={0.4}
//         metalness={0.6}
//       />
//     </mesh>
//   );
// };

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     axios.post("http://localhost:5000/api/contact",{form})
//     .then((response)=>{
//         alert("Thank you! Your message has been sent.");
//         setLoading(false);
//          setForm({ name: '', email: '', message: '' });
//     })
//     .catch((error)=>{
//         alert("error while sending message")
//     })
//   };

//   return (
//     <SectionWrapper idName="contact">
//       <div className="xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
//         <motion.div
//           variants={fadeIn('left', 'tween', 0.2, 1)}
//           className="flex-[0.75] bg-gray-800 p-8 rounded-2xl shadow-xl"
//         >
//           <p className="text-sm text-teal-400 uppercase tracking-wider">Get in touch</p>
//           <h2 className="text-4xl font-bold text-white mt-2 mb-8">Contact.</h2>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="mt-12 flex flex-col gap-8"
//           >
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="What's your name?"
//                 className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="What's your email?"
//                 className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Message</span>
//               <textarea
//                 rows="7"
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="What do you want to say?"
//                 className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none"
//                 required
//               />
//             </label>

//             <button
//               type="submit"
//               className="bg-teal-600 hover:bg-teal-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </motion.div>

//         {/* 3D Model Section */}
//         <motion.div
//           variants={fadeIn('right', 'tween', 0.2, 1)}
//           className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-white rounded-2xl flex justify-center items-center"
//         >
//           <Canvas
//             camera={{ position: [0, 0, 5], fov: 75 }} // Camera position and field of view
//             style={{ width: '100%', height: '100%' }} // Ensure canvas fills its container
//           >
//             <Suspense fallback={null}> {/* Show nothing or a loader while model loads */}
//               <ambientLight intensity={0.5} /> {/* Soft ambient light */}
//               <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
//               <SphereModel />
//               <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> {/* Allows user to rotate and auto-rotates */}
//             </Suspense>
//           </Canvas>
//         </motion.div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default Contact;


import React, { useState, useRef, Suspense } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/animationVariants';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import axios from "axios"
import * as THREE from 'three';

const SphereModel = () => {
  const meshRef = useRef();
  return (
    <mesh ref={meshRef} scale={2.5}> {/* Adjust scale as needed */}
      <sphereGeometry args={[1, 32, 32]} /> {/* Sphere geometry */}
      <meshStandardMaterial
        color="#FFD700" // Changed color to vibrant gold for better contrast
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(''); // State for custom message
  const [isSuccess, setIsSuccess] = useState(false); // State to track success/failure

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(''); // Clear previous message
    setIsSuccess(false); // Reset success status

    axios.post("http://localhost:5000/api/contact", form) // Send 'form' directly, not {form}
      .then((response) => {
        setMessageStatus('Thank you! Your message has been sent.');
        setIsSuccess(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setMessageStatus('Something went wrong. Please try again.');
        setIsSuccess(false);
      })
      .finally(() => {
        setLoading(false);
        // Clear message after a few seconds
        setTimeout(() => setMessageStatus(''), 5000);
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden">
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <p className="text-sm text-teal-400 uppercase tracking-wider">Get in touch</p>
          <h2 className="text-4xl font-bold text-white mt-2 mb-8">Contact.</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-gray-900 rounded-2xl flex justify-center items-center"
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }} // Camera position and field of view
            style={{ width: '100%', height: '100%' }} // Ensure canvas fills its container
          >
            <Suspense fallback={null}> {/* Show nothing or a loader while model loads */}
              <ambientLight intensity={0.5} /> {/* Soft ambient light */}
              <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
              <SphereModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} /> {/* Allows user to rotate and auto-rotates */}
            </Suspense>
          </Canvas>
        </motion.div>
      </div>

      {/* Notification Message Box */}
      {messageStatus && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg z-50
                      ${isSuccess ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
        >
          {messageStatus}
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default Contact;
