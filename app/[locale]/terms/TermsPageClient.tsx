"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

/* ── localised strings ───────────────────────────────────────── */
const content = {
  en: {
    title: "Terms of Use — Robotik",
    date: "Effective Date: April 8, 2026",
    back: "← Back to Home",
    sections: [
      {
        heading: "1. Educational Purpose",
        body: "Robotik is a free educational platform designed to teach electronics, robotics, and technology to learners of all ages.",
      },
      {
        heading: "2. Intellectual Property",
        badge: "CRITICAL",
        alert: true,
        warning: "STRICTLY PROHIBITED",
        body: "All content on Robotik — including Lessons, Simulations, Videos, Texts, Graphics, and Code — is the exclusive property of Robotik.",
        forbidden: [
          "Copy or Reproduce any content",
          "Distribute or Publish any materials",
          "Sell or use for commercial purposes",
          "Use for external educational purposes",
        ],
        forbiddenIntro: "You are NOT allowed to:",
        violationIntro: "Any violation may result in:",
        violations: [
          "Legal action",
          "Content takedown requests",
          "Account termination",
        ],
        permissionNote: "All of the above require prior written permission from Robotik.",
      },
      {
        heading: "3. User Accounts",
        body: "Users must provide accurate information when creating an account. You are solely responsible for maintaining the confidentiality of your account credentials.",
      },
      {
        heading: "4. User Content",
        body: "Users may upload projects and other content, but must not upload anything that violates applicable laws or infringes on the rights of others. Robotik reserves the right to remove any user content at its sole discretion.",
      },
      {
        heading: "5. Limitation of Liability",
        body: 'Robotik is provided "as is" without any warranties or guarantees of any kind, express or implied.',
      },
      {
        heading: "6. Changes to These Terms",
        body: "We reserve the right to update or modify these terms at any time. Continued use of Robotik after changes constitutes acceptance of the new terms.",
      },
    ],
  },
  hy: {
    title: "Օգտագործման պայմաններ — Robotik",
    date: "Ուժի մեի մտնելու ամսաթիվ՝ 08.04.2026",
    back: "← Վերադառնալ գլխավոր",
    sections: [
      {
        heading: "1. Նպատակ",
        body: "Robotik-ը կրթական հարթակ է՝ նախատեսված էլեկտրոնիկա և տեխնոլոգիաներ սովորելու համար։",
      },
      {
        heading: "2. Մտավոր սեփականություն",
        badge: "ԱՄԵՆԱԿԱՌԵՎՈՌ",
        alert: true,
        warning: "ԽՍՏԻՎ ԱՌԳԵԼՎՈՒՄ Է",
        body: "Robotik-ի ամբողի բովանդակությունը՝ Դասեր, Սիմուլյացիաներ, Տեսանյութեր, Տեքստեր, Գրաֆիկա, Կոդ պատկանում է Robotik-ին։",
        forbidden: [
          "Պատճենել",
          "Տարածել",
          "Վաճառել",
          "Օգտագործել այլ նախագծերում առանց գրավոր թույլտվության",
        ],
        forbiddenIntro: "ԱՌԳԵԼՎՈՒՄ Է՝",
        violationIntro: "Խախտման դեպքում՝",
        violations: [
          "Կիրառվում են իրավական միջոցներ",
          "Հաշիվը կարող է արգելափակվել",
        ],
        permissionNote: "",
      },
      {
        heading: "3. Օգտատերեր",
        body: "Պարտավոր եք տրամադրել ճիշտ տվյալներ։",
      },
      {
        heading: "4. Բովանդակություն",
        body: "Օգտատերերը կարող են տեղադրել բովանդակություն, սակայն այն պետք է լինի օրինական։",
      },
      {
        heading: "5. Պատասխանատվություն",
        body: "Հարթակը տրամադրվում է «ինչպես կա»։",
      },
      {
        heading: "6. Փոփոխություններ",
        body: "Պայմանները կարող են փոփոխվել։",
      },
    ],
  },
  ru: {
    title: "Условия использования — Robotik",
    date: "Дата вступления: 08.04.2026",
    back: "← На главную",
    sections: [
      {
        heading: "1. Назначение",
        body: "Robotik — образовательная платформа, предназначенная для обучения электронике, робототехнике и технологиям.",
      },
      {
        heading: "2. Интеллектуальная собственность",
        badge: "КЛЮЧЕВОЕ",
        alert: true,
        warning: "СТРОГО ЗАПРЕЩЕНО",
        body: "Весь контент Robotik: Уроки, Симуляции, Видео, Тексты, Код принадлежит Robotik.",
        forbidden: [
          "Копировать",
          "Распространять",
          "Продавать",
          "Использовать без письменного разрешения",
        ],
        forbiddenIntro: "Запрещено:",
        violationIntro: "Нарушение ведёт к:",
        violations: [
          "Юридическим последствиям",
          "Блокировке аккаунта",
        ],
        permissionNote: "",
      },
      {
        heading: "3. Аккаунты",
        body: "Пользователь отвечает за свой аккаунт.",
      },
      {
        heading: "4. Контент",
        body: "Контент не должен нарушать закон.",
      },
      {
        heading: "5. Ответственность",
        body: 'Платформа предоставляется "как есть".',
      },
      {
        heading: "6. Изменения",
        body: "Условия могут обновляться.",
      },
    ],
  },
} as const

type Locale = keyof typeof content
type Section = (typeof content)[Locale]["sections"][number]
type AlertSection = Extract<Section, { alert: true }>

function isAlert(s: Section): s is AlertSection {
  return "alert" in s && s.alert === true
}

/* ── component ───────────────────────────────────────────── */
export default function TermsPageClient() {
  const { locale } = useLanguage()
  const t = content[(locale as Locale) ?? "en"] ?? content.en

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        {/* back link */}
        <Link
          href={`/${locale}`}
          className="inline-block mb-8 text-brand-600 hover:text-brand-700 font-medium transition-colors"
        >
          {t.back}
        </Link>

        {/* title & date */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-700 mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-gray-500 mb-10">{t.date}</p>

        {/* sections */}
        <div className="space-y-10">
          {t.sections.map((section, i) =>
            isAlert(section) ? (
              <section
                key={i}
                className="rounded-2xl border-2 border-red-300 bg-red-50 p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-red-700">
                    {section.heading}
                  </h2>
                  <span className="rounded-full bg-red-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                    {section.badge}
                  </span>
                </div>

                {section.warning && (
                  <p className="mb-4 inline-block rounded-md bg-red-600 px-4 py-1.5 text-sm font-bold text-white tracking-wide">
                    {section.warning}
                  </p>
                )}

                <p className="text-gray-800 leading-relaxed mb-4">
                  {section.body}
                </p>

                {"forbiddenIntro" in section && section.forbiddenIntro && (
                  <p className="font-semibold text-red-700 mb-2">
                    {section.forbiddenIntro}
                  </p>
                )}

                {"forbidden" in section && (
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-800">
                    {(section as AlertSection).forbidden.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}

                {"violationIntro" in section && section.violationIntro && (
                  <p className="font-semibold text-red-700 mb-2">
                    {section.violationIntro}
                  </p>
                )}

                {"violations" in section && (
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-800">
                    {(section as AlertSection).violations.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}

                {"permissionNote" in section && section.permissionNote && (
                  <p className="mt-2 text-sm italic text-red-600">
                    {section.permissionNote}
                  </p>
                )}
              </section>
            ) : (
              <section key={i}>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-700 mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              </section>
            ),
          )}
        </div>
      </article>
    </main>
  )
}
