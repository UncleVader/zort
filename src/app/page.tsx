'use client';

import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import Footer from '@/components/Footer';
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="overflow-hidden- h-[600vh]">
      <Hero />
      <AppShowcase />
      <Features />
      <Footer />
    </main>
  );
}