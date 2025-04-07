import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  const skills = [
    { 
      name: language === 'fr' ? 'Développement Frontend' : 'Frontend Development',
      icon: Code2,
      level: 90,
      color: 'from-pink-500 via-purple-500 to-indigo-500'
    },
    { 
      name: language === 'fr' ? 'Design UI/UX' : 'UI/UX Design',
      icon: Palette,
      level: 85,
      color: 'from-green-400 via-cyan-500 to-blue-500'
    },
    { 
      name: language === 'fr' ? 'Développement Backend' : 'Backend Development',
      icon: Database,
      level: 80,
      color: 'from-yellow-400 via-orange-500 to-red-500'
    },
    { 
      name: language === 'fr' ? 'Performance Web' : 'Web Performance',
      icon: Globe2,
      level: 88,
      color: 'from-fuchsia-500 via-violet-500 to-blue-500'
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
            {t('about.title')}
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed glassmorphic p-6 rounded-2xl shadow-[0_0_15px_rgba(255,0,255,0.3)]">
            {t('about.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 glassmorphic p-8 rounded-2xl shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {t('about.career')}
            </h2>
            <p className="text-white leading-relaxed">
              {t('about.careerText1')}
            </p>
            <p className="text-white leading-relaxed">
              {t('about.careerText2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glassmorphic rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(255,255,0,0.3)] flex items-center justify-center p-4"
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1ABRKK796lQXLkdQ56gM2PAA-UVWi1eo2"
              alt="RAKOTONDRAZAFY Nantenaina Sarobidy"
              className="h-[500px] object-contain transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            {t('about.skills')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glassmorphic rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 text-white mr-3" />
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="h-3 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 animate-pulse-fast bg-white/20" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
