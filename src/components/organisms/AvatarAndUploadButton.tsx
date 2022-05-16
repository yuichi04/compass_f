import React from "react";
import styled from "styled-components";
import { MuiUploadButton, MuiAvatar } from "../atoms";

type Props = {
  src?: string;
};

const AvatarAndUploadButton: React.FC<Props> = React.memo((props) => {
  const { src } = props;
  return (
    <SBox>
      <SAvatarWrap>
        <MuiAvatar src={src} sizes="240px" />
      </SAvatarWrap>
      <SButtonWrap>
        <MuiUploadButton />
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
