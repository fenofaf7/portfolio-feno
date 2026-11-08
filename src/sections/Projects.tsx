
import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/project/ProjectCard'
import { projects } from '../data/projects'
import Reveal from '../components/ui/Reveal'

export default function Projects() {
  const { t } = useTranslation()

  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-gray-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* En-tête de la section */}
        <Reveal direction="up" delay={0.1} className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-800">
            {t('projects.eyebrow')}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('projects.title')}
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            {t('projects.description')}
          </p>
        </Reveal>

        {/* Grille des projets */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={index * 0.15}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
