'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black text-base shadow-md">
                R
              </div>
              <span className="font-black text-xl text-gray-900 tracking-tight">Robotik</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t('footer.description')}{' '}
              <a
                href="https://salooote.am"
                className="text-orange-500 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Salooote
              </a>{' '}
              {t('footer.family')}
            </p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-3 py-1 rounded-full border border-orange-200">
                {t('footer.ages')}
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full border border-emerald-200">
                {t('footer.freeToStart')}
              </span>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-widest">{t('footer.learnLabel')}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/concepts" className="text-sm text-gray-500 hover:text-orange-600 font-medium transition-colors">
                  {t('footer.allConcepts')}
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="text-sm text-gray-500 hover:text-orange-600 font-medium transition-colors">
                  {t('footer.projectLessons')}
                </Link>
              </li>
              <li>
                <Link href="/#how" className="text-sm text-gray-500 hover:text-orange-600 font-medium transition-colors">
                  {t('footer.howItWorks')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-widest">{t('footer.connectLabel')}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://salooote.am"
                  className="text-sm text-gray-500 hover:text-orange-600 font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salooote.am
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@salooote.am"
                  className="text-sm text-gray-500 hover:text-orange-600 font-medium transition-colors"
                >
                  hello@salooote.am
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-orange-600 font-medium transition-colors">
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            {t('footer.copyright')}{' '}
            <span className="text-orange-500 font-semibold">Salooote.am</span> {t('footer.madeIn')}
          </p>
          <p className="text-xs text-gray-400 font-medium">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}
