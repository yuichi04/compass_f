import React from "react";
import { Icon, Box } from "@mui/material";
import { SectionTitle } from "../atoms";

type Props = {
  title: string;
  icon: React.ElementType;
  iconColor?: "inherit" | "primary" | "disabled" | "action" | "secondary" | "error" | "info" | "success" | "warning";
};

const IconWithSectionTitle: React.FC<Props> = React.memo((props) => {
  const { title, icon, iconColor } = props;
  return (
    <Box display="flex" alignItems="center" mb="16px">
      <Icon color={iconColor} fontSize="medium" component={icon} sx={{ mr: "8px" }} />
      <SectionTitle title={title} />
    </Box>
  );
});

export default IconWithSectionTitle;
