import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import { FirebaseError } from "firebase/app";

type UseSignInOptions = {
  onError?: (error: FirebaseError) => void;
};

type SignInInput = {
  email: string;
  password: string;
};

export const useSignIn = (options?: UseSignInOptions) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ email, password }: SignInInput) => {
      return await signInWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: options?.onError,
  });

  return mutation;
};
