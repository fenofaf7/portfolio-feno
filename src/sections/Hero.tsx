import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDownRight, Download, UserRound } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import { CalendarDays, CalendarCheck } from 'lucide-react'

export default function Hero() {
    const { t, i18n } = useTranslation()
    const [imageError, setImageError] = useState(false)

    const cvPath =
        i18n.resolvedLanguage === 'en'
            ? '/cv-feno-en.pdf'
            : '/cv-feno-fr.pdf'

    return (
        <section
            id="home"
            className='mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl scroll-mt-20 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20'
        >

            <Reveal direction="up" delay={0.1} className='order-1'>
                <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-green-100 bg-red-50 px-4 py-2'>
                    <span  className='h-2 w-2 rounded-full bg-green-700'/>
                        
                    <span className='text-sm font-medium text-green-900'>
                        {t('hero.availability')}
                    </span>
                </div>

                <p className='mb-3 text-sm font-semibold uppercase tracking-widset text-green-800'>
                    {t('hero.role')}
                </p>

                <h1 className='text-4xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-4xl'>
                    {t('hero.greeting')}{' '}
                    <span className='text-green-800'>FENOSOA Voahary Andriamalala</span>
                </h1>

                <h2 className='mt-5 text-2xl font-semibold leading-snug text-gray-800 sm:text-3xl'>
                    {t('hero.headline')}
                </h2>

                <p className='mt-6 max-w-xl text-base leading-8 text-gray-600'>
                    {t('hero.description')}
                </p>

                <div className='mt-9 flex flex-wrap gap-3'>
                    <a 
                        href="#projects"
                        className='inline-flex items-center gap-2 rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-green-900'
                    >
                        {t('hero.projects')}
                        <ArrowDownRight size={18} />
                    </a>
                    <a 
                        href={cvPath}
                        download
                        className='inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition-colors hover:border-green-700 hover:text-green-800'
                    >
                        <Download size={18} />
                        {t('hero.cv')}
                    </a>
                </div>

                <div className='mt-6 flex flex-col gap-3 text-sm text-gray-600'>
                    <div className='flex items-center gap-3'>
                        <CalendarDays size={18} className='shrink-0 text-green-800' />
                        <span>
                            {t('hero.internshipDuration')}
                        </span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <CalendarCheck size={18} className='shrink-0 text-green-800' />
                        <span>
                            {t('hero.internshipAvailability')}
                        </span>
                    </div>
                </div>

                <div className='mt-8 flex items-center gap-3 text-sm text-gray-500'>
                    <UserRound size={18} />
                    <span>{t('hero.github')}</span>
                </div>
            </Reveal>

            <Reveal direction="left" delay={0.3} className='order-2 mx-auto w-full max-w-md'>
                <div className='relative'>
                    <div className='absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-green-50' />

                    <div className='aspect-[4/5] overflow-hidden rounded-3xl border border-gray-100 bg-gray-50'>
                        {imageError ? (
                            <div className='flex h-full flex-col items-center justify-center gap-3 text-gray-400'>
                                <UserRound size={72} strokeWidth={1.2} />
                                <span className='text-sm'>Feno</span>
                            </div>
                        ) : (
                            <img 
                                src="/images/profile/fenokely.png"
                                alt={t('hero.photoAlt')}
                                className='h-full w-full object-cover object-center'
                                onError={() => setImageError(true)} 
                            />
                        )}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}