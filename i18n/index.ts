export const i18n = {
  defaultLocale: 'vi',
  locales: ['vi', 'en', 'es', 'zh-Hans', 'ja', 'fr'],
} as const

export type Locale = typeof i18n['locales'][number]
