import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  name: string;
  href: string;
  imgUrl: string;
};

const CenterLinkImageCard = ({ name, href, imgUrl, className }: Props) => {
  return (
    <Link
      className={`${className} relative flex items-center justify-center shadow-2xl`}
      href={href}
    >
      <img
        src={imgUrl}
        alt={name}
        className=" object-cover aspect-video sm:aspect-square"
      />
      <button className="absolute btn btn-xl btn-primary px-8 border-white border-2 text-white">
        {name}
      </button>
    </Link>
  );
};

export default CenterLinkImageCard;
