"use client";
import Product from "@/components/Cards/Product";
import { client } from "@/utils/sanity/sanityClient";
import { urlFor } from "@/utils/sanity/urlFor";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

type Props = {
  queryKey: Array<string>;
  query: string;
};

const Products = ({ query, queryKey }: Props) => {
  const [view, setView] = useState(4);
  const { data, isSuccess } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      return await client.fetch(query);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      {/* SETTINGS */}
      <div className="flex justify-between">
        <div></div>
        <div className="space-x-5 px-8">
          <span>
            <span className=" text-neutral-500 font-light">
              Number of items:
            </span>
            <span className="font-semibold px-3">
              {isSuccess && data.length}
            </span>
          </span>
          <span>
            <span className=" text-neutral-500 font-light">View:</span>
            <button
              className={`pl-2 font-light ${view === 2 && "font-semibold"}`}
              onClick={() => setView(2)}
            >
              2
            </button>
            <button
              className={`pl-2 font-light ${view === 4 && "font-semibold"}`}
              onClick={() => setView(4)}
            >
              4
            </button>
          </span>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        className={`grid ${view === 2 ? "grid-cols-2" : "grid-cols-4"}  gap-2`}
      >
        {isSuccess &&
          data.map((product: any) => {
            const imageUrl1 = urlFor(product.images[0]).width(500).url();
            let imageUrl2 = imageUrl1;
            if (product.images[1])
              imageUrl2 = urlFor(product.images[1]).width(500).url();
            return (
              <Product
                key={product._id}
                name={product.name}
                price={product.price}
                imageUrl1={imageUrl1}
                imageUrl2={imageUrl2}
                view={view}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
