import React from "react";
import styled from "styled-components";
import { Avatar } from "../atoms";
import { UploadButton } from ".";

type Props = {
  src?: string;
};

const AvatarAndUploadButton: React.FC<Props> = React.memo((props) => {
  const { src } = props;
  return (
    <SBox>
      <SAvatarWrap>
        <Avatar src={src} size="240px" bgcolor="primary.main" />
      </SAvatarWrap>
      <SButtonWrap>
        <UploadButton />
      </SButtonWrap>
    </SBox>
  );
});

export default AvatarAndUploadButton;

const SBox = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
`;

const SAvatarWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const SButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
