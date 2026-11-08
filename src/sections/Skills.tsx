import { useTranslation } from 'react-i18next'
import { Code2, Layers3, Database, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills'
import Reveal from '../components/ui/Reveal'

const icons = {
    code: Code2,
    framework: Layers3,
    database: Database,
    tools: Wrench,
}

export default function Skills() {
    const { t } = useTranslation()

    return (
        <section
            id="skills"
            className='scroll-mt-20 bg-white py-20 sm:py-28'
        >
            <div className='mx-auto max-w-6xl px-6'>

                <Reveal direction="up" delay={0.1} className='mb-12 max-w-3xl'>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-widest text-green-800'>
                        {t('skills.eyebrow')}
                    </p>

                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        {t('skills.title')}
                    </h2>

                    <p className='mt-5 leading-8 text-gray-600'>
                        {t('skills.description')}
                    </p>
                </Reveal>

                <div className='grid gap-6 md:grid-cols-2'>
                    {skillCategories.map((category) => {
                        const Icon = icons[category.icon]

                        return (
                            <Reveal
                                key={category.id}
                                direction="up"
                                delay={skillCategories.indexOf(category) * 0.15}
                                className='rounded-2xl border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-green-50 text-green-800'
                            >
                                <div className='mb-6 flex items-center gap-3'>
                                    <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800'>
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>

                                    <h3 className='text-lg font-semibold text-gray-900'>
                                        {t(category.titleKey)}
                                    </h3>
                                </div>

                                <div className='flex flex-wrap gap-2'>
                                    {category.skills.map((skill) => (
                                        <span 
                                            key={skill}
                                            className='rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700'
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}