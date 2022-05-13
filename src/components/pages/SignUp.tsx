import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, LinkTo, MuiCheckBox, MuiTextFieldWithAdornment, ErrorText } from "../atoms";
import { ChipWithText, IconWithPageTitle } from "../molecules";
import { useSignUp } from "../../hooks/useSignUp";

const SignUp: React.FC = React.memo(() => {
  const { error, isValid, values, isChecked, handleChange, setIsChecked, handleSubmit } = useSignUp();

  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="新規ユーザー登録" icon={AppRegistrationIcon} />
      {error && <ErrorText text="入力内容に誤りがあります。" />}
      <SFormBox onSubmit={(e) => handleSubmit(e, values)}>
        <ChipWithText text="ユーザー名" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<PersonIcon />}
          fullWidth
          value={values.name}
          onChange={(e) => handleChange(e, "name")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <ChipWithText text="メールアドレス" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<EmailIcon />}
          type="email"
          fullWidth
          value={values.email}
          onChange={(e) => handleChange(e, "email")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <ChipWithText text="パスワード" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          type="password"
          fullWidth
          value={values.password}
          onChange={(e) => handleChange(e, "password")}
          size="small"
          margin="dense"
          autoComplete="password"
        />
        <small>※半角英数字を組み合わせ、8文字以上で入力してください</small>
        <div className="module-spacer-md" />
        <ChipWithText text="パスワードの確認" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          type="password"
          fullWidth
          value={values.passwordConfirmation}
          onChange={(e) => handleChange(e, "passwordConfirmation")}
          size="small"
          margin="dense"
          autoComplete="password-confirmation"
        />
        <SAgreement>
          <MuiCheckBox onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
          <LinkTo to="/">利用規約</LinkTo>と<LinkTo to="/privacypolicy">プライバシーポリシー</LinkTo>に同意する
        </SAgreement>
        <div className="module-spacer-md" />
        <MuiButton variant="contained" color="primary" fullWidth disabled={!isValid} type="submit">
          認証メールを送信する
        </MuiButton>
      </SFormBox>
      <SRight>
        既にご登録済みですか？<LinkTo to="/login">こちら</LinkTo>からログイン
      </SRight>
    </MuiContainer>
  );
});

export default SignUp;

const SFormBox = styled.form`
  padding: 32px 0;
`;

const SAgreement = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #00aa99;
    text-decoration: underline;
  }
`;

const SRight = styled.div`
  text-align: right;
  a {
    color: #1665c0;
    text-decoration: underline;
  }
`;
