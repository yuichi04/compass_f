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
    background: {
      paper: "#f8fbfe",
    },
  },
});
