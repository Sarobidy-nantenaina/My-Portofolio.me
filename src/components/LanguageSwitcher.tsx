import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="px-3 py-1 rounded-lg glassmorphic hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 text-sm font-medium"
    >
      {language.toUpperCase()}
    </motion.button>
  );
};

export default LanguageSwitcher;