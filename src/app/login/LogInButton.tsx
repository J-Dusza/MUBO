import { signOutUser } from "@/utils/firebase/firebase.utils";
import { userSessionAtom } from "@/utils/firebase/session";
import { useSignIn } from "@/utils/firebase/useSignIn";
import { useAtom } from "jotai";

type Props = {
  formFields: {
    email: string;
    password: string;
  };
  setFormFields: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;

  setErrors: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
};

const defaultErrors = {
  email: "",
  password: "",
};

const LogInButton = ({ formFields, setFormFields, setErrors }: Props) => {
  const [userSession] = useAtom(userSessionAtom);

  const signInMutation = useSignIn({
    onError: ({ message }) => {
      if (message.includes("wrong-password")) {
        setErrors({ ...defaultErrors, password: "Incorrect password" });
      } else if (message.includes("user-not-found")) {
        setErrors({ ...defaultErrors, email: "E-mail was not found" });
      } else if (message.includes("invalid-email")) {
        setErrors({ ...defaultErrors, email: "E-mail is incorrect" });
      }
      resetFormFields();
    },
  });
  const resetFormFields = () => {
    setFormFields({ ...formFields, password: "" });
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    userSession ? signOutUser() : handleLogIn();
  };

  const handleLogIn = async () => {
    if (!formFields.email) {
      setErrors({ ...defaultErrors, email: "This field is required" });
    } else if (!formFields.password) {
      setErrors({ ...defaultErrors, password: "This field is required" });
    }

    const email = formFields.email;
    const password = formFields.password;

    signInMutation.mutate({ email, password });
  };

  return (
    <button
      className={`btn btn-wide btn-primary ${
        signInMutation.isLoading && "loading disabled"
      }`}
      type="button"
      onClick={handleSubmit}
    >
      {signInMutation.isLoading ? "" : userSession ? "Sign Out" : "Sign In"}
    </button>
  );
};

export default LogInButton;
