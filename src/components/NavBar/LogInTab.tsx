import React, { useState } from "react";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import Link from "next/link";
import GoogleButton from "@/app/login/GoogleButton";
import { userSessionAtom } from "@/utils/firebase/session";
import { useSignIn } from "@/utils/firebase/useSignIn";
import { useAtom } from "jotai";
import LogInButton from "@/app/login/LogInButton";

const defaultFormFields = {
  email: "",
  password: "",
};
const defaultErrors = {
  email: "",
  password: "",
};

type Props = {
  setIsLogInTabOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#48BF84",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const LogInTab = ({ setIsLogInTabOn }: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState(defaultErrors);
  const { email, password } = formFields;
  const [userSession] = useAtom(userSessionAtom);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="absolute top-12 right-0 w-80 h-[550px] z-0 text-black">
        <div className=" relative top-10 h-full w-full bg-zinc-100 shadow-lg flex flex-col items-center">
          <h2 className="font-semibold text-2xl uppercase text-center pt-12 pb-5">
            {/* {userSession ? userSession.email : "Login"} */}
            Login
          </h2>
          <TextField
            name="email"
            label="E-Mail"
            variant="standard"
            className="w-3/4"
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="standard"
            type="password"
            className="w-3/4 mt-6"
            onChange={handleChange}
          />
          <div className="pt-10 pb-4">
            <LogInButton
              formFields={formFields}
              setFormFields={setFormFields}
              setErrors={setErrors}
            />
          </div>
          <GoogleButton />
          <p className="uppercase text-center py-5 text-sm">⎯⎯⎯⎯ or ⎯⎯⎯⎯</p>
          <Link href="/login">
            <button
              className="btn btn-wide btn-success"
              onClick={() => setIsLogInTabOn(false)}
            >
              Create an account
            </button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LogInTab;
