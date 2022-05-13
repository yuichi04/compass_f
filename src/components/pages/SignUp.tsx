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
  // カスタムフック
  const { errors, errorMessages, isValid, values, isCheckedAgree, handleChange, setIsCheckedAgree, handleSubmit } =
    useSignUp();

  const formItems = () => (
    <>
      {[
        {
          type: "text",
          value: values.name,
          text: "ユーザー名",
          icon: <PersonIcon />,
          handle: "name",
        },
        {
          type: "email",
          value: values.email,
          text: "メールアドレス",
          icon: <EmailIcon />,
          handle: "email",
        },
        {
          type: "password",
          value: values.password,
          text: "パスワード（半角英数字8文字以上）",
          icon: <KeyIcon />,
          handle: "password",
          autoComplete: "password",
        },
        {
          type: "password",
          value: values.passwordConfirmation,
          text: "パスワードの確認",
          icon: <KeyIcon />,
          error: errors.confirmation,
          handle: "passwordConfirmation",
          autoComplete: "password",
        },
      ].map((item) => (
        <SFormItem key={item.text}>
          <ChipWithText text={item.text} label="必須" size="small" color="error" variant="outlined" />
          <MuiTextFieldWithAdornment
            icon={item.icon}
            fullWidth
            value={item.value}
            type={item.type}
            onChange={(e) => handleChange(e, item.handle)}
            size="small"
            margin="dense"
            error={item.error}
            autoComplete={item.autoComplete}
          />
        </SFormItem>
      ))}
    </>
  );

  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="新規ユーザー登録" icon={AppRegistrationIcon} />
      {errors.api && errorMessages.map((message) => <ErrorText key={message} text={message} />)}
      <SFormBox onSubmit={(e) => handleSubmit(e, values)}>
        {formItems()}
        <SAgreement>
          <MuiCheckBox onChange={() => setIsCheckedAgree(!isCheckedAgree)} checked={isCheckedAgree} />
          <LinkTo to="/">利用規約</LinkTo>と<LinkTo to="/privacypolicy">プライバシーポリシー</LinkTo>に同意する
        </SAgreement>
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

const SFormItem = styled.div`
  margin-bottom: 16px;
`;

const SAgreement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  a {
    color: #00aa99;
    text-decoration: underline;
  }
`;

const SRight = styled.div`
  text-align: right;
  a {
    color: #00aa99;
    text-decoration: underline;
  }
`;
