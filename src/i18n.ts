import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslations from "./assets/locales/en.json"
import ltTranslations from "./assets/locales/lt.json"

export const LANGUAGES = {
  en: {
    code: "en",
    label: "English",
    flag: "us",
  },
  lt: {
    code: "lt",
    label: "Lietuvių",
    flag: "lt",
  },
} as const
export type Language = keyof typeof LANGUAGES
export type LanguageConfig = (typeof LANGUAGES)[Language]

const resources = {
  en: {
    translation: enTranslations,
  },
  lt: {
    translation: ltTranslations,
  },
} satisfies Record<Language, { translation: object }>

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: Object.keys(LANGUAGES),
})

export default i18n
