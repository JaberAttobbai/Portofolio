# Jaber Farhan - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-portfolio-url.com)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)

A modern, responsive, and bilingual portfolio website showcasing my professional journey as a **Cloud Architect** and **Full-Stack Software Engineer**. Built with cutting-edge web technologies and featuring smooth animations, theme switching, and AI-powered chat capabilities.

## 🚀 Live Demo

Visit the live portfolio: https://jaber-farhan-portofolio.vercel.app/

## ✨ Features

### Core Functionality
- 🌐 **Bilingual Support** - Seamless switching between English and Arabic (RTL support)
- 🎨 **Theme Toggle** - Light and Dark mode with smooth transitions
- 📱 **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- ⚡ **Blazing Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Framer Motion animations with intersection observers
- 🤖 **AI Chat Integration** - Google Gemini AI-powered chat assistant

### Sections
- **Hero** - Eye-catching introduction with profile image and call-to-action
- **About** - Professional summary with stats and downloadable CV
- **Experience** - Detailed work history with technologies used
- **Projects** - Featured projects with live demos and GitHub links
- **Skills** - Interactive skill visualization with charts
- **Certifications** - Showcase of professional certifications
- **Contact** - Multiple contact channels and social links

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - Latest React with modern hooks
- **TypeScript 5.8.2** - Type-safe development
- **Vite 6.2.0** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework (via tailwind-merge)
- **Framer Motion 12.26.2** - Production-ready animation library

### Key Libraries
- **@google/genai** - Google Gemini AI integration
- **lucide-react** - Modern icon library
- **recharts** - Composable charting library
- **react-intersection-observer** - Scroll-triggered animations
- **clsx** - Dynamic className management

## 📦 Installation

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaberattobbai/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deployment

### Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Deployment Options
- **Vercel** - Zero-config deployment (recommended)
- **Netlify** - One-click deployment
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - For enterprise-grade hosting

## 📂 Project Structure

```
jaber-farhan-portfolio/
├── components/           # React components
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Portfolio projects
│   ├── Skills.tsx       # Technical skills
│   ├── Contact.tsx      # Contact information
│   ├── Certifications.tsx # Professional certifications
│   ├── Navbar.tsx       # Navigation bar
│   ├── AIChat.tsx       # AI chat widget
│   └── ui/              # Reusable UI components
├── contexts/            # React contexts
│   ├── LanguageContext.tsx # i18n state management
│   └── ThemeContext.tsx    # Theme state management
├── hooks/               # Custom React hooks
│   └── useScrollAnimation.ts
├── lib/                 # Utility functions
│   ├── animation-variants.ts
│   └── cn.ts           # className utilities
├── services/            # External services
│   ├── gemini.ts       # Google Gemini AI service
│   └── [other services]
├── styles/              # Global styles
│   └── index.css       # Global CSS with Tailwind
├── public/              # Static assets
│   └── cv/             # CV/Resume files
├── constants.ts         # Application constants & content
├── types.ts            # TypeScript type definitions
├── App.tsx             # Root component
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

Edit `constants.ts` to update:
- Personal details (name, title, location)
- Work experience
- Projects
- Skills and proficiency levels
- Social media links
- Content in both English and Arabic

Example:
```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "your-linkedin-url", icon: "linkedin" },
  { platform: "GitHub", url: "your-github-url", icon: "github" },
  // ... add more links
];
```

### Modify Theme Colors

Update the Tailwind configuration in `styles/index.css` or create a custom theme configuration.

### Add New Sections

1. Create a new component in `components/`
2. Import and add it to `App.tsx`
3. Update navigation links in `constants.ts`

## 🚀 Performance Optimizations

- **Code Splitting** - Automatic route-based code splitting with Vite
- **Lazy Loading** - Images and components loaded on demand
- **Tree Shaking** - Unused code eliminated from production builds
- **Minification** - CSS and JavaScript minified and optimized
- **Asset Optimization** - Images compressed and served in modern formats

## 📊 Key Features Implementation

### Bilingual Support
The application uses React Context for language management with complete RTL (Right-to-Left) support for Arabic.

```typescript
const { language, toggleLanguage } = useLanguage();
const content = CONTENT[language];
```

### Theme Management
Dark/Light mode persists across sessions using localStorage.

```typescript
const { theme, toggleTheme } = useTheme();
```

### Smooth Animations
Intersection Observer API combined with Framer Motion for performant scroll animations.

```typescript
const { ref, inView } = useInView({ triggerOnce: true });
```

## 🤖 AI Chat Integration

The portfolio features an AI-powered chat assistant using Google Gemini API that can:
- Answer questions about my experience and skills
- Provide project details
- Assist visitors with inquiries
- Showcase AI integration capabilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Jaber Farhan**
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)
- LinkedIn: [linkedin.com/in/jaber-attobbai](https://linkedin.com/in/jaber-attobbai)
- GitHub: [@jaberattobbai](https://github.com/jaberattobbai)
- Email: [jabermahyoub@gmail.com](mailto:jabermahyoub@gmail.com)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The amazing UI library
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icon set
- [Google Gemini](https://ai.google.dev/) - Generative AI platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework inspiration

## 📞 Contact & Support

For any questions, suggestions, or collaboration opportunities:
- 📧 Email: jabermahyoub@gmail.com
- 💬 WhatsApp: +967778102165
- 💼 LinkedIn: [jaber-attobbai](https://linkedin.com/in/jaber-attobbai)

---

<div align="center">
  
**⭐ If you like this project, please give it a star!**

Built with ❤️ by [Jaber Farhan](https://github.com/jaberattobbai)

</div>
