import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "../components/organisms";
import { LogIn, NotFound404, PasswordReset, SignUp } from "../components/pages";

const RouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/passwordreset" element={<PasswordReset />} />

        {/* Need Authentication */}

        {/* 404 Not found */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteConfig;
