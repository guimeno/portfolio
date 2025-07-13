'use client';

import { motion } from 'framer-motion';
import { 
  Smartphone as SmartphoneIcon, 
  Zap as ZapIcon, 
  Code as CodeIcon, 
  Search as SearchIcon, 
  Moon as MoonIcon, 
  Layout as LayoutIcon, 
  Settings as SettingsIcon,
  BarChart2 as BarChart2Icon,
  Palette as PaletteIcon,
  ShieldCheck as ShieldCheckIcon,
  Clock as ClockIcon
} from 'lucide-react';

const features = [
  {
    icon: <SmartphoneIcon className="w-6 h-6" />,
    title: 'Fully Responsive',
    description: 'Looks and works perfectly on all devices, from mobile phones to large desktop screens.'
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for performance with fast load times and smooth animations.'
  },
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Well-structured, maintainable, and documented code following best practices.'
  },
  {
    icon: <SearchIcon className="w-6 h-6" />,
    title: 'SEO Optimized',
    description: 'Built with search engine optimization in mind to help you rank higher in search results.'
  },
  {
    icon: <MoonIcon className="w-6 h-6" />,
    title: 'Dark Mode',
    description: 'Automatic dark mode that respects user preferences with smooth transitions.'
  },
  {
    icon: <LayoutIcon className="w-6 h-6" />,
    title: 'Modern UI/UX',
    description: 'Beautiful, intuitive interface designed with user experience as the top priority.'
  },
  {
    icon: <SettingsIcon className="w-6 h-6" />,
    title: 'Easy to Customize',
    description: 'Modular components that are easy to modify and extend for your needs.'
  },
  {
    icon: <BarChart2Icon className="w-6 h-6" />,
    title: 'Analytics Ready',
    description: 'Easily integrate with analytics tools to track user behavior and engagement.'
  },
  {
    icon: <PaletteIcon className="w-6 h-6" />,
    title: 'Custom Branding',
    description: 'Fully customizable colors, fonts, and styles to match your brand identity.'
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    title: 'Secure',
    description: 'Built with security best practices to protect your data and your users.'
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: 'Fast Development',
    description: 'Rapid development cycle to get your project from concept to launch quickly.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features of This Site</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This website showcases the capabilities of our development process and the quality you can expect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
