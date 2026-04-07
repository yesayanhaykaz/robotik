import type { Metadata } from 'next'
import { conceptsPageMetadata } from '@/lib/metadata'
import ConceptsPageClient from './ConceptsPageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return conceptsPageMetadata(locale)
}

export default function Page() {
  return <ConceptsPageClient />
}
