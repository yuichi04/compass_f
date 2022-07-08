import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, LinkTo, ErrorText } from "../atoms";
import { IconWithPageTitle, MuiTextFieldWithAdornment } from "../molecules";
import { useLogIn } from "../../hooks/useLogIn";

const LogIn: React.FC = React.memo(() => {
  const { error, isValid, values, handleChange, handleSubmit } = useLogIn();

  const formItems = () => (
    <>
      {[
        { label: "メールアドレス", type: "email", value: values.email, handle: "email", icon: <EmailIcon /> },
        {
          label: "パスワード",
          type: "password",
          value: values.password,
          handle: "password",
          icon: <KeyIcon />,
          autoComplete: "password",
        },
      ].map((item) => (
        <SFormItem key={item.label}>
          <MuiTextFieldWithAdornment
            icon={item.icon}
            label={item.label}
            type={item.type}
            fullWidth
            value={item.value}
            onChange={(e) => handleChange(e, item.handle)}
            size="small"
            margin="dense"
            autoComplete={item.autoComplete}
          />
        </SFormItem>
      ))}
    </>
  );

  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="ログイン" icon={LoginIcon} />
      {error && <ErrorText text="メールアドレスまたはパスワードが異なります" />}
      <SFormBox onSubmit={(e) => handleSubmit(e, values)}>
        {formItems()}
        <MuiButton variant="contained" color="primary" fullWidth disabled={!isValid} type="submit">
          ログイン
        </MuiButton>
      </SFormBox>
      <SRight>
        <p>
          まだユーザー登録されていませんか？<LinkTo to="/signup">こちら</LinkTo>から新規登録
        </p>
        <p>
          パスワードをお忘れの方は<LinkTo to="/passwordreset">こちら</LinkTo>
        </p>
      </SRight>
    </MuiContainer>
  );
});

export default LogIn;

const SFormBox = styled.form`
  padding: 32px 0;
`;

const SFormItem = styled.div`
  margin-bottom: 16px;
`;

const SRight = styled.div`
  text-align: right;
  a {
    color: #00aa99;
    text-decoration: underline;
  }
`;
