import { FC, memo } from "react";
import Box from "@mui/material/Box";
import { Typography, Paper, Tooltip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  allowStartingExerciseAction,
  inductionSelector,
  setNextStaticSceneAction,
  showUtilsAction,
} from "../../redux/features/inductionSlice";

type Props = {
  children: React.ReactNode;
  className: string;
  order: number;
  last: number;
  next: (order: number) => void;
  back: (order: number) => void;
  title: string;
  sectionTitle: string;
};

const SlideListItem: FC<Props> = memo(({ children, ...props }) => {
  const { next, back, order, className, title, sectionTitle, last } = props;
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const id = induction.sceneId;
  const allowStartingExercise = induction.allowStartingExercise;

  // 演習開始の処理
  const handleClickStartExercise = () => {
    // シーンをセット
    dispatch(setNextStaticSceneAction(id));
    // 演習開始フラグをtrueに
    dispatch(allowStartingExerciseAction(true));
    // スライドを閉じる
    dispatch(showUtilsAction({ key: "slide", value: false }));
  };

  return (
    <SContainer className={className}>
      <SInner>
        {/* 演習開始ボタン */}
        <Tooltip placement="left" title="演習に進む" arrow>
          <IconButton
            sx={{ position: "absolute", right: "8px", top: "8px", zIndex: "999" }}
            // 既に演習開始している場合はスライドを閉じる処理のみ実行する
            onClick={() =>
              allowStartingExercise
                ? dispatch(showUtilsAction({ key: "slide", value: false }))
                : handleClickStartExercise()
            }
          >
            <CancelIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        {/* スライド本体 */}
        <SHeader>
          <Box width="1280px" m="0 auto" color="typography.white">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {sectionTitle}
            </Typography>
          </Box>
        </SHeader>
        <SContent>
          <Typography component="div" variant="h6" color="typography.black">
            {children}
          </Typography>
        </SContent>

        {/* 最初のスライドなら左矢印を非表示 */}
        {order !== 0 && (
          <Box position="absolute" top="50%" left="8px" display="flex" alignItems="center">
            <Paper elevation={12} sx={styles.arrow.container} onClick={() => back(order)}>
              <ArrowLeftIcon sx={styles.arrow.icon} />
            </Paper>
          </Box>
        )}

        {/* 最後のスライドなら右矢印を非表示 */}
        {order !== last && (
          <Box position="absolute" top="50%" right="8px" display="flex" alignItems="center">
            <Paper elevation={12} sx={styles.arrow.container} onClick={() => next(order)}>
              <ArrowForwardIosIcon sx={styles.arrow.icon} />
            </Paper>
          </Box>
        )}
      </SInner>
    </SContainer>
  );
});

export default SlideListItem;

// Material-UI
const styles = {
  arrow: {
    container: {
      bgcolor: "primary.main",
      borderRadius: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.3s",
      "&:hover": { cursor: "pointer", opacity: 0.9 },
    },
    icon: {
      fontSize: "50px",
      color: "secondary.main",
    },
  },
};

// Styled-components
const SContainer = styled.div`
  min-width: 100%;
`;
const SInner = styled.div`
  position: relative;
  background: #e0f7fa;
  overflow: hidden;
  height: 100%;
`;
const SContent = styled.div`
  position: relative;
  width: 1280px;
  height: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SHeader = styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  box-shadow: 0 1px 20px ${(props) => props.theme.palette.primary.dark};
  display: flex;
  align-items: center;
  height: 100px;
  padding: 16px 0;
`;
