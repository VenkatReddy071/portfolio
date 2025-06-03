import ecommerce from '../assets/image.png';
import blog from '../assets/blog.png';
import food from '../assets/food.png';
import event from "../assets/event.png";
import mul from "../assets/mul.png";
export const projectsData = [
  {
    name: 'MernMarket - E-commerce Platform',
    description:
      'A robust full-stack e-commerce application built with the MERN stack. It features comprehensive user authentication and authorization, dynamic product listings, a fully functional shopping cart, secure payment integration, and a dedicated user dashboard for order management and profile settings.',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'Express.js', color: 'text-gray-400' },
      { name: 'MongoDB', color: 'text-emerald-500' },
      { name: 'Authentication', color: 'text-purple-500' },
    ],
    image: ecommerce,
    github_link: 'https://github.com/venkatReddy0515/E-commerce-website',
    live_link: 'https://mernmarket.onrender.com/',
  },
  {
    name: 'Blog - Full-Stack Blog',
    description:
      'A dynamic blog platform where users can create, view, and comment on posts. The application includes robust user authentication and authorization, allowing personalized content creation and interaction. Built to provide a seamless blogging experience.',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'Express.js', color: 'text-gray-400' },
      { name: 'MongoDB', color: 'text-emerald-500' },
      { name: 'Authorization', color: 'text-red-500' },
      { name: 'Session', color: 'text-pink-500' },


    ],
    image:blog,
    github_link: 'https://github.com/venkatReddy0515/BLOG',
    live_link: 'https://blog-e2vb.onrender.com/',
  },
  {
    name: 'HealthyFood- Food Delivery App',
    description:
      'A modern food delivery application leveraging the MERN stack. Key features include secure user authentication, session management, and integrated Nodemailer for notifications. An intuitive admin dashboard allows efficient order management and tracking, with a focus on takeaway functionalities in Phase 1.',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'Express.js', color: 'text-gray-400' },
      { name: 'MongoDB', color: 'text-emerald-500' },
      { name: 'Authorization', color: 'text-red-500' },
      { name: 'Nodemailer', color: 'text-orange-500' },
      { name: 'Sessions', color: 'text-pink-500' },
    ],
    image:food,
    github_link: 'https://github.com/VenkatReddy071/HEALTHY_FOOD',
    live_link: 'https://healthy-food-1-6jd9.onrender.com/',
  },
  {
    name: 'UniConnect - College Event Management',
    description:
      'A comprehensive event management platform designed for colleges. It allows colleges to sign up as partners, post events, and visualize event data through dedicated dashboards. Features include distinct college-specific dashboards, an overarching admin dashboard with powerful visualizations, and robust session management, all built on the MERN stack.',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'Express.js', color: 'text-gray-400' },
      { name: 'MongoDB', color: 'text-emerald-500' },
      { name: 'Dashboards', color: 'text-teal-400' },
      { name: 'Data Visualization', color: 'text-red-500' },
      { name: 'Authorization', color: 'text-red-500' },
      { name: 'Nodemailer', color: 'text-orange-500' },
      { name: 'Sessions', color: 'text-pink-500' },
    ],
    image:event, // Suggestion: Use a specific image name
    github_link: 'https://github.com/VenkatReddy071/Event_mangement',
    live_link: 'ongoing',
  },
  {
    name: 'Multi-Service Hub (Hospital, Restaurant, College, School, Mail)',
    description:
      'A versatile MERN stack application integrating multiple service sectors. Users can book slots for schools/colleges, order takeaway from restaurants (Phase 1), schedule doctor appointments based on specialization in hospitals, and manage clothing orders via email integration. Each section features dedicated user dashboards, complemented by a comprehensive admin dashboard for overall management. Includes session handling, authentication, and authorization.',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Node.js', color: 'text-green-500' },
      { name: 'Express.js', color: 'text-gray-400' },
      { name: 'MongoDB', color: 'text-emerald-500' },
      { name: 'Nodemailer', color: 'text-orange-500' },
      { name: 'Authorization', color: 'text-red-500' },
      { name: 'Sessions', color: 'text-pink-500' },
      { name: 'Multi-Dashboard', color: 'text-purple-500' },
    ],
    image:mul, // Suggestion: Use a specific image name
    github_link: 'https://github.com/VenkatReddy071/SREC_Project', // Update with your actual link
    live_link: 'onGoing', // Update with your actual link
  },
];