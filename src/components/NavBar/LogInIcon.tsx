import { userSessionAtom } from "@/utils/firebase/session";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useState } from "react";
import { boolean } from "zod";
import User from "../icons/User";
import LogInTab from "./LogInTab";

type Props = {
  isAboveLargeScreen: boolean;
};

const LogInIcon = ({ isAboveLargeScreen }: Props) => {
  const [isLogInTabOn, setIsLogInTabOn] = useState(false);
  const [userSession] = useAtom(userSessionAtom);

  return (
    <div
      onMouseEnter={() => setIsLogInTabOn(true)}
      onMouseLeave={() => setIsLogInTabOn(false)}
    >
      {isLogInTabOn &&
        isAboveLargeScreen &&
        window.location.pathname !== "/login" && (
          <LogInTab setIsLogInTabOn={setIsLogInTabOn} />
        )}
      <div className="z-0" onClick={() => setIsLogInTabOn(false)}>
        <Link href="/login">
          <User
            className={`hover:fill-toxic-200 hover:scale-125 ${
              isLogInTabOn && "fill-toxic-200 scale-125"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogInIcon;
