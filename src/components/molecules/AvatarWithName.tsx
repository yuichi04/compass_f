import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Avatar, LinkTo } from "../atoms";

type Props = {
  name: string;
  greeting: string;
  src?: string;
};

const AvatarWithText: React.FC<Props> = React.memo((props) => {
  const { name, greeting, src } = props;
  return (
    <SFlex>
      <LinkTo to="/profile">
        <Typography variant="body2" component="div">
          {greeting}
          <Typography variant="body1" fontWeight={600}>
            {name}
            <Typography variant="body2" component="span">
              さん
            </Typography>
          </Typography>
        </Typography>
      </LinkTo>
      <LinkTo to="/profile">
        <Avatar src={src} bgcolor="primary.main" />
      </LinkTo>
    </SFlex>
  );
});

export default AvatarWithText;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  p {
    margin-right: 16px;
  }
`;
