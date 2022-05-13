import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../lib/redux/hooks";
import { userState } from "../../lib/redux/userSlice";
import { LinkTo } from "../atoms";
import { AvatarWithText } from "../molecules";
import { MuiDrawer } from ".";

const date = new Date();
const hours = date.getHours();
const greeting = () => {
  if (hours >= 3 && hours < 11) {
    return "おはようございます。";
  } else if (hours >= 11 && hours < 18) {
    return "こんにちは。";
  } else {
    return "こんばんは。";
  }
};

const SignedInHeader: React.FC = React.memo(() => {
  const user = useAppSelector(userState);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 0 6px #333" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "#00aa99", fontWeight: "600" }}>
            <LinkTo to="/">COMPASS</LinkTo>
          </Typography>
          <AvatarWithText text={user.name} greeting={greeting()} />
          <MuiDrawer username={user.name} email={user.email} />
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default SignedInHeader;
