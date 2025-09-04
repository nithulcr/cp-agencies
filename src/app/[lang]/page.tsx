import { Metadata, ResolvingMetadata } from 'next';
import HomePageClient from '../components/HomePageClient';

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  const metadata: Metadata = {
    title: lang === 'ar' ? 'ريع منتظم | استثمار عقاري مستقر في السعودية' : 'Ray Montazim | Stable Real Estate Investment in Saudi Arabia',
    description: lang === 'ar' ? 'استثمر في عقارات مدرة للدخل مع ريع منتظم. عوائد سنوية ١٠٪–١٥٪ تُوزع كل ثلاثة أشهر مع حماية قانونية واضحة.' : 'Invest in income-generating real estate with Ray Montazim. Earn 10%–15% annual returns, distributed quarterly, with clear legal protection.',
    keywords: lang === 'ar' ? 'ريع منتظم, استثمار عقاري السعودية, دخل ثابت, عوائد ربع سنوية, استثمار منخفض المخاطر' : 'Ray Montazim, Saudi real estate investment, quarterly returns, stable income, passive income Saudi Arabia, low risk investments',
  };

  return metadata;
}

export default function HomePage({ params }: { params: { lang: string } }) {
  return <HomePageClient />;
}
