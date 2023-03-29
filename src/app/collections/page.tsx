"use client";
import { client } from "@/utils/sanity/sanityClient";
import { useGetProducts } from "@/utils/sanity/useGetProducts";
import React from "react";

type Props = {};

const page = (props: Props) => {
  // const products = useGetProducts('*[_type == "product"]');
  // console.log(products);
  return <div className="relative top-[90px]"></div>;
};

export default page;
