import React from "react";
import Typography from "@mui/material/Typography";
import { LinkTo, Chip } from "../atoms";
import { Box } from "@mui/material";

type Props = {
  image?: string;
  grade: string;
  title?: string;
  link?: string;
  text?: React.ReactNode;
  fontSize?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  bgColor?: string;
};

const CourseCard: React.FC<Props> = React.memo((props) => {
  const { image, title, grade, link, text, color, fontSize, bgColor } = props;
  return (
    <LinkTo to={link ? link : ""}>
      <Box
        position="relative"
        boxShadow="0 0 16px #ccc"
        height="100%"
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "2px 4px 8px #999",
          },
        }}
      >
        <Box position="absolute" top="0" left="0" sx={{ transform: "translate(-25%, -50%)" }}>
          <Chip label={grade} color={color} fontSize={fontSize} />
        </Box>
        <Typography
          textAlign="center"
          color="typography.white"
          bgcolor={bgColor}
          boxShadow="0 2px 12px #bbb"
          variant="h5"
          fontWeight={600}
          p="24px 0"
          mb="24px"
        >
          {title}
        </Typography>
        <Box height="168px" mb="24px">
          <Box component="img" src={image} height="100%" width="100%" />
        </Box>
        <Typography textAlign="center" color="typography.dark" p="16px">
          {text}
        </Typography>
      </Box>
    </LinkTo>
  );
});

export default CourseCard;
