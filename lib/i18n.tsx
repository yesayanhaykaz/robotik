'use client'

import { createContext, useContext, useEffect, type ReactNode } from 'react'

export type Locale = 'en' | 'hy' | 'ru'

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────

import translations from './translations'



// ─── CONTEXT ─────────────────────────────────────────────────────────────────

type TranslationsType = typeof translations.en
type DeepKeyOf<T, Prefix extends string = ''> = T extends object
  ? { [K in keyof T & string]: DeepKeyOf<T[K], `${Prefix}${Prefix extends '' ? '' : '.'}${K}`> }[keyof T & string]
  : Prefix

interface LanguageContextValue {
  locale: Locale
  t: (key: string) => string
  tConcept: (id: string) => { title: string; description: string; analogy: string }
  tLesson: (id: string) => { title: string; badge: string; description: string; steps: string[] }
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  t: (k) => k,
  tConcept: (id) => translations.en.concepts[id as keyof typeof translations.en.concepts] ?? { title: id, description: '', analogy: '' },
  tLesson: (id) => {
    const l = translations.en.lessons[id as keyof typeof translations.en.lessons]
    return l ? { title: l.title, badge: l.badge, description: l.description, steps: [...l.steps] } : { title: id, badge: '', description: '', steps: [] }
  },
})

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string): string => {
    const keys = key.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = translations[locale]
    for (const k of keys) val = val?.[k]
    if (typeof val === 'string') return val
    // fallback to en
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fallback: any = translations.en
    for (const k of keys) fallback = fallback?.[k]
    return typeof fallback === 'string' ? fallback : key
  }

  const tConcept = (id: string) => {
    const loc = translations[locale].concepts as Record<string, { title: string; description: string; analogy: string }>
    return loc[id] ?? (translations.en.concepts as Record<string, { title: string; description: string; analogy: string }>)[id] ?? { title: id, description: '', analogy: '' }
  }

  const tLesson = (id: string): { title: string; badge: string; description: string; steps: string[] } => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const loc = (translations[locale] as any).lessons?.[id]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const en = (translations.en as any).lessons?.[id]
    const src = loc ?? en
    if (!src) return { title: id, badge: '', description: '', steps: [] }
    return { title: src.title, badge: src.badge, description: src.description, steps: [...src.steps] }
  }

  return (
    <LanguageContext.Provider value={{ locale, t, tConcept, tLesson }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
