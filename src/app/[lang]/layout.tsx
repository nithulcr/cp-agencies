import type { Metadata } from "next";
import "../globals.css";
import SmoothScrollWrapper from "../SmoothScrollWrapper";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params;
  return {
    title: lang === 'ar' ? 'ريع منتظم | استثمار عقاري مستقر في السعودية' : 'Ray Montazim | Stable Real Estate Investment in Saudi Arabia',
    description: lang === 'ar' ? 'استثمر في عقارات مدرة للدخل مع ريع منتظم. عوائد سنوية ١٠٪–١٥٪ تُوزع كل ثلاثة أشهر مع حماية قانونية واضحة.' : 'Invest in income-generating real estate with Ray Montazim. Earn 10%–15% annual returns, distributed quarterly, with clear legal protection.',
    keywords: lang === 'ar' ? 'ريع منتظم, استثمار عقاري السعودية, دخل ثابت, عوائد ربع سنوية, استثمار منخفض المخاطر' : 'Ray Montazim, Saudi real estate investment, quarterly returns, stable income, passive income Saudi Arabia, low risk investments',
    icons: {
      icon: '/favicon.png',       // path to your favicon file
      shortcut: '/favicon.png',   // for older browsers
      apple: '/favicon.png', // optional Apple touch icon
    }
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className="antialiased">
        <SmoothScrollWrapper lang={lang}>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
