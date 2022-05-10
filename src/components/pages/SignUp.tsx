import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { MuiButton, LinkTo, MuiCheckBox, MuiTextFieldWithAdornment } from "../atoms";
import { ChipWithText, IconWithPageTitle } from "../molecules";

const SignUp: React.FC = React.memo(() => {
  return (
    <MuiContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LinkTo to="/">
          <HomeIcon fontSize="small" />
        </LinkTo>
        <p style={{ margin: "0 8px" }}>&gt;</p>
        新規ユーザー登録
      </div>
      <IconWithPageTitle title="新規ユーザー登録" icon={AppRegistrationIcon} />
      <SFormBox>
        <ChipWithText text="ユーザー名" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<PersonIcon />}
          fullWidth
          value=""
          onChange={() => console.log("onChange!")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <ChipWithText text="メールアドレス" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<EmailIcon />}
          type="email"
          fullWidth
          value=""
          onChange={() => console.log("onChange!")}
          size="small"
          margin="dense"
        />
        <div className="module-spacer-md" />
        <ChipWithText text="パスワード" label="必須" size="small" color="error" variant="outlined" />
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          type="password"
          fullWidth
          value=""
          onChange={() => console.log("onChange!")}
          size="small"
          margin="dense"
        />
        <small>※半角英数字を組み合わせ、8文字以上で入力してください</small>
        <div className="module-spacer-md" />
        <ChipWithText
          text="パスワードの確認（もう１度入力してください）"
          label="必須"
          size="small"
          color="error"
          variant="outlined"
        />
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          type="password"
          fullWidth
          value=""
          onChange={() => console.log("onChange!")}
          size="small"
          margin="dense"
        />
        <SAgreement>
          <MuiCheckBox onChange={() => console.log("Checked!")} />
          <LinkTo to="/">利用規約</LinkTo>と<LinkTo to="/">プライバシーポリシー</LinkTo>に同意する
        </SAgreement>
        <div className="module-spacer-md" />
        <MuiButton variant="contained" color="primary" fullWidth>
          認証メールを送信する
        </MuiButton>
      </SFormBox>
      <SRight>
        既に登録済みですか？<LinkTo to="/login">こちら</LinkTo>からログイン
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
    color: #1665c0;
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
