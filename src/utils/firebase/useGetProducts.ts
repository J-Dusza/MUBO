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
import { db } from "./firebase.utils";
import z from "zod";

const ProductSchema = z.object({
  name: z.string(),
  // addedAt: z.any(),
  // gender: z.enum(["male", "female", "unisex"]),
  // category: z.string(),
  price: z.number(),
  // quantity: z.number(),
  // sizes: z.array(z.enum(["xs", "s", "m", "l", "xl", "xxl"])),
  description: z.string(),
});

type User = z.infer<typeof ProductSchema>;

export const useGetProducts = () => {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const q = collection(db, "products");
      const res = await getDocs(q);
      return res.docs.map((doc) => ProductSchema.parse(doc.data()));
    },
  });
  return productsQuery;
};
