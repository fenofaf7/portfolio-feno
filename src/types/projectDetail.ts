export interface ProjectDetail {
  id: string
  titleKey: string
  descriptionKey: string
  objectivesKey: string
  features: string[]
  technologies: string[]
  screenshots: {
    image: string
    captionKey: string
    descriptionKey: string
  }[]
  githubUrl?: string
}