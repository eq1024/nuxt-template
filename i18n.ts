const locales = [
  {
    code: 'en',
    file: 'en.json',
    name: 'English',
  },
  {
    code: 'zh-cn',
    file: 'zh-cn.json',
    name: '简体中文',
  },
  {
    code: 'de',
    file: 'de.json',
    name: '德语',
  },
]

export const currentLocales = locales
export const currentLocaleCodes = locales.map(l => l.code)
