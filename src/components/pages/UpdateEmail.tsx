import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import { MuiContainer } from "../layouts";
const UpdateEmail: React.FC = () => {
  const { pathname } = useLocation();
  const { handleUpdateEmail } = useUpdateProfile();

  useEffect(() => {
    const arr = pathname.split("/");
    const token = arr.pop();

    if (token) {
      handleUpdateEmail(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <MuiContainer maxWidth="sm">
      <Typography variant="h3" textAlign="center">
        メールアドレス更新中
      </Typography>
    </MuiContainer>
  );
};

export default UpdateEmail;
