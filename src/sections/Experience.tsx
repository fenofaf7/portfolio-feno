import { useTranslation } from 'react-i18next'
import { GraduationCap } from 'lucide-react'
import Reveal from '../components/ui/Reveal'

export default function Experience() {
    const { t } = useTranslation();

    const experiences = ['l3', 'l2', 'l1'];

    return (
        <section
            id="experience"
            className='srcoll-mt-20 bg-white py-20 sm:py-28'
        >
            <div className='mx-auto max-w-6xl px-6'>

                <Reveal direction="up" delay={0.1} className='mb-14 max-w-3xl'>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-widest text-green-800'>
                        {t('experience.eyebrow')}
                    </p>

                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        {t('experience.title')}
                    </h2>

                    <p className='mt-5 leading-8 text-gray-600'>
                        {t('experience.description')}
                    </p>
                </Reveal>

                <div className='relative max-w-4xl'>

                    <div className='absolute bottom-0 left-[21px] top-0 w-px bg-gray-200' />

                    <div className='space-y-10'>
                        {experiences.map((experience) => (
                            <Reveal
                                direction="up"
                                delay={experiences.indexOf(experience) * 0.15}
                                key={experience}
                                className='relative flex gap-6'    
                            >
                                {/* Icon */}
                                <div className='relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-green-100 bg-green-50 text-green-800'>
                                    <GraduationCap
                                        size={20}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                {/* Contenu */}
                                <div className='pb-4'>
                                    <p className='mb-2 text-sm font-semibold text-green-800'>
                                        {t(`experience.items.${experience}.period`)}
                                    </p>

                                    <h3 className='text-xl font-semibold text-gray-900'>
                                        {t(`experience.items.${experience}.title`)}
                                    </h3>

                                    <p className='mt-1 text-sm font-medium text-gray-500'>
                                        {t(`experience.items.${experience}.organization`)}
                                    </p>

                                    <p className='mt-4 max-w-2xl leading-7 text-gray-600'>
                                        {t(`experience.items.${experience}.description`)}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}