import type { Metadata } from 'next'
import PrivacyPageClient from './PrivacyPageClient'

type Props = { params: Promise<{ locale: string }> }

const titles: Record<string, string> = {
  en: 'Privacy Policy \u2014 Robotik',
  hy: '\u0533\u0561\u0572\u057f\u0576\u056b\u0578\u0582\u0569\u0575\u0561\u0576 \u0584\u0561\u0572\u0561\u0584\u0561\u056f\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u2014 Robotik',
  ru: '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u2014 Robotik',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: titles[locale] ?? titles.en,
  }
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
