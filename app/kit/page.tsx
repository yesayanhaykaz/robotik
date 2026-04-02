'use client'

import Link from 'next/link'
import {
  FaMicrochip, FaThLarge, FaLightbulb, FaShieldAlt, FaDotCircle,
  FaVolumeUp, FaThermometerHalf, FaLink, FaPlug, FaRobot,
  FaBox, FaStar, FaCheck, FaCrown,
} from 'react-icons/fa'
import { useLanguage } from '@/lib/i18n'

const kits = [
  {
    id: 'blink',
    nameKey: 'kit1Name',
    descKey: 'kit1Desc',
    forKey: 'kit1For',
    priceKey: 'kit1Price',
    color: 'orange',
    Icon: FaLightbulb,
    components: [
      { name: 'Arduino Uno', qty: '1×', Icon: FaMicrochip },
      { name: 'USB Cable', qty: '1×', Icon: FaPlug },
      { name: 'Breadboard', qty: '1×', Icon: FaThLarge },
      { name: 'LED (Red)', qty: '1×', Icon: FaLightbulb },
      { name: '220Ω Resistor', qty: '1×', Icon: FaShieldAlt },
      { name: 'Jumper Wires', qty: '2×', Icon: FaLink },
    ],
  },
  {
    id: 'button',
    nameKey: 'kit2Name',
    descKey: 'kit2Desc',
    forKey: 'kit2For',
    priceKey: 'kit2Price',
    color: 'emerald',
    Icon: FaDotCircle,
    components: [
      { name: 'Arduino Uno', qty: '1×', Icon: FaMicrochip },
      { name: 'USB Cable', qty: '1×', Icon: FaPlug },
      { name: 'Breadboard', qty: '1×', Icon: FaThLarge },
      { name: 'LEDs (R, G, B, Y)', qty: '4×', Icon: FaLightbulb },
      { name: '220Ω Resistors', qty: '4×', Icon: FaShieldAlt },
      { name: '10kΩ Resistor', qty: '1×', Icon: FaShieldAlt },
      { name: 'Pushbutton', qty: '1×', Icon: FaDotCircle },
      { name: 'Jumper Wires', qty: '10×', Icon: FaLink },
    ],
  },
  {
    id: 'full-beginner',
    nameKey: 'kit3Name',
    descKey: 'kit3Desc',
    forKey: 'kit3For',
    priceKey: 'kit3Price',
    badgeKey: 'kit3Badge',
    color: 'purple',
    Icon: FaBox,
    featured: true,
    components: [
      { name: 'Arduino Uno', qty: '1×', Icon: FaMicrochip },
      { name: 'USB Cable', qty: '1×', Icon: FaPlug },
      { name: 'Breadboard (830pt)', qty: '1×', Icon: FaThLarge },
      { name: 'LEDs (R, G, B, Y)', qty: '4×', Icon: FaLightbulb },
      { name: '220Ω Resistors', qty: '6×', Icon: FaShieldAlt },
      { name: '10kΩ Resistors', qty: '4×', Icon: FaShieldAlt },
      { name: 'Pushbuttons', qty: '3×', Icon: FaDotCircle },
      { name: 'Passive Buzzer', qty: '1×', Icon: FaVolumeUp },
      { name: 'Temp Sensor', qty: '1×', Icon: FaThermometerHalf },
      { name: 'Light Sensor', qty: '1×', Icon: FaThermometerHalf },
      { name: 'Jumper Wires', qty: '40×', Icon: FaLink },
    ],
  },
  {
    id: 'advanced',
    nameKey: 'kit4Name',
    descKey: 'kit4Desc',
    forKey: 'kit4For',
    priceKey: 'kit4Price',
    badgeKey: 'kit4Badge',
    color: 'cyan',
    Icon: FaRobot,
    comingSoon: true,
    components: [
      { name: 'Servo Motor', qty: '2×', Icon: FaRobot },
      { name: 'LCD Display 16×2', qty: '1×', Icon: FaThLarge },
      { name: 'IR Remote + Receiver', qty: '1×', Icon: FaPlug },
      { name: 'Ultrasonic Sensor', qty: '1×', Icon: FaThermometerHalf },
      { name: 'DC Motor + Driver', qty: '1×', Icon: FaRobot },
      { name: 'Bluetooth Module', qty: '1×', Icon: FaPlug },
      { name: 'Chassis + Wheels', qty: '1×', Icon: FaRobot },
      { name: 'Battery Pack', qty: '1×', Icon: FaPlug },
      { name: 'Extra Jumper Wires', qty: '20×', Icon: FaLink },
    ],
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; iconBg: string; badge: string; glow: string; button: string }> = {
  orange: {
    border: 'border-orange-200',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    iconBg: 'bg-orange-100',
    badge: 'bg-orange-100 text-orange-700 border-orange-200',
    glow: 'hover:shadow-orange-200',
    button: 'from-orange-500 to-orange-600',
  },
  emerald: {
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    glow: 'hover:shadow-emerald-200',
    button: 'from-emerald-500 to-emerald-600',
  },
  purple: {
    border: 'border-purple-200',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    iconBg: 'bg-purple-100',
    badge: 'bg-purple-100 text-purple-700 border-purple-200',
    glow: 'hover:shadow-purple-200',
    button: 'from-purple-500 to-purple-600',
  },
  cyan: {
    border: 'border-cyan-200',
    bg: 'bg-cyan-50',
    text: 'text-cyan-600',
    iconBg: 'bg-cyan-100',
    badge: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    glow: 'hover:shadow-cyan-200',
    button: 'from-cyan-500 to-cyan-600',
  },
}

export default function KitPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 py-16 px-5 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 font-semibold hover:text-emerald-600 transition-colors mb-6">
            {t('kitPage.back')}
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-emerald-400 inline-block" />
            {t('kitPage.label')}
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            {t('kitPage.title1')}{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              {t('kitPage.title2')}
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl font-body">
            {t('kitPage.subtitle')}
          </p>
        </div>
      </div>

      {/* Kits Grid */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kits.map((kit) => {
            const c = colorMap[kit.color]
            const name = t(`kitPage.${kit.nameKey}`)
            const desc = t(`kitPage.${kit.descKey}`)
            const forLabel = t(`kitPage.${kit.forKey}`)
            const price = t(`kitPage.${kit.priceKey}`)
            const badge = kit.badgeKey ? t(`kitPage.${kit.badgeKey}`) : null

            return (
              <div
                key={kit.id}
                className={`relative rounded-3xl border-2 ${c.border} ${kit.featured ? 'ring-2 ring-purple-300 ring-offset-2' : ''} ${kit.comingSoon ? 'opacity-75' : ''} bg-white overflow-hidden hover:shadow-2xl ${c.glow} transition-all`}
              >
                {/* Featured badge */}
                {badge && !kit.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${c.badge}`}>
                      <FaCrown size={10} /> {badge}
                    </span>
                  </div>
                )}
                {kit.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 bg-gray-100 text-gray-500">
                      {t('kitPage.comingSoon')}
                    </span>
                  </div>
                )}

                {/* Top color stripe */}
                <div className={`h-2 bg-gradient-to-r ${c.button}`} />

                <div className="p-8">
                  {/* Kit icon + name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-sm`}>
                      <kit.Icon size={26} className={c.text} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900">{name}</h2>
                      <span className={`text-xs font-bold ${c.text}`}>{t('kitPage.perfectFor')}: {forLabel}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-sm mb-6 font-body">{desc}</p>

                  {/* Components */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      {t('kitPage.whatsIncluded')}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {kit.components.map((comp) => (
                        <div key={comp.name} className={`flex items-center gap-2.5 ${c.bg} rounded-xl px-3 py-2 border ${c.border}`}>
                          <comp.Icon size={12} className={c.text} />
                          <div>
                            <span className="text-xs font-semibold text-gray-700 block leading-tight">{comp.name}</span>
                            <span className="text-[10px] font-mono text-gray-400">{comp.qty}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-black text-gray-900">{price}</span>
                    </div>
                    {kit.comingSoon ? (
                      <span className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-400 font-bold text-sm">
                        {t('kitPage.comingSoon')}
                      </span>
                    ) : (
                      <a
                        href="mailto:hello@salooote.am"
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${c.button} text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm`}
                      >
                        {t('kitPage.orderNow')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Related Lessons CTA */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">{t('kitPage.questionsTitle')}</h3>
            <p className="text-gray-500 font-body max-w-lg">{t('kitPage.questionsDesc')}</p>
          </div>
          <a
            href="mailto:hello@salooote.am"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {t('kitPage.contactUs')}
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400 font-body">{t('kitPage.shipsNote')}</p>
      </div>
    </div>
  )
}
