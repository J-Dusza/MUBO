import { useQuery } from "@tanstack/react-query";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase.utils";
import z from "zod";

const UserSchema = z.object({
  displayName: z.string(),
  email: z.string(),
  newsletter: z.boolean(),
});

type User = z.infer<typeof UserSchema>;

export const useGetUsers = () => {
  const usersQuery = useQuery({
    queryKey: ["firestore", "users"],
    queryFn: async () => {
      const q = query(collection(db, "users"));
      const res = await getDocs(q);
      return res.docs.map((doc) => UserSchema.parse(doc.data()));
    },
  });
  return usersQuery;
};
