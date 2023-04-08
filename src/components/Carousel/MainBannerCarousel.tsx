"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { isNavBackgroundOn, isNavWhite } from "@/shared/global";
import EdgeLogo from "./CollectionLogos/EdgeLogo";
import ToxicLogo from "./CollectionLogos/ToxicLogo";
import CaliforniaLogo from "./CollectionLogos/CaliforniaLogo";
import Slide from "./Slide";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/utils/sanity/sanityClient";
import { SlideSchema } from "@/shared/models";
import { urlFor } from "@/utils/sanity/urlFor";
import { motion } from "framer-motion";
import { Hidden } from "@mui/material";
import react from "react";
import Logo from "../icons/Logo";
import { Opacity } from "@mui/icons-material";

type Slide = {
  imageUrl: string;
  alt: string;
  isBackgroundDark: boolean;
  children: React.ReactNode;
};

const show = {
  opacity: 1,
  display: "flex",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

const MainBannerCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [, setisBackgroundOn] = useAtom(isNavBackgroundOn);
  const [, setIsNavTextWhite] = useAtom(isNavWhite);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, isSuccess } = useQuery({
    queryKey: ["slides"],
    queryFn: async () => {
      return await client.fetch('*[_type == "slide"] | order(order)');
    },
    onSuccess: () => setIsLoading(false),
  });

  const handleNavChange = (id: number) => {
    setCurrentSlide(id);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsNavTextWhite(data[currentSlide].navColor == "white");
    } else {
      setIsNavTextWhite(true);
    }
    setisBackgroundOn(false);

    return () => {
      setIsNavTextWhite(false);
      setisBackgroundOn(true);
    };
  });

  useEffect(() => {
    isSuccess && setIsNavTextWhite(data[currentSlide].navColor == "white");
  }, [currentSlide]);

  return (
    <>
      <motion.div
        animate={isLoading ? show : hide}
        className={`
         fixed z-50 flex justify-center items-center  bg-white h-screen w-screen transition-all duration-700`}
      >
        <Logo />
      </motion.div>
      <div className="carousel w-full">
        {isSuccess &&
          data.map((slide: any, idx: number) => (
            <Slide
              key={slide._id}
              id={idx}
              maxId={data.length - 1}
              backgroundUrl={urlFor(slide.background).width(1800).url()}
              logoUrl={urlFor(slide.logo).url()}
              alt={slide.name}
              links={slide.links}
              navColor={slide.navColor}
              onClick={handleNavChange}
            ></Slide>
          ))}
      </div>
    </>
  );
};

export default MainBannerCarousel;
