import React from "react";
import Link from "next/link";
import { NavLinkType } from "@/shared/types";

type Props = {
  link: string;
  mobile: bool;
};

const NavLink = ({ link, mobile }: Props) => {
  const display = NavLinkType[link];
  return (
    <Link
      href={`/${link}`}
      className={`py-2 hover:text-customViolet border-customViolet hover:border-b  transition-all duration-100 ease-in`}
    >
      {display}
    </Link>
  );
};

export default NavLink;
