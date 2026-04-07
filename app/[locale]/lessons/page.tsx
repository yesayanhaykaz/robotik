import type { Metadata } from 'next'
import { lessonsPageMetadata } from '@/lib/metadata'
import LessonsPageClient from './LessonsPageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return lessonsPageMetadata(locale)
}

export default function Page() {
  return <LessonsPageClient />
}
