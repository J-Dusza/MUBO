import React from "react";
import Login from "@/app/login/Login";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import Google from "../icons/Google";
import Link from "next/link";

type Props = {
  setIsAccountTabOn: React.Dispatch<React.SetStateAction<boolean>>;
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

const AccountTab = ({ setIsAccountTabOn }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="absolute top-12 right-0 w-80 h-[550px]">
        <div className=" relative top-10 h-full w-full bg-zinc-100 shadow-lg flex flex-col items-center">
          <h2 className="font-semibold text-2xl uppercase text-center py-8">
            login
          </h2>
          <TextField label="E-Mail" variant="standard" className="w-3/4" />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            className="w-3/4 mt-5"
          />
          <div className="pt-10 pb-4">
            <button className="btn btn-wide">Login</button>
          </div>
          <button className="btn btn-outline btn-wide btn-primary gap-8">
            <Google />
            sign up with google
          </button>
          <p className="uppercase text-center py-5 text-sm">⎯⎯⎯⎯ or ⎯⎯⎯⎯</p>
          <Link href="/login">
            <button
              className="btn btn-wide btn-success"
              onClick={() => setIsAccountTabOn(false)}
            >
              Create an account
            </button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AccountTab;
