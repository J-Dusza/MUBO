import Image from "next/image";
import { SetStateAction, useAtom } from "jotai";
import { isBackgroundDark } from "./MainBannerCarousel";
import { handleClientScriptLoad } from "next/script";

type SlideProps = {
  id: string;
  children: React.ReactNode;
  imageUrl: string;
  alt: string;
  leftHref: string;
  rightHref: string;
  onClick: () => void;
};

const Slide = (props: SlideProps) => (
  <div
    id={`slide${props.id}`}
    className="carousel-item relative w-full h-screen"
  >
    <Image
      fill
      alt={props.alt}
      src={props.imageUrl}
      className="w-full object-cover"
    />
    <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-0 top-[30%]   text-8xl md:text-9xl px-10">
      {props.children}
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
      <button className="btn btn-accent text-xl">Lookbook</button>
      <button className="btn btn-accent text-xl">Collection</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a
        href={`#slide${props.leftHref}`}
        className="btn glass btn-circle"
        onClick={() => onclick}
      >
        ❮
      </a>
      <a href={`#slide${props.rightHref}`} className="btn glass btn-circle">
        ❯
      </a>
    </div>
  </div>
);

export default Slide;
