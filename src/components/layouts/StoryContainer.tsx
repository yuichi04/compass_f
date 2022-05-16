import React from "react";
import Container from "@mui/material/Container";

type Props = {
  children: React.ReactNode;
};

const StoryContainer: React.FC<Props> = React.memo(({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ padding: "16px 0" }}>
      {children}
    </Container>
  );
});

export default StoryContainer;
