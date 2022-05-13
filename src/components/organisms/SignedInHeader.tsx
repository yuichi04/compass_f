import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LinkTo, MuiButton } from "../atoms";
import { useLogOut } from "../../hooks/useLogOut";

const SignedInHeader: React.FC = React.memo(() => {
  const { handleClick } = useLogOut();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#2a2f36", boxShadow: "0 0 6px #333" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "#00aa99", fontWeight: "600" }}>
            <LinkTo to="/">COMPASS</LinkTo>
          </Typography>
          <MuiButton variant="contained" onClick={handleClick}>
            ログアウト
          </MuiButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default SignedInHeader;
