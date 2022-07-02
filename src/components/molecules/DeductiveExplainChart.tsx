import React from "react";
import styled from "styled-components";
import { Paper, Typography, Box, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SArrowRight = styled.div`
  position: relative;
  width: 50px;
  height: 4px;
  background: #999;
  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background: #999;
    width: 16px;
    height: 4px;
    transform-origin: right;
  }
  &::before {
    transform: rotateZ(45deg);
  }
  &::after {
    transform: rotateZ(-45deg);
  }
`;
const SVerticalLine = styled.div`
  position: relative;
  width: 4px;
  height: 128px;
  background: #999;
  &::before {
    content: "";
    position: absolute;
    top: 62px;
    left: 0;
    width: 155px;
    height: 4px;
    background: #999;
  }
`;

const DeductiveExplainChart: React.FC = () => {
  return (
    <Paper elevation={8} sx={{ height: "100%", position: "relative", p: "48px 0 24px", border: "1px solid #c2647c" }}>
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "-24px",
          left: "-12px",
          p: "8px 16px",
          bgcolor: "#c2647c",
          color: "#fff",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          演繹法
        </Typography>
      </Paper>
      <Box display="flex" alignItems="center" mb="32px" justifyContent="center">
        <CheckCircleIcon sx={{ fontSize: "24px", color: "#c2647c", mr: "4px" }} />
        <Typography
          variant="h6"
          color="text.secondary"
          fontWeight={600}
          sx={{ textDecoration: "underline double #c2647c" }}
        >
          自分の考えと一般論を組み合わせて結論を導く思考法
        </Typography>
      </Box>
      <Box textAlign="center" sx={{ transform: "translateX(40px)" }}>
        <Grid container>
          <Grid item xs={6} display="flex" flexDirection="column" alignItems="center">
            <Paper elevation={8} sx={{ width: "128px", p: "8px 0", bgcolor: "primary.light", color: "#fff" }}>
              一般論
            </Paper>
            <SVerticalLine />
            <Paper elevation={8} sx={{ width: "128px", p: "8px 0", bgcolor: "primary.light", color: "#fff" }}>
              自分の考え
            </Paper>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center">
            <Box display="flex" alignItems="center" sx={{ transform: "translateX(-8px)" }}>
              <SArrowRight />
              <Paper elevation={8} sx={{ width: "128px", p: "8px 0", bgcolor: "primary.dark", color: "#fff" }}>
                結論
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default DeductiveExplainChart;
