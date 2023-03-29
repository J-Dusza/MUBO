import { height } from "@mui/system";
import { SetStateAction } from "jotai";
import Image from "next/image";

type SlideProps = {
  id: number;
  maxId: number;
  children: React.ReactNode;
  backgroundUrl: string;
  logoUrl: string;
  alt: string;
  navColor: string;
  onClick: (id: number) => void;
};

const Slide = ({
  id,
  backgroundUrl,
  logoUrl,
  alt,
  navColor,
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
      <Image
        priority
        fill
        alt={alt}
        src={backgroundUrl}
        className="w-full object-cover"
      />
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-0 right-0 top-[30%] w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 m-auto px-10">
        <Image priority fill alt={alt} src={logoUrl} />
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
