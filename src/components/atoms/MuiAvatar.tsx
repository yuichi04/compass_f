import React from "react";
import Avatar from "@mui/material/Avatar";
import { theme } from "../../assets/theme";

type Props = {
  src?: string;
  size?: string;
};

const MuiAvatar: React.FC<Props> = React.memo(({ ...props }) => {
  const { size } = props;
  return <Avatar {...props} sx={{ bgcolor: [theme.palette.primary.light], height: size, width: size }} />;
});

export default MuiAvatar;
