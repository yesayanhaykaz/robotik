import { notFound } from 'next/navigation'
import { lessons } from '@/lib/data'
import LessonDetailClient from './LessonDetailClient'
import type { Metadata } from 'next'

type Props = { params: Promise<{ locale: string; id: string }> }

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const lesson = lessons.find((l) => l.id === id)
  if (!lesson) return {}
  return { title: `${lesson.title} — Robotik`, description: lesson.description }
}

export default async function LessonDetailPage({ params }: Props) {
  const { id } = await params
  const lesson = lessons.find((l) => l.id === id)
  if (!lesson) notFound()

  return <LessonDetailClient id={id} />
}
