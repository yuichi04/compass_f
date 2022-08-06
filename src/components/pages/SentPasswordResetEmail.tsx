import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";
import { MuiContainer } from "../layouts";
import { LinkTo } from "../atoms";
import { IconWithPageTitle } from "../molecules";

const SentPasswordResetEmail: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="sm">
      <IconWithPageTitle title="メールが送信されました" icon={EmailIcon} iconColor="primary" />
      <div className="module-spacer-md" />
      <SText>
        パスワード再設定用のメールを送信しました。
        <br />
        メールの案内に従ってパスワードの再設定のお手続きをお願いします。
      </SText>
      <SRight>
        <LinkTo to="/">トップページ</LinkTo>に戻る
      </SRight>
    </MuiContainer>
  );
});

export default SentPasswordResetEmail;

const SText = styled.p`
  text-align: center;
  margin-bottom: 32px;
`;

const SRight = styled.div`
  text-align: right;
  a {
    text-decoration: underline;
    color: ${(props) => props.theme.palette.info.dark};
  }
`;
