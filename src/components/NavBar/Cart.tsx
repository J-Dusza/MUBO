import React, { useRef } from "react";
import CartTab from "./Cart/CartTab";
import { dropdownType } from "./Navbar";
import ShoppingBagWidget from "./Cart/ShoppingBagWidget";

type Props = {
  dropdownState: dropdownType | null;
  setDropdownState: React.Dispatch<React.SetStateAction<dropdownType | null>>;
  isAboveSmallScreen: boolean;
  cartQuantity: number;
};

const Cart = ({
  dropdownState,
  setDropdownState,
  cartQuantity,
  isAboveSmallScreen,
}: Props) => {
  //   const squareBoxRef = useRef<HTMLDivElement>(null);
  //   const clickOutsidehandler = () => {
  //     setDropdownState(null);
  //   };
  //   useOnClickOutside(squareBoxRef, clickOutsidehandler);

  return (
    <div
      onMouseEnter={() => {
        setDropdownState("cart");
      }}
      onMouseLeave={() => {
        setDropdownState(null);
      }}
    >
      <div
        onClick={() => {
          setDropdownState((state) => {
            if (state === "cart") return null;
            else return "cart";
          });
        }}
      >
        <ShoppingBagWidget quantity={cartQuantity} />
      </div>
      {dropdownState === "cart" && isAboveSmallScreen && cartQuantity > 0 && (
        <CartTab quantity={cartQuantity} />
      )}
    </div>
  );
};

export default Cart;
