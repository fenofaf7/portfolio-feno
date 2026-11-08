export interface SkillCategory {
  id: string
  titleKey: string
  icon: 'code' | 'framework' | 'database' | 'tools'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    titleKey: 'skills.categories.languages',
    icon: 'code',
    skills: [
      'Java',
      'Python',
      'TypeScript',
      'JavaScript',
      'PHP',
      'HTML',
      'CSS',
      'SQL',
    ],
  },
  {
    id: 'frameworks',
    titleKey: 'skills.categories.frameworks',
    icon: 'framework',
    skills: [
      'React',
      'Spring Boot',
      'FastAPI',
      'Django',
      'Laravel',
      'Angular',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    id: 'databases',
    titleKey: 'skills.categories.databases',
    icon: 'database',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
    ],
  },
  {
    id: 'tools',
    titleKey: 'skills.categories.tools',
    icon: 'tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'Linux',
      'UML',
      'MERISE',
    ],
  },
]