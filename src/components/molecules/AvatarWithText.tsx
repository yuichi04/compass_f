import React from "react";
import styled from "styled-components";
import { MuiAvatar, LinkTo } from "../atoms";

type Props = {
  text: string;
};

const AvatarWithText: React.FC<Props> = React.memo((props) => {
  return (
    <SFlex>
      <MuiAvatar />
      <LinkTo to="/profile">{props.text}さん</LinkTo>
    </SFlex>
  );
});

export default AvatarWithText;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  a {
    margin-left: 12px;
  }
`;
