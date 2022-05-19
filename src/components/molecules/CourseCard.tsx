import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LinkTo, MuiButton } from "../atoms";
import { Grid } from "@mui/material";

type Props = {
  image?: string;
  title?: string;
  subTitle?: string;
  link: string;
  text?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit";
};

const CourseCard: React.FC<Props> = React.memo((props) => {
  const { image, title, subTitle, link, text, color } = props;
  return (
    <Card
      sx={{
        p: "16px",
        bgcolor: "#fff",
        height: "100%",
      }}
      elevation={3}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia component="img" height="168" image={image} alt="Paella dish" />
        </Grid>
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <Typography variant="h5" color="text.secondary" fontWeight={400}>
            {title}
          </Typography>
          <Typography variant="h5" fontWeight={600} color="text.secondary" sx={{ mb: "8px" }}>
            {subTitle}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: "8px" }}>
              {text}
            </Typography>
          </CardContent>
          <LinkTo to={link}>
            <MuiButton fullWidth variant="contained" color={color}>
              始める
            </MuiButton>
          </LinkTo>
        </Grid>
      </Grid>
    </Card>
  );
});

export default CourseCard;
