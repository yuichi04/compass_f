import React from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/scss/main.scss";
const LToastContainer: React.FC = React.memo(() => {
  return (
    <ToastContainer
      autoClose={1500}
      position="top-right"
      theme="colored"
      closeOnClick
      transition={Flip}
      pauseOnHover={false}
    />
  );
});

export default LToastContainer;
