import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Box } from "@mui/system";
import { MuiContainer } from "../layouts";
import { IconWithPageTitle } from "../molecules";
import { PrimaryButton } from "../atoms";

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
      <IconWithPageTitle icon={MarkEmailReadIcon} title="認証メールを送信しました" iconColor="primary" />
      <Box sx={style}>
        <p style={{ fontWeight: 600 }}>メールの内容をご確認いただき、認証を進めてください</p>
        <br />
        <p>※コードが届かない場合は再送信をお試しください</p>
        <br />
        <PrimaryButton variant="contained" color="primary" fullWidth>
          コードを再送信する
        </PrimaryButton>
      </Box>
    </MuiContainer>
  );
});

export default SentAuthEmail;
