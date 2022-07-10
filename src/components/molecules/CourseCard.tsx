import React from "react";
import Typography from "@mui/material/Typography";
import { LinkTo, MuiChip } from "../atoms";
import { Box, Paper } from "@mui/material";

type Props = {
  image?: string;
  grade: string;
  title?: string;
  titleUnderLineColor: string;
  link?: string;
  text?: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

const CourseCard: React.FC<Props> = React.memo((props) => {
  const { image, title, grade, link, text, color, titleUnderLineColor } = props;
  return (
    <LinkTo to={link ? link : ""}>
      <Paper
        elevation={8}
        sx={{
          bgcolor: "#fff",
          height: "100%",
          p: "16px",
          transition: "all 0.3s",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "2px 6px 12px #666",
          },
        }}
      >
        <Box mb="16px">
          <MuiChip label={grade} color={color} size="small" />
        </Box>
        <Typography
          textAlign="center"
          color="text.secondary"
          variant="h5"
          fontWeight={600}
          mb="24px"
          sx={{ textDecoration: `underline double ${titleUnderLineColor}` }}
        >
          {title}
        </Typography>
        <Box height="168px" mb="24px">
          <Box component="img" src={image} height="100%" width="100%" />
        </Box>
        <Typography textAlign="center" variant="body2" color="text.secondary" p="16px 32px">
          {text}
        </Typography>
      </Paper>
    </LinkTo>
  );
});

export default CourseCard;
