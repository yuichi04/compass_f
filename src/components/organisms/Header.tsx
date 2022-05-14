import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LinkTo, MuiButton } from "../atoms";

const Header: React.FC = React.memo(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 2px 6px #333" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "#00aa99", fontWeight: "600" }}>
            <LinkTo to="/">COMPASS</LinkTo>
          </Typography>
          <LinkTo to="/signup">
            <MuiButton variant="contained">無料でユーザー登録</MuiButton>
          </LinkTo>
          <div style={{ width: "12px" }} />
          <LinkTo to="/login">
            <MuiButton variant="contained" color="secondary">
              ログインはこちら
            </MuiButton>
          </LinkTo>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
