'use client'

import Link from 'next/link'
import {
  FaPlay, FaWrench, FaLightbulb,
  FaMicrochip, FaThLarge, FaShieldAlt, FaDotCircle, FaVolumeUp, FaThermometerHalf, FaLink,
  FaBrain, FaRocket, FaGlobeAmericas,
  FaClock, FaBullseye, FaPencilAlt, FaStar, FaGamepad, FaGraduationCap,
} from 'react-icons/fa'
import { concepts, lessons, colorStyles, lessonBadgeStyles } from '@/lib/data'
import { useLanguage } from '@/lib/i18n'

const kitItems = [
  { Icon: FaMicrochip,       name: 'Arduino Uno',   qty: '1× board',           color: 'text-brand-600' },
  { Icon: FaThLarge,         name: 'Breadboard',    qty: '1× 830-point',       color: 'text-blue-500' },
  { Icon: FaLightbulb,       name: 'LEDs',          qty: '4× (R, G, B, Y)',    color: 'text-brand-400'  },
  { Icon: FaShieldAlt,       name: 'Resistors',     qty: '220Ω + 10kΩ pack',   color: 'text-brand-500'  },
  { Icon: FaDotCircle,       name: 'Pushbuttons',   qty: '3× tactile buttons', color: 'text-brand-600' },
  { Icon: FaVolumeUp,        name: 'Buzzer',        qty: '1× passive buzzer',  color: 'text-brand-600' },
  { Icon: FaThermometerHalf, name: 'Sensors',       qty: 'Temperature + Light', color: 'text-blue-500'  },
  { Icon: FaLink,            name: 'Jumper Wires',  qty: '40× M-M wires',      color: 'text-brand-600' },
]

