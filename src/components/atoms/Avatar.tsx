import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

type Props = {
  src?: string;
  size?: string;
  bgcolor: string;
};

const Avatar: React.FC<Props> = React.memo(({ ...props }) => {
  const { size, bgcolor } = props;
  return <MuiAvatar {...props} sx={{ bgcolor: bgcolor, height: size, width: size }} />;
});

export default Avatar;
