import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "about": "About Us",
      "overview": "Company Overview",
      "directors":"Board of Directors",
      "org_strct": "Organization Structure",
    }
  },
  hi: {
    translation: {
      "about": "हमारे बारे में",
      "overview": "कंपनी ओवरव्यू",
      "directors": "निदेशक मंडल",
      "org_strct": "संगठन संरचना",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
