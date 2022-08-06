import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";

type Props = {
  numberIcon: React.ReactNode;
  title: string;
  color: string;
  points: React.ReactNode[];
  image: string;
};

const SlidePointCard: React.FC<Props> = React.memo((props) => {
  const { numberIcon, title, color, points, image } = props;
  return (
    <Paper
      elevation={8}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "32px 16px",
        height: "100%",
      }}
    >
      <Box position="absolute" top="-24px" left="-24px">
        {numberIcon}
      </Box>
      <Typography variant="h6" fontWeight={600} mb="24px" sx={{ textDecoration: `underline double ${color}` }}>
        {title}
      </Typography>
      <Box component="ul" mb="32px">
        {points.map((point, index) => (
          <Box component="li" key={index} display="flex" alignItems="center" mb="4px">
            <ArrowCircleRightSharpIcon sx={{ mr: "8px" }} />
            <Typography variant="body1" component="div">
              {point}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box height="240px">
        <Box component="img" src={image} alt="image" width="100%" height="100%" />
      </Box>
    </Paper>
  );
});

export default SlidePointCard;
