
import { useTranslation } from 'react-i18next'
import { CalendarClock, Code2, Lightbulb } from 'lucide-react'
import type { UpcomingProject } from '../../types/project'

interface UpcomingProjectCardProps {
  project: UpcomingProject
}

function UpcomingProjectCard({ project }: UpcomingProjectCardProps) {
  const { t } = useTranslation()

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">

      {/* Statut */}
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          <CalendarClock size={14} />
          {t(`upcomingProjects.status.${project.status}`)}
        </span>

        <Code2 size={22} className="text-green-700" />
      </div>

      {/* Titre et description */}
      <h3 className="text-xl font-bold text-gray-900">
        {t(project.titleKey)}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {t(project.descriptionKey)}
      </p>

      {/* Technologies */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-800">
          {t('upcomingProjects.technologies')}
        </h4>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Fonctionnalités */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
          <Lightbulb size={16} className="text-green-700" />
          {t('upcomingProjects.features')}
        </h4>

        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
              {t(feature)}
            </li>
          ))}
        </ul>
      </div>

    </article>
  )
}

export default UpcomingProjectCard
