"use client";

import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero3 from "../components/Hero3";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";

import ProductsSlide from "../components/ProductsSlide";

import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";



import ConsultationBanner from "../components/ConsultationBanner";

import QuoteSection from "../components/QuoteSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

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
