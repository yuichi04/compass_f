import React from "react";
import styled from "styled-components";
import { Icon } from "@mui/material";
import { SectionTitle } from "../atoms";

type Props = {
  title: string;
  icon: React.ElementType;
  iconColor?: "inherit" | "primary" | "disabled" | "action" | "secondary" | "error" | "info" | "success" | "warning";
};

const IconWithSectionTitle: React.FC<Props> = React.memo((props) => {
  const { title, icon, iconColor } = props;
  return (
    <SFlex>
      <Icon color={iconColor} fontSize="medium" component={icon} sx={{ mr: "8px" }} />
      <SectionTitle title={title} />
    </SFlex>
  );
});

export default IconWithSectionTitle;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
