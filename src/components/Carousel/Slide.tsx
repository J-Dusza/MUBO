import { SetStateAction } from "jotai";
import Image from "next/image";

type SlideProps = {
  id: number;
  maxId: number;
  children: React.ReactNode;
  imageUrl: string;
  alt: string;
  isBackgroundDark: boolean;
  onClick: (id: number) => void;
};

const Slide = ({
  id,
  imageUrl,
  alt,
  isBackgroundDark,
  children,
  maxId,
  onClick,
}: SlideProps) => {
  let leftId = maxId;
  if (id !== 0) {
    leftId = id - 1;
  }
  let rightId = 0;
  if (id !== maxId) {
    rightId = id + 1;
  }

  const leftHref = `#slide${leftId}`;
  const rightHref = `#slide${rightId}`;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-screen">
      <Image fill alt={alt} src={imageUrl} className="w-full object-cover" />
      <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-0 top-[30%]   text-8xl md:text-9xl px-10">
        {children}
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4 space-x-7 uppercase text-5xl">
        <button className="btn btn-accent text-xl">Lookbook</button>
        <button className="btn btn-accent text-xl">Collection</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={leftHref}
          className="btn glass btn-circle"
          onClick={() => onClick(leftId)}
        >
          ❮
        </a>
        <a
          href={rightHref}
          className="btn glass btn-circle"
          onClick={() => onClick(rightId)}
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slide;
