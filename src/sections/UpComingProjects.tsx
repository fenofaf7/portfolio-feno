
import { useTranslation } from 'react-i18next'
import { upcomingProjects} from '../data/upcomingProjects'
import UpcomingProjectCard from '../components/project/UpComingProjectCard'
import Reveal from '../components/ui/Reveal'

function UpcomingProjects() {
  const { t } = useTranslation()

  return (
    <section
      id="upcoming-projects"
      className="bg-gray-50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* En-tête de la section */}
        <Reveal direction="up" delay={0.1} className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            {t('upcomingProjects.subtitle')}
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {t('upcomingProjects.title')}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t('upcomingProjects.description')}
          </p>
        </Reveal>

        {/* Cartes des projets à venir */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.map((project, index) => (
                <Reveal key={project.id} direction="up" delay={index * 0.15}>
                    <UpcomingProjectCard project={project} />
                </Reveal>
            ))}
        </div>

      </div>
    </section>
  )
}

export default UpcomingProjects
