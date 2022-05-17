import React from "react";
import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { MuiButton } from "../atoms";

const ContactBoard: React.FC = React.memo(() => {
  return (
    <SBoard>
      <MuiButton variant="contained" color="success">
        <HelpOutlineIcon sx={{ mr: "4px" }} />
        お問い合わせ
      </MuiButton>
    </SBoard>
  );
});

export default ContactBoard;

const SBoard = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 16px;
`;
