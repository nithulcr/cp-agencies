import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  const metadata: Metadata = {
    title: lang === 'ar' ? 'ن نحن | ريع منتظم شركة مساهمة مبسطة مرخصة' : 'About Ray Montazim | Licensed Real Estate Investment Company',
    description: lang === 'ar' ? 'ريع منتظم شركة مساهمة مبسطة ومرخصة في السعودية تقدم فرص استثمار عقاري مدرة للدخل مع الشفافية والالتزام بالقوانين.' : 'Ray Montazim is a licensed Saudi simplified joint-stock company offering curated, income-producing real estate investments with transparency and compliance.',
    keywords: lang === 'ar' ? 'من نحن ريع منتظم, شركة مساهمة مبسطة, استثمار مرخص, استثمار شفاف, استثمار آمن السعودية' : 'About Ray Montazim, Saudi joint stock company, licensed investment, real estate transparency, secure investment Saudi Arabia',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import WhoWeAre from "../../components/WhoWeAre";
import WhatWeDo from "../../components/WhatWeDo";
import ConsultationBanner from "../../components/ConsultationBanner";
import Governance from "../../components/Governance";

import Teams from "../../components/Teams";
import Footer from "../../components/Footer";





export default function Home() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="About Us"
                heading_ar=" من نحن"
                breadcrumbText_en="About Us"
                breadcrumbText_ar=" من نحن"
                breadcrumbPosition="left"
            />
            <WhoWeAre />
            <WhatWeDo />
            <ConsultationBanner />
            <Governance />
            <Teams />
            <Footer />
        </>
    );
}
