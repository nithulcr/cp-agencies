// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const supportedLangs = ["en", "fr"];
const defaultLang = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect root (/) to / if it isn't /en or /fr
  if (pathname === "/") {
    // No redirect needed, render default (Arabic) at root
    return NextResponse.next();
  }

  // If the URL starts with a supported language code
  const pathnameHasLocale = supportedLangs.some((lang) =>
    pathname.startsWith(`/${lang}`)
  );

  // If it's not /en or /fr, serve as Arabic (no /ar prefix)
  if (!pathnameHasLocale) {
    // No redirection, just serve Arabic
    return NextResponse.next();
  }

  return NextResponse.next();
}
