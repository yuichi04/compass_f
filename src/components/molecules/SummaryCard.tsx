import React from "react";
// Modules
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
      <Paper elevation={12} sx={{ width: "300px", height: "440px", position: "relative" }}>
        <Box
          bgcolor={color}
          color="typography.white"
          display="flex"
          alignItems="center"
          p="8px"
          sx={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}
        >
          <Icon component={icon} sx={{ fontSize: iconSize }} />
          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            width="calc(100% - 72px)"
            sx={{ transform: "translateX(-8px)" }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="calc(100% - 64px)"
          p="16px"
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
          <Box height="240px" width="100%" display="flex" justifyContent="center" overflow="hidden">
            <Box component="img" src={image} alt="image" height="100%" />
          </Box>
        </Box>
      </Paper>
    </>
  );
});

export default SummaryCard;
