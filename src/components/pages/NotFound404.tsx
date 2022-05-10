import React from "react";
import { Link } from "react-router-dom";
import MuiContaier from "../layouts/MuiContainer";

const NoFound: React.FC = () => {
  return (
    <MuiContaier>
      <h1>404 Not Found</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <Link to="/">トップページへ</Link>
    </MuiContaier>
  );
};

export default NoFound;
