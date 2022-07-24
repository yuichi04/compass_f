import { FC, memo } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { inductionSelector, showUserAnswersAction } from "../../lib/redux/features/inductionSlice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import CloseIcon from "@mui/icons-material/Close";
import { userSelector } from "../../lib/redux/features/userSlice";

const InductionUserAnswers: FC = memo(() => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const induction = useAppSelector(inductionSelector);
  const answers = induction.userAnswers;
  const open = induction.scene.isOpenAnswers;
  return (
    <Box className={open ? "slide-in-top" : "slide-out-top"} position="relative" width="680px" m="0 auto">
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "16px",
          left: "50%",
          width: "640px",
          bgcolor: "rgba(255,255,255,0.9)",
          border: "double 2px #ccc",
          borderTopLeftRadius: "32px",
          borderBottomLeftRadius: "16px",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "32px",
          boxShadow: "0 0 40px rgba(255,255,255,0.9)",
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
          onClick={() => dispatch(showUserAnswersAction(false))}
        >
          <CloseIcon sx={{ color: "#fff", width: "100%", height: "100%" }} />
        </Box>
        <Typography fontWeight={600} mb="16px" sx={{ textDecoration: "underline 2px #333" }}>
          {user.name}さんの回答
        </Typography>

        {/* 結論 */}
        <Typography variant="subtitle2" bgcolor="#004d40" color="#fff">
          結論
        </Typography>
        <Typography
          bgcolor="#f9fbe7"
          border="1px solid #004d40"
          borderTop="none"
          p="16px"
          mb="16px"
          sx={{ wordBreak: "break-all" }}
        >
          {answers.conclusion}
        </Typography>
        <Typography variant="h6" fontWeight={600} mb="16px">
          なぜならば
        </Typography>

        {/* 共通点 */}
        <Typography variant="subtitle2" bgcolor="primary.dark" color="#fff">
          共通点
        </Typography>
        <Typography
          bgcolor="#f9fbe7"
          border="1px solid #00766b"
          borderTop="none"
          p="16px"
          mb="16px"
          sx={{ wordBreak: "break-all" }}
        >
          {answers.common}
        </Typography>
        <Typography variant="h6" fontWeight={600} mb="16px">
          なぜならば
        </Typography>

        {/* 情報 */}
        <Typography variant="subtitle2" bgcolor="primary.main" color="#fff">
          情報
        </Typography>
        <Typography
          bgcolor="#f9fbe7"
          border="1px solid #00aa99"
          borderTop="none"
          p="16px"
          sx={{ wordBreak: "break-all" }}
        >
          {answers.common}
        </Typography>
      </Paper>
    </Box>
  );
});

export default InductionUserAnswers;
