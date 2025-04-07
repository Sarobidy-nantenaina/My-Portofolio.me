import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative glassmorphic border-t border-white/10 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {t('contact.info')}
              </h3>
              <ul className="space-y-3">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Paris, France</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {t('footer.navigation')}
              </h3>
              <ul className="space-y-3">
                {[
                  { key: 'nav.home', path: '/' },
                  { key: 'nav.about', path: '/about' },
                  { key: 'nav.projects', path: '/projects' },
                  { key: 'nav.blog', path: '/blog' },
                  { key: 'nav.contact', path: '/contact' }
                ].map((item, index) => (
                  <motion.li
                    key={item.path}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
                {t('footer.services')}
              </h3>
              <ul className="space-y-3">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting'].map((service, index) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                {t('footer.newsletter')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('footer.newsletterDesc')}
              </p>
              <motion.form 
                className="flex gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <input
                  type="email"
                  placeholder={t('footer.yourEmail')}
                  className="flex-1 px-4 py-2 rounded-lg glassmorphic border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-800/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t('footer.subscribe')}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-400 flex items-center"
              >
                {t('footer.madeWith')} <Heart className="w-4 h-4 mx-1 text-red-500" /> © {currentYear} {t('footer.rights')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg glassmorphic hover:bg-white/10 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;