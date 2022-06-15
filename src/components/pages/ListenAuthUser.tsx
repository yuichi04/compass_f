import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MuiContaier from "../layouts/MuiContainer";
import { useSignUp } from "../../hooks/useSignUp";
import { Typography } from "@mui/material";

const ListenAuthUser: React.FC = React.memo(() => {
  const { pathname } = useLocation();
  const { register } = useSignUp();

  useEffect(() => {
    const array = pathname.split("/");
    const token = array.pop();
    if (token) {
      register(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <MuiContaier maxWidth="xl">
      <Typography variant="h3" textAlign="center">
        ユーザー情報認証中
      </Typography>
    </MuiContaier>
  );
});

export default ListenAuthUser;
