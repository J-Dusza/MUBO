import { Button } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "../icons/arrowDown";

type Props = {
  currentTab: string | null;
  setCurrentTab: React.Dispatch<React.SetStateAction<string | null>>;
  name: string;
  children: React.ReactNode;
  handleFilterSubmit: () => void;
};

const FilterComponent = ({
  name,
  children,
  currentTab,
  setCurrentTab,
  handleFilterSubmit,
}: Props) => {
  const isCurrentTab = () => currentTab === name;
  return (
    <div className="block sm:px-4 pr-4">
      <button
        className="flex items-center uppercase"
        onClick={() => {
          if (isCurrentTab()) {
            setCurrentTab(null);
          } else setCurrentTab(name);
        }}
      >
        <p>{name}</p>
        <span
          className={`inline-block px-1 ${
            isCurrentTab() && "rotate-180"
          } transition-transform duration-400 `}
        >
          <ArrowDown />
        </span>
      </button>
      <div
        className={`${
          !isCurrentTab() && "hidden"
        } w-56 absolute bg-zinc-100 border-zinc-300 border-[1px] shadow-xl mt-4 p-3 flex justify-between flex-col gap-3`}
      >
        <div className="max-h-80 overflow-scroll">
          <div className="space-y-3 py-4">{children}</div>
        </div>
        <div>
          <button
            className="btn btn-block btn-outline"
            onClick={handleFilterSubmit}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
