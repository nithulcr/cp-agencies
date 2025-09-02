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
