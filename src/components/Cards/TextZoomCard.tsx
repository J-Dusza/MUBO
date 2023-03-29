"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imgUrl: string;
  className: string;
  displayedText: string;
  href: string;
};

const TextZoomCard = ({ imgUrl, className, displayedText, href }: Props) => {
  return (
    <Link
      href={href}
      className={` ${className}  relative shadow-2x flex justify-center items-center overflow-hidden text-center text-emerald-300 md:text-5xl sm:text-2xl text-4xl hover-highlight-left-div group cursor-pointer`}
    >
      <img
        src={imgUrl}
        className=" object-cover h-full group-hover:scale-110 aspect-square transition-all duration-300 "
      />
      <p className="absolute uppercase hover-highlight-left">{displayedText}</p>
    </Link>
  );
};

export default TextZoomCard;

// <div className=" aspect-auto w-full h-full object-center bg-cover bg-center bg-genderpicker flex flex-between flex-row">
//   <div className=" w-1/2 h-full backdrop-saturate-0 hover:backdrop-saturate-100 transition-all duration-300 cursor-pointer"></div>
//   <div className=" w-1/2 h-full backdrop-saturate-0 hover:backdrop-saturate-100 transition-all duration-300 cursor-pointer"></div>
// </div>
