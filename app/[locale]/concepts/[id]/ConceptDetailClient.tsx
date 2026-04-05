'use client'

import Link from 'next/link'
import { FaVideo, FaBook, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { concepts, colorStyles } from '@/lib/data'
import VideoPlayer from '@/components/VideoPlayer'
import { useLanguage } from '@/lib/i18n'

export default function ConceptDetailClient({ id }: { id: string }) {
  const { t, tConcept, locale } = useLanguage()
  const concept = concepts.find((c) => c.id === id)
  if (!concept) return null

  const c = colorStyles[concept.color]
  const idx = concepts.indexOf(concept)
  const prev = concepts[idx - 1]
  const next = concepts[idx + 1]
  const { Icon } = concept
  const tc = tConcept(concept.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`${c.sectionBg} py-14 px-5 border-b ${c.border}`}>
        <div className="max-w-4xl mx-auto">
          <Link href={`/${locale}/concepts`} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors mb-6">
            <FaChevronLeft size={12} /> {t('conceptDetail.allConcepts')}
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
              <Icon size={30} className={c.tagText} />
            </div>
            <div>
              <span className={`inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${c.tagBg} ${c.tagText} mb-2 uppercase tracking-wider`}>
                {t('conceptDetail.concept')} {concept.num}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900">{tc.title}</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${c.badge}`}>{concept.duration}</span>
            {concept.videoId ? (
              <span className="text-sm font-bold px-4 py-1.5 rounded-full border border-brand-200 bg-brand-100 text-brand-700 inline-flex items-center gap-2">
                <FaVideo size={12} /> {t('conceptDetail.videoAvailable')}
              </span>
            ) : (
              <span className="text-sm font-bold px-4 py-1.5 rounded-full border border-gray-200 bg-gray-100 text-gray-500 inline-flex items-center gap-2">
                <FaVideo size={12} /> {t('conceptDetail.videoComingSoon')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Main */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                <FaVideo size={13} className="text-gray-300" /> {t('conceptDetail.watchVideo')}
              </h2>
              <VideoPlayer videoId={concept.videoId} title={tc.title} isShorts={concept.isShorts} />
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                <FaBook size={13} className="text-gray-300" /> {t('conceptDetail.whatIsIt')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-body">{tc.description}</p>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                <FaQuoteLeft size={13} className="text-gray-300" /> {t('conceptDetail.simpleAnalogy')}
              </h2>
              <div className={`${c.analogyBg} border-l-4 ${c.analogyBorder} px-5 py-4 rounded-r-2xl`}>
                <p className="text-gray-700 italic text-lg font-semibold leading-relaxed font-body">&ldquo;{tc.analogy}&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
              <h3 className="font-black text-gray-800 mb-4 text-sm uppercase tracking-widest">{t('conceptDetail.allConceptsSidebar')}</h3>
              <div className="flex flex-col gap-1">
                {concepts.map((con) => {
                  const ConIcon = con.Icon
                  const cc = colorStyles[con.color]
                  const conTitle = tConcept(con.id).title
                  return (
                    <Link key={con.id} href={`/${locale}/concepts/${con.id}`}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                        con.id === concept.id
                          ? `${cc.tagBg} ${cc.tagText} border ${cc.border}`
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <ConIcon size={14} className={con.id === concept.id ? cc.tagText : 'text-gray-400'} />
                      <span className="flex-1 line-clamp-1">{conTitle}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className={`${c.analogyBg} rounded-2xl border ${c.border} p-5`}>
              <h3 className="font-black text-gray-800 mb-2">{t('conceptDetail.readyToBuild')}</h3>
              <p className="text-sm text-gray-500 mb-4 font-body">{t('conceptDetail.readyToBuildDesc')}</p>
              <Link href={`/${locale}/lessons`} className="w-full block text-center bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm">
                {t('conceptDetail.viewLessons')}
              </Link>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex justify-between gap-4">
          {prev ? (
            <Link href={`/${locale}/concepts/${prev.id}`} className="flex items-center gap-3 group hover:bg-gray-50 rounded-2xl px-4 py-3 transition-all -ml-4">
              <FaChevronLeft size={16} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{t('conceptDetail.previous')}</div>
                <div className="font-black text-gray-800 group-hover:text-blue-600 transition-colors">{tConcept(prev.id).title}</div>
              </div>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/${locale}/concepts/${next.id}`} className="flex items-center gap-3 text-right group hover:bg-gray-50 rounded-2xl px-4 py-3 transition-all -mr-4 ml-auto">
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{t('conceptDetail.next')}</div>
                <div className="font-black text-gray-800 group-hover:text-blue-600 transition-colors">{tConcept(next.id).title}</div>
              </div>
              <FaChevronRight size={16} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
