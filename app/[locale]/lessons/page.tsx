'use client'

import Link from 'next/link'
import { lessons, lessonBadgeStyles } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

export default function LessonsPage() {
  const { t, tLesson, locale } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="relative py-16 px-5 border-b border-brand-100 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1553406830-ef2513450d76?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm text-gray-500 font-semibold hover:text-brand-600 transition-colors mb-6">
            {t('lessonsPage.back')}
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-500 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-brand-400 inline-block" />
            {t('lessonsPage.label')}
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            {t('lessonsPage.title1')}{' '}
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              {t('lessonsPage.title2')}
            </span>{' '}
            {t('lessonsPage.title3')}
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            {t('lessonsPage.subtitle')}
          </p>
        </div>
      </div>

      {/* Lessons */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {lessons.map((lesson) => {
            const tl = tLesson(lesson.id)
            return (
              <Link
                key={lesson.id}
                href={`/${locale}/lessons/${lesson.id}`}
                className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-100 hover:-translate-y-2 transition-all overflow-hidden"
              >
                {/* Colorful top stripe */}
                <div className="h-2 bg-gradient-to-r from-brand-400 via-blue-400 to-accent-500" />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm text-brand-400 font-bold">{t('lessonDetail.lesson')} {lesson.num}</span>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${lessonBadgeStyles[lesson.badgeColor]}`}>
                      {tl.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {tl.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm mb-6">{tl.description}</p>

                  {/* Component chips */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{t('lessonsPage.whatYouNeed')}</div>
                    <div className="flex flex-wrap gap-2">
                      {lesson.components.map((comp) => (
                        <span
                          key={comp}
                          className="font-mono text-xs bg-brand-50 border border-brand-100 text-brand-700 px-2.5 py-1 rounded-xl"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div className="flex gap-4 text-sm text-gray-400 font-semibold">
                      <span>⏱ {lesson.duration}</span>
                      <span>{lesson.components.length} {t('lessonsPage.components')}</span>
                    </div>
                    <span className="font-black text-brand-500 flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      {lesson.videoId ? `▶ ${t('lessonsPage.watchLesson')}` : t('lessonsPage.openLesson')} →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Coming Soon */}
        <div className="rounded-3xl border-2 border-dashed border-brand-200 bg-gradient-to-br from-brand-50 to-brand-50 p-10 text-center">
          <div className="text-5xl mb-4">🔨</div>
          <div className="font-mono text-xs text-brand-400 font-bold uppercase tracking-widest mb-2">{t('lessonsPage.comingSoonLabel')}</div>
          <h3 className="font-black text-2xl text-gray-900 mb-3">{t('lessonsPage.comingSoonTitle')}</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            {t('lessonsPage.comingSoonDesc')}
          </p>
          <a
            href="mailto:hello@salooote.am"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {t('lessonsPage.getNotified')}
          </a>
        </div>
      </div>
    </div>
  )
}
