import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'ar';
const locales = ['en', 'ar'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // List of public files that should not be rewritten
  const publicFileExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'css', 'js', 'json', 'map', 'ttf', 'woff', 'woff2', 'eot', 'otf'];

  // Check if the pathname is for a Next.js internal file or a public static file
  if (
    pathname.startsWith('/_next/') || // Exclude Next.js internal paths
    pathname.startsWith('/api/') ||   // Exclude API routes
    publicFileExtensions.some(ext => pathname.endsWith(`.${ext}`)) // Exclude common static file extensions
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already contains a supported locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If no locale is in the pathname, rewrite to include the default locale
  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  // If the default locale is in the pathname, and it's not the root, remove it
  // This is to hide the default locale from the URL
  if (pathname.startsWith(`/${defaultLocale}/`) && pathname !== `/${defaultLocale}`) {
    return NextResponse.rewrite(new URL(pathname.replace(`/${defaultLocale}`, ''), request.url));
  }

  return NextResponse.next();
}
