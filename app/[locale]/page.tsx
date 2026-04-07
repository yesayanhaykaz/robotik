import type { Metadata } from 'next'
import { homeMetadata } from '@/lib/metadata'
import HomePageClient from './HomePageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return homeMetadata(locale)
}

export default function Page() {
  return <HomePageClient />
}
