import React from "react";
import { ToastContainer as Toastify, Flip } from "react-toastify";
import "react-toastify/scss/main.scss";
const ToastContainer: React.FC = React.memo(() => {
  return (
    <Toastify
      autoClose={1500}
      position="top-right"
      theme="colored"
      closeOnClick
      transition={Flip}
      pauseOnHover={false}
    />
  );
});

export default ToastContainer;
