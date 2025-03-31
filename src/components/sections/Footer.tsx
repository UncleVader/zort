"use client"
import Image from 'next/image';
import useScrollTo from "@/hooks/useScrollTo";
import React, {useState} from "react";
import dynamic from "next/dynamic";
const ContactModal = dynamic(
  () => import("@/components/modals/ContactModal"),
  { ssr: false }
);
const TermsAndConditionsModal = dynamic(
  () => import("@/components/modals/TermsAndConditionsModal"),
  { ssr: false }
);
import InstagramIcon from "@/components/svg/InstagramIcon";
import TiktokIcon from "@/components/svg/TiktokIcon";
import TextRotate from "@/components/ui/TextRotate";
import {cn} from "@/lib/utils";

export default function Footer() {
  const {goToAnchor} = useScrollTo();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTnCOpen, setIsTnCOpen] = useState(false);


  return (
    <>
      <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen}/>
      <TermsAndConditionsModal isOpen={isTnCOpen} setIsOpen={setIsTnCOpen}/>
      <footer className="bg-dark-secondary text-white py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 justify-center md:justify-start text-center md:text-left" onClick={goToAnchor}>
            <FooterSection className={"inline-block text-center md:text-left"}>
              <a href="#hero" className={"inline-block mb-6"}>
                <Image
                  src="/logo.svg"
                  alt="BetTracker AI"
                  width={80}
                  height={25}
                />
              </a>
              <p className={"w-50"}>
                Transform your betting experience with AI-powered analytics
              </p>
            </FooterSection>
            <FooterSection>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#showcase" className="text-secondary/80 hover:text-white">Showcase</a></li>
                <li><a href="#features" className="text-secondary/80 hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="text-secondary/80 hover:text-white">How It Works</a></li>
              </ul>
            </FooterSection>
            <FooterSection>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li className="text-secondary/80 cursor-pointer hover:text-white"
                    onClick={() => setIsContactOpen(true)}
                >
                  Get in Touch
                </li>
                <li className="text-secondary/80 cursor-pointer hover:text-white"
                    onClick={() => setIsTnCOpen(true)}
                >
                  Terms & Conditions
                </li>
              </ul>
            </FooterSection>
            <FooterSection>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/zorthq?igsh=MXA5bWE2dDQ0dHQyMw=="
                   className="text-secondary/80 hover:text-white"
                >
                  <InstagramIcon/>
                </a>
                <a href="https://www.tiktok.com/@zortapp" className="text-secondary/80 hover:text-white">
                  <TiktokIcon/>
                </a>
              </div>
            </FooterSection>
          </div>

          <div className="border-t border-white/40 mt-8 pt-8 text-center">
            <p>&copy; 2025 GIS Analytics Limited. All rights reserved.</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full z-50">
          <TextRotate
            texts={[
              "💫 Multi-slip scanning",
              "📈 85% accuracy rate",
              "🏆 10,000+ bets tracked",
              "🎉 Team Recognition Soon!",
            ]}
            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-dark overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        </div>
      </footer>
    </>
  );
}

function FooterSection({children, className}:{children: React.ReactNode, className?: string}) {
  return (
    <div className="flex justify-center">
      <div className={cn("inline-flex flex-col",className)}>
        {children}
      </div>
    </div>
  )
}