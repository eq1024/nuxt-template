import { currentLocaleCodes } from './i18n'
import zhCN from '@/locales/zh-cn.json'
import en from '@/locales/en.json'
import de from '@/locales/de.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  availableLocales: currentLocaleCodes,
  fallbackLocale: 'en', // 区配不到的语言就用en
  messages: {
    en,
    'zh-cn': zhCN,
    'zh': zhCN,
    de,
  },
}))
