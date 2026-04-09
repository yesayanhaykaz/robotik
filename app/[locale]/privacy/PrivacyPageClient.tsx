'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

const content = {
  en: {
    title: 'Privacy Policy — Robotik',
    date: 'Effective Date: April 8, 2026',
    intro:
      'Robotik (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: null,
        bullets: [
          'Name, email address (for accounts)',
          'Usage data (pages visited, interactions)',
          'Content submitted by users (projects, comments, uploads)',
        ],
      },
      {
        heading: '2. How We Use Data',
        body: null,
        bullets: [
          'Provide and improve our educational platform',
          'Personalize user experience',
          'Communicate updates or support responses',
        ],
      },
      {
        heading: '3. Data Protection',
        body: 'We implement appropriate technical and organizational measures to protect your data.',
        bullets: [],
      },
      {
        heading: '4. Children\u2019s Privacy',
        body: 'Our platform is designed for children, but accounts should be created under parental supervision where required.',
        bullets: [],
      },
      {
        heading: '5. Third-Party Services',
        body: 'We may use third-party tools (analytics, hosting). These services may collect limited data.',
        bullets: [],
      },
      {
        heading: '6. User Content',
        body: 'Any content uploaded by users remains their responsibility. However, by uploading content, you grant Robotik a non-exclusive right to display it within the platform.',
        bullets: [],
      },
      {
        heading: '7. Contact',
        body: null,
        bullets: ['hello@salooote.am', 'robotik@salooote.am'],
      },
    ],
    back: '\u2190 Back to Home',
  },

  hy: {
    title: '\u0533\u0561\u0572\u057f\u0576\u056b\u0578\u0582\u0569\u0575\u0561\u0576 \u0584\u0561\u0572\u0561\u0584\u0561\u056f\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u2014 Robotik',
    date: '\u0548\u0582\u056a\u056b \u0574\u0565\u056b \u0574\u057f\u0576\u0565\u056c\u0578\u0582 \u0561\u0574\u057d\u0561\u0569\u056b\u057e\u055d 08.04.2026',
    intro:
      'Robotik-\u0568 \u0570\u0561\u0580\u0563\u0578\u0582\u0574 \u0567 \u0571\u0565\u0580 \u0561\u0576\u0571\u0576\u0561\u056f\u0561\u0576 \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580\u0568 \u0587 \u057a\u0561\u0580\u057f\u0561\u057e\u0578\u0580\u057e\u0578\u0582\u0574 \u0567 \u057a\u0561\u0577\u057f\u057a\u0561\u0576\u0565\u056c \u0564\u0580\u0561\u0576\u0584\u0589',
    sections: [
      {
        heading: '1. \u0540\u0561\u057e\u0561\u0584\u057e\u0578\u0572 \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580',
        body: null,
        bullets: [
          '\u0531\u0576\u0578\u0582\u0576, \u0567\u056c. \u0570\u0561\u057d\u0581\u0565',
          '\u0555\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u0574\u0561\u0576 \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580 (\u0567\u056b\u0565\u0580\u056b \u0564\u056b\u057f\u0578\u0582\u0574, \u0563\u0578\u0580\u056e\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580)',
          '\u0555\u0563\u057f\u0561\u057f\u0565\u0580\u0565\u0580\u056b \u056f\u0578\u0572\u0574\u056b\u0581 \u057f\u0565\u0572\u0561\u0564\u0580\u057e\u0561\u056e \u0562\u0578\u057e\u0561\u0576\u0564\u0561\u056f\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
        ],
      },
      {
        heading: '2. \u054f\u057e\u0575\u0561\u056c\u0576\u0565\u0580\u056b \u0585\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u0578\u0582\u0574',
        body: null,
        bullets: [
          '\u0540\u0561\u0580\u0569\u0561\u056f\u0568 \u0561\u057a\u0561\u0570\u0578\u057e\u0565\u056c\u0578\u0582 \u0587 \u0562\u0561\u0580\u0565\u056c\u0561\u057e\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580',
          '\u0555\u0563\u057f\u0561\u057f\u0565\u0580\u0565\u0580\u056b \u0583\u0578\u0580\u0571\u0568 \u0561\u0576\u0570\u0561\u057f\u0561\u056f\u0561\u0576\u0561\u0581\u0576\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580',
          '\u053f\u0561\u057a \u0570\u0561\u057d\u057f\u0561\u057f\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580',
        ],
      },
      {
        heading: '3. \u054a\u0561\u0577\u057f\u057a\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
        body: '\u0544\u0565\u0576\u0584 \u056f\u056b\u0580\u0561\u057c\u0578\u0582\u0574 \u0565\u0576\u0584 \u0570\u0561\u0574\u0561\u057a\u0561\u057f\u0561\u057d\u056d\u0561\u0576 \u0574\u056b\u057b\u0578\u0581\u0576\u0565\u0580 \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580\u056b \u0561\u0576\u057e\u057f\u0561\u0576\u0563\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576 \u0561\u057a\u0561\u0570\u0578\u057e\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580\u0589',
        bullets: [],
      },
      {
        heading: '4. \u0535\u0580\u0565\u056d\u0561\u0576\u0565\u0580\u056b \u057f\u057e\u0575\u0561\u056c\u0576\u0565\u0580',
        body: '\u0540\u0561\u0580\u0569\u0561\u056f\u0568 \u0576\u0561\u056d\u0561\u057f\u0565\u057d\u057e\u0561\u056e \u0567 \u0565\u0580\u0565\u056d\u0561\u0576\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0580, \u057d\u0561\u056f\u0561\u0575\u0576 \u0561\u0576\u0570\u0580\u0561\u056a\u0565\u0577\u057f\u0578\u0582\u0569\u0575\u0561\u0576 \u0564\u0565\u057a\u0584\u0578\u0582\u0574 \u057a\u0565\u057f\u0584 \u0567 \u0585\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u057e\u056b \u056e\u0576\u0578\u0572\u0576\u0565\u0580\u056b \u057e\u0565\u0580\u0561\u0570\u057d\u056f\u0578\u0572\u0578\u0582\u0569\u0575\u0561\u0574\u0562\u0589',
        bullets: [],
      },
      {
        heading: '5. \u0535\u0580\u0580\u0578\u0580\u0564 \u056f\u0578\u0572\u0574\u0565\u0580',
        body: '\u053f\u0561\u0580\u0578\u0572 \u0565\u0576\u0584 \u0585\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u0565\u056c \u0561\u0580\u057f\u0561\u0584\u056b\u0576 \u056e\u0561\u057c\u0561\u0575\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580 (analytics, hosting)\u0589',
        bullets: [],
      },
      {
        heading: '6. \u0555\u0563\u057f\u0561\u057f\u056b\u0580\u0578\u057b\u056b \u0562\u0578\u057e\u0561\u0576\u0564\u0561\u056f\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
        body: '\u0555\u0563\u057f\u0561\u057f\u0565\u0580\u0568 \u057a\u0561\u057f\u0561\u057d\u056d\u0561\u0576\u0561\u057f\u0578\u0582 \u0567 \u056b\u0580 \u057f\u0565\u0572\u0561\u0564\u0580\u0561\u056e \u0562\u0578\u057e\u0561\u0576\u0564\u0561\u056f\u0578\u0582\u0569\u0575\u0561\u0576 \u0570\u0561\u0574\u0561\u0580, \u057d\u0561\u056f\u0561\u0575\u0576 \u0561\u0575\u0576 \u056f\u0561\u0580\u0578\u0572 \u0567 \u0581\u0578\u0582\u0581\u0561\u0564\u0580\u057e\u0565\u056c \u0570\u0561\u0580\u0569\u0561\u056f\u0578\u0582\u0574\u0589',
        bullets: [],
      },
      {
        heading: '7. \u053f\u0561\u057a',
        body: null,
        bullets: ['hello@salooote.am', 'robotik@salooote.am'],
      },
    ],
    back: '\u2190 \u0533\u056c\u056d\u0561\u057e\u0578\u0580',
  },

  ru: {
    title: '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u2014 Robotik',
    date: '\u0414\u0430\u0442\u0430 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f: 08.04.2026',
    intro:
      'Robotik \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435.',
    sections: [
      {
        heading: '1. \u041a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f',
        body: null,
        bullets: [
          '\u0418\u043c\u044f, email',
          '\u0414\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f',
          '\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442',
        ],
      },
      {
        heading: '2. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445',
        body: null,
        bullets: [
          '\u0420\u0430\u0431\u043e\u0442\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b',
          '\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430',
          '\u0421\u0432\u044f\u0437\u044c \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438',
        ],
      },
      {
        heading: '3. \u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445',
        body: '\u041c\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c \u043c\u0435\u0440\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438.',
        bullets: [],
      },
      {
        heading: '4. \u0414\u0435\u0442\u0438',
        body: '\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439.',
        bullets: [],
      },
      {
        heading: '5. \u0421\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b',
        body: '\u041c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b.',
        bullets: [],
      },
      {
        heading: '6. \u041a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439',
        body: '\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u0432\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442.',
        bullets: [],
      },
      {
        heading: '7. \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
        body: null,
        bullets: ['hello@salooote.am', 'robotik@salooote.am'],
      },
    ],
    back: '\u2190 \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e',
  },
} as const

type Locale = 'en' | 'hy' | 'ru'

export default function PrivacyPageClient() {
  const { locale } = useLanguage()
  const t = content[(locale as Locale) ?? 'en'] ?? content.en

  return (
    <main className="min-h-screen bg-white py-16 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href={`/${locale}`}
          className="inline-block mb-8 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
        >
          {t.back}
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          {t.title}
        </h1>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-8">{t.date}</p>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-10 text-lg">{t.intro}</p>

        {/* Sections */}
        <div className="space-y-8">
          {t.sections.map((section, i) => (
            <section
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {section.heading}
              </h2>

              {section.body && (
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              )}

              {section.bullets.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {section.bullets.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
