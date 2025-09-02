"use client";

import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyInvest from "../components/WhyInvest";
import InvestmentSections from "../components/InvestmentSections";
import QuoteSection from "../components/QuoteSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function HomePage({ params }: { params: { lang: string } }) {
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
          <WhyInvest />
          <InvestmentSections />
          <WhyChooseUs />
          <QuoteSection />
          <Partners />
          <Footer />
        </>
      )}
    </div>
  );
}
