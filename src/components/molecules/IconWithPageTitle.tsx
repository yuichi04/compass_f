import React from "react";
import styled from "styled-components";
import { Icon } from "@mui/material";
import { PageTitle } from "../atoms";

type Props = {
  title: string;
  icon: React.ElementType;
};

const IconWithPageTitle: React.FC<Props> = React.memo((props) => {
  const { title, icon } = props;
  return (
    <SFlex>
      <Icon fontSize="large" component={icon} sx={{ marginRight: "8px" }} />
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
`;
