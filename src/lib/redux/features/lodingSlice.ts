import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  state: boolean;
  text: string;
};

const initialState: InitialState = {
  state: false,
  text: "",
};

export const loadingSlice = createSlice({
  name: "loding",
  initialState,
  reducers: {
    showLoadingAction: (state, action) => {
      state.state = true;
      state.text = action.payload;
    },
    hideLoadingAction: () => {
      return { ...initialState };
    },
  },
});

export const { showLoadingAction, hideLoadingAction } = loadingSlice.actions;
export const loadingSelector = (state: RootState) => state.loding;
export default loadingSlice.reducer;
