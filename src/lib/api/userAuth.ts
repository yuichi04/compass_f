import { LogInParams, SignUpParams, UpdateUserInfo } from "../../types/userTypes";
import client from "./client";

// EmailAuth
export const sendAuthEmail = (params: SignUpParams) => {
  return client.post(process.env.REACT_APP_REGISTRATION_URL!, params);
};

// Signup
export const signUp = (params: { token: string }) => {
  return client.post(process.env.REACT_APP_USER_URL!, params);
};

// Login
export const logIn = (params: LogInParams) => {
  return client.post(process.env.REACT_APP_SESSION_URL!, params);
};

// logout
export const logOut = () => {
  return client.delete(process.env.REACT_APP_SESSION_URL!);
};

// listen
export const listenAuthState = () => {
  return client.get(process.env.REACT_APP_SESSION_URL!);
};

// update（アカウント情報の変更）
export const updateUserInfo = (params: UpdateUserInfo) => {
  return client.patch(process.env.REACT_APP_USER_URL!, params);
};

// delete(退会)
export const deleteAccount = () => {
  return client.delete(process.env.REACT_APP_USER_URL!);
};
