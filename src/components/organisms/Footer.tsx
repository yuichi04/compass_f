import React from "react";
import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import { LinkTo } from "../atoms";
import Logo from "../../assets/images/logo.svg";

const Footer: React.FC = () => {
  return (
    <SFooter>
      <Grid container>
        <Grid item xs={6}>
          <LinkTo to="/">
            <Box display="flex" alignItems="center">
              <Box component="img" alt="logo" src={Logo} />
            </Box>
          </LinkTo>
          <small>&copy;COMPASSS-2022</small>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", fontSize: "14px" }}>
          <ul>
            <li>
              <LinkTo to="/privacypolicy">プライバシーポリシー</LinkTo>
            </li>
            <li>
              <LinkTo to="/terms">利用規約</LinkTo>
            </li>
            <li>
              <LinkTo to="/contact">お問い合わせ</LinkTo>
            </li>
          </ul>
        </Grid>
      </Grid>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  background: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.typography.black};
  width: 100vw;
  padding: 32px;
`;
