import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactBoard, SignedInHeader } from "../components/organisms";
import {
  Home,
  NotFound404,
  PrivacyPolicy,
  Profile,
  Story,
  StoryChapter1,
  Terms,
  Unsubscribe,
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
        <Route path="/story" element={<Story />}>
          <Route path="chapter1" element={<StoryChapter1 />} />
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
