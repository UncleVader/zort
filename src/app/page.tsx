'use client';

import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import BasicFeatures from '@/components/BasicFeatures';
import Footer from '@/components/Footer';
import SmartFeatures from "@/components/SmartFeatures";

export default function Home() {
  return (
    <main className="overflow-hidden- h-[600vh]">
      <Hero />
      <AppShowcase />
      <BasicFeatures />
      <SmartFeatures />
      <Footer />
    </main>
  );
}