import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json'; // Example JSON file for English
import es from './es.json'; // Example JSON file for Spanish

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(initReactI18next) // Connects react-i18next to React
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;