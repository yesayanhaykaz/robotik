'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaMicrochip, FaGlobe, FaRobot } from 'react-icons/fa'
import { useLanguage, type Locale } from '@/lib/i18n'

const localeLabels: Record<Locale, string> = { en: 'EN', hy: 'ՀՅ', ru: 'РУ' }

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale, t } = useLanguage()

  const navLinks: { href: string; label: string; icon?: boolean }[] = [
    { href: '/#how',      label: t('nav.howItWorks') },
    { href: '/concepts',  label: t('nav.concepts')   },
    { href: '/lessons',   label: t('nav.lessons')    },
    { href: '/kit',       label: t('nav.starterKit') },
    { href: '/chat',      label: t('chatPage.label'), icon: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <FaMicrochip size={16} className="text-white" />
          </div>
          <span className="font-black text-xl text-gray-900 tracking-tight">Robotik</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                  pathname === link.href
                    ? 'text-brand-600 bg-brand-50'
                    : link.icon
                      ? 'text-brand-600 hover:text-brand-700 hover:bg-brand-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.icon && <FaRobot size={13} />}
                {link.label}
              </Link>
            </li>
          ))}

          {/* Language Switcher */}
          <li className="relative ml-1">
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Switch language"
            >
              <FaGlobe size={14} />
              <span>{localeLabels[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[100px] z-50">
                {(Object.entries(localeLabels) as [Locale, string][]).map(([loc, label]) => (
                  <button
                    key={loc}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                      loc === locale
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => { setLocale(loc); setLangOpen(false) }}
                  >
                    {label} — {loc === 'en' ? 'English' : loc === 'hy' ? 'Հայերեն' : 'Русский'}
                  </button>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link href="/concepts" className="ml-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
              {t('nav.startBuilding')}
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language */}
          <div className="relative">
            <button
              className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Switch language"
            >
              <FaGlobe size={16} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[120px] z-50">
                {(Object.entries(localeLabels) as [Locale, string][]).map(([loc, label]) => (
                  <button
                    key={loc}
                    className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors ${
                      loc === locale
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => { setLocale(loc); setLangOpen(false) }}
                  >
                    {label} — {loc === 'en' ? 'English' : loc === 'hy' ? 'Հայերեն' : 'Русский'}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-all"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/concepts"
              className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-center shadow-md"
              onClick={() => setOpen(false)}
            >
              {t('nav.startBuilding')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
