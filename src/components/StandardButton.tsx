import React from "react";

type Props = {
  className?: string;
  children?: string;
};

const StandardButton = (link, children, className: Props) => {
  return (
    <button
      className={`py-2 hover:font-extrabold hover:text-toxic-200 border-toxic-200 hover:border-b-2 hover:scale-110 transition-all duration-100 ease-in ${className}`}
    >
      {children}
    </button>
  );
};

export default StandardButton;
