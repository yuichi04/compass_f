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
      <p>
        <LinkTo to="/profile">
          <SGreeting>{greeting}</SGreeting>
          <br />
          <SName>{text}</SName>
          <SGreeting>さん</SGreeting>
        </LinkTo>
      </p>
      <LinkTo to="/profile">
        <MuiAvatar />
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

const SGreeting = styled.span`
  font-size: 14px;
`;

const SName = styled.span`
  font-weight: 600;
  letter-spacing: 0.05rem;
`;
