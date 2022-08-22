import { FC, memo } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { inductionSelector } from "../../../redux/features/inductionSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import CloseIcon from "@mui/icons-material/Close";
import { userSelector } from "../../../redux/features/userSlice";
import { hideAllInterfacesAction } from "../../../redux/features/lessonSlice";

const InductionUserAnswers: FC = memo(() => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const induction = useAppSelector(inductionSelector);
  const answers = induction.userAnswers;
  return (
    <Paper
      elevation={8}
      sx={{
        zIndex: 999,
        position: "absolute",
        top: "16px",
        left: "50%",
        width: "100%",
        bgcolor: "rgba(255,255,255,0.9)",
        border: "double 3px #ccc",
        borderTopLeftRadius: "32px",
        borderBottomLeftRadius: "16px",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "32px",
        boxShadow: "0 0 320px #fff",
        p: "32px",
        textAlign: "center",
        overflow: "scroll",
        transform: "translateX(-50%)",
      }}
    >
      {/* 閉じるボタン */}
      <Box
        position="absolute"
        right="8px"
        top="8px"
        width="30px"
        height="30px"
        bgcolor="#ccc"
        p="4px"
        borderRadius="64px"
        sx={{
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": { opacity: 0.8 },
        }}
        onClick={() => dispatch(hideAllInterfacesAction())}
      >
        <CloseIcon sx={{ color: "#fff", width: "100%", height: "100%" }} />
      </Box>
      <Typography fontWeight={600} mb="16px" sx={{ textDecoration: "underline 2px #333" }}>
        {user.name}さんの解答
      </Typography>

      {/* 結論 */}
      <Paper elevation={8}>
        <Typography variant="subtitle2" bgcolor="rgba(0,77,64,0.8)" color="#fff">
          結論
        </Typography>
        <Typography
          bgcolor="rgba(249,251,231, 0.6)"
          borderTop="none"
          p="16px"
          mb="24px"
          sx={{ wordBreak: "break-all" }}
        >
          {answers.conclusion ? answers.conclusion : "※まだ解答はありません"}
        </Typography>
      </Paper>

      {/* 共通点 */}
      <Paper elevation={8}>
        <Typography variant="subtitle2" bgcolor="primary.dark" color="#fff">
          共通点
        </Typography>
        <Typography
          bgcolor="rgba(249,251,231, 0.6)"
          borderTop="none"
          p="16px"
          mb="24px"
          sx={{ wordBreak: "break-all" }}
        >
          {answers.common ? answers.common : "※まだ解答はありません"}
        </Typography>
      </Paper>

      {/* 情報 */}
      <Paper elevation={8}>
        <Typography variant="subtitle2" bgcolor="primary.main" color="#fff">
          情報
        </Typography>
        <Box component="ul" bgcolor="rgba(249,251,231, 0.6)" borderTop="none" p="16px" sx={{ wordBreak: "break-all" }}>
          {answers.info.length !== 0 ? (
            answers.info.map((data) => <li key={data.id}>・{data.text}</li>)
          ) : (
            <li>※まだ情報がありません</li>
          )}
        </Box>
      </Paper>
    </Paper>
  );
});

export default InductionUserAnswers;
