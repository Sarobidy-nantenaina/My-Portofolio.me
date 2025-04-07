import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: language === 'fr' ? 'Plateforme E-Commerce' : 'E-Commerce Platform',
      category: language === 'fr' ? 'Développement Web' : 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      description: language === 'fr' 
        ? 'Plateforme e-commerce moderne construite avec React et Node.js'
        : 'Modern e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com',
      },
    },
    {
      id: 2,
      title: language === 'fr' ? 'Application de Gestion de Tâches' : 'Task Management App',
      category: language === 'fr' ? 'Application Mobile' : 'Mobile App',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
      description: language === 'fr'
        ? 'Application collaborative de gestion des tâches avec mises à jour en temps réel'
        : 'Collaborative task management application with real-time updates',
      technologies: ['React Native', 'Firebase', 'Redux'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com',
      },
    },
    {
      id: 3,
      title: language === 'fr' ? 'Site Portfolio' : 'Portfolio Website',
      category: language === 'fr' ? 'Design Web' : 'Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      description: language === 'fr'
        ? 'Site portfolio créatif avec animations modernes'
        : 'Creative portfolio website with modern animations',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com',
      },
    },
  ];

  const categories = [
    { id: 'All', translation: 'projects.categories.all' },
    { id: 'Web Development', translation: 'projects.categories.web' },
    { id: 'Mobile App', translation: 'projects.categories.mobile' },
    { id: 'Web Design', translation: 'projects.categories.design' },
  ];

  const filteredProjects = projects.filter(
    project => selectedCategory === 'All' || project.category === (
      language === 'fr' 
        ? categories.find(cat => cat.id === selectedCategory)?.id === 'Web Development' ? 'Développement Web'
          : categories.find(cat => cat.id === selectedCategory)?.id === 'Mobile App' ? 'Application Mobile'
          : 'Design Web'
        : selectedCategory
    )
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg mb-4">
            <Sparkles className="w-8 h-8 text-pink-500" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'glassmorphic hover:bg-white/20 dark:hover:bg-gray-800/20'
              }`}
            >
              {t(category.translation)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl glassmorphic"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <motion.div
                      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        backdropFilter: hoveredProject === project.id ? 'blur(5px)' : 'blur(0px)',
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 flex flex-col justify-end p-6"
                    >
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-xl font-bold text-white mb-2"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-sm text-white/90 mb-4"
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="flex gap-4"
                      >
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Globe className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;