import { createTheme } from "@mui/material/styles";

// Material-UIのパレットの拡張
declare module "@mui/material/styles" {
  interface Palette {
    primaryGradation: {
      black: {
        main: string;
      };
    };
    primaryCircleGradation: {
      black: {
        light: string;
        main: string;
        dark: string;
      };
    };
    typography: {
      dark: string;
      black: string;
      gray: string;
      white: string;
    };
  }
  interface PaletteOptions {
    primaryGradation: {
      black: {
        main: string;
      };
    };
    primaryCircleGradation: {
      black: {
        light: string;
        main: string;
        dark: string;
      };
    };
    typography: {
      dark: string;
      black: string;
      gray: string;
      white: string;
    };
  }
}

// テーマ本体
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#2f4565",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    warning: {
      main: "#fbb73b",
    },
    info: {
      main: "#097fa1",
    },
    error: {
      main: "#b33e5c",
    },
    success: {
      main: "#00aa99",
    },
    action: {
      disabled: "#ccc",
    },
    background: {
      paper: "#fff",
    },
    primaryGradation: {
      black: { main: "radial-gradient(rgba(42, 47, 54, 1) 50%, rgba(33, 33, 33, 1))" },
    },
    primaryCircleGradation: {
      black: {
        light: "radial-gradient(circle, rgba(33, 33, 33, 0.8) 25%, rgba(55, 55, 55, 0.8))",
        main: "radial-gradient(circle, rgba(33, 33, 33, 0.9) 25%, rgba(55, 55, 55, 0.9))",
        dark: "radial-gradient(circle, rgba(33, 33, 33, 1) 50%, rgba(55, 55, 55, 1))",
      },
    },
    typography: {
      dark: "#000",
      black: "#333",
      gray: "#555",
      white: "#fff",
    },
  },
});
