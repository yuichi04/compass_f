import React from "react";
import Typography from "@mui/material/Typography";
import { LinkTo, Chip } from "../atoms";
import { Box } from "@mui/material";

type Props = {
  color?: string;
  grade: "basic" | "advanced";
  image?: string;
  title: string;
  link?: string;
  text: React.ReactNode;
};

const CourseCard: React.FC<Props> = React.memo((props) => {
  const { image, title, grade, link, text, color } = props;

  return (
    <LinkTo to={link ? link : ""}>
      <Box
        position="relative"
        borderRadius="8px"
        boxShadow="0 0 16px #bbb"
        height="420px"
        width="360px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        pb="32px"
        sx={{
          cursor: link ? "pointer" : "default",
          transition: "all 0.3s",
          "&:hover": {
            transform: link && "scale(1.01)",
            boxShadow: link && "2px 4px 8px #999",
          },
        }}
      >
        <Box position="absolute" top="0" left="0" sx={{ transform: "translate(-25%, -50%)" }}>
          <Chip
            label={grade === "basic" ? "基本編" : grade === "advanced" ? "応用編" : ""}
            color={grade === "basic" ? "primary" : grade === "advanced" ? "error" : "default"}
            fontSize="16px"
          />
        </Box>
        <Typography
          textAlign="center"
          color="typography.white"
          bgcolor={color}
          boxShadow="0 2px 12px #bbb"
          variant="h5"
          fontWeight={600}
          p="24px 0"
          letterSpacing={1.5}
          sx={{ textShadow: "0 1px 4px #999", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
        >
          {title}
        </Typography>
        <Box height="168px">
          <Box component="img" src={image} height="100%" width="100%" />
        </Box>
        <Typography textAlign="center" color="typography.gray" p="0 32px">
          {text}
        </Typography>
      </Box>
    </LinkTo>
  );
});

export default CourseCard;
