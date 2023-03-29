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
      <div className=" object-cover aspect-video sm:aspect-square h-full w-full">
        <Image
          objectFit="cover"
          sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
          fill
          src={imgUrl}
          alt={name}
        />
      </div>
      <button className="absolute btn btn-xl btn-primary px-8 border-white border-2 text-white">
        {name}
      </button>
    </Link>
  );
};

export default CenterLinkImageCard;
