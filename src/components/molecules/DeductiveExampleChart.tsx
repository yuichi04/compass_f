import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Paper, Box, Typography, Grid } from "@mui/material";

const DeductiveExampleChart: React.FC = () => {
  return (
    <Paper
      elevation={8}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
        border: "1px solid #c2647c",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "-24px",
          left: "-12px",
          p: "8px 16px",
          bgcolor: "#c2647c",
          color: "#fff",
          display: "inline-block",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          演繹法
        </Typography>
      </Paper>
      <Grid container display="flex" justifyContent="space-around">
        <Grid item xs={5.5}>
          <Box component="dl" display="flex" flexDirection="column" alignItems="center">
            <dt>一般論</dt>
            <Paper
              component="dd"
              elevation={8}
              sx={{
                borderRadius: "100%",
                bgcolor: "primary.light",
                color: "#fff",
                height: "160px",
                width: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                フルーツは甘い
              </Typography>
            </Paper>
          </Box>
          <br />
          <br />
          <Box component="dl" display="flex" flexDirection="column" alignItems="center">
            <dt>自分の考え</dt>
            <Paper
              component="dd"
              elevation={8}
              sx={{
                borderRadius: "100%",
                bgcolor: "primary.light",
                color: "#fff",
                height: "160px",
                width: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                メロンは甘い
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={1} display="flex" alignItems="center" justifyContent="center">
          <ArrowRightIcon sx={{ color: "#666", fontSize: "128px" }} />
        </Grid>
        <Grid item xs={5.5} display="flex" alignItems="center" justifyContent="center">
          <Box component="dl" display="flex" flexDirection="column" alignItems="center">
            <dt>結論</dt>
            <Paper
              component="dd"
              elevation={8}
              sx={{
                borderRadius: "100%",
                bgcolor: "primary.dark",
                color: "#fff",
                height: "160px",
                width: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600} textAlign="center">
                メロンは
                <br />
                フルーツである
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DeductiveExampleChart;
