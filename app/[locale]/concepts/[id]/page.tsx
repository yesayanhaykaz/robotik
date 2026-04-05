import { notFound } from 'next/navigation'
import { concepts } from '@/lib/data'
import ConceptDetailClient from './ConceptDetailClient'
import type { Metadata } from 'next'

type Props = { params: Promise<{ locale: string; id: string }> }

export function generateStaticParams() {
  return concepts.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const concept = concepts.find((c) => c.id === id)
  if (!concept) return {}
  return { title: `${concept.title} — Robotik`, description: concept.description }
}

export default async function ConceptDetailPage({ params }: Props) {
  const { id } = await params
  const concept = concepts.find((c) => c.id === id)
  if (!concept) notFound()

  return <ConceptDetailClient id={id} />
}
