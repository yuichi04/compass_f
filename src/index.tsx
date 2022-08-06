import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import App from "./App";
import "./assets/styles/style.scss";
import reportWebVitals from "./reportWebVitals";
import { Spinner } from "./components/organisms";
import { ToastContainer } from "./components/atoms";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.Fragment>
    <Provider store={store}>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <ToastContainer />
          <Spinner>
            <App />
          </Spinner>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
