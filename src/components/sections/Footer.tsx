"use client"
import Image from 'next/image';
import useScrollTo from "@/hooks/useScrollTo";
import React, {useState} from "react";
import ContactModal from "@/components/modals/ContactModal";
import TermsAndConditionsModal from "@/components/modals/TermsAndConditionsModal";
import InstagramIcon from "@/components/svg/InstagramIcon";
import TiktokIcon from "@/components/svg/TiktokIcon";

export default function Footer() {
  const {goToAnchor} = useScrollTo();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTnCOpen, setIsTnCOpen] = useState(false);


  return (
    <>
      <ContactModal isOpen={isContactOpen} setIsOpen={setIsContactOpen}/>
      <TermsAndConditionsModal isOpen={isTnCOpen} setIsOpen={setIsTnCOpen}/>
      <footer className="bg-dark-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8" onClick={goToAnchor}>
            <div>
              <a href="#hero" className={"block mb-6"}>
                <Image
                  src="/logo.svg"
                  alt="BetTracker AI"
                  width={80}
                  height={25}
                />
              </a>
              <p>
                Transform your betting experience with AI-powered analytics
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#showcase" className="text-secondary/80 hover:text-white">Showcase</a></li>
                <li><a href="#features" className="text-secondary/80 hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="text-secondary/80 hover:text-white">How It Works</a></li>
              </ul>
            </div>
            <div>
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
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/zorthq?igsh=MXA5bWE2dDQ0dHQyMw=="
                   className="text-secondary/80 hover:text-white"
                >
                  <InstagramIcon/>
                </a>
                <a href="https://www.tiktok.com/@zortapp" className="text-secondary/80 hover:text-white">
                  <TiktokIcon/>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/40 mt-8 pt-8 text-center">
            <p>&copy; 2025 GIS Analytics Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}