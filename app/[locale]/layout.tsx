import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

const locales = ['en', 'hy', 'ru'] as const

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
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
