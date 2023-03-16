import { isNavBackgroundOn, isNavWhite } from "@/shared/global";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

type Props = {};

const NavBackgroundSetter = (props: Props) => {
  const [isBackgroundOn, setisBackgroundOn] = useAtom(isNavBackgroundOn);
  const [isNavTextWhite, setIsNavTextWhite] = useAtom(isNavWhite);

  useEffect(() => {
    setisBackgroundOn(true);
    setIsNavTextWhite(false);
  });

  return <div></div>;
};

export default NavBackgroundSetter;
