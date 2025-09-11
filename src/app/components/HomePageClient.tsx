"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import AboutUs from "./AboutUs";
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
          <Hero />
          <Features />
          <AboutUs />
                      <ConsultationBanner />
          
          <WhyChooseUs />
          <QuoteSection />
          <Partners />
          <Footer />
        </>
      )}
    </div>
  );
}
