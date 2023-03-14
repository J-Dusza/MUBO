import Google from "@/components/icons/Google";
import { TextField } from "@mui/material";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="lg:w-1/2 lg:p-20 py-32 bg-white space-y-7 flex flex-col items-center">
      <h2 className="py-8 font-semibold text-4xl uppercase text-center">
        login
      </h2>
      <TextField label="E-Mail" variant="standard" className="w-1/2" />
      <TextField
        label="Password"
        variant="standard"
        type="password"
        className="w-1/2"
      />
      <div className="pt-8">
        <button className="btn btn-wide btn-primary">sign in</button>
      </div>
      <button className="btn btn-outline btn-wide btn-primary gap-8">
        <Google />
        sign up with google
      </button>
    </div>
  );
};

export default Login;
