import React from "react";

type Props = {};

const CaliforniaLogo = (props: Props) => {
  return (
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/4 text-7xl md:text-9xl font-lobster">
      <p className="text-white relative left-[5px] top-[5px]">California</p>
      <p className="text-rose-600 absolute">California</p>
    </div>
  );
};

export default CaliforniaLogo;
