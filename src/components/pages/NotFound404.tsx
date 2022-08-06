import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import MuiContaier from "../layouts/MuiContainer";

const NoFound: React.FC = () => {
  return (
    <MuiContaier maxWidth="sm">
      <h1>404 Not Found</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <br />
      <Link to="/">
        <Typography color="primary">トップページに戻る</Typography>
      </Link>
    </MuiContaier>
  );
};

export default NoFound;
