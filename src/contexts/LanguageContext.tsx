import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Home
    'home.title': 'Creative Developer',
    'home.subtitle': '& Designer',
    'home.description': 'Crafting digital experiences through clean code and creative design. Specialized in building modern web applications that make an impact.',
    'home.viewProjects': 'View Projects',
    'home.getInTouch': 'Get in Touch',

    // About
    'about.title': 'About Me',
    'about.intro': "My name is RAKOTONDRAZAFY Nantenaina Sarobidy, and I'm currently in my third year of computer science studies. What I find most exciting about this field is the ability to create innovative and intuitive solutions through development, cybersecurity, and digital innovation. I am naturally curious and always excited to discover new technologies. My goal is to design digital experiences that are both performant and enjoyable to use.",
    'about.career': 'My Journey',
    'about.careerText1': 'As a computer science student, I currently focus on web and mobile development, cybersecurity, and data analysis. Through my studies and academic projects, I have acquired a solid foundation in programming, user interface design, and performance optimization.',
    'about.careerText2': 'I am motivated by the desire to progress and explore new approaches. I strive to create digital experiences that are ergonomic, secure, and innovative. I regularly work on practical projects that allow me to apply my knowledge and test new technologies.',
    'about.skills': 'Skills & Expertise',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'A collection of my recent work and personal projects',
    'projects.categories.all': 'All',
    'projects.categories.web': 'Web Development',
    'projects.categories.mobile': 'Mobile App',
    'projects.categories.design': 'Web Design',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Thoughts, insights, and experiences from my journey in tech',
    'blog.readMore': 'Read More',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': "Have a question or want to work together? I'd love to hear from you.",
    'contact.info': 'Contact Information',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.location': 'Location',
    'contact.phone': 'Phone',

    // Footer
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Subscribe to stay updated with latest projects and news.',
    'footer.subscribe': 'Subscribe',
    'footer.yourEmail': 'Your email',
    'footer.services': 'Services',
    'footer.navigation': 'Navigation',
    'footer.madeWith': 'Made with',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Home
    'home.title': 'Développeur Créatif',
    'home.subtitle': '& Designer',
    'home.description': 'Création d\'expériences numériques à travers un code propre et un design créatif. Spécialisé dans la construction d\'applications web modernes qui font la différence.',
    'home.viewProjects': 'Voir les Projets',
    'home.getInTouch': 'Me Contacter',

    // About
    'about.title': 'À Propos de Moi',
    'about.intro': "Je m'appelle RAKOTONDRAZAFY Nantenaina Sarobidy, et je suis actuellement en troisième année d'études en informatique. Ce que je trouve le plus passionnant dans ce domaine, c'est la possibilité de créer des solutions innovantes et intuitives grâce au développement, à la cybersécurité et à l'innovation digitale. Je suis naturellement curieux et je me réjouis toujours de découvrir de nouvelles technologies. Mon objectif est de concevoir des expériences numériques qui soient à la fois performantes et agréables à utiliser.",
    'about.career': 'Mon Parcours',
    'about.careerText1': "En tant qu'étudiant en informatique, je me concentre actuellement sur le développement web et mobile, la cybersécurité et l'analyse de données. Grâce à mes études et à mes projets académiques, j'ai acquis une solide base en programmation, conception d'interfaces utilisateur et optimisation des performances.",
    'about.careerText2': "Je suis motivé par le désir de progresser et d'explorer de nouvelles approches. Je m'efforce de créer des expériences numériques qui soient ergonomiques, sécurisées et innovantes. Je travaille régulièrement sur des projets pratiques qui me permettent d'appliquer mes connaissances et de tester de nouvelles technologies.",
    'about.skills': 'Compétences & Expertise',

    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Une collection de mes travaux récents et projets personnels',
    'projects.categories.all': 'Tous',
    'projects.categories.web': 'Développement Web',
    'projects.categories.mobile': 'Application Mobile',
    'projects.categories.design': 'Design Web',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Réflexions, perspectives et expériences de mon parcours dans la tech',
    'blog.readMore': 'Lire la Suite',

    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Une question ou envie de collaborer ? Je serais ravi d\'échanger avec vous.',
    'contact.info': 'Informations de Contact',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.location': 'Localisation',
    'contact.phone': 'Téléphone',

    // Footer
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Abonnez-vous pour rester informé des derniers projets et actualités.',
    'footer.subscribe': 'S\'abonner',
    'footer.yourEmail': 'Votre email',
    'footer.services': 'Services',
    'footer.navigation': 'Navigation',
    'footer.madeWith': 'Fait avec',
    'footer.rights': 'Tous droits réservés.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};