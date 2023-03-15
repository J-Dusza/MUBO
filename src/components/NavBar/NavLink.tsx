import React from "react";
import Link from "next/link";

type Props = {
  display: string;
  link: string;
  setIsMenuToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLink = ({ link, display, setIsMenuToggled }: Props) => {
  return (
    <Link
      href={link}
      className={`py-2 hover:text-toxic-200 border-toxic-200 hover:border-b-2 hover:scale-110 transition-all duration-100 ease-in uppercase`}
      onClick={() => setIsMenuToggled(false)}
    >
      {display}
    </Link>
  );
};

export default NavLink;
