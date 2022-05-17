import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: "#33bbad",
      main: "#00aa99",
      dark: "#00766b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4483cc",
      main: "#fff",
      dark: "#eee",
      contrastText: "#00aa99",
    },
    success: {
      main: "#00766b",
    },
    background: {
      paper: "#f8fbfe",
    },
    text: {
      primary: "#333",
      secondary: "#444",
    },
  },
});
