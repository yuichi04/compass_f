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
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SlideListItem: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { next, back, order, className, title, sectionTitle, last, setOpen } = props;

  return (
    <SContent className={className}>
      <Box
        sx={{
          position: "relative",
          bgcolor: "#fff",
          height: "100%",
          width: "100%",
          padding: "64px",
          borderRadius: "8px",
        }}
      >
        <IconButton sx={{ position: "absolute", right: "16px", top: "16px" }} onClick={() => setOpen(false)}>
          <CancelIcon fontSize="large" />
        </IconButton>
        <Typography color="text.disabled" variant="h6" fontWeight={300}>
          {title}
        </Typography>
        <Typography variant="h4">{sectionTitle}</Typography>
        <Box sx={{ padding: "64px" }}>
          <Typography variant="h6" color="text.secondary">
            {children}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
          }}
        >
          {order !== 0 && (
            <IconButton onClick={() => back(order)} sx={{ padding: 0 }}>
              <ArrowLeftIcon sx={{ fontSize: "70px" }} />
            </IconButton>
          )}
          {order !== last && (
            <IconButton onClick={() => next(order)} sx={{ padding: 0 }}>
              <ArrowForwardIosIcon sx={{ fontSize: "70px" }} />
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
  padding: 64px;
`;
