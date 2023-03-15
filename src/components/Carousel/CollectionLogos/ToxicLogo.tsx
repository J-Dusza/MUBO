import React from "react";

type Props = {};

const ToxicLogo = () => {
  return (
    <div className="absolute flex justify-center transform -translate-y-1/2 left-0 right-0 top-[30%]   text-8xl md:text-9xl font-serif uppercase">
      <p className="text-black relative left-[5px] top-[5px]">Toxic</p>
      <p className=" text-green-500 absolute">Toxic</p>
    </div>
  );
};

export default ToxicLogo;
