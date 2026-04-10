'use client'

import Link from 'next/link'
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa'
import { useLanguage } from '@/lib/i18n'

export default function Footer() {
  const { t, locale } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-black text-base shadow-md">
                R
              </div>
              <span className="font-black text-xl text-gray-900 tracking-tight">Robotik</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t('footer.description')}{' '}
              <a
                href="https://salooote.am"
                className="text-brand-500 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Salooote
              </a>{' '}
              {t('footer.family')}
            </p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs bg-brand-100 text-brand-700 font-semibold px-3 py-1 rounded-full border border-brand-200">
                {t('footer.ages')}
              </span>
              <span className="text-xs bg-gray-100 text-gray-700 font-semibold px-3 py-1 rounded-full border border-gray-200">
                {t('footer.freeToStart')}
              </span>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-widest">{t('footer.learnLabel')}</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${locale}/concepts`} className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors">
                  {t('footer.allConcepts')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/lessons`} className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors">
                  {t('footer.projectLessons')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#how`} className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors">
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
                  className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salooote.am
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@salooote.am"
                  className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors"
                >
                  hello@salooote.am
                </a>
              </li>
              <li>
                <a
                  href="mailto:robotik@salooote.am"
                  className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors"
                >
                  robotik@salooote.am
                </a>
              </li>
            </ul>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.youtube.com/@Robotik.salooote" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all">
                <FaYoutube size={16} />
              </a>
              <a href="https://www.tiktok.com/@robotik.salooote" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all">
                <FaTiktok size={14} />
              </a>
              <a href="https://www.instagram.com/robotik_salooote" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:border-pink-400 hover:text-white transition-all">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            {t('footer.copyright')}{' '}
            <span className="text-brand-500 font-semibold">Salooote.am</span> {t('footer.madeIn')}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="text-xs text-gray-400 hover:text-brand-500 font-medium transition-colors">
              {t('footer.privacy')}
            </Link>
            <span className="text-gray-300">·</span>
            <Link href={`/${locale}/terms`} className="text-xs text-gray-400 hover:text-brand-500 font-medium transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
          <p className="text-xs text-gray-400 font-medium">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}
