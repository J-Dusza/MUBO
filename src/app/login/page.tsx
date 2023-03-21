"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import Login from "./Login";
import NavBackgroundSetter from "./NavBackgroundSetter";
import Register from "./Register";

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
      <NavBackgroundSetter />
      <div className="md:relative top-[90px]">
        <div className="w-full flex flex-col lg:flex-row justify-center">
          {/* LEFT SIDE */}
          <Login />
          {/* RIGHT SIDE */}
          <Register />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default page;
