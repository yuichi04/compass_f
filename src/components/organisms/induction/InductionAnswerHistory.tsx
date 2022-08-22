import { FC, memo } from "react";
// Modules
import styled from "styled-components";
import { Typography, Box, Grid } from "@mui/material";
// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { answerSelector, toggleShowAnswerDetails } from "../../../redux/features/answerSlice";
// Components
import { FadeInOutBox } from "../../molecules";

const InductionAnswerHistory: FC = memo(() => {
  const dispatch = useAppDispatch();

  // answer selector
  const answerList = useAppSelector(answerSelector);
  const isOpen = answerList.isOpenAnswerDetails;
  const answer = answerList.answerOfInduction;
  const createdAt = answer.createdAt?.substring(0, 10);
  return (
    <>
      {isOpen && (
        <FadeInOutBox fadeIn={isOpen}>
          <SContainer onClick={() => dispatch(toggleShowAnswerDetails())}>
            <SInner>
              <Typography color="typography.gray" textAlign="left" sx={{ textDecoration: "underline solid #333" }}>
                {createdAt}
              </Typography>
              {/* 相談内容 */}
              <Box component="dl" mb="32px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃相談内容
                </Typography>
                <Typography component="dd" variant="h6">
                  {answer.consultation}
                </Typography>
              </Box>

              {/* 結論 */}
              <Box component="dl" mb="32px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃案内した解決方法
                </Typography>
                <Typography component="dd" variant="h6">
                  {answer.conclusion}
                </Typography>
              </Box>
              {/* 共通点 */}
              <Box component="dl" mb="32px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃情報から見つけた共通点
                </Typography>
                <Typography component="dd" variant="h6">
                  {answer.common}
                </Typography>
              </Box>
              {/* 情報 */}
              <Box component="dl" mb="32px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃解決のために選んだ情報
                </Typography>
                <Grid container display="flex" justifyContent="center">
                  {answer.info.map((info, index) => (
                    <Grid item xs={4} key={index} p="8px">
                      <Typography
                        borderRadius="8px"
                        boxShadow="0 0 8px #ccc"
                        p="8px"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {info.text}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </SInner>
          </SContainer>
        </FadeInOutBox>
      )}
    </>
  );
});

export default InductionAnswerHistory;

const SContainer = styled.div`
  z-index: 999;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.palette.primaryCircleGradation.black.light};
  cursor: pointer;

  // innerを中央寄せに
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SInner = styled.div`
  width: 1000px;
  min-height: 720px;
  margin: 0 auto;
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 0 16px #ccc;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
`;
