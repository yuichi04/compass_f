import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockResetIcon from "@mui/icons-material/LockReset";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, LinkTo, MuiTextFieldWithAdornment } from "../atoms";
import { IconWithPageTitle } from "../molecules";

const PasswordReset: React.FC = React.memo(() => {
  return (
    <MuiContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LinkTo to="/">
          <HomeIcon fontSize="small" />
        </LinkTo>
        <p style={{ margin: "0 8px" }}>&gt;</p>
        パスワードの再設定
      </div>
      <IconWithPageTitle title="パスワードの再設定" icon={LockResetIcon} />
      <SFormBox>
        <MuiTextFieldWithAdornment
          icon={<EmailIcon />}
          label="メールアドレス"
          type="email"
          fullWidth
          value=""
          onChange={() => console.log("onChange!")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <MuiButton variant="contained" color="primary" fullWidth>
          リセットメールを送信
        </MuiButton>
      </SFormBox>
    </MuiContainer>
  );
});

export default PasswordReset;

const SFormBox = styled.form`
  padding: 32px 0;
`;
