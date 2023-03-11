import React from "react";
import StandardButton from "../StandardButton";

type Props = {
  className?: string;
  name: string;
  imgUrl: string;
};

const CenterLinkImageCard = ({ name, imgUrl, className }: Props) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <img src={imgUrl} alt={name} className=" object-cover aspect-square" />
      <button className="absolute btn btn-xl btn-primary px-8 border-white border-2 text-white">
        {name}
      </button>
    </div>
  );
};

export default CenterLinkImageCard;
