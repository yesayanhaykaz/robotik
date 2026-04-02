import { notFound } from 'next/navigation'
import { lessons } from '@/lib/data'
import LessonDetailClient from './LessonDetailClient'
import type { Metadata } from 'next'

type Props = { params: { id: string } }

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lesson = lessons.find((l) => l.id === params.id)
  if (!lesson) return {}
  return { title: `${lesson.title} — Robotik`, description: lesson.description }
}

export default function LessonDetailPage({ params }: Props) {
  const lesson = lessons.find((l) => l.id === params.id)
  if (!lesson) notFound()

  return <LessonDetailClient id={params.id} />
}
