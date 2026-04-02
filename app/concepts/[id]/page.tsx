import { notFound } from 'next/navigation'
import { concepts } from '@/lib/data'
import ConceptDetailClient from './ConceptDetailClient'
import type { Metadata } from 'next'

type Props = { params: { id: string } }

export function generateStaticParams() {
  return concepts.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const concept = concepts.find((c) => c.id === params.id)
  if (!concept) return {}
  return { title: `${concept.title} — Robotik`, description: concept.description }
}

export default function ConceptDetailPage({ params }: Props) {
  const concept = concepts.find((c) => c.id === params.id)
  if (!concept) notFound()

  return <ConceptDetailClient id={params.id} />
}
