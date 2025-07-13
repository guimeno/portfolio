'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Smartphone, 
  Zap, 
  Search, 
  Moon, 
  Layout, 
  Settings,
  GitBranch,
  Server,
  Database,
  GitCommit,
  GitPullRequest
} from 'lucide-react';

export { metadata } from './metadata';

const techStack = [
  {
    name: 'Next.js',
    description: 'React framework for server-rendered applications and static site generation',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
  },
  {
    name: 'React',
    description: 'JavaScript library for building user interfaces',
    icon: <Cpu className="w-6 h-6" />,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
  },
  {
    name: 'TypeScript',
    description: 'Strongly typed programming language that builds on JavaScript',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: <Layout className="w-6 h-6" />,
    color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
  },
  {
    name: 'Framer Motion',
    description: 'Production-ready animation library for React',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
  },
  {
    name: 'Vercel',
    description: 'Platform for frontend frameworks and static sites',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
  },
  {
    name: 'GitHub',
    description: 'Version control and code collaboration platform',
    icon: <GitBranch className="w-6 h-6" />,
    color: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
  },
  {
    name: 'Responsive Design',
    description: 'Mobile-first approach with responsive breakpoints',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
  },
  {
    name: 'Dark Mode',
    description: 'Automatic dark/light mode with system preference detection',
    icon: <Moon className="w-6 h-6" />,
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
  },
  {
    name: 'SEO Optimization',
    description: 'Search engine optimized with metadata and semantic HTML',
    icon: <Search className="w-6 h-6" />,
    color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
  }
];

const developmentProcess = [
  {
    step: 1,
    title: 'Planning & Design',
    description: 'Defined project requirements, created wireframes, and designed the UI/UX with a focus on user experience and modern aesthetics.',
    icon: <Layout className="w-5 h-5" />
  },
  {
    step: 2,
    title: 'Setup & Configuration',
    description: 'Set up the Next.js project with TypeScript, Tailwind CSS, and other essential dependencies. Configured ESLint, Prettier, and Git for code quality and version control.',
    icon: <Settings className="w-5 h-5" />
  },
  {
    step: 3,
    title: 'Development',
    description: 'Built the application components, pages, and features following React best practices and component-based architecture.',
    icon: <Code className="w-5 h-5" />
  },
  {
    step: 4,
    title: 'Testing & Optimization',
    description: 'Performed cross-browser testing, performance optimization, and accessibility improvements to ensure a smooth user experience.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'Deployed the application to Vercel for global CDN distribution, automated deployments, and serverless functions.',
    icon: <GitCommit className="w-5 h-5" />
  }
];

export default function HowItsMade() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How This Site Was Built</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A technical deep-dive into the technologies, architecture, and decisions behind this modern portfolio website.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Development Process
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {developmentProcess.map((step, index) => (
                <motion.div 
                  key={step.step}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className={`w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3`}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-1/2 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center z-10">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance & Best Practices */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Performance & Best Practices
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Optimizations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Code splitting and lazy loading with Next.js</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimized images and assets</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Minified and compressed production build</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Efficient animations with Framer Motion</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Semantic HTML5 and ARIA attributes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>TypeScript for type safety</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ESLint and Prettier for code quality</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://github.com/yourusername/dev-portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.742.084-.727.084-.727 1.2.085 1.83 1.236 1.83 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.917 24 17.502 24 12.292 24 5.78 18.627.5 12 .5z"/>
              </svg>
              View Source Code on GitHub
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
