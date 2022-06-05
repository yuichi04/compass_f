import React from "react";
import styled, { css } from "styled-components";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { MuiButton } from "../atoms";
import { useAppSelector } from "../../lib/redux/hooks";
import { chapter1Selector } from "../../lib/redux/features/chapter1Slice";
import { userSelector } from "../../lib/redux/features/userSlice";

const Chapter1Result: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  const username = user.name;
  const chapter = useAppSelector(chapter1Selector);
  const userAnswerList = chapter.userAnswerList;
  const isOpenResult = chapter.isOpenResult;
  return (
    <>
      {isOpenResult && (
        <SResult>
          <SInner className="expand_center">
            <Grid container height="calc(100% - 64px)" mb="32px">
              <Grid item xs={5.8}>
                <Typography textAlign="center" variant="h6" mb="8px">
                  回答例
                </Typography>
              </Grid>
              <Grid item xs={0.4} display="flex" alignItems="center" justifyContent="center">
                <Divider orientation="vertical" />
              </Grid>
              <Grid item xs={5.8}>
                <Typography textAlign="center" variant="h6" mb="8px">
                  {username}さんの回答
                </Typography>
              </Grid>
              <Grid
                item
                xs={5.8}
                height="calc(100% - 32px)"
                textAlign="center"
                overflow="scroll"
                sx={{ wordBreak: "break-word" }}
              >
                {userAnswerList.map((item, index) => (
                  <SSampleAnswerItem key={item.id}>
                    <Typography variant="h6" fontWeight={600} mb="8px">
                      第{index + 1}問
                    </Typography>
                    <SItemSampleAnswerSubTitle>
                      <Typography variant="subtitle1" fontWeight={600}>
                        問題
                      </Typography>
                    </SItemSampleAnswerSubTitle>
                    <SItemInner>
                      {item.questions.map((question) => (
                        <Typography key={question} component="li">
                          {question}
                        </Typography>
                      ))}
                    </SItemInner>
                    <SItemSampleAnswerSubTitle>
                      <Typography variant="subtitle1" fontWeight={600}>
                        回答例
                      </Typography>
                    </SItemSampleAnswerSubTitle>
                    <SItemInner>
                      <Typography component="dl" mb="16px">
                        <Typography variant="subtitle1" fontWeight={600} component="dt">
                          結論
                        </Typography>
                        <Typography component="dd">{item.sampleAnswer}</Typography>
                      </Typography>
                      <Typography component="dl">
                        <Typography variant="subtitle1" fontWeight={600} component="dt">
                          共通するパターン
                        </Typography>
                        <Typography component="dd">{item.sampleCommonFactor}</Typography>
                      </Typography>
                    </SItemInner>
                  </SSampleAnswerItem>
                ))}
              </Grid>
              <Grid item xs={0.4} display="flex" alignItems="center" justifyContent="center">
                <Divider orientation="vertical" />
              </Grid>
              <Grid
                item
                xs={5.8}
                height="calc(100% - 32px)"
                textAlign="center"
                overflow="scroll"
                sx={{ wordBreak: "break-word" }}
              >
                {userAnswerList.map((item, index) => (
                  <SAnswerItem key={item.id}>
                    <Typography variant="h6" fontWeight={600} mb="8px">
                      第{index + 1}問
                    </Typography>
                    <SItemAnswerSubTitle>
                      <Typography variant="subtitle1" fontWeight={600}>
                        問題
                      </Typography>
                    </SItemAnswerSubTitle>
                    <SItemInner>
                      {item.questions.map((question) => (
                        <Typography key={question} component="li">
                          {question}
                        </Typography>
                      ))}
                    </SItemInner>
                    <SItemAnswerSubTitle>
                      <Typography variant="subtitle1" fontWeight={600}>
                        回答例
                      </Typography>
                    </SItemAnswerSubTitle>
                    <SItemInner>
                      <Typography component="dl" mb="16px">
                        <Typography variant="subtitle1" fontWeight={600} component="dt">
                          結論
                        </Typography>
                        <Typography component="dd">{item.answer}</Typography>
                      </Typography>
                      <Typography component="dl">
                        <Typography variant="subtitle1" fontWeight={600} component="dt">
                          共通するパターン
                        </Typography>
                        <Typography component="dd">{item.commonFactor}</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis voluptatem nulla
                        provident eius ipsam ex dolores unde cum totam quibusdam, ratione rerum incidunt quo ipsa
                        perferendis optio, nisi architecto!
                      </Typography>
                    </SItemInner>
                  </SAnswerItem>
                ))}
              </Grid>
            </Grid>
            <Box textAlign="right">
              <MuiButton variant="contained">次に進む</MuiButton>
            </Box>
          </SInner>
        </SResult>
      )}
    </>
  );
});

export default Chapter1Result;

const SItemStyle = css`
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;
`;
const SItemSubTitleStyle = css`
  border-radius: 8px;
`;

const SResult = styled.div`
  z-index: 999;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`;
const SInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: calc(100% - 64px);
  background: #fff;
  padding: 32px;
`;
const SAnswerItem = styled.div`
  ${SItemStyle}
  background: #e0f2f1;
`;
const SSampleAnswerItem = styled.div`
  ${SItemStyle}
  background: #eee;
`;

const SItemAnswerSubTitle = styled.div`
  ${SItemSubTitleStyle}
  background: #b2dfdb;
`;
const SItemSampleAnswerSubTitle = styled.div`
  ${SItemSubTitleStyle}
  background: #ccc;
`;
const SItemInner = styled.ul`
  padding: 16px;
`;
