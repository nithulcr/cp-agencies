import { Metadata, ResolvingMetadata } from 'next';


export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'FAQs | Ray Montazim Real Estate Investments',
    description: 'Find answers about Ray Montazim’s investment model, shareholder rights, quarterly returns, risk level, and legal protections for investors.',
    keywords: 'Ray Montazim FAQs, real estate investment questions, Saudi joint stock investment, guaranteed returns Saudi, shareholder rights',

  };

  return metadata;
}

import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";







export default function Home() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="FAQ"
                breadcrumbText_en="FAQ"
                breadcrumbPosition="left"
            />
            <FAQ  />

           
            <Footer />
        </>
    );
}
