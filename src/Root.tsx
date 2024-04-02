import { RouterProvider } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";

import { router } from "./routes/Router";
import { useAppSelector } from "./store/hooks";

import { LoadingModal } from "./components/LoadingModal";
import { dark, light } from "./themes";

export function Root() {
  const currentTheme = useAppSelector((state) =>
    state.theme.currentTheme === "light" ? light : dark
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <LoadingModal />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
