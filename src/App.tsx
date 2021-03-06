import React, { useEffect } from "react";
import { useListenAuthState } from "./hooks/useListenAuthState";
import { useAppSelector } from "./lib/redux/hooks";
import { userSelector } from "./lib/redux/features/userSlice";
import RouteConfig from "./routes/RouteConfig";
import SignedInRouteConfig from "./routes/SignedInRouteConfig";
import { Box } from "@mui/material";

export const App: React.FC = () => {
  const user = useAppSelector(userSelector);
  const { handleListenAuthState } = useListenAuthState();

  useEffect(() => {
    if (!user.isSignedIn) {
      handleListenAuthState();
    }
  });
  return (
    <Box bgcolor="#f8fbfe" minHeight="100vh">
      {user.isSignedIn ? <SignedInRouteConfig /> : <RouteConfig />}
    </Box>
  );
};

export default App;
