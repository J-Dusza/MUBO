import React from "react";
import Image from "next/image";
import Slide from "./Slide";
type Props = {};

const MainBannerCarousel = (props: Props) => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-screen">
        <Image
          fill
          alt="TOXIC"
          src="/toxic.webp"
          className="w-full object-cover"
        />
        <ToxicTitle />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
          <button className="btn btn-accent text-xl">Lookbook</button>
          <button className="btn btn-accent text-xl">Collection</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn glass btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn glass btn-circle">
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
        <CaliforniaTitle />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
          <button className="btn btn-accent text-xl">Lookbook</button>
          <button className="btn btn-accent text-xl">Collection</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn glass btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn glass btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

const CaliforniaTitle = () => {
  return (
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/4 text-7xl md:text-9xl font-lobster">
      <p className="text-white relative left-[5px] top-[5px]">California</p>
      <p className="text-rose-600 absolute">California</p>
    </div>
  );
};

const ToxicTitle = () => {
  return (
    <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-0 top-[30%]   text-8xl md:text-9xl font-serif uppercase">
      <p className="text-black relative left-[5px] top-[5px]">Toxic</p>
      <p className=" text-green-500 absolute">Toxic</p>
    </div>
  );
};

export default MainBannerCarousel;
