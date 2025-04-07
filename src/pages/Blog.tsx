import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ChevronRight, Sparkles, Rocket, Zap, Palette, PenTool as Tools, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      icon: Rocket,
      title: language === 'fr' 
        ? "L'Avenir du Développement Web"
        : 'The Future of Web Development',
      category: language === 'fr' ? 'Technologie' : 'Technology',
      excerpt: language === 'fr'
        ? 'Exploration des tendances et technologies émergentes du développement web pour 2025 et au-delà.'
        : 'Exploring upcoming trends and technologies in web development for 2025 and beyond.',
      author: 'John Doe',
      date: '15 mars 2025',
      readTime: '5 min',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 2,
      icon: Zap,
      title: language === 'fr'
        ? 'Maîtriser la Performance React'
        : 'Mastering React Performance',
      category: language === 'fr' ? 'Développement' : 'Development',
      excerpt: language === 'fr'
        ? "Techniques avancées pour optimiser les applications React et améliorer l'expérience utilisateur."
        : 'Advanced techniques for optimizing React applications and improving user experience.',
      author: 'Jane Smith',
      date: '10 mars 2025',
      readTime: '8 min',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: Palette,
      title: language === 'fr'
        ? 'Les Systèmes de Design en Pratique'
        : 'Design Systems in Practice',
      category: language === 'fr' ? 'Design' : 'Design',
      excerpt: language === 'fr'
        ? 'Construire et maintenir des systèmes de design évolutifs pour les applications modernes.'
        : 'Building and maintaining scalable design systems for modern applications.',
      author: 'Alex Johnson',
      date: '5 mars 2025',
      readTime: '6 min',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      id: 4,
      icon: Lightbulb,
      title: language === 'fr'
        ? "Comment j'ai construit un pipeline d'analyse de pollution avec Apache Airflow"
        : 'How I Built a Pollution Analysis Pipeline with Apache Airflow',
      category: language === 'fr' ? 'Data Engineering' : 'Data Engineering',
      excerpt: language === 'fr'
        ? "Un aperçu de la conception, du développement et de l'automatisation d'un pipeline d'analyse de pollution, utilisant Apache Airflow et AWS."
        : 'An overview of designing, developing, and automating a pollution analysis pipeline using Apache Airflow and AWS.',
      author: 'RAKOTONDRAZAFY Nantenaina Sarobidy',
      date: '2 mars 2025',
      readTime: '7 min',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Blog
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Réflexions, analyses et partages d'expérience sur mon parcours dans la tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphic rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${post.gradient}`}>
                    <post.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="mt-4"
                    >
                      <Link
                        to={`/blog/${post.id}`}
                        className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}
                      >
                        Lire la suite
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;