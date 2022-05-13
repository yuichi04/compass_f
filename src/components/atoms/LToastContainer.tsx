import React from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/scss/main.scss";
const LToastContainer: React.FC = React.memo(() => {
  return (
    <ToastContainer
      autoClose={2000}
      position="top-center"
      theme="colored"
      closeOnClick
      transition={Flip}
      pauseOnHover={false}
    />
  );
});

export default LToastContainer;
