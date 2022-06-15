import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { LinkTo } from "../atoms";

const Footer: React.FC = () => {
  return (
    <SFooter>
      <Grid container>
        <Grid item xs={6}>
          <LinkTo to="/">
            <h2>COMPASS</h2>
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
  background: #eaedef;
  border-top: 1px solid #efefef;
  width: 100vw;
  padding: 32px;
`;
