'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to build something amazing?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            This website was 100% developed by our team. Want one like it? Let's talk about your project and how we can help bring your ideas to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-medium rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
            <a 
              href="https://wa.me/5511999999999?text=Hi%20there!%20I'm%20interested%20in%20your%20services." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.498 14.382v3.3c0 .66.536 1.204 1.2 1.2h3.1c.66 0 1.2-.54 1.2-1.2v-3.3c0-.66-.54-1.2-1.2-1.2h-3.1c-.664.004-1.2.54-1.2 1.2z"/>
                <path d="M11.65 0C5.23 0 0 5.23 0 11.65s5.23 11.65 11.65 11.65h.002c2.25 0 4.46-.67 6.34-1.93l4.15 1.2-1.2-4.15c1.26-1.88 1.93-4.1 1.93-6.34C23.3 5.23 18.07 0 11.65 0zm6.52 17.27c-.15.23-.48.33-1.02.18-1.14-.3-2.76-.67-4.02-1.14-2.24-.8-3.75-2.67-3.86-2.8-.1-.14-.8-1.05-.8-2s.5-1.46.7-1.67c.18-.2.4-.3.68-.3h.5c.2 0 .4.1.5.3.2.3.7 1 .8 1.14.1.14.2.3.6.3.1 0 .2 0 .3-.1.4-.2 1.3-.5 2.3-1.6.8-.9 1.1-1.5 1.2-1.6.1-.14.1-.24 0-.34 0-.1-.2-.1-.3-.14-.4-.1-1.3-.14-1.8.1-.5.3-1 .8-1.2.9-.2.1-.4.2-.6.2-.2 0-.3-.1-.5-.2-.2-.2-.5-.5-1-1-.4-.4-.8-.7-1.1-.8-.3-.1-.5-.3-.7-.3-.1 0-.2 0-.3.1-.3.1-.7.4-1 .8-.4.6-.9 1.3-1 2.3 0 1 .3 1.5.6 2 .2.4.7.9 1.2 1.4.5.5 1 1 1.7 1.5.7.5 1.4.9 2.2 1.2.8.3 1.5.5 2.4.6.9.1 1.7-.1 2.3-.2.6-.1 1.4-.5 1.6-1 .2-.4.1-.8 0-1z"/>
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-12 pt-8 border-t border-blue-500 border-opacity-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-blue-200 mb-4">Want to see how this site was built?</p>
            <Link 
              href="/how-its-made" 
              className="inline-flex items-center text-blue-100 hover:text-white font-medium transition-colors"
            >
              Check out the case study
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
