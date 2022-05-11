import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { LinkTo } from "../atoms";

const Footer: React.FC = () => {
  return (
    <SFooter>
      <Grid container>
        <Grid item xs={6}>
          <h2>COMPASS</h2>
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
            <li>お問い合わせ</li>
          </ul>
        </Grid>
      </Grid>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  background: #d8dadf;
  box-shadow: 0 -1px 4px #ccc;
  width: 100vw;
  padding: 32px;
`;
