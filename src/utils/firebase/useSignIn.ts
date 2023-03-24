import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import { FirebaseError } from "firebase/app";
import User from "@/components/icons/UserIcon";
import { userSessionAtom } from "./session";
import { useAtom } from "jotai";

type UseSignInOptions = {
  onError?: (error: FirebaseError) => void;
};

type SignInInput = {
  email: string;
  password: string;
};

export const useSignIn = (options?: UseSignInOptions) => {
  const [userSession, setUserSession] = useAtom(userSessionAtom);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ email, password }: SignInInput) => {
      console.log("user signed in", userSession?.email);
      return await signInWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: options?.onError,
  });

  return mutation;
};
