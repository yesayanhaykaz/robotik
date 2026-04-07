import type { Metadata } from 'next'
import { kitPageMetadata } from '@/lib/metadata'
import KitPageClient from './KitPageClient'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return kitPageMetadata(locale)
}

export default function Page() {
  return <KitPageClient />
}
