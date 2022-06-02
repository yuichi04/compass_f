import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className: string;
  order: number;
  next: (order: number) => void;
  back: (order: number) => void;
  title: string;
  sectionTitle: string;
  last: number;
};

const SlideListItem: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { next, back, order, className, title, sectionTitle, last } = props;
  const navigate = useNavigate();

  return (
    <SContent className={className}>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          background: "linear-gradient(to left, #e0f2f1, #fff, #e0f2f1)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: "linear-gradient(to left, #00766b, #00aa99, #00766b)",
            boxShadow: "0 2px 6px #999",
            flexDirection: "column",
            justifyContent: "center",
            padding: "16px 64px",
          }}
        >
          <IconButton
            sx={{ position: "absolute", right: "16px", top: "16px", zIndex: "999" }}
            onClick={() => navigate("/lesson/logicalthinking/chapter1")}
          >
            <CancelIcon fontSize="large" />
          </IconButton>
          <Typography variant="subtitle1" color="primary.contrastText">
            {title}
          </Typography>
          <Typography variant="h5" color="primary.contrastText">
            {sectionTitle}
          </Typography>
        </Box>
        <Box p="32px 64px">{children}</Box>
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
      </Box>
    </SContent>
  );
});

export default SlideListItem;

const SContent = styled.div`
  min-width: 100%;
  height: 100%;
`;
