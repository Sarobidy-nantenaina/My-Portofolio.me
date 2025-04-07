import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'sarobidyrakotondrazafy1@gmail.com',
      href: 'mailto:sarobidyrakotondrazafy1@gmail.com',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+261 38 27 140 11',
      href: 'tel:+261382714011',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Antananarivo, Madagascar',
      href: 'https://maps.google.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg mb-4">
            <MessageSquare className="w-8 h-8 text-pink-500" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-lg transform -rotate-3"></div>
              <div className="relative glassmorphic rounded-2xl p-8 shadow-[0_8px_32px_rgba(31,38,135,0.37)] border border-white/20">
                <div className="relative mb-8 overflow-hidden rounded-xl">
                  <div className="relative h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 hover:scale-105 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {t('contact.info')}
                        </h3>
                        <p className="text-white/80">
                          Let's connect and create something amazing together
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300
                        bg-white/5 hover:bg-white/10 dark:bg-gray-800/5 dark:hover:bg-gray-800/10
                        shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)]
                        hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.15)]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} transform group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-lg transform rotate-3"></div>
              <form onSubmit={handleSubmit} className="relative glassmorphic rounded-2xl p-8 shadow-[0_8px_32px_rgba(31,38,135,0.37)] border border-white/20">
                <div className="relative mb-8 overflow-hidden rounded-xl">
                  <div className="relative h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 hover:scale-105 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {t('contact.title')}
                        </h3>
                        <p className="text-white/80">
                          {t('contact.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { name: 'name', label: t('contact.name'), type: 'text' },
                    { name: 'email', label: t('contact.email'), type: 'email' },
                    { name: 'subject', label: t('contact.subject'), type: 'text' },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="relative"
                    >
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={handleChange}
                        required
                        placeholder={field.label}
                        className="w-full px-4 py-3 rounded-xl
                          bg-white/5 dark:bg-gray-800/5
                          border-2 border-transparent
                          focus:border-pink-500 dark:focus:border-purple-500
                          shadow-[inset_4px_4px_10px_rgba(0,0,0,0.06),inset_-4px_-4px_10px_rgba(255,255,255,0.1)]
                          focus:shadow-[inset_6px_6px_15px_rgba(0,0,0,0.1),inset_-6px_-6px_15px_rgba(255,255,255,0.15)]
                          backdrop-blur-sm
                          text-gray-900 dark:text-white
                          placeholder-gray-500
                          transition-all duration-300"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.message')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl
                        bg-white/5 dark:bg-gray-800/5
                        border-2 border-transparent
                        focus:border-pink-500 dark:focus:border-purple-500
                        shadow-[inset_4px_4px_10px_rgba(0,0,0,0.06),inset_-4px_-4px_10px_rgba(255,255,255,0.1)]
                        focus:shadow-[inset_6px_6px_15px_rgba(0,0,0,0.1),inset_-6px_-6px_15px_rgba(255,255,255,0.15)]
                        backdrop-blur-sm
                        text-gray-900 dark:text-white
                        placeholder-gray-500
                        transition-all duration-300"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group
                      px-6 py-3 rounded-xl
                      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                      text-white
                      shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)]
                      hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.15)]
                      transition-all duration-300
                      disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        {t('contact.send')}
                        <Send className="w-5 h-5" />
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;