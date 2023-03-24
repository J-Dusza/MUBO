import React from "react";

type Props = {};

const CartTabItem = (props: Props) => {
  return (
    <div className=" w-full h-28 bg-zinc-100 flex horizontal">
      <div className="h-full w-[35%] bg-indigo-300"></div>
      <div className="w-[65%] py-2 px-4 flex flex-col items-end justify-between">
        <div className="w-full">
          <p className=" truncate">Red t-shirt with skull on the back </p>
          <div className="flex justify-between font-light text-base text-neutral-500">
            <p className="">Size: XXL</p>
            <p>Qty: 6</p>
          </div>
        </div>
        <p>45,99$</p>
      </div>
    </div>
  );
};

export default CartTabItem;
