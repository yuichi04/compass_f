import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/userSlice";
import { LinkTo } from "../atoms";
import { AvatarWithText } from "../molecules";
import { MuiDrawer } from ".";
import { Grid } from "@mui/material";

const date = new Date();
const hours = date.getHours();
const greeting = () => {
  if (hours >= 3 && hours < 11) {
    return "おはようございます、";
  } else if (hours >= 11 && hours < 18) {
    return "こんにちは、";
  } else {
    return "こんばんは、";
  }
};

const SignedInHeader: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 2px 6px #333" }}>
        <Toolbar>
          <Grid container>
            <Grid item sm={6} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "#00aa99", fontWeight: "600", marginRight: "64px" }}
              >
                <LinkTo to="/">COMPASS</LinkTo>
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginRight: "32px" }}>
                <LinkTo to="lessons">ストーリー</LinkTo>
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginRight: "32px" }}>
                <LinkTo to="lessons">エッセンス</LinkTo>
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginRight: "32px" }}>
                <LinkTo to="lessons">コミュニティ</LinkTo>
              </Typography>
              <Typography variant="body1" component="p">
                <LinkTo to="lessons">ヘルプ</LinkTo>
              </Typography>
            </Grid>
            <Grid
              item
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <AvatarWithText text={user.name} greeting={greeting()} />
              <MuiDrawer username={user.name} email={user.email} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default SignedInHeader;
