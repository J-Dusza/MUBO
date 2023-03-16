import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  name: string;
  imgUrl: string;
};

const CenterLinkImageCard = ({ name, imgUrl, className }: Props) => {
  return (
    <div
      className={`${className} relative flex items-center justify-center shadow-2xl`}
    >
      <img
        src={imgUrl}
        alt={name}
        className=" object-cover aspect-video sm:aspect-square"
      />
      <button className="absolute btn btn-xl btn-primary px-8 border-white border-2 text-white">
        {name}
      </button>
    </div>
  );
};

export default CenterLinkImageCard;
