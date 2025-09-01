"use client";

import { useLang } from "../hooks/useLang";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyInvest from "../components/WhyInvest";
import InvestmentSections from "../components/InvestmentSections";
import QuoteSection from "../components/QuoteSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function LangPage() {

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <WhyInvest />
      <InvestmentSections />
      <WhyChooseUs />
      <QuoteSection />
      <Partners />
      <Footer />
    </div>
  );
}