import React from "react";
import Box from "@mui/material/Box";
import { Typography, Paper } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { chapter1Selector, setSceneAction, setSlideListAction } from "../../lib/redux/features/chapter1Slice";

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
  const handleClickStartExercise = () => {
    dispatch(setSceneAction(sceneId));
    dispatch(setSlideListAction(false));
  };

  return (
    <SContainer className={className}>
      <SInner>
        <IconButton
          sx={{ position: "absolute", right: "8px", top: "8px", zIndex: "999" }}
          onClick={() => (isStart ? dispatch(setSlideListAction(false)) : handleClickStartExercise())}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <Box
          bgcolor="primary.dark"
          boxShadow="0 4px 12px #666"
          display="flex"
          alignItems="center"
          height="100px"
          p="16px 0"
        >
          <Box width="1280px" m="0 auto" color="#fff">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {sectionTitle}
            </Typography>
          </Box>
        </Box>
        <SContent>
          <Typography component="div" variant="h6" color="text.secondary">
            {children}
          </Typography>
        </SContent>
        {order !== 0 && (
          <Box position="absolute" top="50%" left="8px" display="flex" alignItems="center">
            <Paper
              elevation={12}
              sx={{
                transition: "0.3s",
                bgcolor: "#666",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowLeftIcon
                onClick={() => back(order)}
                sx={{
                  fontSize: "50px",
                  color: "#fff",
                  "&:hover": { cursor: "pointer", opacity: 0.8 },
                }}
              />
            </Paper>
          </Box>
        )}
        {order !== last && (
          <Box position="absolute" top="50%" right="8px" display="flex" alignItems="center">
            <Paper
              elevation={12}
              sx={{
                transition: "0.3s",
                bgcolor: "#666",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIosIcon
                onClick={() => next(order)}
                sx={{
                  fontSize: "50px",
                  color: "#fff",
                  "&:hover": { cursor: "pointer", opacity: 0.8 },
                }}
              />
            </Paper>
          </Box>
        )}
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
  background: #e0f2f1;
  overflow: hidden;
  height: 100%;
`;
const SContent = styled.div`
  position: relative;
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 4% 0;
`;
