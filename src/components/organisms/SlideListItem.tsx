import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  className: string;
  order: number;
  next: (order: number) => void;
  back: (order: number) => void;
  title: string;
  sectionTitle: string;
  last: number;
  setClose: (close: boolean) => void;
};

const SlideListItem: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { next, back, order, className, title, sectionTitle, last, setClose } = props;

  return (
    <SContent className={className}>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          bgcolor: "#d1e8cf",

          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            bgcolor: "primary.main",
            boxShadow: "0 2px 6px #999",
            flexDirection: "column",
            justifyContent: "center",
            padding: "32px 64px",
          }}
        >
          <IconButton sx={{ position: "absolute", right: 0, top: 0 }} onClick={() => setClose(true)}>
            <CancelIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" fontWeight={300} color="primary.contrastText">
            {title}
          </Typography>
          <Typography fontWeight={600} variant="h4" color="primary.contrastText">
            {sectionTitle}
          </Typography>
        </Box>
        <Box sx={{ p: "64px" }}>{children}</Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
          }}
        >
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
  padding: 48px 96px;
`;
