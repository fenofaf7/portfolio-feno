
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function Header() {
    const { t } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.skills'), href: '#skills' },
        { label: t('nav.projects'), href: '#projects' },
        { label: t('nav.upcomingProjects'), href: '#upcoming-projects' },
        { label: t('nav.experience'), href: '#experience' },
        { label: t('nav.contact'), href: '#contact' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
            <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-400"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="text-gray-800">&lt;</span>
                    <span className="text-red-400">/</span>
                    <span className="text-black">Fn</span>
                    <span className="text-gray-800">&gt;</span>
                </a>

                {/* Navigation desktop */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navigation.map((item) => (
                        <a
                            href={item.href}
                            key={item.href}
                            className="text-sm font-medium text-gray-600 transition-colors hover:text-green-800 dark:text-gray-300 dark:hover:text-green-400"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Sélecteurs desktop */}
                <div className="hidden items-center gap-3 lg:flex">
                    <LanguageSwitcher />
                </div>

                {/* Bouton menu mobile */}
                <button
                    type="button"
                    className="rounded-lg p-2 text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-gray-100 bg-white px-6 pb-6 dark:border-gray-800 dark:bg-gray-950 lg:hidden"
                >
                    <div className="flex flex-col gap-1 py-4">
                        {navigation.map((item) => (
                            <a
                                href={item.href}
                                key={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </header>
    )
}
