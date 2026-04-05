'use client'

import Link from 'next/link'
import {
  FaVideo, FaBook, FaWrench, FaBox, FaToolbox, FaBrain,
  FaChevronLeft, FaChevronRight, FaRobot, FaPlug, FaLightbulb,
  FaLink, FaLaptopCode, FaCheckCircle, FaDotCircle, FaShieldAlt,
  FaMicrochip,
} from 'react-icons/fa'
import { lessons, concepts, lessonBadgeStyles, colorStyles } from '@/lib/data'
import VideoPlayer from '@/components/VideoPlayer'
import { useLanguage } from '@/lib/i18n'

const relatedConceptIds: Record<string, string[]> = {
  blink:  ['electricity', 'voltage', 'resistor', 'led', 'microcontroller'],
  button: ['current', 'resistance', 'resistor', 'led', 'microcontroller'],
}

const stepIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>[]> = {
  blink: [FaRobot, FaPlug, FaLightbulb, FaLink, FaLaptopCode, FaCheckCircle],
  button: [FaLightbulb, FaDotCircle, FaShieldAlt, FaLink, FaLaptopCode, FaCheckCircle],
}

export default function LessonDetailClient({ id }: { id: string }) {
  const { t, tLesson, tConcept, locale } = useLanguage()
  const lesson = lessons.find((l) => l.id === id)
  if (!lesson) return null

  const idx = lessons.indexOf(lesson)
  const prev = lessons[idx - 1]
  const next = lessons[idx + 1]
  const related = concepts.filter((c) => (relatedConceptIds[lesson.id] ?? []).includes(c.id))
  const tl = tLesson(lesson.id)
  const icons = stepIcons[lesson.id] ?? []

  return (
    <div className="min-h-screen bg-white">
      <div className="h-1.5 bg-gradient-to-r from-brand-400 via-accent-400 to-accent-500" />

      {/* Header */}
      <div
        className="relative py-14 px-5 border-b border-brand-100 overflow-hidden"
        style={lesson.heroImage ? {
          backgroundImage: `url(${lesson.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : undefined}
      >
        {lesson.heroImage && (
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        )}
        {!lesson.heroImage && <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-brand-50" />}
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href={`/${locale}/lessons`} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors mb-6">
            <FaChevronLeft size={12} /> {t('lessonDetail.allLessons')}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-brand-400 font-bold">{t('lessonDetail.lesson')} {lesson.num}</span>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${lessonBadgeStyles[lesson.badgeColor]}`}>{tl.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{tl.title}</h1>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm font-bold px-4 py-1.5 rounded-full border border-brand-200 bg-brand-100 text-brand-700">
              {lesson.duration}
            </span>
            <span className="text-sm font-bold px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600">
              {lesson.components.length} {t('lessonDetail.components')}
            </span>
            {lesson.videoId ? (
              <span className="text-sm font-bold px-4 py-1.5 rounded-full border border-brand-200 bg-brand-100 text-brand-700 inline-flex items-center gap-2">
                <FaVideo size={12} /> {t('lessonDetail.videoAvailable')}
              </span>
            ) : (
              <span className="text-sm font-bold px-4 py-1.5 rounded-full border border-gray-200 bg-gray-100 text-gray-500 inline-flex items-center gap-2">
                <FaVideo size={12} /> {t('lessonDetail.videoComingSoon')}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left */}
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                <FaVideo size={13} className="text-gray-300" /> {t('lessonDetail.watchLesson')}
              </h2>
              <VideoPlayer videoId={lesson.videoId} title={tl.title} />
            </div>
            {(lesson.id === 'blink' || lesson.id === 'button') && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                  <FaMicrochip size={13} className="text-gray-300" /> {t('lessonDetail.tryCircuit')}
                </h2>
                <p className="text-gray-500 text-sm mb-4 font-body">{t('lessonDetail.tryCircuitDesc')}</p>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://withdiode.com/embed/62716731-5e1e-4622-86af-90d8e6b5123b"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                    title="Arduino LED Toggler"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  />
                </div>
              </div>
            )}

            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                <FaBook size={13} className="text-gray-300" /> {t('lessonDetail.aboutLesson')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg font-body">{tl.description}</p>
            </div>
            {tl.steps.length > 0 && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <FaWrench size={13} className="text-gray-300" /> {t('lessonDetail.whatYoullDo')}
                </h2>
                <div className="flex flex-col gap-3">
                  {tl.steps.map((stepText, i) => {
                    const StepIcon = icons[i] ?? FaCheckCircle
                    return (
                      <div key={i} className="flex items-start gap-4 bg-brand-50 rounded-2xl border border-brand-100 p-4">
                        <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <div className="flex items-center gap-2 pt-1">
                          <StepIcon size={14} className="text-brand-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-semibold font-body">{stepText}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <FaBox size={14} className="text-gray-400" /> {t('lessonDetail.componentsNeeded')}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {lesson.components.map((comp) => (
                  <li key={comp} className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-400 flex-shrink-0" />
                    <span className="font-mono font-semibold text-gray-700">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-brand-50 rounded-2xl border border-brand-200 p-6">
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-3">
                <FaToolbox size={16} className="text-brand-500" />
              </div>
              <h3 className="font-black text-gray-800 mb-2">{t('lessonDetail.dontHaveParts')}</h3>
              <p className="text-sm text-gray-500 mb-4 font-body">{t('lessonDetail.dontHavePartsDesc')}</p>
              <Link href={`/${locale}/kit`} className="w-full block text-center bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm">
                {t('lessonDetail.orderKit')}
              </Link>
            </div>

            {related.length > 0 && (
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                  <FaBrain size={14} className="text-brand-400" /> {t('lessonDetail.conceptsUsed')}
                </h3>
                <div className="flex flex-col gap-2">
                  {related.map((con) => {
                    const { Icon } = con
                    const cc = colorStyles[con.color]
                    return (
                      <Link key={con.id} href={`/${locale}/concepts/${con.id}`}
                        className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-3 py-2.5 hover:border-brand-300 hover:shadow-sm transition-all text-sm font-semibold text-gray-700 hover:text-brand-700"
                      >
                        <Icon size={14} className={cc.tagText} />
                        <span>{tConcept(con.id).title}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex justify-between gap-4">
          {prev ? (
            <Link href={`/${locale}/lessons/${prev.id}`} className="flex items-center gap-3 group hover:bg-gray-50 rounded-2xl px-4 py-3 transition-all -ml-4">
              <FaChevronLeft size={16} className="text-gray-300 group-hover:text-brand-400 transition-colors" />
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{t('lessonDetail.previousLesson')}</div>
                <div className="font-black text-gray-800 group-hover:text-brand-600 transition-colors">{tLesson(prev.id).title}</div>
              </div>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/${locale}/lessons/${next.id}`} className="flex items-center gap-3 text-right group hover:bg-gray-50 rounded-2xl px-4 py-3 transition-all -mr-4 ml-auto">
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{t('lessonDetail.nextLesson')}</div>
                <div className="font-black text-gray-800 group-hover:text-brand-600 transition-colors">{tLesson(next.id).title}</div>
              </div>
              <FaChevronRight size={16} className="text-gray-300 group-hover:text-brand-400 transition-colors" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
