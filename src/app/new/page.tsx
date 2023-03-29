import Products from "./Products";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative top-[90px]">
      <div className="flex justify-between">
        <div></div>
        <div className="w-9/12">
          <Products
            queryKey={["newProducts"]}
            query='*[_type == "product" && dateTime(_createdAt) > dateTime(now()) - 60*60*24*7 ] | order(_createdAt desc)'
          />
        </div>
      </div>
    </div>
  );
};

export default page;
