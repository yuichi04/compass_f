import { LogInParams, SignUpParams } from "../../types/userTypes";
import client from "./client";

// Signup
export const signUp = (params: SignUpParams) => {
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

// delete(退会)
export const deleteAccount = () => {
  return client.delete(process.env.REACT_APP_USER_URL!);
};
