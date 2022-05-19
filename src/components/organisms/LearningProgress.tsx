import React from "react";
import { SectionTitle } from "../atoms";

const LearningProgress: React.FC = React.memo(() => {
  return (
    <>
      <SectionTitle title="チャプター別達成度" />
      <div style={{ background: "#eee", height: "500px" }} />
    </>
  );
});

export default LearningProgress;