import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedInHeader } from "../components/organisms";
import { Main, NotFound404 } from "../components/pages";
import BackToMain from "../components/utils/BackToTop";

const SignedInRouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <SignedInHeader />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/login" element={<BackToMain />} />
        <Route path="/signup" element={<BackToMain />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignedInRouteConfig;
