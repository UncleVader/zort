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
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "sticky top-2 z-50 bg-grey-3/80 py-4 px-8 flex justify-between items-center lg:w-10/12 xl:w-8/12 mx-auto",
        "md:rounded-3xl "
      )}
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
          "flex items-center space-x-4 md:space-x-8 [&_a]:text-white [&_a]:hover:text-secondary [&_a]:relative",
          "[&_a]:before:absolute [&_a]:before:w-full [&_a]:before:h-[2px] [&_a]:before:bg-secondary/80",
          "[&_a]:before:transition [&_a]:before:-bottom-2 [&_a]:before:scale-x-0 [&_a]:hover:before:scale-x-100"
          )}
        >
          <li className={"hidden md:inline-block"}><a href="#showcase">Showcase</a></li>
          <li className={"hidden md:inline-block"}><a href="#features">Features</a></li>
          <li className={"hidden md:inline-block"}><a href="#how-it-works">How It Works</a></li>
          <li className={"hidden md:inline-block"}>
            <a href="https://www.instagram.com/zorthq?igsh=MXA5bWE2dDQ0dHQyMw==" className="text-secondary/80 hover:text-white">
              <InstagramIcon/>
            </a>
          </li>
          <li className={"hidden md:inline-block"}>
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
        {/* Hamburger button for mobile */}
        <div className="block md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <span className={cn(
              "block w-6 h-[2px] bg-white mb-1 transition-transform",
              {"rotate-45 -translate-y-1/2 absolute top-1/2 ": menuOpen}
            )}></span>
            <span className={cn(
              "block w-6 h-[2px] bg-white mb-1 transition-opacity",
              {"opacity-0": menuOpen}
            )}></span>
            <span className={cn(
              "block w-6 h-[2px] bg-white transition-transform",
              {"-rotate-45 -translate-y-1/2 absolute top-1/2 ": menuOpen}
            )}></span>
          </button>
          {/* Mobile menu */}
          <ul
            className={cn(
              "absolute top-12 right-0 bg-grey-3 rounded-lg shadow-md p-4 w-48 space-y-4",
              {hidden: !menuOpen}
            )}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#showcase" className="text-white block hover:text-secondary">Showcase</a></li>
            <li><a href="#features" className="text-white block hover:text-secondary">Features</a></li>
            <li><a href="#how-it-works" className="text-white block hover:text-secondary">How It Works</a></li>
            <li className={"flex items-center gap-8"}>
              <a href="https://www.instagram.com/zorthq?igsh=MXA5bWE2dDQ0dHQyMw=="
                 className="text-secondary/80 hover:text-white">
                <InstagramIcon/>
              </a>
              <a href="https://www.tiktok.com/@zortapp" className="text-secondary/80 hover:text-white">
                <TiktokIcon/>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;