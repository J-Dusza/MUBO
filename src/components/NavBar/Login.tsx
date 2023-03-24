import { User } from "firebase/auth";
import Link from "next/link";
import React from "react";
import UserIcon from "../icons/UserIcon";
import LogInTab from "./Login/LogInTab";
import { dropdownType } from "./Navbar";

type Props = {
  dropdownState: dropdownType | null;
  setDropdownState: React.Dispatch<React.SetStateAction<dropdownType | null>>;
  isAboveSmallScreen: boolean;
  userSession: User | null;
};

const Login = ({
  dropdownState,
  setDropdownState,
  userSession,
  isAboveSmallScreen,
}: Props) => {
  return (
    <div
      onMouseEnter={() => {
        setDropdownState("login");
      }}
      onMouseLeave={() => {
        setDropdownState(null);
      }}
    >
      <div className="z-0" onClick={() => setDropdownState(null)}>
        <Link href={userSession ? "/user" : "/login"}>
          <UserIcon
            className={`hover:fill-toxic-200 hover:scale-125 ${
              dropdownState === "login" && "fill-toxic-200 scale-125"
            }`}
          />
        </Link>
      </div>
      {dropdownState === "login" &&
        isAboveSmallScreen &&
        window.location.pathname !== "/login" && (
          <LogInTab setDropdown={setDropdownState} />
        )}
    </div>
  );
};

export default Login;
