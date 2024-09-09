import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "../src/Tillar/uzbek/uzbek.json"
import enTranslation from "../src/Tillar/english/english.json"

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
        en:{translation: enTranslation},
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;