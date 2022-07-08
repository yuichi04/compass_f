import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockResetIcon from "@mui/icons-material/LockReset";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { LinkTo, MuiButton } from "../atoms";
import { IconWithPageTitle, MuiTextFieldWithAdornment } from "../molecules";
import { usePasswordReset } from "../../hooks/usePasswordReset";

const PasswordReset: React.FC = React.memo(() => {
  const { isValid, email, handleChange, handleSubmit } = usePasswordReset();

  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="パスワードの再設定" icon={LockResetIcon} />
      <div className="module-spacer-md" />
      <SText>
        パスワード再設定のメールを送信します。
        <br />
        ご登録のメールアドレスを入力してメールを送信してください。
      </SText>
      <SFormBox onSubmit={(e) => handleSubmit(e, email)}>
        <MuiTextFieldWithAdornment
          icon={<EmailIcon />}
          label="メールアドレス"
          type="email"
          fullWidth
          value={email}
          onChange={handleChange}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <MuiButton variant="contained" color="primary" fullWidth disabled={!isValid} type="submit">
          リセットメールを送信
        </MuiButton>
      </SFormBox>
      <SRight>
        <LinkTo to="/login">ログインページ</LinkTo>に戻る
      </SRight>
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

const SRight = styled.div`
  text-align: right;
  a {
    text-decoration: underline;
    color: #00aa99;
  }
`;
