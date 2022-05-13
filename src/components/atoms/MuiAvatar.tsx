import React from "react";
import Avatar from "@mui/material/Avatar";
import { theme } from "../../assets/theme";

type Props = {
  variant?: "circular" | "rounded" | "square";
  initial?: string;
};

const MuiAvatar: React.FC<Props> = React.memo(({ ...props }) => {
  const { initial } = props;
  return (
    <Avatar {...props} sx={{ bgcolor: [theme.palette.primary.light] }} sizes="16px">
      {initial}
    </Avatar>
  );
});

export default MuiAvatar;
