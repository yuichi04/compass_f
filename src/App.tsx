import React, { useEffect } from "react";
import { useListenAuthState } from "./hooks/useListenAuthState";
import { useAppSelector } from "./lib/redux/hooks";
import { userState } from "./lib/redux/userSlice";
import RouteConfig from "./routes/RouteConfig";
import SignedInRouteConfig from "./routes/SignedInRouteConfig";

export const App: React.FC = () => {
  const user = useAppSelector(userState);
  const { handleListenAuthState } = useListenAuthState();

  useEffect(() => {
    if (!user.isSignedIn) {
      handleListenAuthState();
    }
  });
  return <>{user.isSignedIn ? <SignedInRouteConfig /> : <RouteConfig />}</>;
};

export default App;
