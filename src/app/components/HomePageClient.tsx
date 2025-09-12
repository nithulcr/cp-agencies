"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Hero3 from "./Hero3";
import Features from "./Features";
import AboutUs from "./AboutUs";
import Services from "./Services";

import ProductsSlide from "./ProductsSlide";

import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";



import ConsultationBanner from "./ConsultationBanner";

import QuoteSection from "./QuoteSection";
import WhyChooseUs from "./WhyChooseUs";
import Partners from "./Partners";
import Footer from "./Footer";

export default function HomePageClient() {
  const [showContent, setShowContent] = useState(false);
  const [shouldShowPreloader, setShouldShowPreloader] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem("hasSeenPreloader")) {
      setShouldShowPreloader(false);
      setShowContent(true); // Immediately show content if preloader not needed
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true");
    setShouldShowPreloader(false);
    setShowContent(true);
  };

  return (
    <div>
      {shouldShowPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {showContent && (
        <>
          <Header />
          <Hero3 />
          <Features />
          <AboutUs />
                      <ConsultationBanner />
          
          <WhyChooseUs />
          <ProductsSlide />
          <Services />


          <QuoteSection />
          <Testimonials />
          {/* <ContactUs /> */}


          <Partners />
          <Footer />
        </>
      )}
    </div>
  );
}
