import { Metadata } from 'next';



export async function generateMetadata(

): Promise<Metadata> {

 const metadata: Metadata = {
    title: 'CP Agencies',
    description: '',
    keywords: '',
  };

  return metadata;
}

import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import AboutUs2 from "../components/AboutUs2";
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
            <AboutUs2 />
            <WhoWeAre />
            <WhatWeDo />
            <ConsultationBanner />
            <Teams />
            <Footer />
        </>
    );
}
