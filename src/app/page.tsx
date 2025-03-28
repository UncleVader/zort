'use client';

import Hero from '@/components/sections/Hero';
import AppShowcase from '@/components/sections/AppShowcase';
import Footer from '@/components/sections/Footer';
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <main className="overflow-hidden- h-[600vh]">
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}