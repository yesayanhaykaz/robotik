import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

const locales = ['en', 'hy', 'ru'] as const

const ogMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Robotik — Build Real Things',
    description: 'Online robotics and electronics lessons for curious kids ages 7–15. Watch, build, and think like an engineer.',
  },
  hy: {
    title: 'Robotik — Ստեղծիր իրական բաներ',
    description: 'Առցանց էլեկտրոնիկայի և ռոբոտոտեխնիկայի դասեր 7–15 տարեկան երեխաների համար։ Դիտիր, կառուցիր և սկսիր մտածել ինժեների պես։',
  },
  ru: {
    title: 'Robotik — Создавай настоящие вещи',
    description: 'Онлайн-уроки робототехники и электроники для детей 7–15 лет. Смотри, собирай и думай как инженер.',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const meta = ogMeta[locale] || ogMeta.en
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: '/og-image.webp', width: 1200, height: 630 }],
      type: 'website',
      locale: locale === 'hy' ? 'hy_AM' : locale === 'ru' ? 'ru_RU' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.webp'],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()

  return (
    <LanguageProvider locale={locale as Locale}>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
