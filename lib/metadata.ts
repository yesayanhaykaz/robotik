import type { Metadata } from 'next'
import translations from '@/lib/translations'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const BASE_URL = 'https://robotik.salooote.am'

function ogLocale(locale: string) {
  return locale === 'hy' ? 'hy_AM' : locale === 'ru' ? 'ru_RU' : 'en_US'
}

/** Safely read a nested translation key like 'conceptsPage.subtitle' */
function tr(locale: string, key: string): string {
  const lang = translations[locale] || translations.en
  const parts = key.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let val: any = lang
  for (const p of parts) {
    val = val?.[p]
    if (val === undefined) break
  }
  if (typeof val === 'string') return val
  // Fallback to English
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fallback: any = translations.en
  for (const p of parts) {
    fallback = fallback?.[p]
    if (fallback === undefined) break
  }
  return typeof fallback === 'string' ? fallback : key
}

function buildMeta(
  title: string,
  description: string,
  locale: string,
  path: string,
  image?: string,
  type: 'website' | 'article' = 'website',
): Metadata {
  const img = image || '/og-image.webp'
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: img, width: 1200, height: 630 }],
      type,
      locale: ogLocale(locale),
      siteName: 'Robotik',
      url: `${BASE_URL}${path}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
  }
}

/* ------------------------------------------------------------------ */
/*  Page-level metadata                                                */
/* ------------------------------------------------------------------ */

/** Home page */
export function homeMetadata(locale: string): Metadata {
  const title = tr(locale, 'nav.home') !== 'nav.home'
    ? `Robotik \u2014 ${tr(locale, 'heroTitle') || 'Build Real Things'}`
    : 'Robotik \u2014 Build Real Things'
  // Use the locale layout's ogMeta pattern
  const titles: Record<string, string> = {
    en: 'Robotik \u2014 Build Real Things',
    hy: 'Robotik \u2014 \u054d\u057f\u0565\u0572\u056e\u056b\u0580 \u056b\u0580\u0561\u056f\u0561\u0576 \u0562\u0561\u0576\u0565\u0580',
    ru: 'Robotik \u2014 \u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0439 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u0432\u0435\u0449\u0438',
  }
  void title // unused, using static map instead
  return buildMeta(
    titles[locale] || titles.en,
    tr(locale, 'home.heroSubtitle'),
    locale,
    `/${locale}`,
  )
}

/** Concepts listing page */
export function conceptsPageMetadata(locale: string): Metadata {
  const t1 = tr(locale, 'conceptsPage.title1')
  const t2 = tr(locale, 'conceptsPage.title2')
  return buildMeta(
    `${t1} ${t2} \u2014 Robotik`,
    tr(locale, 'conceptsPage.subtitle'),
    locale,
    `/${locale}/concepts`,
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&q=80',
  )
}

/** Lessons listing page */
export function lessonsPageMetadata(locale: string): Metadata {
  const t1 = tr(locale, 'lessonsPage.title1')
  const t2 = tr(locale, 'lessonsPage.title2')
  const t3 = tr(locale, 'lessonsPage.title3')
  return buildMeta(
    `${t1} ${t2} ${t3} \u2014 Robotik`,
    tr(locale, 'lessonsPage.subtitle'),
    locale,
    `/${locale}/lessons`,
    'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=1200&q=80',
  )
}

/** Kit / Store page */
export function kitPageMetadata(locale: string): Metadata {
  const t1 = tr(locale, 'kitPage.title1')
  const t2 = tr(locale, 'kitPage.title2')
  return buildMeta(
    `${t1} ${t2} \u2014 Robotik`,
    tr(locale, 'kitPage.subtitle'),
    locale,
    `/${locale}/kit`,
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
  )
}

/** Chat page */
export function chatPageMetadata(locale: string): Metadata {
  const t1 = tr(locale, 'chatPage.title1')
  const t2 = tr(locale, 'chatPage.title2')
  return buildMeta(
    `${t1} ${t2} \u2014 Robotik`,
    tr(locale, 'chatPage.subtitle'),
    locale,
    `/${locale}/chat`,
  )
}

/* ------------------------------------------------------------------ */
/*  Detail pages (concept / lesson)                                    */
/* ------------------------------------------------------------------ */

/** Concept detail — reads translated title & description from translations */
export function conceptMetadata(
  id: string,
  locale: string,
  fallback: { title: string; description: string; heroImage?: string },
): Metadata {
  const locConcepts = (translations[locale] as Record<string, unknown>)?.concepts as Record<string, { title?: string; description?: string }> | undefined
  const t = locConcepts?.[id]
  const title = t?.title || fallback.title
  const description = t?.description || fallback.description
  return buildMeta(
    `${title} \u2014 Robotik`,
    description,
    locale,
    `/${locale}/concepts/${id}`,
    fallback.heroImage,
    'article',
  )
}

/** Lesson detail — reads translated title & description from translations */
export function lessonMetadata(
  id: string,
  locale: string,
  fallback: { title: string; description: string; heroImage?: string },
): Metadata {
  const locLessons = (translations[locale] as Record<string, unknown>)?.lessons as Record<string, { title?: string; description?: string }> | undefined
  const t = locLessons?.[id]
  const title = t?.title || fallback.title
  const description = t?.description || fallback.description
  return buildMeta(
    `${title} \u2014 Robotik`,
    description,
    locale,
    `/${locale}/lessons/${id}`,
    fallback.heroImage,
    'article',
  )
}
