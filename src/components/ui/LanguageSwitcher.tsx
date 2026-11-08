import { useTranslation } from 'react-i18next'

type Language = 'fr' | 'en'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const currentLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'fr'

    const changeLanguage = async (language: Language) => {
        await i18n.changeLanguage(language)

        localStorage.setItem('portfolio-language', language)

        document.documentElement.lang = language
    }

    return (
        <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1" araia-label="language selection">
            {(['fr', 'en'] as const).map((language) => (
                <button 
                    key={language}
                    type="button"
                    onClick={() => changeLanguage(language)}
                    aria-label={
                        language === 'fr' ? 'Passer en français' : 'Switch to English'
                    }
                    aria-pressed={currentLanguage === language}
                    className={`
                        rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200
                        ${
                            currentLanguage === language
                                ? 'bg-green-800 text-white'
                                : 'text-gray-500 hover:bg-green-50 hover:text-green-800'
                        }
                    `}
                >
                    {language.toUpperCase()}
                </button>
            ))}
        </div>
    )
}