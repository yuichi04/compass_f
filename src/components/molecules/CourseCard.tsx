import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LinkTo, MuiChip } from "../atoms";
import { Grid } from "@mui/material";

type Props = {
  image?: string;
  course: string;
  grade: string;
  title?: string;
  link: string;
  text?: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

const CourseCard: React.FC<Props> = React.memo((props) => {
  const { image, course, title, grade, link, text, color } = props;
  return (
    <LinkTo to={link}>
      <Card
        sx={{
          bgcolor: "#fff",
          height: "100%",
          transition: "all 0.3s",
          p: "16px",
          pb: "0",
          "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "2px 6px 12px #ccc",
          },
        }}
        elevation={3}
      >
        <Grid container spacing={1}>
          <Grid item>
            <MuiChip label={course} color={color} size="small" />
          </Grid>
          <Grid item>
            <MuiChip label={grade} color="info" size="small" />
          </Grid>
        </Grid>
        <CardContent>
          <Typography textAlign="center" color="text.secondary" variant="h5" fontWeight={600}>
            {title}
          </Typography>
        </CardContent>
        <CardMedia component="img" height="168" image={image} alt="info" sx={{ m: "0 auto 16px auto" }} />
        <CardContent>
          <Typography textAlign="center" variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </LinkTo>
  );
});

export default CourseCard;
