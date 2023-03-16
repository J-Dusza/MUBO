"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  imgUrl: string;
  className: string;
};

const GenderCard = ({ imgUrl, className }: Props) => {
  return (
    <div className={` ${className} shadow-2xl overflow-hidden group`}>
      <div className="top-0  w-full h-full bg-cover bg-center bg-genderpicker flex flex-center flex-row transition-all duration-200">
        <div className="backdrop-saturate-100 sm:backdrop-saturate-0 sm:hover:backdrop-saturate-100 w-1/2 h-full transition-all duration-200 cursor-pointer flex items-center hover-highlight-left-div">
          <p className="px-2 mx-[10%] text-emerald-300 sm:text-transparent text-2xl sm:text-2xl lg:text-4xl uppercase hover-highlight-left group-hover:100">
            women
          </p>
        </div>
        <div className="backdrop-saturate-100 sm:backdrop-saturate-0 sm:hover:backdrop-saturate-100 w-1/2 h-full cursor-pointer flex items-center hover-highlight-right-div">
          <p className="text-left ml-auto mr-[10%] px-2 text-emerald-300 sm:text-transparent text-2xl sm:text-2xl lg:text-4xl uppercase hover-highlight-right ">
            men
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenderCard;
