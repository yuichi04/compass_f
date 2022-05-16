import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Box } from "@mui/system";
import { MuiContainer } from "../layouts";
import { IconWithPageTitle } from "../molecules";
import { MuiButton } from "../atoms";

const SentAuthEmail: React.FC = React.memo(() => {
  const style = {
    mb: "32px",
    textAlign: "center",
    border: "1px solid #ececec",
    padding: "32px",
    borderRadius: "8px",
  };

  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle icon={MarkEmailReadIcon} title="認証メールを送信しました" />
      <Box sx={style}>
        <p style={{ fontWeight: 600 }}>メールの内容をご確認いただき、認証を進めてください</p>
        <br />
        <p>※コードが届かない場合は再送信をお試しください</p>
        <br />
        <MuiButton variant="contained" color="primary" fullWidth>
          コードを再送信する
        </MuiButton>
      </Box>
    </MuiContainer>
  );
});

export default SentAuthEmail;
