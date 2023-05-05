import Products from "../../components/Products/Products";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative top-[90px]">
      <div className="flex justify-between">
        <div className=""></div>
        <div className="w-full lg:w-9/12 pt-24 px-3 lg:pr-8">
          <Products
            queryKey={["newProducts"]}
            query='*[_type == "product"'
            sorting="order(_createdAt desc )"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
