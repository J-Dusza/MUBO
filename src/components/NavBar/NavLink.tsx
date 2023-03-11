import React from "react";
import Link from "next/link";
import { NavLinkType } from "@/shared/types";

type Props = {
  key: number;
  link: string;
};

const NavLink = ({ link }: Props) => {
  const display = NavLinkType[link];
  return (
    <Link
      href={`/${link}`}
      className={`py-2 hover:text-toxic-200 border-toxic-200 hover:border-b-2 hover:scale-110 transition-all duration-100 ease-in uppercase`}
    >
      {display}
    </Link>
  );
};

export default NavLink;
