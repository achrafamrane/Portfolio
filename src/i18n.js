import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LaunguageDetector from "i18next-browser-languagedetector";
import translationEn from "./Local/en.json";
import translationAr from "./Local/ar.json";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: translationEn,
    options: {
      // English-specific options
      direction: "ltr", // Left-to-right
    },
  },
  ar: {
    translation: translationAr,
    options: {
      // English-specific options
      direction: "rtl", // Left-to-right
    },
  },
};

i18n.use(initReactI18next).init({
  // Other i18next configurations...
  resources,
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: false,
  },
  // Language-specific options
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  // Add other language-specific options here
  nsSeparator: ":::",
  keySeparator: "::",
  returnObjects: true,
  direction: "ltr",
  interpolation: {
    escapeValue: false,
  }, // Default text direction
});

export default i18n;
