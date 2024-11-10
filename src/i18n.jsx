import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Archivos de traducción
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo si el idioma seleccionado no tiene traducción
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
