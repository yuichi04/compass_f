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
import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import { AvatarAndUploadButton } from "../organisms";

// テスト用アイコンのインポート
import { Icons } from "../../assets/images/icons";
import { usePasswordUpdate } from "../../hooks/usePasswordUpdate";

const Profile: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  const createdAt = user.createdAt.substring(0, 10);
  const { passwords, isErrorPassword, isValidPassword, handleChangePassword, handleSubmitPassword } =
    usePasswordUpdate();

  const infoList = () => (
    <>
      {[
        { secondary: "ユーザーネーム", icon: <PersonIcon />, primary: user.name },
        { secondary: "メールアドレス", icon: <Email />, primary: user.email },
        { secondary: "アカウント作成日", icon: <EventIcon />, primary: createdAt },
      ].map((item) => (
        <ListItem key={item.primary} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <ListItemText secondary={item.secondary} />
          <ListItemText primary={item.primary} sx={{ wordBreak: "break-word" }} />
        </ListItem>
      ))}
    </>
  );

  const passwordList = () => (
    <>
      {[
        {
          text: "新しいパスワード（半角英数字8文字以上）",
          handle: "newPassword",
          autoComplete: "new-password",
          value: passwords.newPassword,
        },
        {
          text: "新しいパスワードの確認",
          handle: "newPasswordConfirmation",
          autoComplete: "confirmation-password",
          value: passwords.newPasswordConfirmation,
          error: isErrorPassword,
        },
      ].map((item) => (
        <ListItem key={item.text} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <ListItemText primary={item.text} />
          <MuiTextFieldWithAdornment
            icon={<KeyIcon />}
            fullWidth
            value={item.value}
            type="password"
            onChange={(e) => handleChangePassword(e, item.handle)}
            size="small"
            margin="dense"
            error={item.error}
            autoComplete={item.autoComplete}
          />
        </ListItem>
      ))}
    </>
  );

  return (
    <MuiContaier maxWidth="md">
      <IconWithPageTitle icon={AccountCircleIcon} title="アカウント情報の確認と変更" />
      <h2>基本情報</h2>
      <Divider />
      <Grid container sx={{ padding: "32px 0", marginBottom: "32px" }}>
        <Grid item xs={5}>
          <AvatarAndUploadButton src={user.image} />
        </Grid>
        <Grid item xs={7}>
          <List>
            {infoList()}
            {/* <ListItem>
              <MuiButton variant="outlined" fullWidth>
                変更する
              </MuiButton>
            </ListItem> */}
          </List>
        </Grid>
      </Grid>
      <h2>パスワードの変更</h2>
      <Divider />
      <SPasswordForm onSubmit={handleSubmitPassword}>
        <input hidden type="text" name="username" autoComplete="username" />
        <List>
          {passwordList()}
          <ListItem sx={{ marginTop: "16px" }}>
            <MuiButton variant="outlined" type="submit" fullWidth disabled={!isValidPassword}>
              変更する
            </MuiButton>
          </ListItem>
        </List>
      </SPasswordForm>
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

const SPasswordForm = styled.form`
  padding: 32px 0;
  margin-bottom: 32px;
`;
