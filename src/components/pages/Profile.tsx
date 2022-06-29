import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Email from "@mui/icons-material/Email";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import EventIcon from "@mui/icons-material/Event";
import { Box, Divider, Grid, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/features/userSlice";
import MuiContaier from "../layouts/MuiContainer";
import { AvatarAndUploadButton } from "../organisms";
import { MuiTextFieldWithAdornment, MuiButton, LinkTo, MuiTextField } from "../atoms";
import { IconWithPageTitle } from "../molecules";

// テスト用アイコンのインポート
import { usePasswordUpdate } from "../../hooks/usePasswordUpdate";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

const Profile: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  const createdAt = user.createdAt.substring(0, 10);
  const { passwords, isErrorPassword, isValidPassword, handleChangePassword, handleSubmitNewPassword } =
    usePasswordUpdate();
  const { valid, edit, handleClickEditMode, values, handleChangeUserProfile, handleSubmitNewUserProfile } =
    useUpdateProfile();

  return (
    <MuiContaier maxWidth="md">
      <IconWithPageTitle icon={AccountCircleIcon} title="アカウント情報の確認と変更" />
      <Typography variant="h5" component="h2" fontWeight={600}>
        基本情報
      </Typography>
      <Divider />
      <Grid container sx={{ padding: "32px 0", marginBottom: "32px" }}>
        <Grid item xs={5}>
          <AvatarAndUploadButton src={user.image} />
        </Grid>
        <Grid item xs={7}>
          <Box mb="16px">
            <Box display="flex" alignItems="center">
              <PersonIcon sx={{ mr: "4px" }} />
              <Typography variant="subtitle2">ユーザーネーム</Typography>
            </Box>
            {edit.name ? (
              <form onSubmit={(e) => handleSubmitNewUserProfile(e, "name")}>
                <MuiTextField
                  value={values.name}
                  onChange={(e) => handleChangeUserProfile(e, "name")}
                  fullWidth
                  size="small"
                  placeholder="20文字以内で入力してください"
                />
                <Box display="flex" alignItems="cneter" justifyContent="right" mt="8px">
                  <MuiButton type="submit" variant="contained" disabled={!valid.name}>
                    更新
                  </MuiButton>
                  <Box width="8px" />
                  <MuiButton variant="contained" color="secondary" onClick={() => handleClickEditMode("name", false)}>
                    キャンセル
                  </MuiButton>
                </Box>
              </form>
            ) : (
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography>{user.name}</Typography>
                <IconButton onClick={() => handleClickEditMode("name", true)}>
                  <ModeEditIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          <Box mb="16px">
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: "4px" }} />
              <Typography variant="subtitle2">メールアドレス</Typography>
            </Box>
            {edit.email ? (
              <form onSubmit={(e) => handleSubmitNewUserProfile(e, "email")}>
                <MuiTextField
                  value={values.email}
                  onChange={(e) => handleChangeUserProfile(e, "email")}
                  fullWidth
                  size="small"
                  placeholder="ご希望のメールアドレスを入力してください"
                />
                <Typography variant="subtitle2">※メールアドレスの変更は認証後に完了します。</Typography>
                <Box display="flex" alignItems="cneter" justifyContent="right" mt="8px">
                  <MuiButton type="submit" variant="contained" disabled={!valid.email}>
                    認証メールを送信
                  </MuiButton>
                  <Box width="8px" />
                  <MuiButton variant="contained" color="secondary" onClick={() => handleClickEditMode("email", false)}>
                    キャンセル
                  </MuiButton>
                </Box>
              </form>
            ) : (
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography>{user.email}</Typography>
                <IconButton onClick={() => handleClickEditMode("email", true)}>
                  <ModeEditIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          <Box display="flex" alignItems="center">
            <EventIcon sx={{ mr: "4px" }} />
            <Typography variant="subtitle2">アカウント作成日</Typography>
          </Box>
          <Typography>{createdAt}</Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" component="h2" fontWeight={600}>
        パスワードの変更
      </Typography>
      <Divider />
      <SPasswordForm onSubmit={handleSubmitNewPassword}>
        <input hidden type="text" name="username" autoComplete="username" />
        <List>
          <ListItem
            key="新しいパスワード（半角英数字8文字以上）"
            sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            <ListItemText primary="新しいパスワード（半角英数字8文字以上）" />
            <MuiTextFieldWithAdornment
              icon={<KeyIcon />}
              fullWidth
              value={passwords.newPassword}
              type="password"
              onChange={(e) => handleChangePassword(e, "newPassword")}
              size="small"
              margin="dense"
              autoComplete="new-password"
            />
          </ListItem>
          <ListItem
            key="新しいパスワードの確認"
            sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            <ListItemText primary="新しいパスワードの確認" />
            <MuiTextFieldWithAdornment
              icon={<KeyIcon />}
              fullWidth
              value={passwords.newPasswordConfirmation}
              type="password"
              onChange={(e) => handleChangePassword(e, "newPasswordConfirmation")}
              size="small"
              margin="dense"
              error={isErrorPassword}
              autoComplete="confirmation-password"
            />
          </ListItem>
          <ListItem sx={{ marginTop: "16px" }}>
            <MuiButton variant="outlined" type="submit" fullWidth disabled={!isValidPassword}>
              変更する
            </MuiButton>
          </ListItem>
        </List>
      </SPasswordForm>

      <Typography variant="h5" component="h2" fontWeight={600}>
        退会の申請
      </Typography>
      <Divider />
      <SCenterBox>
        <p style={{ marginBottom: "16px" }}>退会申請は以下のボタンから進めてください</p>
        <LinkTo to="/unsubscribe">
          <MuiButton variant="contained" color="error">
            退会を申請する
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
