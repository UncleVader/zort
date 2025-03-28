'use client';

import Hero from '@/components/sections/Hero';
import AppShowcase from '@/components/sections/AppShowcase';
import Footer from '@/components/sections/Footer';
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}