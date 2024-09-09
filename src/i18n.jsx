import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "../public/uzbek/uzbek.json"
import ruTranslation from "../public/russian/russian.json"
import enTranslation from "../public/english/english.json"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lang:i18n.language,
    debug: true,
    resources:{
        uz:{translation: uzTranslation},
        ru:{translation: ruTranslation},
        en:{translation: enTranslation},
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;