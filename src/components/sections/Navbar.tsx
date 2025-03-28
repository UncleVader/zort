"use client"

import React from 'react';
import useScrollTo from "@/hooks/useScrollTo";
import Image from "next/image";
import InstagramIcon from "@/components/svg/InstagramIcon";
import TiktokIcon from "@/components/svg/TiktokIcon";
import MainButton from "@/components/shared/MainButton";
import {cn} from "@/lib/utils";

const Navbar = () => {
  const {goToAnchor} = useScrollTo();

  return (
    <div
      className={"sticky top-2 z-50 rounded-3xl bg-grey-3/80 py-4 px-8 flex justify-between items-center md:w-8/12 mx-auto"}
      onClick={goToAnchor}
    >
      <a href="#hero">
        <Image
          src="/logo.svg"
          alt="BetTracker AI"
          width={80}
          height={25}
        />
      </a>

      <div className="flex items-center gap-4">
        <ul className={cn(
          "flex items-center space-x-8 [&_a]:text-white [&_a]:hover:text-secondary [&_a]:relative",
          "[&_a]:before:absolute [&_a]:before:w-full [&_a]:before:h-[2px] [&_a]:before:bg-secondary/80",
          "[&_a]:before:transition [&_a]:before:-bottom-2 [&_a]:before:scale-x-0 [&_a]:hover:before:scale-x-100"
          )}
        >
          <li><a href="#showcase">Showcase</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li>
            <a href="https://www.instagram.com/zorthq?igsh=MXA5bWE2dDQ0dHQyMw==" className="text-secondary/80 hover:text-white">
              <InstagramIcon/>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@zortapp" className="text-secondary/80 hover:text-white">
              <TiktokIcon/>
            </a>
          </li>
          <li>
            <MainButton
              onClick={() => window.open('https://apps.apple.com/gb/app/zort/id6740245454',"_blank")}
              className={"py-1"}
            >Get App</MainButton>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;