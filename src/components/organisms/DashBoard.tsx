import React from "react";
import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StarsIcon from "@mui/icons-material/Stars";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { MuiAvatar } from "../atoms";
import { useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/userSlice";

const DashBoard: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  return (
    <Paper
      elevation={2}
      sx={{
        bgcolor: "#fff",
        p: "16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          wordBreak: "break-word",
        }}
      >
        <MuiAvatar src={user.image} size="96px" />
        <Box sx={{ ml: "16px" }}>
          <Typography variant="body1" component="div" fontWeight={600}>
            {user.name}
          </Typography>
          <Typography variant="overline" component="div" color="text.secondary">
            見習い訓練兵 Lv.1
          </Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ m: "0 32px" }} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="overline" component="div" color="text.secondary">
          チャプタークリア
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MilitaryTechIcon sx={{ color: "#ffc107" }} />
          <Typography variant="h5" component="div">
            1
          </Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ m: "0 32px" }} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="overline" component="div" color="text.secondary">
          セクションクリア
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StarsIcon color="warning" sx={{ mr: "8px" }} />
          <Typography variant="h5" component="div">
            3
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
});

export default DashBoard;
