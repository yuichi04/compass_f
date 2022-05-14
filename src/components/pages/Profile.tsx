import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Email from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import EventIcon from "@mui/icons-material/Event";
import { useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/userSlice";
import { MuiTextFieldWithAdornment, MuiButton, LinkTo } from "../atoms";
import { IconWithPageTitle } from "../molecules";
import MuiContaier from "../layouts/MuiContainer";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet } from "react-router-dom";

const Profile: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  const createdAt = user.createdAt.substring(0, 10);

  const infoItems = () => (
    <>
      {[
        { primary: "ユーザーネーム", icon: <PersonIcon />, text: user.name },
        { primary: "メールアドレス", icon: <Email />, text: user.email },
        { primary: "アカウント作成日", icon: <EventIcon />, text: createdAt },
      ].map((item) => (
        <ListItem key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.primary} />
          <p>{item.text}</p>
        </ListItem>
      ))}
    </>
  );

  return (
    <MuiContaier maxWidth="sm">
      <IconWithPageTitle icon={AccountCircleIcon} title="アカウント情報の確認と変更" />
      <h2>基本情報</h2>
      <Divider />
      <List sx={{ mb: "16px" }}>
        {infoItems()}
        <ListItem>
          <MuiButton variant="outlined" fullWidth>
            変更する
          </MuiButton>
        </ListItem>
      </List>
      <h2>パスワードの変更</h2>
      <Divider />
      <div style={{ padding: "16px 0" }}>
        <p>現在のパスワード</p>
        <form>
          <input hidden type="text" autoComplete={user.name} />
          <MuiTextFieldWithAdornment
            icon={<KeyIcon />}
            fullWidth
            value=""
            type="password"
            onChange={() => console.log("change")}
            size="small"
            margin="dense"
            // error={item.error}
            autoComplete="now-password"
          />
          <div className="module-spacer-lg" />
          <p>新しいパスワード（半角英数字8文字以上）</p>
          <MuiTextFieldWithAdornment
            icon={<KeyIcon />}
            fullWidth
            value=""
            type="password"
            onChange={() => console.log("change")}
            size="small"
            margin="dense"
            // error={item.error}
            autoComplete="new-password"
          />
          <div className="module-spacer-lg" />
          <p>新しいパスワードの確認</p>
          <MuiTextFieldWithAdornment
            icon={<KeyIcon />}
            fullWidth
            value=""
            type="password"
            onChange={() => console.log("change")}
            size="small"
            margin="dense"
            // error={item.error}
            autoComplete="confirmation-password"
          />
        </form>
        <div className="module-spacer-lg" />
        <MuiButton variant="outlined" type="submit" fullWidth>
          変更する
        </MuiButton>
        <div className="module-spacer-md" />
      </div>
      <h2>退会の申請</h2>
      <Divider />
      <SCenterBox>
        <p style={{ marginBottom: "16px" }}>退会申請は以下のボタンから進めてください</p>
        <LinkTo to="/unsubscribe">
          <MuiButton variant="contained" color="error">
            申請する
          </MuiButton>
        </LinkTo>
      </SCenterBox>
      <Divider />
    </MuiContaier>
  );
});

export default Profile;

const SCenterBox = styled.div`
  padding: 32px 0;
  text-align: center;
`;
