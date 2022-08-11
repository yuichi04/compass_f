/******************************************************
 *  担当する処理
 * ・ローディング画面の表示/非表示の変更
 ******************************************************/
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
    // ローディングを表示
    showLoadingAction: (state, action: { payload: string }) => {
      state.state = true;
      state.text = action.payload;
    },
    // ローディングを非表示
    hideLoadingAction: () => {
      return { ...initialState };
    },
  },
});

export const { showLoadingAction, hideLoadingAction } = loadingSlice.actions;
export const loadingSelector = (state: RootState) => state.loding;
export default loadingSlice.reducer;
