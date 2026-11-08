import { useTranslation } from 'react-i18next'
import { GraduationCap, MapPin, BriefcaseBusiness} from 'lucide-react'
import Reveal from '../components/ui/Reveal'

export default function About() {
    const { t } = useTranslation()

    const information = [
        {
            icon: GraduationCap,
            label: t('about.education'),
            value: t('about.educationValue'),
        },
        {
            icon: MapPin,
            label: t('about.location'),
            value: t('about.locationValue'),
        },
        {
            icon: BriefcaseBusiness,
            label: t('about.opportunity'),
            value: t('about.opportunityValue')
        },
    ]

    return (
        <section
            id="about"
            className='scroll-mt-20 bg-gray-50/60 py-20 sm:py-28'
        >
            <Reveal direction="up" delay={0.1}>
                <div className='mx-auto max-w-6xl px-6'>
                    <div className='mb-12 max-w-3xl'>
                        <p className='mb-4 text-sm font-semibold uppercase tracking-widset text-green-800'>
                            {t('about.eyebrow')}
                        </p>

                        <h2 className='text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl'>
                            {t('about.title')}
                        </h2>
                    </div>

                    <div className='grid gap-12 lg:grid-cols-5 lg:gap-12'>

                        <div className='space-y-5 lg:col-span-3'>
                            <p className='leading-8 text-gray-600'>
                                {t('about.paragraph1')}
                            </p>

                            <p className='leading-8 text-gray-600'>
                                {t('about.paragraph2')}
                            </p>

                            <p className='leading-8 text-gray-600'>
                                {t('about.paragraph3')}
                            </p>
                        </div>

                        <div className='lg:col-span-2'>
                            <div className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8'>
                                <div className='space-y-7'>
                                    {information.map((item) => {
                                        const Icon = item.icon

                                        return (
                                            <div
                                                key={item.label}
                                                className='flex items-start gap-4'
                                            >
                                                <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800'>
                                                    <Icon size={21} strokeWidth={1.8} />
                                                </div>

                                                <div>
                                                    <p className='text-sm text-gray-500'>
                                                        {item.label}
                                                    </p>
                                                    
                                                    <p className='mt-1 font-semibold text-gray-800'>
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}