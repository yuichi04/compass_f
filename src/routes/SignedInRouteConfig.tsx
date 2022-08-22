import React from "react";
// Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { ContactBoard, SignedInHeader } from "../components/organisms";
import {
  Home,
  LessonList,
  Lesson,
  NotFound404,
  PrivacyPolicy,
  Profile,
  Terms,
  Unsubscribe,
  Induction,
  UpdateEmail,
  UserAnswersHistory,
} from "../components/pages";
import GoToTop from "../components/utils/GoToTop";
import ScrollToTop from "../components/utils/ScrollToTop";

const SignedInRouteConfig: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SignedInHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/updateemail/*" element={<UpdateEmail />} />
        <Route path="/login" element={<GoToTop />} />
        <Route path="/signup" element={<GoToTop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        <Route path="/lessonlist" element={<LessonList />} />
        <Route path="/lesson" element={<Lesson />}>
          <Route path="induction" element={<Induction />} />
        </Route>
        <Route path="/history" element={<UserAnswersHistory />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <ContactBoard />
    </BrowserRouter>
  );
};

export default SignedInRouteConfig;
