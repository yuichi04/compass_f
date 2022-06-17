import { ContactBoardType, LogInParams, SignUpParams, UpdateUserInfo } from "../../types/userTypes";
import client from "./client";

// メールアドレスの認証メールを送信する
export const sendAuthEmail = (params: SignUpParams) => {
  return client.post(process.env.REACT_APP_REGISTRATION_URL!, params);
};

// 新規ユーザー登録
export const signUp = (params: { token: string }) => {
  return client.post(process.env.REACT_APP_USER_URL!, params);
};

// ログイン
export const logIn = (params: LogInParams) => {
  return client.post(process.env.REACT_APP_SESSION_URL!, params);
};

// ログアウト
export const logOut = () => {
  return client.delete(process.env.REACT_APP_SESSION_URL!);
};

// 認証状態を確認する
export const listenAuthState = () => {
  return client.get(process.env.REACT_APP_SESSION_URL!);
};

// ユーザーネームの更新
export const updateUserName = (params: UpdateUserInfo) => {
  return client.patch(process.env.REACT_APP_UPDATE_USER_NAME!, params);
};

// パスワードの更新
export const updateUserPassword = (params: UpdateUserInfo) => {
  return client.patch(process.env.REACT_APP_UPDATE_USER_PASSWORD!, params);
};

// 退会（ユーザー削除）
export const deleteAccount = () => {
  return client.delete(process.env.REACT_APP_USER_URL!);
};

// 問い合わせ
export const sendContactEmail = (params: ContactBoardType) => {
  return client.post(process.env.REACT_APP_CONTACT_EMAIL!, params);
};
