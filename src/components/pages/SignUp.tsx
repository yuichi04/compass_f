import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ListItemText } from "@mui/material";
import styled from "styled-components";
import { useSendAuthEmail } from "../../hooks/useSendAuthEmail";
import { useModal } from "../../hooks/useModal";
import { PrimaryButton, LinkTo, CheckBox, ErrorText } from "../atoms";
import { ChipWithText, IconWithPageTitle, TextFieldWithAdornment } from "../molecules";
import { MuiModalConfirmation } from "../organisms";
import { MuiContainer } from "../layouts";

const SignUp: React.FC = React.memo(() => {
  // カスタムフック
  const {
    nameError,
    emailError,
    passwordError,
    isValid,
    values,
    isCheckedAgree,
    handleChange,
    setIsCheckedAgree,
    handleSubmit,
  } = useSendAuthEmail();
  const { content, open, handleOpen, handleClose } = useModal();

  const formItems = () => (
    <>
      {[
        {
          type: "text",
          value: values.name,
          text: "ユーザー名",
          icon: <PersonIcon />,
          handle: "name",
          error: nameError,
        },
        {
          type: "email",
          value: values.email,
          text: "メールアドレス",
          subText: "※ご本人のメールアドレスか確認のため、認証メールを送信します",
          icon: <EmailIcon />,
          handle: "email",
          error: emailError,
        },
        {
          type: "password",
          value: values.password,
          text: "パスワード",
          subText: "※半角英数字8文字以上で入力してください",
          icon: <KeyIcon />,
          handle: "password",
          autoComplete: "password",
        },
        {
          type: "password",
          value: values.passwordConfirmation,
          text: "パスワードの確認",
          icon: <KeyIcon />,
          handle: "passwordConfirmation",
          autoComplete: "password",
          error: passwordError,
        },
      ].map((item) => (
        <SFormItem key={item.text}>
          <ChipWithText text={item.text} label="必須" size="small" color="error" variant="outlined" />
          <ListItemText secondary={item.subText} />
          <TextFieldWithAdornment
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
    <>
      <MuiContainer maxWidth="sm">
        <IconWithPageTitle title="新規ユーザー登録" icon={AppRegistrationIcon} />
        {nameError && <ErrorText text="ユーザー名は20文字以内で入力してください" />}
        {emailError && <ErrorText text="メールアドレスは255文字以下のものをご利用ください" />}
        <SFormBox onSubmit={(e) => handleSubmit(e, values)}>
          {formItems()}
          <SAgreement>
            <CheckBox onChange={() => setIsCheckedAgree(!isCheckedAgree)} checked={isCheckedAgree} />
            <div>
              <p onClick={() => handleOpen("terms")}>利用規約</p>と
              <p onClick={() => handleOpen("privacypolicy")}>プライバシーポリシー</p>
            </div>
            に同意する
          </SAgreement>
          <PrimaryButton variant="contained" color="primary" fullWidth disabled={!isValid} type="submit">
            認証メールを送信する
          </PrimaryButton>
        </SFormBox>
        <SRight>
          既にご登録済みですか？<LinkTo to="/login">こちら</LinkTo>からログイン
        </SRight>
      </MuiContainer>
      <MuiModalConfirmation open={open} onClose={handleClose} content={content} />
    </>
  );
});

export default SignUp;

const SFormBox = styled.form`
  margin-bottom: 32px;
`;

const SFormItem = styled.div`
  margin-bottom: 16px;
`;

const SAgreement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;

    p {
      cursor: pointer;
      color: #00aa99;
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

const SRight = styled.div`
  text-align: right;
  a {
    color: #00aa99;
    text-decoration: underline;
  }
`;
