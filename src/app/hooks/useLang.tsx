
"use client";

import { useRouter } from "next/navigation";
import { useLangContext } from "../context/LangContext";

const defaultLocale = 'ar';

export function useLang() {
  const { lang } = useLangContext();
  const router = useRouter();

  const isArabic = lang === "ar";

  const toggle = () => {
    const newLang = isArabic ? "en" : "ar";
    const currentPathname = window.location.pathname; // Get the full current pathname

    let newPath;

    if (newLang === defaultLocale) { // Switching to Arabic (default)
      // If current path starts with /en, remove /en. Otherwise, keep as is.
      newPath = currentPathname.startsWith('/en') ? currentPathname.replace('/en', '') : currentPathname;
      if (newPath === '') newPath = '/'; // Ensure root path is '/'
    } else { // Switching to English (non-default)
      // If current path is '/', change to '/en'. Otherwise, add /en prefix.
      newPath = currentPathname === '/' ? '/en' : `/${newLang}${currentPathname}`;
    }

    router.push(newPath);
  };

  return { lang, isArabic, toggle };
}
