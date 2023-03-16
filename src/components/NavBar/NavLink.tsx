import React from "react";
import Link from "next/link";
import { NavLinkType } from "@/shared/types";

type Props = {
  link: NavLinkType;
  setIsMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLink = ({ link, setIsMenuToggled }: Props) => {
  return (
    <Link
      href={link.href}
      className={`py-2 hover:text-toxic-200 border-toxic-200 hover:border-b-2 hover:scale-110 transition-all duration-100 ease-in uppercase`}
      onClick={() => setIsMenuToggled(false)}
    >
      {link.display}
    </Link>
  );
};

export default NavLink;
