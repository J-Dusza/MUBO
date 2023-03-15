import {
  auth,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "@/utils/firebase/firebase.utils";
import { TextField } from "@mui/material";
import { type } from "os";
import React, { useState } from "react";
import GoogleButton from "./GoogleButton";

type Props = {};

const defaultFormFields = {
  email: "",
  password: "",
};
const defaultErrors = {
  email: "",
  password: "",
};

const Login = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState(defaultErrors);
  const { email, password } = formFields;

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
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (typeof response !== "undefined") {
        setFormFields(defaultFormFields);
        setErrors(defaultErrors);
      }
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;

      if (message.includes("wrong-password")) {
        setErrors({ ...defaultErrors, password: "Incorrect password" });
        resetFormFields();
      }
      if (message.includes("user-not-found")) {
        setErrors({ ...defaultErrors, email: "E-mail was not found" });
        resetFormFields();
      }
      if (message.includes("invalid-email")) {
        setErrors({ ...defaultErrors, email: "E-mail is incorrect" });
        resetFormFields();
      }
    }
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
        <button className="btn btn-wide btn-primary" onClick={handleSubmit}>
          sign in
        </button>
      </div>
      <GoogleButton />
    </form>
  );
};

export default Login;
