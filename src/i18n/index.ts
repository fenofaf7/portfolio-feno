import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import fr from './locales/fr.json'
import en from './locales/en.json'

const savedLanguage = localStorage.getItem('portfolio-language')

const initialLanguage = 
    savedLanguage === 'fr' || savedLanguage === 'en'
      ? savedLanguage
      : 'fr'

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
  },
  lng: initialLanguage,
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})

document.documentElement.lang = initialLanguage

export default i18n