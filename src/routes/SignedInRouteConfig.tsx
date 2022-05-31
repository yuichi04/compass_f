import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactBoard, SignedInHeader } from "../components/organisms";
import {
  Home,
  NotFound404,
  PrivacyPolicy,
  Profile,
  Lesson,
  Terms,
  Unsubscribe,
  LessonHome,
  LogicalThinking,
} from "../components/pages";
import BackToMain from "../components/utils/BackToTop";
import ScrollToTop from "../components/utils/ScrollToTop";

const SignedInRouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SignedInHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<BackToMain />} />
        <Route path="/signup" element={<BackToMain />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        <Route path="/lesson" element={<Lesson />}>
          <Route path="home" element={<LessonHome />} />
          <Route path="logicalthinking/elementary" element={<LogicalThinking />} />
        </Route>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <ContactBoard />
    </BrowserRouter>
  );
};

export default SignedInRouteConfig;
