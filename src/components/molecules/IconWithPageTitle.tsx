import React from "react";
import styled from "styled-components";
import { Icon, Typography } from "@mui/material";
import { MarginType } from "../../types/styleTypes";

type Props = {
  title: string;
  icon: React.ElementType;
  iconColor?: "inherit" | "primary" | "disabled" | "action" | "secondary" | "error" | "info" | "success" | "warning";
} & MarginType;

const IconWithPageTitle: React.FC<Props> = React.memo((props) => {
  const { title, icon, iconColor, mb } = props;
  return (
    <SFlex mb={mb}>
      <Icon component={icon} color={iconColor} sx={{ marginRight: "8px", fontSize: "48px", color: "primray" }} />
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
    </SFlex>
  );
});

export default IconWithPageTitle;

const SFlex = styled.div<MarginType>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  line-height: 64px;
  margin-bottom: ${(props) => (props.mb ? props.mb : "32")}px;
`;
