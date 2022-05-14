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
        {greeting}
        <br />
        <LinkTo to="/accountinfo">
          <SName>{text}</SName>
        </LinkTo>{" "}
        さん
      </p>
      <MuiAvatar />
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
    a {
      text-decoration: underline;
    }
  }
`;

const SName = styled.span`
  font-weight: 600;
  letter-spacing: 0.05rem;
`;
