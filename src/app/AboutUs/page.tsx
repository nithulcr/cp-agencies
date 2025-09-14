import { Metadata, ResolvingMetadata } from 'next';



export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'About Ray Montazim | Licensed Real Estate Investment Company',
    description: 'Ray Montazim is a licensed Saudi simplified joint-stock company offering curated, income-producing real estate investments with transparency and compliance.',
    keywords: 'About Ray Montazim, Saudi joint stock company, licensed investment, real estate transparency, secure investment Saudi Arabia',

  };

  return metadata;
}

import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import AboutUs from "../components/AboutUs";
import WhoWeAre from "../components/WhoWeAre";

import WhatWeDo from "../components/WhatWeDo";
import ConsultationBanner from "../components/ConsultationBanner";

import Teams from "../components/Teams";
import Footer from "../components/Footer";





export default function Home() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="About Us"
                breadcrumbText_en="About Us"
                breadcrumbPosition="left"
            />
            <AboutUs />
            <WhoWeAre />
            <WhatWeDo />
            <ConsultationBanner />
            <Teams />
            <Footer />
        </>
    );
}
