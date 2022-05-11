import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "../components/organisms";
import Footer from "../components/organisms/Footer";
import { LogIn, NotFound404, PasswordReset, SignUp, Top, Main, PrivacyPolicy, Terms } from "../components/pages";
import ScrollToTop from "../components/ScrollToTop";

const RouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Top />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Need Authentication */}
        <Route path="/main" element={<Main />} />

        {/* 404 Not found */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteConfig;
