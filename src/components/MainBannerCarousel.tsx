import React from "react";
import Image from "next/image";
type Props = {};

const MainBannerCarousel = (props: Props) => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-screen">
        <Image
          fill
          alt="california"
          src="/california.jpg"
          className="w-full object-cover"
        />
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
          California
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
          <button className="btn btn-accent text-xl">Lookbook</button>
          <button className="btn btn-accent text-xl">Kolekcja</button>
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
          src="/sky.jpg"
          className="w-full object-cover"
        />
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

// type btnProps = {
//   href: string;
//   children: React.ReactNode;
// };

// const nextButton = ({ children, href }: btnProps) => (
//   <a href={href} className="btn">
//     {children}
//   </a>
// );

export default MainBannerCarousel;
