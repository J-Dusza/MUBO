"use client";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import Google from "@/components/icons/Google";
import { border } from "@mui/system";
import Login from "./Login";

type Props = {};

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

const page = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="md:relative top-[90px]">
        <div className="w-full flex flex-col lg:flex-row justify-center">
          {/* LEFT SIDE */}

          <Login />

          {/* RIGHT SIDE */}

          <div className="lg:w-1/2 lg:p-20 bg-[url('/metro-bw.jpg')] bg-cover text-toxic-200 p-8 md:px-28 lg:px-12">
            <h2 className="py-12 font-semibold text-4xl uppercase text-center">
              create an account
            </h2>
            <div className="flex flex-col items-center space-y-7  bg-black bg-opacity-50 p-16 backdrop-blur-xl">
              <TextField
                required
                focused
                sx={{ input: { color: "white" } }}
                color="secondary"
                label="E-Mail"
                variant="standard"
                className="w-full caret-toxic-200"
              />
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <TextField
                  required
                  focused
                  sx={{ input: { color: "white" } }}
                  color="secondary"
                  label="Name"
                  variant="standard"
                  className="w-full caret-toxic-200 "
                />
                <TextField
                  required
                  sx={{ input: { color: "white" } }}
                  focused
                  color="secondary"
                  label="Last Name"
                  variant="standard"
                  className="w-full caret-toxic-200"
                />
              </div>
              <TextField
                required
                focused
                sx={{ input: { color: "white" } }}
                color="secondary"
                label="Password"
                variant="standard"
                type="password"
                className="w-full caret-toxic-200"
              />
              <TextField
                required
                focused
                sx={{ input: { color: "white" } }}
                color="secondary"
                label="Repeat Password"
                variant="standard"
                type="password"
                className="w-full caret-toxic-200"
              />
              {/* CHECKBOXES */}

              <div className="flex flex-col gap-3 w-full pt-10 pb-5">
                <div className="w-full flex flex-row gap-8 text-sm text-zinc-300">
                  <input
                    required
                    id="terms"
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <label htmlFor="terms">
                    I agree to terms & conditions and understand the privacy
                    policy
                  </label>
                </div>
                <div className="w-full flex flex-row gap-8 text-sm text-zinc-300">
                  <input
                    required
                    id="newsletter"
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <label htmlFor="newsletter">
                    Sign up for the newsletter and recieve special offers
                  </label>
                </div>
              </div>
              <button className="btn btn-wide btn-warning btn-outline">
                sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default page;
