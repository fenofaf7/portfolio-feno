import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, ImageOff } from 'lucide-react'
import type { Project } from '../../types/project'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
    project: Project
}

export default function ProjetCard({project}: ProjectCardProps) {
    const { t } = useTranslation()
    const [imageError, setImageError] = useState(false)

    return (
        <article className='group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-green-200'>

            <div className='aspect-video overflow-hidden bg-gray-100'>
                {!imageError ? (
                    <img 
                        src={project.image} 
                        alt={t(project.titleKey)}
                        loading="lazy"
                        onError={() => setImageError(true)}
                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                    />
                ) : (
                    <div className='flex h-full w-full flex flex-col items-center justify-center gap-3 bg-gray-50 text-gray-400'>
                        <ImageOff size={32} strokeWidth={1.5} />
                        <span className='text-sm'>{t(project.titleKey)}</span>
                    </div>
                )}
            </div>

            <div className='flex flex-1 flex-col p-6'>

                <h3 className='text-xl font-semibold tracking-tight text-gray-900'>
                    {t(project.titleKey)}
                </h3>

                <div className='mt-5 flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className='rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700'
                        >  
                            {tech}
                        </span>
                    ))}
                </div>

                {(project.githubUrl || project.demoUrl) && (
                    <div className='mt-6 flex flex-wrap items-center gap-5 border-t border-gray-100 pt-5'>

                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-green-800'
                            >
                                <ImageOff size={18} />
                                {t('projects.github')}
                            </a>
                        )}

                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:text-green-800"
                            >
                                <ExternalLink size={18} />
                                {t('projects.demo')}
                            </a>
                            )}
                    </div>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-gray-100 pt-5">
                    <Link
                        to={`/projects/${project.id}#screenshots`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 transition-colors hover:text-green-900"
                    >
                        Découvrir le projet
                        <ExternalLink size={18} />
                    </Link>
                </div>

            </div>
        </article>
    )
}