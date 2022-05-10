import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, LinkTo, MuiTextFieldWithAdornment } from "../atoms";
import { IconWithPageTitle } from "../molecules";

const LogIn: React.FC = React.memo(() => {
  return (
    <MuiContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LinkTo to="/">
          <HomeIcon fontSize="small" />
        </LinkTo>
        <p style={{ margin: "0 8px" }}>&gt;</p>
        ログイン
      </div>
      <IconWithPageTitle title="ログイン" icon={LoginIcon} />
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
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          label="パスワード"
          type="password"
          fullWidth
          value=""
          onChange={() => console.log("onChange!")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <MuiButton variant="contained" color="primary" fullWidth>
          ログイン
        </MuiButton>
      </SFormBox>
      <SRight>
        <p>
          まだユーザー登録されていませんか？<LinkTo to="/signup">こちら</LinkTo>から新規登録
        </p>
        <br />
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
