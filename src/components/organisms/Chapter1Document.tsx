import React from "react";
import styled from "styled-components";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { chapter1Selector, setDocumentAction } from "../../lib/redux/features/chapter1Slice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";

const Chapter1Document: React.FC = React.memo(() => {
  const chapter1 = useAppSelector(chapter1Selector);
  const dispatch = useAppDispatch();
  const isOpenDocument = chapter1.isOpenDocument;
  return (
    <>
      {isOpenDocument && (
        <SDocument className="slide-up">
          <Box textAlign="right">
            <IconButton onClick={() => dispatch(setDocumentAction(false))}>
              <CancelIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" textAlign="center" borderBottom="1px solid #999" p="0 16px">
            英語が話せる人の勉強方法に関する資料
          </Typography>
          <SContentBox>
            <Typography>英語が話せる男女数百人に勉強方法のアンケートを取った結果以下のことが判明した。</Typography>
            <SContentItems>
              <Typography component="li" fontWeight={600}>
                英語が話せる人は音読を中心に学習している
              </Typography>
              <Typography component="li" fontWeight={600}>
                英語が話せる人は英会話に力を入れている
              </Typography>
              <Typography component="li" fontWeight={600}>
                英語が話せる人で発音の練習をしていない人はいなかった
              </Typography>
            </SContentItems>
          </SContentBox>
        </SDocument>
      )}
    </>
  );
});

export default Chapter1Document;

const SDocument = styled.div`
  position: absolute;
  top: 32px;
  left: 8px;
  width: 400px;
  height: 533px;
  background: #f9fbe7;
  box-shadow: 0 0 32px #999;
  border-radius: 16px;
  padding: 8px;
  opacity: 0;
`;
const SContentBox = styled.div`
  padding: 16px;
  height: calc(100% - 80px);
  width: 100%;
  overflow: scroll;
`;
const SContentItems = styled.ul`
  list-style: revert;
  list-style-position: inside;
  padding-top: 8px;
  li {
    margin-bottom: 8px;
  }
`;
