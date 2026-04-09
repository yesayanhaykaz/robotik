import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

type Props = { params: Promise<{ locale: string }> }

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: "Terms of Use — Robotik",
    description: "Read the terms and conditions for using the Robotik educational platform.",
  },
  hy: {
    title: "Օգտագործման պայմաններ — Robotik",
    description: "Կարդացեք Robotik կրթական հարթակի օգտագործման պայմանները։",
  },
  ru: {
    title: "Условия использования — Robotik",
    description: "Ознакомьтесь с условиями использования платформы Robotik.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = meta[locale] ?? meta.en
  return {
    title: m.title,
    description: m.description,
  }
}

export default function TermsPage() {
  return <TermsPageClient />
}
