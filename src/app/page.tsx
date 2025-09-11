import { Metadata, ResolvingMetadata } from 'next';
import HomePageClient from './components/HomePageClient';


export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'Ray Montazim | Stable Real Estate Investment in Saudi Arabia',
    description: 'Invest in income-generating real estate with Ray Montazim. Earn 10%–15% annual returns, distributed quarterly, with clear legal protection.',
    keywords: 'Ray Montazim, Saudi real estate investment, quarterly returns, stable income, passive income Saudi Arabia, low risk investments',
  };

  return metadata;
}

export default function HomePage() {
  return <HomePageClient />;
}
