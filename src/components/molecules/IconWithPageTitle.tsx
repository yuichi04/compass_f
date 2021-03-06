import React from "react";
import styled from "styled-components";
import { Icon } from "@mui/material";
import { PageTitle } from "../atoms";

type Props = {
  title: string;
  icon: React.ElementType;
  iconColor?: "inherit" | "primary" | "disabled" | "action" | "secondary" | "error" | "info" | "success" | "warning";
};

const IconWithPageTitle: React.FC<Props> = React.memo((props) => {
  const { title, icon, iconColor } = props;
  return (
    <SFlex>
      <Icon fontSize="large" color={iconColor} component={icon} sx={{ marginRight: "8px" }} />
      <PageTitle title={title} />
    </SFlex>
  );
});

export default IconWithPageTitle;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  text-shadow: 0px 1px 1px #ddd;
`;
