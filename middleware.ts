import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'hy', 'ru']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a locale prefix
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) return NextResponse.next()

  // Redirect to default locale using the request's host header
  const host = request.headers.get('host') || request.nextUrl.host
  const protocol = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '')
  const redirectUrl = `${protocol}://${host}/${defaultLocale}${pathname}`
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|icon\\.png|fonts|.*\\..*).*)', '/'],
}
