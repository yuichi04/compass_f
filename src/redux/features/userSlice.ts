/******************************************************
 *  担当する処理
 * ・ユーザーのログイン状態の保管
 ******************************************************/
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserParams } from "../../types/userTypes";

const initialState: UserParams = {
  id: "",
  name: "",
  email: "",
  createdAt: "",
  image: "",
  isSignedIn: false,
  admin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInAction: (state, action) => {
      state.isSignedIn = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      // state.image = action.payload.image;
      state.createdAt = action.payload.createdAt;
    },
    logOutAction: () => {
      return { ...initialState };
    },
  },
});

export const { logInAction, logOutAction } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
