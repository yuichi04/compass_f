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
  toggleDisplayOrHideSlideListAction,
} from "../../redux/features/slideListSlice";
// Types
import { SlideListItemType } from "../../types/lesson/slideListTypes";
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
  const slideList = useAppSelector(slideListSelector);
  const slideId = slideList.slideId;
  const direction = slideList.direction; // スライドの進行方向
  const isOpen = slideList.isOpen;
  const lastSlideNumber = slideListItemsData.length - 1; // 最後のスライド

  return (
    <>
      {isOpen && (
        <SSlideList className="path-center">
          {/* スライドを閉じるボタン */}
          <Tooltip
            sx={{ zIndex: 999, position: "absolute", top: "8px", right: "8px" }}
            placement="left"
            title="演習に進む"
            arrow
          >
            <IconButton onClick={() => dispatch(toggleDisplayOrHideSlideListAction())}>
              <CancelIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          {/* コース名 */}
          <Typography width="1280px" m="0 auto" variant="h6" color="typography.white">
            {courseTitle}
          </Typography>

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
    ${(props) => props.theme.palette.secondaryBackgroundColor.cyan} 100px,
    ${(props) => props.theme.palette.secondaryBackgroundColor.cyan} 100%
  );
  overflow: hidden;
  padding-top: 8px;
`;
