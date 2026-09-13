import { Project, Experience, SkillCategory } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'John Doe',
  title: 'Développeur Web Full-Stack Senior',
  tagline: '7 ans d’expérience dans la conception d’applications web scalables, résilientes et haute performance.',
  availability: 'Disponible pour opportunités hybrides ou remote',
  location: 'Paris, France',
  email: 'vagehe1989@bowlfuel.com',
  github: 'https://github.com/johndoe-dev',
  linkedin: 'https://linkedin.com/in/johndoe-dev',
  website: 'https://johndoe.dev',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: 'Frontend',
    skills: ['TypeScript', 'React 19', 'Next.js (App Router)', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'WCAG 2.1 AA'],
  },
  {
    categoryName: 'Backend & API',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'tRPC', 'WebSockets'],
  },
  {
    categoryName: 'Bases de données & Caching',
    skills: ['PostgreSQL', 'Prisma ORM', 'Drizzle', 'Redis', 'MongoDB'],
  },
  {
    categoryName: 'DevOps, Cloud & Tests',
    skills: ['Docker', 'GitHub Actions', 'AWS (S3, ECS, Lambda)', 'Vercel', 'Vitest', 'Playwright', 'Jest'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Développeur Full-Stack',
    company: 'CloudScale SaaS',
    location: 'Paris',
    period: 'Mars 2022 – Présent',
    achievements: [
      'Direction technique d’une équipe de 5 ingénieurs sur la refonte globale de la plateforme de monitoring.',
      'Migration complète vers Next.js App Router et NestJS/PostgreSQL.',
      'Généralisation des tests unitaires et e2e via Vitest et Playwright.',
    ],
    metrics: '-45% de temps de chargement (LCP < 1.2s) • 100k req/min soutenues • Couverture de tests à 85%',
  },
  {
    id: 'exp-2',
    role: 'Développeur Full-Stack',
    company: 'TechNova Studio',
    location: 'Lyon',
    period: 'Septembre 2019 – Février 2022',
    achievements: [
      'Développement de plateformes e-commerce et dashboards B2B haute disponibilité pour des clients du CAC 40.',
      'Intégration de tunnels de paiement résilients via Stripe et gestion des webhooks asynchrones.',
      'Conception d’un Design System partagé basé sur Tailwind CSS et Radix UI.',
    ],
    metrics: '-35% sur le temps de développement UI • 99.98% de disponibilité des paiements',
  },
  {
    id: 'exp-3',
    role: 'Développeur Front-End',
    company: 'StartUp Pulse',
    location: 'Nantes',
    period: 'Juillet 2017 – Août 2019',
    achievements: [
      'Conception d’interfaces réactives pour une solution collaborative SaaS.',
      'Intégration de WebSockets pour la synchronisation multi-utilisateurs en temps réel.',
    ],
    metrics: 'Latence synchronisée < 50ms',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'CloudMetrics',
    description: 'Tableau de bord SaaS d’observabilité en temps réel avec agrégation de métriques, logs et alertes infrastructure multi-cloud.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'WebSockets', 'Prisma', 'PostgreSQL'],
    highlights: ['Agrégation temps réel', 'Support offline & sync', 'Export PDF/CSV'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/johndoe-dev/cloudmetrics',
    liveUrl: 'https://cloudmetrics-demo.example.com',
  },
  {
    id: 'proj-2',
    title: 'DevFlow UI',
    description: 'Bibliothèque de 40+ composants React headless hautement accessibles conformes WCAG 2.1 AA.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook'],
    highlights: ['1 200+ GitHub Stars', 'Navigation clavier totale', 'Poids < 15kb'],
    category: 'Frontend',
    githubUrl: 'https://github.com/johndoe-dev/devflow-ui',
    liveUrl: null, // Cas limite : null
  },
  {
    id: 'proj-3',
    title: 'QuickCache Engine',
    description: 'Micro-service de cache distribué ultra-rapide avec gestion de priorités et stratégie de purge sélective.',
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'GitHub Actions'],
    highlights: ['25 000 opérations/sec', 'Erreurs < 0.001%', 'Persistence AOF/RDB'],
    category: 'Backend',
    githubUrl: 'https://github.com/johndoe-dev/quickcache',
    liveUrl: null, // Cas limite : null
  },
];
