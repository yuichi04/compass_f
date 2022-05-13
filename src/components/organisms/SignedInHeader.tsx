import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../lib/redux/hooks";
import { userState } from "../../lib/redux/userSlice";
import { LinkTo, MuiAvatar, MuiButton } from "../atoms";
import { AvatarWithText } from "../molecules";
import { MuiDrawer } from ".";
// import { useLogOut } from "../../hooks/useLogOut";

const SignedInHeader: React.FC = React.memo(() => {
  // const { handleClick } = useLogOut();
  const user = useAppSelector(userState);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 0 6px #333" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "#00aa99", fontWeight: "600" }}>
            <LinkTo to="/">COMPASS</LinkTo>
          </Typography>
          <AvatarWithText text={user.name} />
          {/* <MuiButton variant="contained" onClick={handleClick}>
            ログアウト
          </MuiButton> */}
          {/* ハンバーガーメニューに変更する */}
          <MuiDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default SignedInHeader;
