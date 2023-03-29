"use client";
import { useQuery } from "@tanstack/react-query";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase.utils";
import z from "zod";
import { client } from "./sanityClient";

const ProductSchema = z.object({
  _createdAt: z.date(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.date(),
  category: z.object({
    _ref: z.string(),
    _type: z.string(),
  }),
  description: z.string().optional(),
  gender: z.string(),
  images: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      asset: z.object({
        _ref: z.string(),
        _type: z.string(),
      }),
    })
  ),
  name: z.string(),
  price: z.number(),
});

type User = z.infer<typeof ProductSchema>;

export const useGetProducts = (query: string) => {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await client.fetch(query);
      // return res.map((product: any) => ProductSchema.parse(product));
      return res;
    },
    onError: () => {
      console.log("error during product parsing");
    },
  });
  return productsQuery;
};
