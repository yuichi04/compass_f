import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MuiContaier from "../layouts/MuiContainer";
import { PageTitle } from "../atoms";
import { useSignUp } from "../../hooks/useSignUp";

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
      <PageTitle title="ユーザー情報確認中" />
    </MuiContaier>
  );
});

export default ListenAuthUser;
