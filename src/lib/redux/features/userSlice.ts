import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserParams } from "../../../types/userTypes";

// ใในใ็จ
import { Icons } from "../../../assets/images/icons";

const initialState: UserParams = {
  name: "",
  email: "",
  createdAt: "",
  image: Icons.user01,
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
