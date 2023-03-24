import React, { useEffect, useRef } from "react";
import { dropdownType } from "../Navbar";
import CartTabItem from "./CartTabItem";

type Props = {
  quantity: number;
};

const CartTab = ({ quantity }: Props) => {
  return (
    <div className="absolute right-0 text-black">
      <div className=" relative top-6 py-8 w-80 px-5 bg-white shadow-lg space-y-5">
        <h2 className="font-semibold text-2xl uppercase text-center">
          Your Cart{" "}
        </h2>

        <div className=" overflow-y-scroll h-[35vh] space-y-3">
          <CartTabItem />
          <CartTabItem />
          <CartTabItem />
          <CartTabItem />
        </div>

        {/* SUMMARY */}
        <div className="space-y-3">
          <div className="flex justify-between font-light text-sm uppercase text-neutral-500">
            <h3>Total Items</h3>
            <p>{quantity}</p>
          </div>
          <div className="flex justify-between font-semibold uppercase ">
            <h3>Order total</h3>
            <p>{quantity}$</p>
          </div>
        </div>
        <button className="btn btn-block btn-primary">Go to checkout</button>
      </div>
    </div>
  );
};

export default CartTab;
