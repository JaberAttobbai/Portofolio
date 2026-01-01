import { ContentData, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/jaber-attobbai", icon: "linkedin" },
  { platform: "Email", url: "mailto:jabermahyoub@gmail.com", icon: "mail" },
  { platform: "GitHub", url: "https://github.com", icon: "github" },
];

const ENGLISH_CONTENT: ContentData = {
  hero: {
    name: "Jaber Farhan",
    title: "Software Engineer | Cloud Architect",
    tagline: "Passionate Full-Stack Engineer designing scalable AWS solutions and modern web applications.",
    location: "Taiz, Yemen",
    availability: "Available for Freelance & Full-time",
    action: "View My Work"
  },
  about: {
    title: "About Me",
    text: `I’m a passionate Cloud & Full-Stack Engineering professional with hands-on experience designing AWS cloud solutions and developing modern web applications using the MERN stack. I’ve earned 19 industry-recognized certifications, proving my ability to master complex technologies and deliver high-impact results in cloud architecture, DevOps, and software development.

Motivated by problem-solving and continuous learning, I thrive on building efficient, scalable, and user-focused solutions. My expertise includes AWS, React, Node.js, Angular, JavaScript, NoSQL, CI/CD fundamentals, Agile/Scrum, and Generative AI.`,
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Certifications", value: "19" },
      { label: "Projects Delivered", value: "10+" },
      { label: "Clients Served", value: "Multiple" },
    ],
    resumeBtn: "Download Resume"
  },
  experience: {
    title: "Work Experience",
    list: [
      {
        id: '1',
        company: "Freelance",
        role: "Senior Software Engineer",
        period: "10/2023 - Present",
        description: "Enhanced development workflows to utilize AI-powered coding assistants such as GitHub Copilot, leading to a 30% reduction in coding time. Engineered a suite of scalable, high-performance web applications that supported a 50% increase in user traffic without performance degradation.",
        technologies: ["AWS", "React", "Node.js", "Generative AI", "CI/CD"]
      },
      {
        id: '2',
        company: "Freelance",
        role: "Junior Software Engineer",
        period: "03/2023 - 07/2024",
        description: "Delivered three custom, full-stack web applications for small to medium-sized clients using React, Node.js, and MongoDB. Managed the end-to-end SDLC, achieving 100% on-time delivery. Optimized applications for mobile and SEO, resulting in a 25% increase in organic search visibility.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    demo: "Live Demo",
    code: "Code",
    list: [
      {
        id: 'p1',
        title: "Cloud-Native SaaS Platform",
        description: "A scalable web application architecture designed on AWS, utilizing Lambda functions and DynamoDB for high availability and performance.",
        imageUrl: "https://picsum.photos/600/400?random=1",
        technologies: ["AWS", "Node.js", "DynamoDB", "Serverless"],
        github: "https://github.com",
        link: "https://example.com"
      },
      {
        id: 'p2',
        title: "Full-Stack E-Commerce Solution",
        description: "Custom MERN stack application featuring secure payment processing, inventory management, and a responsive mobile-first design.",
        imageUrl: "https://picsum.photos/600/400?random=2",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com",
      },
      {
        id: 'p3',
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard for visualizing business metrics, implemented with modern frontend best practices and optimized for SEO.",
        imageUrl: "https://picsum.photos/600/400?random=3",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        link: "https://example.com"
      }
    ]
  },
  skills: {
    title: "Technical Proficiency",
    chartTitle: "Skill Level Overview",
    list: [
      { name: "React/Next.js", level: 95, category: "Frontend" },
      { name: "Node.js/Express", level: 90, category: "Backend" },
      { name: "AWS Cloud", level: 85, category: "Tools" },
      { name: "DevOps/Docker", level: 80, category: "Tools" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "SQL/NoSQL", level: 80, category: "Backend" },
      { name: "Generative AI", level: 75, category: "Tools" },
    ]
  },
  contact: {
    title: "Get In Touch",
    text: "I'm currently available for freelance work and full-time opportunities. If you have a project that needs cloud architecture or full-stack development, my inbox is always open.",
    action: "Say Hello",
    footer: "Built with React, Tailwind & Gemini AI."
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  }
};

const ARABIC_CONTENT: ContentData = {
  hero: {
    name: "جابر فرحان",
    title: "مهندس برمجيات | مهندس سحابي",
    tagline: "مهندس Full-Stack شغوف بتصميم حلول AWS القابلة للتوسع وتطبيقات الويب الحديثة.",
    location: "تعز، اليمن",
    availability: "متاح للعمل الحر والوظيفي",
    action: "شاهد أعمالي"
  },
  about: {
    title: "نبذة عني",
    text: `أنا مهندس سحابي ومطور Full-Stack شغوف ولدي خبرة عملية في تصميم حلول سحابية على AWS وتطوير تطبيقات ويب حديثة باستخدام MERN stack. حصلت على 19 شهادة معترف بها في المجال، مما يثبت قدرتي على إتقان التقنيات المعقدة وتقديم نتائج عالية التأثير في البنية السحابية، وDevOps، وتطوير البرمجيات.

يحفزني حل المشكلات والتعلم المستمر، وأزدهر في بناء حلول فعالة وقابلة للتوسع وتركز على المستخدم. تشمل خبرتي AWS، React، Node.js، Angular، JavaScript، NoSQL، أساسيات CI/CD، Agile/Scrum، والذكاء الاصطناعي التوليدي.`,
    stats: [
      { label: "سنوات الخبرة", value: "+3" },
      { label: "الشهادات", value: "19" },
      { label: "مشاريع منجزة", value: "+10" },
      { label: "عملاء", value: "متعددين" },
    ],
    resumeBtn: "تحميل السيرة الذاتية"
  },
  experience: {
    title: "الخبرة العملية",
    list: [
      {
        id: '1',
        company: "عمل حر",
        role: "مهندس برمجيات أول",
        period: "10/2023 - الحالي",
        description: "تحسين سير عمل التطوير لاستخدام مساعدي البرمجة المدعومين بالذكاء الاصطناعي مثل GitHub Copilot، مما أدى إلى تقليل وقت البرمجة بنسبة 30%. هندسة مجموعة من تطبيقات الويب القابلة للتوسع وعالية الأداء التي دعمت زيادة بنسبة 50% في حركة المستخدمين دون تدهور في الأداء.",
        technologies: ["AWS", "React", "Node.js", "Generative AI", "CI/CD"]
      },
      {
        id: '2',
        company: "عمل حر",
        role: "مهندس برمجيات مبتدئ",
        period: "03/2023 - 07/2024",
        description: "تسليم ثلاثة تطبيقات ويب مخصصة للعملاء الصغار والمتوسطين باستخدام React و Node.js و MongoDB. إدارة دورة حياة تطوير البرمجيات (SDLC) بالكامل، وتحقيق تسليم المشاريع في الوقت المحدد بنسبة 100%. تحسين التطبيقات للتجاوب مع الهواتف ومحركات البحث (SEO)، مما أدى إلى زيادة بنسبة 25% في الظهور في البحث.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
      }
    ]
  },
  projects: {
    title: "أبرز المشاريع",
    demo: "معاينة حية",
    code: "الكود",
    list: [
      {
        id: 'p1',
        title: "منصة SaaS سحابية",
        description: "بنية تطبيق ويب قابلة للتوسع مصممة على AWS، تستخدم وظائف Lambda و DynamoDB لضمان التوافر العالي والأداء.",
        imageUrl: "https://picsum.photos/600/400?random=1",
        technologies: ["AWS", "Node.js", "DynamoDB", "Serverless"],
        github: "https://github.com",
        link: "https://example.com"
      },
      {
        id: 'p2',
        title: "حل متجر إلكتروني متكامل",
        description: "تطبيق مخصص باستخدام MERN stack يتميز بمعالجة مدفوعات آمنة، وإدارة المخزون، وتصميم متجاوب للهواتف.",
        imageUrl: "https://picsum.photos/600/400?random=2",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com",
      },
      {
        id: 'p3',
        title: "لوحة تحليلات فورية",
        description: "لوحة تفاعلية لتصور مقاييس الأعمال، تم تنفيذها بأفضل ممارسات الواجهة الأمامية الحديثة وتحسينها لمحركات البحث.",
        imageUrl: "https://picsum.photos/600/400?random=3",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        link: "https://example.com"
      }
    ]
  },
  skills: {
    title: "الكفاءة التقنية",
    chartTitle: "نظرة عامة على المهارات",
    list: [
      { name: "React/Next.js", level: 95, category: "واجهة أمامية" },
      { name: "Node.js/Express", level: 90, category: "خلفية" },
      { name: "AWS Cloud", level: 85, category: "أدوات" },
      { name: "DevOps/Docker", level: 80, category: "أدوات" },
      { name: "TypeScript", level: 85, category: "واجهة أمامية" },
      { name: "SQL/NoSQL", level: 80, category: "خلفية" },
      { name: "Generative AI", level: 75, category: "أدوات" },
    ]
  },
  contact: {
    title: "تواصل معي",
    text: "أنا متاح حالياً للعمل الحر والفرص الوظيفية بدوام كامل. إذا كان لديك مشروع يحتاج إلى بنية سحابية أو تطوير Full-Stack، فبريدي الوارد مفتوح دائماً.",
    action: "قل مرحبًا",
    footer: "تم البناء باستخدام React و Tailwind و Gemini AI."
  },
  nav: {
    home: "الرئيسية",
    about: "عني",
    experience: "الخبرة",
    projects: "المشاريع",
    skills: "المهارات",
    contact: "تواصل"
  }
};

export const CONTENT = {
  en: ENGLISH_CONTENT,
  ar: ARABIC_CONTENT
};

// Default export for backward compatibility if needed, though components should use the Context
export const HERO_DATA = ENGLISH_CONTENT.hero;
export const ABOUT_TEXT = ENGLISH_CONTENT.about.text;
export const EXPERIENCE_DATA = ENGLISH_CONTENT.experience.list;
export const PROJECTS_DATA = ENGLISH_CONTENT.projects.list;
export const SKILLS_DATA = ENGLISH_CONTENT.skills.list;
