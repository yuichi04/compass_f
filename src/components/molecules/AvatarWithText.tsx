import React from "react";
import styled from "styled-components";
import { MuiAvatar, LinkTo } from "../atoms";

type Props = {
  text: string;
  greeting: string;
};

const AvatarWithText: React.FC<Props> = React.memo((props) => {
  const { text, greeting } = props;
  return (
    <SFlex>
      <MuiAvatar />
      <p>
        {greeting}
        <LinkTo to="/profile">{text}</LinkTo>さん
      </p>
    </SFlex>
  );
});

export default AvatarWithText;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  p {
    margin-left: 12px;
    a {
      text-decoration: underline;
    }
  }
`;
