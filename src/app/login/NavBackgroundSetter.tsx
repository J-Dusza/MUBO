import { isNavBackgroundOn } from "@/shared/global";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

type Props = {};

const NavBackgroundSetter = (props: Props) => {
  const [isBackgroundOn, setIsBackgroundOn] = useAtom(isNavBackgroundOn);

  useEffect(() => {
    setIsBackgroundOn(true);
  }, []);
  return <div></div>;
};

export default NavBackgroundSetter;
