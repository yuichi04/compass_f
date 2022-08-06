import React from "react";
import styled from "styled-components";
import { Icon, Typography } from "@mui/material";

type Props = {
  title: string;
  icon: React.ElementType;
  iconColor?: "inherit" | "primary" | "disabled" | "action" | "secondary" | "error" | "info" | "success" | "warning";
};

const IconWithPageTitle: React.FC<Props> = React.memo((props) => {
  const { title, icon, iconColor } = props;
  return (
    <SFlex>
      <Icon component={icon} color={iconColor} sx={{ marginRight: "8px", fontSize: "48px", color: "primray" }} />
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
    </SFlex>
  );
});

export default IconWithPageTitle;

const SFlex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 32px;
  line-height: 64px;
`;
