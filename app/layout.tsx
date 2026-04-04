import type { Metadata } from 'next'
import { Baloo_2, Nunito, Noto_Sans_Armenian, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/i18n'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

const notoArmenian = Noto_Sans_Armenian({
  subsets: ['armenian'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-armenian',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Robotik — Build Real Things',
  description:
    'Online robotics and electronics lessons for curious kids ages 7–15. Watch, build, and think like an engineer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable} ${notoArmenian.variable} ${mono.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
