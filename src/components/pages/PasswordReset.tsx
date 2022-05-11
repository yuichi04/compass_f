import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockResetIcon from "@mui/icons-material/LockReset";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, MuiTextFieldWithAdornment } from "../atoms";
import { IconWithPageTitle } from "../molecules";

const PasswordReset: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="パスワードの再設定" icon={LockResetIcon} />
      <div className="module-spacer-md" />
      <SText>
        パスワード再設定のメールを送信します。
        <br />
        ご登録のメールアドレスを入力してメールを送信してください。
      </SText>
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

const SText = styled.p`
  text-align: center;
`;
