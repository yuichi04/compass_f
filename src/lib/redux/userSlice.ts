import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { UserParams } from "../../types/userTypes";

const initialState: UserParams = {
  name: "",
  email: "",
  isSignedIn: false,
  admin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInAction: (state, action) => {
      state.isSignedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logOutAction: () => {
      return { ...initialState };
    },
  },
});

export const { logInAction, logOutAction } = userSlice.actions;
export const userState = (state: RootState) => state.user;
export default userSlice.reducer;
