import { usePathname, useRouter } from "next/navigation";

export function useLang() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);

  // If the first segment is in ['en', 'fr'] use it; else, default to 'ar'
  const lang = ['en', 'fr'].includes(segments[0]) ? segments[0] : "ar";
  const isArabic = lang === "ar";

  const toggle = () => {
    const newLang = isArabic ? "en" : "ar";
    const rest = isArabic ? segments : segments.slice(1);
    const newPath =
      newLang === "ar"
        ? `/${rest.join("/")}`
        : `/${newLang}/${rest.join("/")}`;

    router.push(newPath);
  };

  return { lang, isArabic, toggle };
}
