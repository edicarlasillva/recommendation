import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: blue[300],
      main: '#04074c',
      dark: blue[900]
    },
    secondary: {
      main: '#000'
    },
    background: {
      default: ' #200303',
      paper: '#460E0E'
    }
  }
})