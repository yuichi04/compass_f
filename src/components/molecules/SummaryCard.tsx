import React from "react";
import { Paper, Box, Typography, Icon } from "@mui/material";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";

type Props = {
  color: string;
  icon: React.ElementType;
  iconSize?: string;
  image: string;
  points: React.ReactNode[];
  title: string;
};

const SummaryCard: React.FC<Props> = React.memo((props) => {
  const { icon, iconSize, title, color, points, image } = props;
  return (
    <>
      <Box display="flex" alignItems="center">
        <Icon component={icon} sx={{ fontSize: iconSize, color: color }} />
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
      </Box>
      <Paper
        elevation={8}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <Box component="ul" mb="32px">
          {points.map((point, index) => (
            <Box component="li" key={index} display="flex" alignItems="center" mb="4px">
              <ArrowCircleRightSharpIcon sx={{ mr: "8px" }} />
              <Typography variant="subtitle1" component="div" textAlign="center">
                {point}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box height="240px">
          <Box component="img" src={image} alt="image" width="100%" height="100%" />
        </Box>
      </Paper>
    </>
  );
});

export default SummaryCard;
