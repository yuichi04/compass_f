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
          <Box component="small">&copy;COMPASSS-2022</Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", fontSize: "14px" }}>
          <ul>
            <Box component="li" mb="8px">
              <LinkTo to="/privacypolicy">プライバシーポリシー</LinkTo>
            </Box>
            <Box component="li" mb="8px">
              <LinkTo to="/terms">利用規約</LinkTo>
            </Box>
            <Box component="li">
              <LinkTo to="/contact">お問い合わせ</LinkTo>
            </Box>
          </ul>
        </Grid>
      </Grid>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  position: relative;
  background: ${(props) => props.theme.palette.primary.dark};
  box-shadow: 0 -1px 4px ${(props) => props.theme.palette.primary.dark};
  color: ${(props) => props.theme.palette.typography.white};
  width: 100vw;
  padding: 48px 32px;
`;
