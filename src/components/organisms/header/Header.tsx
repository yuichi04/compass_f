import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { LinkTo, PrimaryButton } from "../../atoms";
import Logo from "../../../assets/images/logo.svg";

const Header: React.FC = React.memo(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 2px 6px #333", p: "8px 0" }}>
        <Toolbar>
          <LinkTo to="/">
            <Box display="flex" alignItems="center">
              <Box component="img" alt="logo" src={Logo} />
            </Box>
          </LinkTo>
          <Box ml="auto" display="flex" alignItems="center">
            <LinkTo to="/signup">
              <PrimaryButton variant="contained">無料でユーザー登録</PrimaryButton>
            </LinkTo>
            <div style={{ width: "12px" }} />
            <LinkTo to="/login">
              <PrimaryButton variant="contained" color="secondary">
                ログインはこちら
              </PrimaryButton>
            </LinkTo>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
