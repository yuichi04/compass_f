import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const InductiveExampleChart: React.FC = () => {
  return (
    <Paper elevation={8} sx={{ position: "relative", p: "32px 0 24px", border: "1px solid #83c3f7" }}>
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "-24px",
          left: "-12px",
          p: "8px 16px",
          bgcolor: "#83c3f7",
          color: "#fff",
          display: "inline-block",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          帰納法を使った例
        </Typography>
      </Paper>
      <Box textAlign="center">
        <Box component="dl">
          <dt>情報</dt>
          <Box display="flex" justifyContent="space-around">
            <Paper
              elevation={8}
              component="dd"
              sx={{
                borderRadius: "100%",
                bgcolor: "#b33e5c",
                color: "#fff",
                height: "64px",
                width: "124px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                りんごは甘い
              </Typography>
            </Paper>
            <Paper
              elevation={8}
              component="dd"
              sx={{
                borderRadius: "100%",
                bgcolor: "#fbb73b",
                color: "#fff",
                height: "64px",
                width: "124px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                みかんは甘い
              </Typography>
            </Paper>
            <Paper
              elevation={8}
              component="dd"
              sx={{
                borderRadius: "100%",
                bgcolor: "#8561c5",
                color: "#fff",
                height: "64px",
                width: "124px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                ぶどうは甘い
              </Typography>
            </Paper>
          </Box>
        </Box>
        <Box textAlign="center">
          <ArrowDropDownIcon sx={{ color: "#666", fontSize: "64px" }} />
        </Box>
        <Box component="dl" display="flex" flexDirection="column" alignItems="center">
          <dt>共通点</dt>
          <Paper
            elevation={8}
            component="dd"
            sx={{
              borderRadius: "100%",
              bgcolor: "primary.light",
              color: "#fff",
              height: "64px",
              width: "124px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" fontWeight={600}>
              フルーツである
            </Typography>
          </Paper>
        </Box>
        <Box textAlign="center">
          <ArrowDropDownIcon sx={{ color: "#666", fontSize: "64px" }} />
        </Box>
        <Box component="dl" display="flex" flexDirection="column" alignItems="center">
          <dt>結論</dt>
          <Paper
            component="dd"
            elevation={8}
            sx={{
              borderRadius: "100%",
              bgcolor: "primary.dark",
              color: "#fff",
              height: "64px",
              width: "124px",
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
      </Box>
    </Paper>
  );
};

export default InductiveExampleChart;
