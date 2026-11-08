export interface Project {
    id: string
    titleKey: string
    descriptionKey: string
    image: string
    technologies: string[]
    githubUrl?: string
    demoUrl?: string
    featured: boolean
}


export interface UpcomingProject {
  id: string
  titleKey: string
  descriptionKey: string
  technologies: string[]
  features: string[]
  status: 'planned' | 'in-progress'
}
