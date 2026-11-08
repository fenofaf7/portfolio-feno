import { useTranslation } from "react-i18next"
import { ExternalLink } from 'lucide-react'
import Reveal from '../components/ui/Reveal'

export default function Contant() {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="scroll-mt-bg-gray-50/60 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Présentation */}
                    <Reveal direction="up" delay={0.1} className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-800">
                            {t('contact.eyebrow')}
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {t('contact.title')}
                        </h2>

                        <p className="mt-5 max-w-xl leading-8 text-gray-600">
                            {t('contact.description')}
                        </p>
                    </Reveal>

                    {/* Moyens contact */}

                    <Reveal direction="up" delay={0.2} className="space-y-4">

                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=fenovhandriamalala@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-green-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                                    <img className="w-20" src="/images/logo/gmail.png" alt="logo gmail" />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        {t('contact.email')}
                                    </p>

                                    <p className="font-semibold text-gray-900">
                                        fenovhandriamalala@gmail.com
                                    </p>
                                </div>
                            </div>

                            <ExternalLink 
                                size={18}
                                className="text-gray-400 transition-colors group-hover:text-green-800"
                            />
                        </a>
                        
                        <a 
                            href="https://github.com/fenofaf7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-3xl border border-gray-200 bg-white p-5 transition-colors hover:border-green-200"
                        >
                            
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                                    <img className="w-20" src="/images/logo/github.png" alt="logo github" />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        {t('contact.github')}
                                    </p>

                                    <p className="font-semibold text-gray-900">
                                        GitHub
                                    </p>
                                </div>
                            </div>

                            <ExternalLink 
                                size={18}
                                className="text-gray-400 transition-colors group-hover:text-green-800"
                            />
                        </a>

                        <a 
                            href="https://linkedin.com/in/feno-andriamalala-962181372"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-2xl border border-green-200 bg-white p-5 transition-colors hover:border-green-200"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                                    <img className="w-20" src="/images/logo/LinkedIn_icon.svg.webp" alt="logo linkedin" />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        {t('contact.linkedin')}
                                    </p>

                                    <p className="font-semibold text-gray-900">
                                        LinkedIn
                                    </p>
                                </div>
                            </div>

                            <ExternalLink 
                                size={18}
                                className="text-gray-400 transition-colors group-hover:text-green-800"
                            />
                        </a>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}