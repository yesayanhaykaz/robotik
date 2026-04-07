import type { Metadata } from 'next'
import { chatPageMetadata } from '@/lib/metadata'
import ChatPageClient from './ChatPageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return chatPageMetadata(locale)
}

export default function Page() {
  return <ChatPageClient />
}
