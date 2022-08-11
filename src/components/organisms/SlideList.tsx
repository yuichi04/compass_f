import { FC, memo } from "react";
// Modules
import styled from "styled-components";
import { Box, IconButton, Tooltip, Typography, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CancelIcon from "@mui/icons-material/Cancel";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  handleClickNextSlideAction,
  handleClickPreviousSlideAction,
  slideListSelector,
} from "../../redux/features/slideListSlice";
import {
  lessonSelector,
  startingExerciseAction,
  toggleShowAndHideInterfaceAction,
} from "../../redux/features/lessonSlice";
import { inductionSelector, setNextStaticSceneAction } from "../../redux/features/inductionSlice";
// Types
import { SlideListItemType } from "../../types/slideListTypes";
// Components
import { FadeInOutBox, SlideListItem } from "../../components/molecules";

type Props = {
  courseTitle: string;
  slideListItemsData: SlideListItemType[];
};

// スライド本体
const SlideList: FC<Props> = memo((props) => {
  const { slideListItemsData, courseTitle } = props;
  const dispatch = useAppDispatch();
  // lesson slice
  const lesson = useAppSelector(lessonSelector);
  const allowStartingExercise = lesson.allowStartingExercise;
  const isOpen = lesson.isOpen;
  // slidelist slice
  const slideList = useAppSelector(slideListSelector);
  const slideId = slideList.slideId;
  const direction = slideList.direction; // スライドの進行方向
  const lastSlideNumber = slideListItemsData.length - 1; // 最後のスライド
  // induction slice
  const induction = useAppSelector(inductionSelector);
  const sceneId = induction.sceneId;
  // 演習開始の処理
  const handleClickStartingExercise = () => {
    dispatch(toggleShowAndHideInterfaceAction({ key: "slideList", open: !isOpen.slideList }));
    dispatch(startingExerciseAction(true));
    dispatch(setNextStaticSceneAction(sceneId));
  };

  return (
    <>
      {isOpen.slideList && (
        <SSlideList className="path-center">
          {/* スライドを閉じるボタン */}
          <Tooltip
            sx={{ zIndex: 999, position: "absolute", top: "8px", right: "8px" }}
            placement="left"
            title="演習に進む"
            arrow
          >
            <IconButton
              onClick={() =>
                allowStartingExercise
                  ? dispatch(toggleShowAndHideInterfaceAction({ key: "slideList", open: !isOpen.slideList }))
                  : handleClickStartingExercise()
              }
            >
              <CancelIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* コース名 */}
          <Typography width="1280px" m="0 auto" variant="subtitle1" color="typography.white" fontWeight={300}>
            {courseTitle}
          </Typography>

          {/* 本体 */}
          <Box width="100%" height="100%" display="flex" position="absolute" top="0" left="0" right="0" bottom="0">
            {/* /スライド本体 */}
            {slideListItemsData.map((item, index) => (
              <SlideListItem
                key={index}
                position={index - slideId} // 表示中のスライドに対するスライドの位置（0は表示中、 0 < は左、 < 0 は右）
                direction={direction}
                slideTitle={item.slideTitle}
              >
                {item.content}
              </SlideListItem>
            ))}
          </Box>

          {/* （左矢印）最初のスライド以外は表示する */}
          {slideId !== 0 && (
            <FadeInOutBox fadeIn>
              <Box position="absolute" top="50%" left="8px" display="flex" alignItems="center">
                <Paper
                  elevation={12}
                  sx={styles.arrow.container}
                  onClick={() => dispatch(handleClickPreviousSlideAction())}
                >
                  <ArrowLeftIcon sx={styles.arrow.icon} />
                </Paper>
              </Box>
            </FadeInOutBox>
          )}

          {/* （右矢印）最後のスライド以外は表示する */}
          {slideId !== lastSlideNumber && (
            <FadeInOutBox fadeIn>
              <Box position="absolute" top="50%" right="8px" display="flex" alignItems="center">
                <Paper
                  elevation={12}
                  sx={styles.arrow.container}
                  onClick={() => dispatch(handleClickNextSlideAction())}
                >
                  <ArrowForwardIosIcon sx={styles.arrow.icon} />
                </Paper>
              </Box>
            </FadeInOutBox>
          )}
        </SSlideList>
      )}
    </>
  );
});

export default SlideList;

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

const SSlideList = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.palette.primary.main} 0%,
    ${(props) => props.theme.palette.primary.main} 100px,
    ${(props) => props.theme.palette.primary.dark} 100px,
    ${(props) => props.theme.palette.primary.dark} 102px,
    ${(props) => props.theme.palette.secondaryBackgroundColor.cyan} 102px,
    ${(props) => props.theme.palette.secondaryBackgroundColor.cyan} 100%
  );
  overflow: hidden;
  padding-top: 8px;
`;
