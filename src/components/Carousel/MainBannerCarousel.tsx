"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { isNavBackgroundOn, isNavWhite } from "@/shared/global";
import EdgeLogo from "./CollectionLogos/EdgeLogo";
import ToxicLogo from "./CollectionLogos/ToxicLogo";
import CaliforniaLogo from "./CollectionLogos/CaliforniaLogo";
import Slide from "./Slide";

type Slide = {
  imageUrl: string;
  alt: string;
  isBackgroundDark: boolean;
  children: React.ReactNode;
};

const Slides: Array<Slide> = [
  {
    imageUrl: "/california.jpg",
    alt: "California",
    isBackgroundDark: true,
    children: <CaliforniaLogo />,
  },
  {
    imageUrl: "/edge.jpg",
    alt: "Edge Attire",
    isBackgroundDark: true,
    children: <EdgeLogo />,
  },
  {
    imageUrl: "/toxic.jpg",
    alt: "Toxic",
    isBackgroundDark: false,
    children: <ToxicLogo />,
  },
];

const MainBannerCarousel = () => {
  const [isBackgroundOn, setisBackgroundOn] = useAtom(isNavBackgroundOn);
  const [isNavTextWhite, setIsNavTextWhite] = useAtom(isNavWhite);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNavChange = (id: number) => {
    setCurrentSlide(id);
  };

  useEffect(() => {
    setIsNavTextWhite(false);
    setisBackgroundOn(false);

    return () => {
      setIsNavTextWhite(false);
      setisBackgroundOn(true);
    };
  }, []);

  useEffect(() => {
    setIsNavTextWhite(Slides[currentSlide].isBackgroundDark);
  }, [currentSlide]);

  return (
    <div className="carousel w-full">
      {Slides.map((_slide, _index) => (
        <Slide
          key={_index}
          id={_index}
          maxId={Slides.length - 1}
          imageUrl={_slide.imageUrl}
          alt={_slide.alt}
          isBackgroundDark={_slide.isBackgroundDark}
          onClick={handleNavChange}
        >
          {_slide.children}
        </Slide>
      ))}
    </div>
  );
};

export default MainBannerCarousel;
