import React from "react";
import Link from "next/link";

type Props = { style?: string };

const Logo = ({ style }: Props) => (
  <Link href="/" className={`font-logo text-5xl px-5 text-secondary ${style}`}>
    MUNO
  </Link>
);

export default Logo;
