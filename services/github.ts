export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
    updated_at: string;
}

export interface ProjectData {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    github: string;
    link?: string;
    category?: string;
}

const GITHUB_USERNAME = 'JaberAttobbai';

// Featured repositories - manually curated based on analysis
const FEATURED_REPOS = [
    'markethub-ecommerceh',
    'conference_event_planners',
    'safrah-on-tourism',
    'Portofolio'
];

// Technology badge mapping
const TECH_STACK_MAP: Record<string, string[]> = {
    'markethub-ecommerceh': ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    'conference_event_planners': ['JavaScript', 'React', 'HTML5', 'CSS3', 'Responsive Design'],
    'safrah-on-tourism': ['JavaScript', 'React', 'Tourism Platform', 'Web Development'],
    'Portofolio': ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion']
};

// Custom descriptions for better presentation
const CUSTOM_DESCRIPTIONS: Record<string, string> = {
    'markethub-ecommerceh': 'A modern full-stack e-commerce platform built with TypeScript and the MERN stack. Features product management, shopping cart, and responsive design for optimal user experience.',
    'conference_event_planners': 'Professional conference and event planning web application with interactive UI. Streamlines event organization with modern JavaScript and React architecture.',
    'safrah-on-tourism': 'Tourism platform showcasing destinations and travel experiences. Built with React for seamless navigation and engaging user interactions.',
    'Portofolio': 'Personal portfolio website demonstrating modern web development practices with TypeScript, React, and advanced animations using Framer Motion.'
};

// Project images (using placeholders or custom images)
const PROJECT_IMAGES: Record<string, string> = {
    'markethub-ecommerceh': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    'conference_event_planners': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    'safrah-on-tourism': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop',
    'Portofolio': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
};

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos: GitHubRepo[] = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

export function transformRepoToProject(repo: GitHubRepo): ProjectData {
    return {
        id: repo.id.toString(),
        title: formatRepoName(repo.name),
        description: CUSTOM_DESCRIPTIONS[repo.name] || repo.description || 'A software development project showcasing modern web technologies.',
        imageUrl: PROJECT_IMAGES[repo.name] || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop`,
        technologies: TECH_STACK_MAP[repo.name] || [repo.language || 'JavaScript', 'Web Development'],
        github: repo.html_url,
        link: repo.homepage || undefined,
        category: repo.language || 'General'
    };
}

export async function getFeaturedProjects(): Promise<ProjectData[]> {
    const repos = await fetchGitHubRepos();

    // Filter for featured repos only
    const featuredRepos = repos.filter(repo => FEATURED_REPOS.includes(repo.name));

    // Transform to project data
    const projects = featuredRepos.map(transformRepoToProject);

    // Sort by custom order
    const sortedProjects = FEATURED_REPOS
        .map(repoName => projects.find(p => p.github.includes(repoName)))
        .filter((p): p is ProjectData => p !== undefined);

    return sortedProjects;
}

function formatRepoName(name: string): string {
    return name
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Fallback data if API fails
export const FALLBACK_PROJECTS: ProjectData[] = [
    {
        id: 'p1',
        title: 'MarketHub E-commerce',
        description: 'A modern full-stack e-commerce platform built with TypeScript and the MERN stack.',
        imageUrl: PROJECT_IMAGES['markethub-ecommerceh'],
        technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/JaberAttobbai/markethub-ecommerceh'
    },
    {
        id: 'p2',
        title: 'Conference Event Planners',
        description: 'Professional conference and event planning web application with interactive UI.',
        imageUrl: PROJECT_IMAGES['conference_event_planners'],
        technologies: ['JavaScript', 'React', 'HTML5', 'CSS3'],
        github: 'https://github.com/JaberAttobbai/conference_event_planners',
        link: 'https://conferenceeventplanners.vercel.app'
    },
    {
        id: 'p3',
        title: 'Safrah Tourism',
        description: 'Tourism platform showcasing destinations and travel experiences.',
        imageUrl: PROJECT_IMAGES['safrah-on-tourism'],
        technologies: ['JavaScript', 'React', 'Web Development'],
        github: 'https://github.com/JaberAttobbai/safrah-on-tourism'
    },
    {
        id: 'p4',
        title: 'Portfolio',
        description: 'Personal portfolio website with modern animations and responsive design.',
        imageUrl: PROJECT_IMAGES['Portofolio'],
        technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
        github: 'https://github.com/JaberAttobbai/Portofolio',
        link: 'https://jaber-farhan-portofolio.vercel.app'
    }
];
