import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/features/userSlice";
import { LinkTo } from "../atoms";
import { AvatarWithName } from "../molecules";
import { MuiDrawer } from ".";
import { Grid } from "@mui/material";
import Logo from "../../assets/images/logo.svg";

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
  const user = useAppSelector(userSelector);
  return (
    <Box sx={{ flexGrow: 1, height: "64px" }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 2px 6px #333" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "#00aa99", fontWeight: "600", marginRight: "64px" }}
              >
                <LinkTo to="/">
                  <Box display="flex" alignItems="center">
                    <Box component="img" alt="logo" src={Logo} />
                  </Box>
                </LinkTo>
              </Typography>
              <ul className="hover_text_underline">
                <Typography component="li" sx={{ marginRight: "32px" }}>
                  <LinkTo to="lessonlist">レッスン一覧</LinkTo>
                </Typography>
                <Typography component="li">
                  <LinkTo to="lesson/lessons">ヘルプ</LinkTo>
                </Typography>
              </ul>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <AvatarWithName name={user.name} greeting={greeting()} src={user.image} />
              <MuiDrawer username={user.name} email={user.email} src={user.image} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default SignedInHeader;
