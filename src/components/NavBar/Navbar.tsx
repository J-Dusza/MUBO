"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShoppingBag from "@/components/icons/ShoppingBag";
import User from "../icons/User";
import Logo from "../icons/Logo";
import { useMediaQuery } from "@mui/material";
import HamburgerIcon from "../icons/HamburgerIcon";
import NavLink from "./NavLink";
import { NavLinkType } from "@/shared/types";
import MobileMenu from "./MobileMenu";

type Props = {};
const NavLinkArray = Object.keys(NavLinkType);

const Navbar = (props: Props) => {
  const isAboveLargeScreen = useMediaQuery("(min-width: 1024px)");

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className="w-full bg-primary text-white py-5 px-5 text-xl">
      {/* CONTENT */}
      <div className="flex justify-between items-center">
        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className="lg:hidden"
        >
          <HamburgerIcon />
        </button>
        {isMenuToggled && !isAboveLargeScreen && (
          <MobileMenu
            navLinks={NavLinkArray}
            onClick={() => setIsMenuToggled((state) => !state)}
          />
        )}
        {/* LEFT */}
        <div className="flex items-center px-5 space-x-5">
          <Logo />
          <div className=" text-zinc-300 space-x-7 uppercase px-5 hidden lg:block">
            {NavLinkArray.map((link, index) => (
              <NavLink key={index} link={link} mobile={false} />
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex space-x-5">
          <User />
          <ShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
