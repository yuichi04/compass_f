import { FC, memo } from "react";
// Modules
import styled from "styled-components";
import { Grid, Box, Typography } from "@mui/material";
// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { inductionSelector } from "../../../redux/features/inductionSlice";
import { userSelector } from "../../../redux/features/userSlice";
import { lessonSelector } from "../../../redux/features/lessonSlice";
import { LinkTo, PrimaryButton } from "../../atoms";
import { UserAnswersOfInductionType } from "../../../types/userAnswerTypes";
import { saveUserAnswersOfInductionAction } from "../../../redux/features/answerSlice";
import { useNavigate } from "react-router-dom";
import { hideLoadingAction, showLoadingAction } from "../../../redux/features/lodingSlice";

const InductionResults: FC = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // user selector
  const user = useAppSelector(userSelector);
  const uid = user.id;
  const username = user.name;
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const consultation = induction.consultation;
  const userAnswers = induction.userAnswers;

  const handleClickSaveAnswers = async () => {
    dispatch(showLoadingAction("対応履歴を保存中..."));
    // サーバーに送信するデータを生成
    const newAnswers: UserAnswersOfInductionType = {
      uid: uid,
      course: "帰納法",
      consultation: consultation,
      conclusion: userAnswers.conclusion,
      common: userAnswers.common,
      info: userAnswers.info,
    };
    // サーバーに送信
    await dispatch(saveUserAnswersOfInductionAction(newAnswers));

    dispatch(hideLoadingAction());
    // トップページに遷移
    navigate("/");
  };

  return (
    <>
      {isOpen.results && (
        <SContainer className="path-center">
          <SInner>
            {/* ユーザー名 */}
            <Typography variant="h6" mb="16px" sx={{ textDecoration: "underline solid #333" }}>
              {username}さんの対応履歴
            </Typography>
            <Box height="510px" overflow="scroll" border="1px solid #eee" borderRadius="8px" p="8px" pb="0">
              {/* 相談内容 */}
              <Box component="dl" mb="16px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃相談内容
                </Typography>
                <Typography component="dd" variant="h6">
                  {consultation}
                </Typography>
              </Box>

              {/* 結論 */}
              <Box component="dl" mb="16px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃案内した解決方法
                </Typography>
                <Typography component="dd" variant="h6">
                  {userAnswers.conclusion}
                </Typography>
              </Box>
              {/* 共通点 */}
              <Box component="dl" mb="16px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃情報から見つけた共通点
                </Typography>
                <Typography component="dd" variant="h6">
                  {userAnswers.common}
                </Typography>
              </Box>
              {/* 情報 */}
              <Box component="dl" mb="16px">
                <Typography component="dt" variant="subtitle1" color="primary">
                  ＃解決のために選んだ情報
                </Typography>
                <Grid container display="flex" justifyContent="center">
                  {userAnswers.info.map((info, index) => (
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
            </Box>
            <SButtonWrap>
              <Typography mb="16px">対応履歴を保存しますか？</Typography>
              <Box display="flex" justifyContent="center">
                <PrimaryButton variant="contained" onClick={handleClickSaveAnswers}>
                  保存して終了する
                </PrimaryButton>
                <Box width="16px" />
                <LinkTo to="/">
                  <PrimaryButton variant="contained" color="secondary">
                    保存しないで終了する
                  </PrimaryButton>
                </LinkTo>
              </Box>
            </SButtonWrap>

            {/**
             * 模範回答
             * 問い合わせ内容
             * 結論
             * 共通点
             * 選んだ情報
             * **/}
          </SInner>
        </SContainer>
      )}
    </>
  );
});

export default InductionResults;

const SContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100wv;
  height: 100wh;
  animation-duration: 0.75s;
  background: ${(props) => props.theme.palette.primaryCircleGradation.black.light};

  // innerを中央寄せに
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SInner = styled.div`
  position: relative;
  width: 1000px;
  min-height: 720px;
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 0 16px #ccc;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
`;

const SButtonWrap = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
`;
