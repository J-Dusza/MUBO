import ShoppingBag from "../../icons/ShoppingBag";

type Props = {
  quantity: number;
};

const ShoppingBagWidget = ({ quantity }: Props) => {
  return (
    <div className="group hover:scale-125 transition-all ease-in-out duration-150 cursor-pointer">
      <ShoppingBag />
      <div className="relative left-[25%] bottom-[21px]">
        <p
          className={`text-sm text-center absolute w-4 ${
            quantity > 99 && "text-[0.7rem]"
          }`}
        >
          {quantity > 0 ? quantity : quantity > 99 ? "99+" : ""}
        </p>
      </div>
    </div>
  );
};

export default ShoppingBagWidget;
