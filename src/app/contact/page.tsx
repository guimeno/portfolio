'use client';

import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';

export { metadata } from './metadata';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Prefer other methods?</h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm w-64">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email Us</h3>
              <a href="mailto:hello@example.com" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                hello@example.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm w-64">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.498 14.382v3.3c0 .66.536 1.204 1.2 1.2h3.1c.66 0 1.2-.54 1.2-1.2v-3.3c0-.66-.54-1.2-1.2-1.2h-3.1c-.664.004-1.2.54-1.2 1.2z"/>
                  <path d="M11.65 0C5.23 0 0 5.23 0 11.65s5.23 11.65 11.65 11.65h.002c2.25 0 4.46-.67 6.34-1.93l4.15 1.2-1.2-4.15c1.26-1.88 1.93-4.1 1.93-6.34C23.3 5.23 18.07 0 11.65 0zm6.52 17.27c-.15.23-.48.33-1.02.18-1.14-.3-2.76-.67-4.02-1.14-2.24-.8-3.75-2.67-3.86-2.8-.1-.14-.8-1.05-.8-2s.5-1.46.7-1.67c.18-.2.4-.3.68-.3h.5c.2 0 .4.1.5.3.2.3.7 1 .8 1.14.1.14.2.3.6.3.1 0 .2 0 .3-.1.4-.2 1.3-.5 2.3-1.6.8-.9 1.1-1.5 1.2-1.6.1-.14.1-.24 0-.34 0-.1-.2-.1-.3-.14-.4-.1-1.3-.14-1.8.1-.5.3-1 .8-1.2.9-.2.1-.4.2-.6.2-.2 0-.3-.1-.5-.2-.2-.2-.5-.5-1-1-.4-.4-.8-.7-1.1-.8-.3-.1-.5-.3-.7-.3-.1 0-.2 0-.3.1-.3.1-.7.4-1 .8-.4.6-.9 1.3-1 2.3 0 1 .3 1.5.6 2 .2.4.7.9 1.2 1.4.5.5 1 1 1.7 1.5.7.5 1.4.9 2.2 1.2.8.3 1.5.5 2.4.6.9.1 1.7-.1 2.3-.2.6-.1 1.4-.5 1.6-1 .2-.4.1-.8 0-1z"/>
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">WhatsApp</h3>
              <a href="https://wa.me/5511999999999" className="text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300">
                +55 (11) 99999-9999
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm w-64">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Business St.<br />
                São Paulo, SP 00000-000<br />
                Brazil
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
