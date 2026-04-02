'use client'

import Link from 'next/link'
import { concepts, colorStyles } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function ConceptsPage() {
  const { t, tConcept } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-5 border-b border-purple-100">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 font-semibold hover:text-purple-600 transition-colors mb-6">
            {t('conceptsPage.back')}
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-purple-400 inline-block" />
            {t('conceptsPage.label')}
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            {t('conceptsPage.title1')}{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{t('conceptsPage.title2')}</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl font-body">
            {t('conceptsPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => {
            const c = colorStyles[concept.color]
            const { Icon } = concept
            const tc = tConcept(concept.id)
            return (
              <Link
                key={concept.id}
                href={`/concepts/${concept.id}`}
                className={`group bg-white rounded-3xl border-2 ${c.border} p-7 hover:-translate-y-1.5 hover:shadow-2xl ${c.glowShadow} transition-all`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-sm`}>
                    <Icon size={26} className={c.tagText} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${c.badge}`}>{concept.duration}</span>
                </div>
                <span className={`inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${c.tagBg} ${c.tagText} mb-3 uppercase tracking-wider`}>
                  {t('conceptsPage.concept')} {concept.num}
                </span>
                <h2 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{tc.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3 font-body">{tc.description}</p>
                <div className={`${c.analogyBg} border-l-4 ${c.analogyBorder} px-3 py-2 rounded-r-xl text-xs text-gray-500 italic mb-5 font-body`}>
                  {tc.analogy}
                </div>
                <div className={`flex items-center gap-2 font-bold text-sm ${c.tagText} group-hover:gap-3 transition-all`}>
                  {concept.videoId ? t('conceptsPage.watchVideo') : t('conceptsPage.learnConcept')} →
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
