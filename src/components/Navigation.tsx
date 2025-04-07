import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code, User, Briefcase, FileText, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Auto-close menu after inactivity
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000); // 5 seconds of inactivity
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Code },
    { path: '/about', label: t('nav.about'), icon: User },
    { path: '/projects', label: t('nav.projects'), icon: Briefcase },
    { path: '/blog', label: t('nav.blog'), icon: FileText },
    { path: '/contact', label: t('nav.contact'), icon: Mail },
  ];

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full z-50"
    >
      <div className="glassmorphic mx-4 mt-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="flex-shrink-0"
            >
              <NavLink to="/" className="flex items-center">
                <div className="relative w-12 h-12">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.8), rgba(255,255,255,0.4), transparent)',
                      borderRadius: '60% 60% 45% 45% / 65% 65% 35% 35%',
                      boxShadow: '0 8px 24px -8px rgba(0,149,255,0.5)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                    animate={{
                      scaleY: [1, 1.1, 1],
                      scaleX: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                      borderRadius: '60% 60% 45% 45% / 65% 65% 35% 35%',
                      filter: 'blur(2px)',
                    }}
                    animate={{
                      y: [-2, 2, -2],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute w-4 h-4"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.9), transparent)',
                      top: '25%',
                      left: '25%',
                      filter: 'blur(1px)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      y: [-1, 1, -1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 filter drop-shadow-lg">
                      NS
                    </div>
                  </motion.div>

                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`drop-${i}`}
                      className="absolute w-1.5 h-2"
                      style={{
                        background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.8), transparent)',
                        borderRadius: '60% 60% 45% 45% / 65% 65% 35% 35%',
                        left: `${30 + i * 20}%`,
                        top: '85%',
                      }}
                      animate={{
                        y: [-5, 10],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </NavLink>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-600/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                      }`
                    }
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center"
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.div>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <LanguageSwitcher />
              </motion.div>
              
              <motion.button
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </motion.button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="md:hidden"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                >
                  <motion.div
                    animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    ) : (
                      <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    )}
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={mobileItemVariants}
                custom={index}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 hover:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;