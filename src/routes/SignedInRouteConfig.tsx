import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, SignedInHeader } from "../components/organisms";
import { Home, NotFound404, Profile, Unsubscribe } from "../components/pages";
import BackToMain from "../components/utils/BackToTop";

const SignedInRouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <SignedInHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<BackToMain />} />
        <Route path="/signup" element={<BackToMain />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default SignedInRouteConfig;
