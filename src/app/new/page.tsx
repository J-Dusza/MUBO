"use client";
import { db } from "@/utils/firebase/firebase.utils";
import { useGetProducts } from "@/utils/sanity/useGetProducts";
import { useGetUsers } from "@/utils/firebase/useGetUsers";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query } from "firebase/firestore";
import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const products = useGetProducts("*[_type==product]");
  console.log(products);
  return (
    <div>
      {/* {products?.map((product, id) => {
        return <div key={i}>{product.name}</div>;
      })} */}
    </div>
  );
};

export default page;
