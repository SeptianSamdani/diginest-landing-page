import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend"; 

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/id/translation.json";

i18n
  .use(HttpBackend) 
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "id",
    fallbackLng: "id", 

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      id: { // ✅ GANTI dari "es" ke "id"
        translations: translationEs,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;