import en from '@/locales/en.json'

export type Messages = typeof en

declare global {
  type IntlMessages = Messages

  type LocaleParams = 'en' | 'tr'
}
