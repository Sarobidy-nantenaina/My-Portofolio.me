# Modern Portfolio

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio features smooth animations, a dark mode toggle, language switching between English and French, and a modern glassmorphic design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80)

## Author

**Nantenaina Sarobidy**
- Email: sarobidyrakotondrazafy1@gmail.com
- Location: Antananarivo, Madagascar

## Features

- 🎨 Modern, glassmorphic design with neuromorphic elements
- 🌓 Dark/Light mode toggle
- 🌍 Bilingual support (English/French)
- ⚡ Fast page loads with React Suspense and lazy loading
- 📱 Fully responsive design
- 🎭 Smooth animations using Framer Motion
- 🎯 SEO optimized
- 📝 Blog section with categorized posts
- 📬 Contact form with modern design
- 🖼️ Project showcase with filtering capabilities

## Tech Stack

- ⚛️ React 18
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 🔗 React Router
- 🖼️ Lucide React Icons
- 📱 Responsive Design
- 🌐 i18n Support

## Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/          # React Context providers
├── pages/             # Main application pages
├── assets/           # Static assets
└── App.tsx           # Main application component
```

## Key Components

- **Navigation**: Modern navbar with mobile responsiveness
- **Layout**: Page layout with animated transitions
- **Footer**: Comprehensive footer with contact info
- **LoadingScreen**: Animated loading screen
- **LanguageSwitcher**: Toggle between English and French

## Pages

- **Home**: Landing page with hero section
- **About**: Personal information and skills
- **Projects**: Portfolio showcase with filtering
- **Blog**: Blog posts with categories
- **Contact**: Contact form with modern design

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### Content
- Update the content in the respective page components under `src/pages/`
- Modify translations in `src/contexts/LanguageContext.tsx`
- Add new blog posts in `src/pages/Blog.tsx`
- Update project showcase in `src/pages/Projects.tsx`

### Images
The project uses Unsplash images. You can replace them with your own images by updating the image URLs in the components.

## Performance Optimizations

- Lazy loading of pages
- Image optimization
- Component code splitting
- Efficient animation handling
- Optimized asset loading

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Nantenaina Sarobidy