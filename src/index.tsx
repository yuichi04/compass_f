import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";
import { ThemeProvider } from "@mui/material/styles";
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
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Spinner>
          <App />
        </Spinner>
      </ThemeProvider>
    </Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