export default function HomePage() {
  const { t, tConcept, tLesson } = useLanguage()
  const previewConcepts = concepts.slice(0, 6)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-2 text-xs font-bold text-brand-600 uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot inline-block" />
              {t('home.heroBadge')}
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t('home.heroTitle1')}<br />
              {t('home.heroTitle2')}{' '}
              <span className="bg-gradient-to-r from-brand-500 via-accent-500 to-accent-600 bg-clip-text text-transparent">
                {t('home.heroTitle3')}
              </span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md font-body">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/concepts" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                {t('home.heroStartLearning')}
              </Link>
              <Link href="/lessons" className="inline-flex items-center gap-2 bg-white text-gray-700 font-bold px-7 py-3.5 rounded-full border-2 border-gray-200 hover:border-brand-300 hover:text-brand-600 transition-all">
                {t('home.heroSeeLessons')}
              </Link>
            </div>
          </div>

          {/* Circuit Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 animate-float">
              <div className="absolute inset-0 rounded-full border-2 border-brand-200 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border-2 border-gray-200 animate-spin-reverse" />
              <div className="absolute inset-16 rounded-full border-2 border-blue-200 animate-spin-slow" style={{ animationDuration: '15s' }} />
              <div className="absolute inset-24 rounded-full bg-white shadow-xl border-2 border-brand-100 flex flex-col items-center justify-center gap-1">
                <FaMicrochip size={32} className="text-brand-500" />
                <span className="font-mono text-xs text-brand-500 font-bold">Arduino</span>
              </div>
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] animate-blink-1" />
              <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-5 h-5 rounded-full bg-brand-300 shadow-[0_0_12px_rgba(255,45,117,0.8)] animate-blink-2" />
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] animate-blink-3" />
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-5 h-5 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(255,23,68,0.8)] animate-blink-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-brand-50 to-blue-50 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <div className="flex flex-wrap justify-center gap-0 divide-x divide-brand-100">
            {[
              { num: '22', label: t('home.statConcepts') },
              { num: '2',  label: t('home.statLessons') },
              { num: '7–15', label: t('home.statAges') },
              { num: t('home.statFree'), label: t('home.statFreeLabel') },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 px-8 py-2">
                <span className="text-2xl font-black text-brand-500">{stat.num}</span>
                <span className="text-sm font-semibold text-gray-500 leading-tight font-body">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-500 uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-brand-400 inline-block" />
              {t('home.methodLabel')}
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-3">{t('home.methodTitle')}</h2>
            <p className="text-gray-500 text-lg max-w-xl font-body">
              {t('home.methodSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', Icon: FaPlay,      title: t('home.step1Title'), desc: t('home.step1Desc'), color: 'bg-brand-50 border-brand-200', iconColor: 'text-brand-500', numColor: 'text-brand-400' },
              { num: '02', Icon: FaWrench,    title: t('home.step2Title'), desc: t('home.step2Desc'), color: 'bg-blue-50 border-blue-200', iconColor: 'text-blue-500', numColor: 'text-blue-400' },
              { num: '03', Icon: FaLightbulb, title: t('home.step3Title'), desc: t('home.step3Desc'), color: 'bg-gray-50 border-gray-200', iconColor: 'text-gray-500', numColor: 'text-gray-500' },
            ].map((step) => (
              <div key={step.num} className={`rounded-2xl border-2 p-8 ${step.color} hover:-translate-y-1 hover:shadow-lg transition-all`}>
                <div className={`font-mono text-xs font-bold mb-4 ${step.numColor}`}>{step.num} —</div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${step.color}`}>
                  <step.Icon size={24} className={step.iconColor} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONCEPTS PREVIEW ──────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">
                <span className="w-5 h-px bg-blue-400 inline-block" />
                {t('home.conceptsLabel')}
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-3">{t('home.conceptsTitle')}</h2>
              <p className="text-gray-500 text-lg max-w-xl font-body">{t('home.conceptsSubtitle')}</p>
            </div>
            <Link href="/concepts" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-600 text-white font-bold px-6 py-3 rounded-full hover:bg-brand-700 transition-colors shadow-md">
              {t('home.viewAll10')}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewConcepts.map((concept) => {
              const c = colorStyles[concept.color]
              const { Icon } = concept
              const tc = tConcept(concept.id)
              return (
                <Link key={concept.id} href={`/concepts/${concept.id}`}
                  className={`group bg-white rounded-2xl border-2 ${c.border} p-6 hover:-translate-y-1 hover:shadow-xl ${c.glowShadow} transition-all`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                      <Icon size={22} className={c.tagText} />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.badge}`}>{concept.duration}</span>
                  </div>
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md ${c.tagBg} ${c.tagText} mb-3 font-mono`}>{t('conceptsPage.concept')} {concept.num}</span>
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-brand-600 transition-colors">{tc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-body">{tc.description}</p>
                  <div className={`mt-4 text-sm font-bold ${c.tagText} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                    {t('home.watchConcept')}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LESSONS ───────────────────────────────────────── */}
      <section id="lessons" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-500 uppercase tracking-widest mb-3">
                <span className="w-5 h-px bg-brand-400 inline-block" />
                {t('home.lessonsLabel')}
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-3">{t('home.lessonsTitle')}</h2>
              <p className="text-gray-500 text-lg max-w-xl font-body">{t('home.lessonsSubtitle')}</p>
            </div>
            <Link href="/lessons" className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-500 text-white font-bold px-6 py-3 rounded-full hover:bg-brand-600 transition-colors shadow-md">
              {t('home.viewAllLessons')}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson) => {
              const tl = tLesson(lesson.id)
              return (
                <Link key={lesson.id} href={`/lessons/${lesson.id}`}
                  className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100 hover:-translate-y-1 transition-all overflow-hidden"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-brand-400 font-bold">{t('lessonDetail.lesson')} {lesson.num} —</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${lessonBadgeStyles[lesson.badgeColor]}`}>{tl.badge}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{tl.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-body">{tl.description}</p>
                  </div>
                  <div className="px-7 pb-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{t('home.whatYouNeed')}</div>
                    <div className="flex flex-wrap gap-2">
                      {lesson.components.map((comp) => (
                        <span key={comp} className="font-mono text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg">{comp}</span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-100 px-7 py-4 flex items-center justify-between">
                    <div className="flex gap-4 text-xs text-gray-400 font-semibold font-body">
                      <span>⏱ {lesson.duration}</span>
                      <span>{lesson.components.length} {t('lessonDetail.components')}</span>
                    </div>
                    <span className="text-sm font-bold text-brand-500 flex items-center gap-1 group-hover:gap-2 transition-all">{t('home.watchLesson')}</span>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-6 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-blue-400 font-bold mb-1 uppercase tracking-widest">{t('home.comingSoonLabel')}</div>
              <div className="font-black text-gray-900 text-lg mb-1">{t('home.comingSoonTitle')}</div>
              <div className="text-sm text-gray-500 font-body">{t('home.comingSoonDesc')}</div>
            </div>
            <a href="mailto:hello@salooote.am" className="flex-shrink-0 px-5 py-2.5 rounded-full border-2 border-blue-300 text-blue-600 font-bold text-sm hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
              {t('home.getNotified')}
            </a>
          </div>
        </div>
      </section>

      {/* ── STARTER KIT ───────────────────────────────────── */}
      <section id="kit" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {kitItems.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border-2 border-gray-100 p-4 flex items-center gap-3 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <item.Icon size={18} className={item.color} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">{item.name}</div>
                    <div className="font-mono text-xs text-gray-400">{item.qty}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                <span className="w-5 h-px bg-blue-400 inline-block" />
                {t('home.kitLabel')}
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-5">{t('home.kitTitle')}</h2>
              <p className="text-gray-500 leading-relaxed mb-4 font-body">
                {t('home.kitDesc1')}
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 font-body">
                {t('home.kitDesc2')}
              </p>
              <Link href="/kit" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                {t('home.orderKit')}
              </Link>
              <p className="mt-4 text-sm text-gray-400 font-body">{t('home.kitShips')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-500 uppercase tracking-widest mb-6">
                <span className="w-5 h-px bg-brand-400 inline-block" />
                {t('home.missionLabel')}
              </div>
              <blockquote className="text-3xl font-black text-gray-900 leading-snug mb-6 pl-5 border-l-4 border-brand-400">
                &ldquo;{t('home.missionQuote1')}
                <br />
                {t('home.missionQuote2')}{' '}
                <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">{t('home.missionQuote3')}</span>{' '}
                {t('home.missionQuote4')}&rdquo;
              </blockquote>
              <p className="text-gray-500 leading-relaxed font-body">
                {t('home.missionDesc')}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { Icon: FaBrain,         title: t('home.point1Title'), desc: t('home.point1Desc'), color: 'bg-brand-50 border-brand-200 text-brand-500' },
                { Icon: FaRocket,        title: t('home.point2Title'), desc: t('home.point2Desc'), color: 'bg-blue-50 border-blue-200 text-blue-500' },
                { Icon: FaGlobeAmericas, title: t('home.point3Title'), desc: t('home.point3Desc'), color: 'bg-gray-50 border-gray-200 text-gray-500' },
              ].map((point) => {
                const [bg, border, ic] = point.color.split(' ')
                return (
                  <div key={point.title} className={`rounded-2xl border-2 p-5 flex gap-4 ${bg} ${border} hover:shadow-md transition-all`}>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <point.Icon size={18} className={ic} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-1">{point.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-body">{point.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR PARENTS ───────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-blue-400 inline-block" />
              {t('home.parentsLabel')}
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-3">{t('home.parentsTitle')}</h2>
            <p className="text-gray-500 text-lg font-body">{t('home.parentsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: FaClock,         title: t('home.parent1Title'), desc: t('home.parent1Desc'), iconColor: 'text-brand-500',  border: 'border-brand-200' },
              { Icon: FaBullseye,      title: t('home.parent2Title'), desc: t('home.parent2Desc'), iconColor: 'text-blue-500',  border: 'border-blue-200' },
              { Icon: FaPencilAlt,     title: t('home.parent3Title'), desc: t('home.parent3Desc'), iconColor: 'text-brand-500',    border: 'border-brand-200'   },
              { Icon: FaStar,          title: t('home.parent4Title'), desc: t('home.parent4Desc'), iconColor: 'text-gray-500',    border: 'border-gray-200'   },
              { Icon: FaGamepad,       title: t('home.parent5Title'), desc: t('home.parent5Desc'), iconColor: 'text-blue-500', border: 'border-blue-200'},
              { Icon: FaGraduationCap, title: t('home.parent6Title'), desc: t('home.parent6Desc'), iconColor: 'text-brand-400',  border: 'border-brand-200' },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border-2 p-6 bg-white ${card.border} hover:-translate-y-1 hover:shadow-lg transition-all`}>
                <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                  <card.Icon size={20} className={card.iconColor} />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-body">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-brand-500 via-accent-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">{t('home.ctaTitle')}</h2>
          <p className="text-white/80 text-lg max-w-md mx-auto mb-10 font-body">
            {t('home.ctaSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/concepts" className="bg-white text-brand-600 font-black px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg">
              {t('home.ctaExplore')}
            </Link>
            <Link href="/lessons" className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all text-lg">
              {t('home.ctaLessons')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
