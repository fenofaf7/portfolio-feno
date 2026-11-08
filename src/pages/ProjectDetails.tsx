
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { projectDetails } from '../data/projectDetails'

export default function ProjectDetails() {
  const { id } = useParams()
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<{
  image: string
  caption: string
} | null>(null)

  const project = projectDetails.find(
    (item) => item.id === id
  )

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [location.pathname])

  // Projet introuvable
  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Projet introuvable
        </h1>

        <Link
          to="/"
          className="mt-6 text-green-800 hover:underline"
        >
          Retour à l'accueil
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Retour aux projets */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-green-800"
        >
          <ArrowLeft size={18} />
          Retour aux projets
        </Link>

        {/* En-tête */}
        <header className="mt-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-800">
            Documentation du projet
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t(project.titleKey)}
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-600">
            {t(project.descriptionKey)}
          </p>
        </header>

        {/* Objectifs */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Objectifs du projet
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-gray-600">
            {t(project.objectivesKey)}
          </p>
        </section>

        {/* Fonctionnalités */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Fonctionnalités principales
          </h2>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-700"
              >
                {t(feature)}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Technologies utilisées
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
        
        {/* Captures d'écran */}
        <section className="mt-16">
        <div id="screenshots" className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
            Captures d'écran
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
            Découvrez les principales interfaces de cette application.
            </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            {project.screenshots.map((screenshot) => (
            <figure
                key={screenshot.image}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
                <button
                    type="button"
                    onClick={() =>
                        setSelectedImage({
                        image: screenshot.image,
                        caption: t(screenshot.captionKey),
                        })
                    }
                    className="group/image relative block aspect-video w-full overflow-hidden bg-gray-100"
                    aria-label="Agrandir l'image"
                    >
                    <img
                        src={screenshot.image}
                        alt={t(screenshot.captionKey)}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                    />

                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/image:bg-black/30 group-hover/image:opacity-100">
                        <ZoomIn size={32} className="text-white" />
                    </span>
                </button>

                <figcaption className="mt-3 space-y-1">
                    <h3 className="font-semibold text-gray-900 ml-4">
                        {t(screenshot.captionKey)}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 ml-4">
                        {t(screenshot.descriptionKey)}
                    </p>
                </figcaption>
            </figure>
            ))}
        </div>
        </section>


        {/* Dépôt GitHub */}
        {project.githubUrl && (
          <section className="mt-12 border-t border-gray-200 pt-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-900"
            >
              Voir le code source
              <ExternalLink size={17} />
            </a>
          </section>
        )}

      </div>
      {selectedImage && (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
        >
            <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Fermer l'image"
            >
            <X size={24} />
            </button>

            <div
            className="max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
            >
            <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />

            <p className="mt-4 text-center text-sm text-white">
                {selectedImage.caption}
            </p>
            </div>
        </div>
        )}
    </main>
  )
}
