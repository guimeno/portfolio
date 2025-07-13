'use client';

import { motion } from 'framer-motion';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  NextJsIcon,
  TailwindIcon,
  FirebaseIcon,
  VercelIcon,
  FramerIcon
} from '@/components/Icons';

const techStack = [
  {
    name: 'React',
    icon: <ReactIcon className="w-12 h-12" />,
    description: 'A JavaScript library for building user interfaces'
  },
  {
    name: 'TypeScript',
    icon: <TypeScriptIcon className="w-12 h-12" />,
    description: 'Typed JavaScript for better developer experience'
  },
  {
    name: 'Next.js',
    icon: <NextJsIcon className="w-12 h-12" />,
    description: 'The React Framework for Production'
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindIcon className="w-12 h-12" />,
    description: 'A utility-first CSS framework'
  },
  {
    name: 'Framer Motion',
    icon: <FramerIcon className="w-12 h-12" />,
    description: 'Production-ready animation library for React'
  },
  {
    name: 'Vercel',
    icon: <VercelIcon className="w-12 h-12" />,
    description: 'The easiest way to deploy your Next.js site'
  }
];

export function TechStack() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built with Modern Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This website showcases the power of modern web development tools and best practices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
