import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import ConsultationBanner from "../components/ConsultationBanner";
import Governance from "../components/Governance";

import Teams from "../components/Teams";
import Footer from "../components/Footer";





export default function Home() {
    return (
        <>
            <Header />
            <Hero2 heading="About Us" breadcrumbText="About Us" breadcrumbPosition="left" />
            <WhoWeAre />
            <WhatWeDo />
            <ConsultationBanner />
            <Governance />
            <Teams />
            <Footer />
        </>
    );
}
