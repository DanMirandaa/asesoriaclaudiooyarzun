import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ComparisonSection } from './components/ComparisonSection';
import { QuickInquirySection } from './components/QuickInquirySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900 font-sans">
      {/* Refined Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Elegant Hero with Claudio Oyarzún value proposition */}
        <Hero />

        {/* 4 Core Services Grid */}
        <ServicesSection />

        {/* 3-Step Work Methodology & Transition Roadmap */}
        <ProcessSection />

        {/* Contrast Grid: La Diferencia Claudio Oyarzún */}
        <ComparisonSection />

        {/* Interactive 1-Click Scenario Inquiry Selector */}
        <QuickInquirySection />

        {/* Real Chilean Business Testimonials with Client Badges */}
        <TestimonialsSection />

        {/* Understated, Direct Contact Callout */}
        <CtaSection />
      </main>

      {/* Clean, quiet Footer */}
      <Footer />

      {/* Discrete Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
