import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import styled from "styled-components";
import { MuiButton } from "../atoms";
import { Translate } from "@mui/icons-material";

type Props = {
  children: React.ReactNode;
  className: string;
  order: number;
  next: (order: number) => void;
  back: (order: number) => void;
  title: string;
  last: number;
};

const SlideListItem: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { next, back, order, className, title, last } = props;
  return (
    <SContent className={className}>
      <Box
        sx={{
          position: "relative",
          width: "80%",
          bgcolor: "#fff",
          height: "100%",
          padding: "32px",
          margin: "0 auto",
          border: "2px solid #00aa99",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6">{children}</Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {order !== 0 && (
            <IconButton onClick={() => back(order)} sx={{ padding: 0 }}>
              <ArrowLeftIcon sx={{ fontSize: "80px" }} />
            </IconButton>
          )}
          {order !== last && (
            <IconButton onClick={() => next(order)} sx={{ padding: 0 }}>
              <ArrowForwardIosIcon sx={{ fontSize: "80px" }} />
            </IconButton>
          )}
        </Box>
      </Box>
    </SContent>
  );
});

export default SlideListItem;

const SContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 100%;
`;
