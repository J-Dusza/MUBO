import { userSessionAtom } from "@/utils/firebase/session";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useState } from "react";
import { boolean } from "zod";
import User from "../../icons/UserIcon";
import { dropdownType } from "../Navbar";
import LogInTab from "./LogInTab";

type Props = {
  dropdownState: dropdownType | null;
  setDropdownState: React.Dispatch<React.SetStateAction<dropdownType | null>>;
  isAboveLargeScreen: boolean;
};

const LogInIcon = ({
  isAboveLargeScreen,
  setDropdownState,
  dropdownState,
}: Props) => {
  const [userSession] = useAtom(userSessionAtom);

  return (
    <div
      onMouseEnter={() => setDropdownState("login")}
      onMouseLeave={() => setDropdownState(null)}
    >
      {dropdownState === "login" &&
        isAboveLargeScreen &&
        window.location.pathname !== "/login" && (
          <LogInTab setDropdown={setDropdownState} />
        )}
      <div className="z-0" onClick={() => setDropdownState(null)}>
        <Link href="/login">
          <User
            className={`hover:fill-toxic-200 hover:scale-125 ${
              dropdownState === "login" && "fill-toxic-200 scale-125"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogInIcon;
