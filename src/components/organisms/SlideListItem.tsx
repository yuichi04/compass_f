import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { chapter1Selector, setSceneAction, setSlideListAction } from "../../lib/redux/features/chapter1Slice";
import { MuiButton } from "../atoms";

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

const SlideListItem: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { next, back, order, className, title, sectionTitle, last } = props;
  const dispatch = useAppDispatch();
  const selector = useAppSelector(chapter1Selector);
  const sceneId = selector.id;
  const isStart = selector.isStart;

  // シーンをセットして、スライドを閉じる
  const handleClickStartQuiz = () => {
    dispatch(setSceneAction(sceneId));
    dispatch(setSlideListAction(false));
  };

  return (
    <SContainer className={className}>
      <SInner>
        <SHeader>
          <SHeaderInner>
            <IconButton
              sx={{ position: "absolute", right: "16px", top: "16px", zIndex: "999" }}
              onClick={() => (isStart ? dispatch(setSlideListAction(false)) : handleClickStartQuiz())}
            >
              <CancelIcon fontSize="large" />
            </IconButton>
            <Typography variant="subtitle1" color="primary.contrastText">
              {title}
            </Typography>
            <Typography variant="h5" color="primary.contrastText">
              {sectionTitle}
            </Typography>
          </SHeaderInner>
        </SHeader>
        <SContent>
          {children}
          {order === last && (
            <Box position="relative" height="100%">
              <Box position="absolute" top="35%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
                <MuiButton
                  variant="contained"
                  color="primary"
                  onClick={() => (isStart ? dispatch(setSlideListAction(false)) : handleClickStartQuiz())}
                  fullWidth
                >
                  {isStart ? "問題に戻る" : "問題に挑戦"}
                </MuiButton>
              </Box>
              <Box position="absolute" right="-128px" top="-128px">
                <img
                  style={{ height: "120%", width: "120%" }}
                  src={require("../../assets/images/characters/guide/guide_smile_a.png")}
                  alt="character"
                />
              </Box>
            </Box>
          )}
        </SContent>

        <Box position="absolute" bottom="0px" right="16px">
          {order !== 0 && (
            <IconButton onClick={() => back(order)} sx={{ p: 0 }}>
              <ArrowLeftIcon sx={{ fontSize: "70px" }} color="primary" />
            </IconButton>
          )}
          {order !== last && (
            <IconButton onClick={() => next(order)} sx={{ p: 0, ml: "16px" }}>
              <ArrowForwardIosIcon sx={{ fontSize: "70px" }} color="primary" />
            </IconButton>
          )}
        </Box>
      </SInner>
    </SContainer>
  );
});

export default SlideListItem;

const SContainer = styled.div`
  min-width: 100%;
`;
const SInner = styled.div`
  position: relative;
  background: linear-gradient(to left, #e0f2f1, #fff, #e0f2f1);
  overflow: hidden;
  height: 100%;
`;
const SHeader = styled.div`
  background: linear-gradient(to left, #00766b, #00aa99, #00766b);
  boxshadow: 0 2px 6px #004d40;
  padding: 16px 0;
`;
const SHeaderInner = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
const SContent = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 64px 0;
`;
