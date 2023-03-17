import { atom, getDefaultStore } from "jotai";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./config";

export const userSessionAtom = atom<User | null>(null);
const store = getDefaultStore();

onAuthStateChanged(auth, (user) => {
  store.set(userSessionAtom, user);
});
