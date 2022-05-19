import React from "react";
import { SectionTitle } from "../atoms";

const LearningCalendar: React.FC = React.memo(() => {
  return (
    <>
      <SectionTitle title="最近の学習状況" />
      <div style={{ height: "250px", background: "#eee" }} />
    </>
  );
});

export default LearningCalendar;
