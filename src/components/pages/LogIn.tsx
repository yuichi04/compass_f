import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, LinkTo, MuiTextFieldWithAdornment } from "../atoms";
import { IconWithPageTitle } from "../molecules";
import { useLogIn } from "../../hooks/useLogIn";

const LogIn: React.FC = React.memo(() => {
  const { isValid, values, handleChange, handleSubmit } = useLogIn();

  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="ログイン" icon={LoginIcon} />
      <SFormBox onSubmit={(e) => handleSubmit(e, values)}>
        <MuiTextFieldWithAdornment
          icon={<EmailIcon />}
          label="メールアドレス"
          type="email"
          fullWidth
          value={values.email}
          onChange={(e) => handleChange(e, "email")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          label="パスワード"
          type="password"
          fullWidth
          value={values.password}
          onChange={(e) => handleChange(e, "password")}
          size="small"
          margin="dense"
          autoComplete="password"
        />
        <div className="module-spacer-md" />
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

const SRight = styled.div`
  text-align: right;
  a {
    color: #1665c0;
    text-decoration: underline;
  }
`;
