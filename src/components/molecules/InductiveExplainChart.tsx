import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Paper, Box, Typography } from "@mui/material";

const InductiveExplainChart: React.FC = () => {
  return (
    <Paper elevation={8} sx={{ position: "relative", p: "40px 0 24px", m: "0 auto" }}>
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "-24px",
          left: "0",
          p: "8px 16px",
          bgcolor: "success.main",
          color: "typography.white",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          帰納法
        </Typography>
      </Paper>
      <Box display="flex" alignItems="center" mb="32px" justifyContent="center" textAlign="center">
        <CheckCircleIcon sx={{ fontSize: "24px", mr: "4px", color: "success.main" }} />
        <Typography variant="h6" color="typography.gray" fontWeight={600}>
          複数の情報から共通点を見つけて結論を導く思考法
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
        <Box display="flex">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Paper
              elevation={8}
              sx={{
                p: "8px 16px",
                bgcolor: "success.light",
                color: "typography.white",
                width: "100px",
                textAlign: "center",
              }}
            >
              情報A
            </Paper>
            <Box width="3px" height="32px" bgcolor="#999" />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Paper
              elevation={8}
              sx={{
                m: "0 32px",
                p: "8px 16px",
                bgcolor: "success.light",
                color: "typography.white",
                width: "100px",
                textAlign: "center",
              }}
            >
              情報B
            </Paper>
            <Box width="3px" height="32px" bgcolor="#999" />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Paper
              elevation={8}
              sx={{
                p: "8px 16px",
                bgcolor: "success.light",
                color: "typography.white",
                width: "100px",
                textAlign: "center",
              }}
            >
              情報C
            </Paper>
            <Box width="3px" height="32px" bgcolor="#999" />
          </Box>
        </Box>
        <Box width="268px" height="3px" bgcolor="#999" />
        <SArrowDown />
        <Paper
          elevation={8}
          sx={{ p: "8px 0", bgcolor: "success.main", color: "typography.white", width: "100px", textAlign: "center" }}
        >
          共通点
        </Paper>
        <SArrowDown />
        <Paper
          elevation={8}
          sx={{
            p: "8px 16px",
            bgcolor: "success.dark",
            color: "typography.white",
            width: "100px",
            textAlign: "center",
          }}
        >
          結論
        </Paper>
      </Box>
    </Paper>
  );
};

export default InductiveExplainChart;

const SArrowDown = styled.div`
  position: relative;
  width: 3px;
  height: 40px;
  background: #999;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3px;
    height: 16px;
    background: #999;
    transform-origin: bottom;
  }
  &::before {
    transform: rotateZ(-45deg);
  }
  &::after {
    transform: rotateZ(45deg);
  }
`;
