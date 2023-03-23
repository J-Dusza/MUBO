import ShoppingBag from "../icons/ShoppingBag";

type Props = {
  quantity: number;
};

const ShoppingBagWidget = ({ quantity }: Props) => {
  return (
    <div className="group hover:scale-125 transition-all ease-in-out duration-150">
      <ShoppingBag />
      <div className="relative left-[25%] bottom-[65%]">
        <p
          className={`text-sm text-center absolute w-4 ${
            quantity > 99 && "text-[11px]"
          }`}
        >
          {quantity > 99 ? "99+" : quantity}
        </p>
      </div>
    </div>
  );
};

export default ShoppingBagWidget;
