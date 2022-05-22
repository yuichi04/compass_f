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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 2px 6px #333" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "#00aa99", fontWeight: "600", marginRight: "64px" }}
              >
                <LinkTo to="/">COMPASS</LinkTo>
              </Typography>
              <Typography component="p" sx={{ marginRight: "32px" }}>
                <LinkTo to="/story">ストーリー</LinkTo>
              </Typography>
              <Typography component="p" sx={{ marginRight: "32px" }}>
                <LinkTo to="lessons">スライド一覧</LinkTo>
              </Typography>
              <Typography component="p">
                <LinkTo to="lessons">ヘルプ</LinkTo>
              </Typography>
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
