import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components/organisms";
import {
  LogIn,
  NotFound404,
  PasswordReset,
  SignUp,
  Top,
  PrivacyPolicy,
  Terms,
  SentAuthEmail,
  ListenAuthUser,
  Contact,
} from "../components/pages";
import SentPasswordResetEmail from "../components/pages/SentPasswordResetEmail";
import ScrollToTop from "../components/utils/ScrollToTop";

const RouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Top />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sentauthemail" element={<SentAuthEmail />} />
        <Route path="/sentpasswordresetemail" element={<SentPasswordResetEmail />} />
        <Route path="/listenauthuser/*" element={<ListenAuthUser />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteConfig;
