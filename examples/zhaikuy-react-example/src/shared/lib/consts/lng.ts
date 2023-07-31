export type LanguageAbbs = 'en' | 'de' | 'zh' | 'cs' | 'ru'

interface Language {
  nativeName: string
}

type Languages = Record<LanguageAbbs, Language>

export const lngs: Languages = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  zh: { nativeName: '中文(漢語)' },
  cs: { nativeName: 'Čeština' },
  ru: { nativeName: 'Русский' },
}