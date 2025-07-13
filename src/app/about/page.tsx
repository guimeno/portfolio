'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, Code, Users, Award, MessageSquare } from 'lucide-react';

export { metadata } from './metadata';

const aboutSections = [
  {
    title: 'About Me',
    icon: <User className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          I'm a passionate developer with a strong background in web development and a keen eye for design. 
          With several years of experience in the industry, I've had the opportunity to work on a variety of projects, 
          from small business websites to large-scale applications.
        </p>
        <p>
          My journey in technology started at a young age, and I've been hooked ever since. 
          I love solving complex problems and turning ideas into reality through code.
        </p>
      </div>
    ),
  },
  {
    title: 'My Company',
    icon: <Briefcase className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          At DevPort, we believe in creating exceptional digital experiences that make a difference. 
          Our team of talented developers and designers work together to deliver high-quality solutions 
          tailored to our clients' unique needs.
        </p>
        <p>
          We pride ourselves on our commitment to excellence, attention to detail, and dedication to 
          staying at the forefront of technology trends.
        </p>
      </div>
    ),
  },
  {
    title: 'Our Approach',
    icon: <Code className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          We take a collaborative approach to every project, working closely with our clients to understand 
          their vision and goals. Our process is transparent, efficient, and focused on delivering results 
          that exceed expectations.
        </p>
      </div>
    ),
  },
  {
    title: 'Our Team',
    icon: <Users className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          Our team consists of passionate individuals who are experts in their respective fields. 
          We believe in continuous learning and growth, and we're always looking for new ways to 
          improve our skills and deliver better results for our clients.
        </p>
      </div>
    ),
  },
  {
    title: 'Our Values',
    icon: <Award className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Excellence:</span> We strive for the highest quality in everything we do.</li>
          <li><span className="font-medium">Integrity:</span> We believe in honesty, transparency, and ethical business practices.</li>
          <li><span className="font-medium">Innovation:</span> We embrace new technologies and creative solutions.</li>
          <li><span className="font-medium">Collaboration:</span> We work together with our clients as partners in success.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Get In Touch',
    icon: <MessageSquare className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          Interested in working together? We'd love to hear from you! 
          Get in touch to discuss your project and how we can help bring your ideas to life.
        </p>
      </div>
    ),
  },
];

export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn more about me, my journey, and the company behind the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <div className="text-gray-600 dark:text-gray-300">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
