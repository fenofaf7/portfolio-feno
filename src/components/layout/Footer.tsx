import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear()

    return (
        <footer className='borfer-t border-gray-200 bg-green-800'>
            <div className='mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between'>

                <div>
                    <a 
                        href="#home"
                        className="text-lg fon-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        <span className='text-white'>Feno</span>
                    </a>

                    <p className='mt-2 text-sm text-green-100'>  
                        {t('footer.role')}
                    </p>
                </div>

                <div className='text-sm text-green-100 sm:text-right'>
                    <p>
                        © {currentYear} Feno. {t('footer.rights')}
                    </p>

                    <p className='mt-1'>
                        {t('footer.builtWith')}
                    </p>
                </div>
            </div>
        </footer>
    )
}