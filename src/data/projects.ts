import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'electricity',
    titleKey: 'projects.items.electricity.title',
    descriptionKey: 'projects.items.electricity.description',
    image: '/images/projects/electricity.png',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl:'https://github.com/fenofaf7/electricity-outage-management',
    featured: true,
  },
  {
    id: 'textile',
    titleKey: 'projects.items.textile.title',
    descriptionKey: 'projects.items.textile.description',
    image: '/images/projects/textile.png',
    technologies: ['Spring Boot', 'PostgreSQL', 'Thymeleaf'],
    githubUrl: 'https://github.com/fenofaf7/gestion-commandes-textile-spring-boot',
    featured: true,
  },
  {
    id: 'parking',
    titleKey: 'projects.items.parking.title',
    descriptionKey: 'projects.items.parking.description',
    image: '/images/projects/parking.png',
    technologies: ['Spring Boot', 'PostgreSQL', 'Thymeleaf'],
    githubUrl: 'https://github.com/fenofaf7/gestion-parking-spring-boot',
    featured: true,
  },
  {
    id: 'students',
    titleKey: 'projects.items.students.title',
    descriptionKey: 'projects.items.students.description',
    image: '/images/projects/students.png',
    technologies: ['Python', 'Django', 'Bootstrap', 'SQLite'],
    githubUrl: 'https://github.com/fenofaf7/gestion-ecole-django',
    featured: true,
  },
]