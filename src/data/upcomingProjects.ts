
import type { UpcomingProject } from '../types/project'

export const upcomingProjects: UpcomingProject[] = [
  {
    id: 'pharmacy',
    titleKey: 'upcomingProjects.items.pharmacy.title',
    descriptionKey: 'upcomingProjects.items.pharmacy.description',
    technologies: ['Python', 'Django', 'SQLite', 'Bootstrap'],
    features: [
      'upcomingProjects.items.pharmacy.features.medicines',
      'upcomingProjects.items.pharmacy.features.inventory',
      'upcomingProjects.items.pharmacy.features.sales',
      'upcomingProjects.items.pharmacy.features.suppliers',
    ],
    status: 'planned',
  },
  {
    id: 'angular',
    titleKey: 'upcomingProjects.items.angular.title',
    descriptionKey: 'upcomingProjects.items.angular.description',
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'REST API'],
    features: [
      'upcomingProjects.items.angular.features.textile',
      'upcomingProjects.items.angular.features.parking',
      'upcomingProjects.items.angular.features.api',
    ],
    status: 'planned',
  },
  {
    id: 'fish-farming',
    titleKey: 'upcomingProjects.items.fishFarming.title',
    descriptionKey: 'upcomingProjects.items.fishFarming.description',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'upcomingProjects.items.fishFarming.features.ponds',
      'upcomingProjects.items.fishFarming.features.feeding',
      'upcomingProjects.items.fishFarming.features.growth',
      'upcomingProjects.items.fishFarming.features.finance',
    ],
    status: 'planned',
  },
]
