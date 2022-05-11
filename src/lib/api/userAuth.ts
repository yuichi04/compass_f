import { SignUpParams } from "../../types/userTypes";
import client from "./client";

// Signup
export const signUp = (params: SignUpParams) => {
  return client.post(process.env.REACT_APP_USER_URL!, params);
};
// Login
// logout
// fetchUserState
