"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import ShoppingBag from "@/components/icons/ShoppingBag";
import User from "../icons/User";
import Logo from "../icons/Logo";
import { useMediaQuery } from "@mui/material";
import HamburgerIcon from "../icons/HamburgerIcon";
import { useEffect } from "react";
import XIcon from "../icons/XIcon";
import AccountTab from "./AccountTab";
import { useAtom } from "jotai";
import { isNavBackgroundOn, isNavWhite } from "@/shared/global";
import { link } from "fs";
import { NavLinkType } from "@/shared/types";
import NavLink from "./NavLink";

type Props = {};

const navLinks: Array<NavLinkType> = [
  {
    display: "New Arrivals",
    href: "/new",
  },
  {
    display: "Collections",
    href: "/collections",
  },
  {
    display: "Men",
    href: "/men",
  },
  {
    display: "Women",
    href: "/women",
  },
  {
    display: "Sale",
    href: "/sale",
  },
];
const Navbar = (props: Props) => {
  const isAboveLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isAccountTabOn, setIsAccountTabOn] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isBackgroundOn, setIsBackgroundOn] = useAtom(isNavBackgroundOn);
  const [isNavTextWhite, setIsNavTextWhite] = useAtom(isNavWhite);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={`z-40  ${
          isTopOfPage && isNavTextWhite ? "text-white" : "text-black"
        }`}
      >
        <div
          className={`w-full text-secondary py-5 px-5 text-xl z-40 fixed top-0 ${
            !isTopOfPage || isBackgroundOn ? "bg-white" : "bg-none"
          } transition-colors duration-300 ease-in-out`}
        >
          {/* CONTENT */}
          <div className="flex justify-between items-center">
            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuToggled((state) => !state)}
              className={`lg:hidden p-2 border-[2px] hover:bg-toxic-200 transition-all duration-300 ease-in-out ${
                isTopOfPage && isNavTextWhite ? "border-white" : "border-black"
              }`}
            >
              <HamburgerIcon />
            </button>
            {/* MOBILE CONTENT */}

            {/* LEFT */}
            <div className="flex items-center px-5 space-x-5">
              <Logo />
              <div className=" space-x-7 uppercase px-5 hidden lg:block font-semibold">
                {navLinks.map((link, index) => {
                  return (
                    <NavLink
                      key={index}
                      link={link}
                      setIsMenuToggled={setIsMenuToggled}
                    />
                  );
                })}
              </div>
            </div>
            {/* RIGHT */}
            <div className="flex space-x-5">
              <div
                onMouseEnter={() => setIsAccountTabOn(true)}
                onMouseLeave={() => setIsAccountTabOn(false)}
              >
                {isAccountTabOn &&
                  isAboveLargeScreen &&
                  window.location.pathname !== "/login" && (
                    <AccountTab setIsAccountTabOn={setIsAccountTabOn} />
                  )}
                <div className="z-0" onClick={() => setIsAccountTabOn(false)}>
                  <Link href="/login">
                    <User
                      className={`hover:fill-toxic-200 hover:scale-125 ${
                        isAccountTabOn && "fill-toxic-200 scale-125"
                      }`}
                    />
                  </Link>
                </div>
              </div>
              <ShoppingBag />
            </div>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div>
          <div
            className={` w-3/4 h-full fixed left-0 top-0 bg-black z-50 flex flex-col text-highlight font-bold transition duration-500 ease-out ${
              isMenuToggled ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsMenuToggled((state) => !state)}
              className="m-7 self-end text-zinc-300"
            >
              <XIcon />
            </button>
            <div className=" flex flex-col px-10 items-start text-2xl space-y-2 text-zinc-300">
              {navLinks.map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    link={link}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                );
              })}
            </div>
          </div>
          <button
            onClick={() => setIsMenuToggled((state) => !state)}
            className={`absolute top-0 w-screen h-screen z-40 bg-gray-900 transition-all duration-300 ${
              isMenuToggled ? "opacity-50" : "opacity-0 hidden"
            }`}
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
