import { RouterProvider } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";

import { router } from "./routes/Router";
import { useAppSelector } from "./store/hooks";

import { dark, light } from "./themes";

export function Root() {
  const currentTheme = useAppSelector((state) =>
    state.theme.currentTheme === "light" ? light : dark
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
