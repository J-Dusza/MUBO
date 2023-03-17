import { TextField } from "@mui/material";
import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import { useSignIn } from "@/utils/firebase/useSignIn";
import { userSessionAtom } from "@/utils/firebase/session";
import { useAtom } from "jotai";
import cn from "classnames";

const defaultFormFields = {
  email: "",
  password: "",
};
const defaultErrors = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState(defaultErrors);
  const [userSession] = useAtom(userSessionAtom);

  const { email, password } = formFields;
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

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    if (!email) {
      setErrors({ ...defaultErrors, email: "This field is required" });
    } else if (!password) {
      setErrors({ ...defaultErrors, password: "This field is required" });
    }
    event.preventDefault();

    signInMutation.mutate({ email, password });
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form className="lg:w-1/2 lg:p-20 py-32 bg-white space-y-7 flex flex-col items-center">
      <h2 className="py-8 font-semibold text-4xl uppercase text-center">
        login
      </h2>
      <TextField
        label="E-Mail"
        variant="standard"
        className="w-1/2"
        name="email"
        value={email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        variant="standard"
        name="password"
        value={password}
        type="password"
        className="w-1/2"
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <div className="pt-8">
        <button
          className={cn("btn", "btn-wide", "btn-primary", {
            "loading disabled": signInMutation.isLoading,
          })}
          onClick={handleSubmit}
        >
          sign in
        </button>
      </div>
      <GoogleButton />
    </form>
  );
};

export default Login;
