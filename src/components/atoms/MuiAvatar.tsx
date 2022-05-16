import React from "react";
import Avatar from "@mui/material/Avatar";
import { theme } from "../../assets/theme";

type Props = {
  src?: string;
  sizes?: string;
};

const MuiAvatar: React.FC<Props> = React.memo(({ ...props }) => {
  const { sizes } = props;
  return <Avatar {...props} sx={{ bgcolor: [theme.palette.primary.light], height: sizes, width: sizes }} />;
});

export default MuiAvatar;
