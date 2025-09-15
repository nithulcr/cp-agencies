'use client';

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import AboutUs from "./AboutUs";
import Services from "./Services";

import ProductsSlide from "./ProductsSlide";
import CSR from "./CSR";


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
    console.log("HomePageClient mounted");
    if (typeof window !== 'undefined' && sessionStorage.getItem("hasSeenPreloader")) {
      console.log("hasSeenPreloader is true, not showing preloader");
      setShouldShowPreloader(false);
      setShowContent(true); // Immediately show content if preloader not needed
    } else {
      console.log("hasSeenPreloader is false, showing preloader");
    }
  }, []);

  const handlePreloaderComplete = () => {
    console.log("Preloader complete, setting hasSeenPreloader to true");
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
          <Hero />
          {/* <Features /> */}
          <AboutUs />
                    <CSR />  
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
