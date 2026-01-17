export interface Certification {
    id: string;
    name: string;
    provider: string;
    year: string;
    credentialUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
    {
        id: 'cert-1',
        name: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
        provider: 'Udemy',
        year: '2025'
    },
    {
        id: 'cert-2',
        name: 'Technical Support Basics for Everyone',
        provider: 'IBM',
        year: '2025'
    },
    {
        id: 'cert-3',
        name: 'Agile and Scrum Fundamentals',
        provider: 'IBM',
        year: '2025'
    },
    {
        id: 'cert-4',
        name: 'Introduction to Generative AI',
        provider: 'IBM',
        year: '2025'
    },
    {
        id: 'cert-5',
        name: 'The Complete Full-Stack Web Development Bootcamp',
        provider: 'Udemy',
        year: '2024-2025'
    },
    {
        id: 'cert-6',
        name: 'Introduction to Cloud Native, DevOps, Agile, and NoSQL',
        provider: 'IBM',
        year: '2024-2025'
    },
    {
        id: 'cert-7',
        name: 'Introduction to Cloud Computing',
        provider: 'IBM',
        year: '2024-2025'
    },
    {
        id: 'cert-8',
        name: 'DevOps, Cloud, and Agile Foundations',
        provider: 'IBM',
        year: '2024-2025'
    },
    {
        id: 'cert-9',
        name: 'DevOps Basics for Everyone',
        provider: 'IBM',
        year: '2024-2025'
    },
    {
        id: 'cert-10',
        name: 'MERN 2025 Edition - MongoDB, Express, React and NodeJS',
        provider: 'Udemy',
        year: '2024-2025'
    },
    {
        id: 'cert-11',
        name: 'Developing Front End Apps with React',
        provider: 'IBM',
        year: '2024-2025'
    },
    {
        id: 'cert-12',
        name: 'Architecting Solutions on AWS',
        provider: 'AWS',
        year: '2023-2025'
    },
    {
        id: 'cert-13',
        name: 'Complete web development course',
        provider: 'Udemy',
        year: '2023-2025'
    },
    {
        id: 'cert-14',
        name: 'Data Science: R Basics',
        provider: 'Harvard University',
        year: '2023-2024'
    },
    {
        id: 'cert-15',
        name: 'AWS Cloud Technical Essentials',
        provider: 'AWS',
        year: '2023-2024'
    },
    {
        id: 'cert-16',
        name: 'AWS Certified Solutions Architect - Associate C03',
        provider: 'AWS',
        year: '2023-2024'
    },
    {
        id: 'cert-17',
        name: 'Introduction to Designing Data Lakes on AWS',
        provider: 'AWS',
        year: '2022-2024'
    },
    {
        id: 'cert-18',
        name: 'Cloud Solutions Architecture',
        provider: 'AWS',
        year: '2022-2023'
    },
    {
        id: 'cert-19',
        name: 'Introduction to Web Development with HTML5, CSS3, and JavaScript',
        provider: 'IBM',
        year: '2022-2023'
    }
];
