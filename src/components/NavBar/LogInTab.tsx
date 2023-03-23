import React, { useState } from "react";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import Link from "next/link";
import GoogleButton from "@/app/login/GoogleButton";
import { userSessionAtom } from "@/utils/firebase/session";
import { useSignIn } from "@/utils/firebase/useSignIn";
import { useAtom } from "jotai";
import LogInButton from "@/app/login/LogInButton";
import { dropdownType } from "./Navbar";

const defaultFormFields = {
  email: "",
  password: "",
};
const defaultErrors = {
  email: "",
  password: "",
};

type Props = {
  setDropdown: React.Dispatch<React.SetStateAction<dropdownType | null>>;
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

const LogInTab = ({ setDropdown }: Props) => {
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
        <div className=" relative top-10 py-12 w-full bg-zinc-100 shadow-lg">
          {!userSession ? (
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-2xl uppercase text-center pb-5">
                Login
              </h2>
              <form className="flex flex-col items-center space-y-5">
                <TextField
                  name="email"
                  label="E-Mail"
                  variant="standard"
                  className="w-3/4"
                  onChange={handleChange}
                  value={email}
                />
                <TextField
                  name="password"
                  label="Password"
                  variant="standard"
                  type="password"
                  className="w-3/4 mt-6"
                  onChange={handleChange}
                  value={password}
                />
                <div className="pt-10 pb-4">
                  <LogInButton
                    formFields={formFields}
                    setFormFields={setFormFields}
                    setErrors={setErrors}
                  />
                </div>
              </form>
              <GoogleButton />
              <p className="uppercase text-center py-5 text-sm">⎯⎯⎯⎯ or ⎯⎯⎯⎯</p>
              <Link href="/login">
                <button
                  className="btn btn-wide btn-success"
                  onClick={() => setDropdown(null)}
                >
                  Create an account
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-lg uppercase text-center pb-5">
                {userSession.email}
              </h2>
              <LogInButton
                formFields={formFields}
                setFormFields={setFormFields}
                setErrors={setErrors}
              />
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LogInTab;
