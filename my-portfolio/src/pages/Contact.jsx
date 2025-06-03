

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import axios from "axios";
import { motion } from 'framer-motion';
import { Suspense, useRef, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { fadeIn } from '../utils/animationVariants';

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

    axios.post("https://portfolio-2-sqjf.onrender.com/api/contact", form) // Send 'form' directly, not {form}
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
