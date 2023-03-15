"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { isNavBackgroundOn } from "@/shared/global";
import EdgeLogo from "./CollectionLogos/EdgeLogo";
import ToxicLogo from "./CollectionLogos/ToxicLogo";
import CaliforniaLogo from "./CollectionLogos/CaliforniaLogo";
import Slide from "./Slide";

export type isBackgroundDark = {
  slide1: false;
  slide2: true;
  slide3: true;
};

const MainBannerCarousel = () => {
  const [isBackgroundOn, setisBackgroundOn] = useAtom(isNavBackgroundOn);

  const handleNavChange = () => {};

  useEffect(() => {
    setisBackgroundOn(false);

    return () => {
      setisBackgroundOn(true);
    };
  });

  return (
    <div className="carousel w-full">
      {/* <div id="slide1" className="carousel-item relative w-full h-screen">
        <Image
          fill
          alt="TOXIC"
          src="/toxic.jpg"
          className="w-full object-cover"
        />
        <ToxicLogo />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
          <button className="btn btn-accent text-xl">Lookbook</button>
          <button className="btn btn-accent text-xl">Collection</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn glass btn-circle"
            onClick={() => setisBackgroundOn(true)}
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn glass btn-circle"
            onClick={() => setisBackgroundOn(true)}
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full h-screen">
        <Image
          fill
          alt="california"
          src="/california.jpg"
          className="w-full object-cover"
        />
        <CaliforniaLogo />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
          <button className="btn btn-accent text-xl">Lookbook</button>
          <button className="btn btn-accent text-xl">Collection</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn glass btn-circle"
            onClick={() => setisBackgroundOn(false)}
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn glass btn-circle"
            onClick={() => setisBackgroundOn(false)}
          >
            ❯
          </a>
        </div>
      </div> */}
      <Slide
        id="1"
        imageUrl="/toxic.jpg"
        alt="toxic "
        leftHref="3"
        rightHref="2"
        onClick={handleNavChange}
      >
        <ToxicLogo />
      </Slide>
      <Slide
        id="2"
        imageUrl="/california.jpg"
        alt="california "
        leftHref="1"
        rightHref="3"
        onClick={handleNavChange}
      >
        <CaliforniaLogo />
      </Slide>
      <Slide
        id="3"
        imageUrl="/edge.jpg"
        alt="edge "
        leftHref="2"
        rightHref="1"
        onClick={handleNavChange}
      >
        <EdgeLogo />
      </Slide>
    </div>
  );
};

export default MainBannerCarousel;
