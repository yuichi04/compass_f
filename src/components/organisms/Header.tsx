import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { LinkTo } from "../atoms";

const Header: React.FC = React.memo(() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 0 12px #ccc" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "#fff" }}>
            <LinkTo to="/">COMPASS</LinkTo>
          </Typography>
          <LinkTo to="/signup">
            <SSignup>無料でユーザー登録</SSignup>
          </LinkTo>
          <LinkTo to="/login">
            <SLogin>ログインはこちら</SLogin>
          </LinkTo>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;

const SButton = styled.div`
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const SSignup = styled(SButton)`
  background: #1665c0;
  color: white;
  margin-right: 12px;
`;
const SLogin = styled(SButton)`
  background: #fff;
  color: #1665c0;
`;
