import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// types
import { SlideListSliceType } from "../../types/lesson/slideListTypes";

const initialState: SlideListSliceType = {
  slideId: 0, // 表示中のスライドID
  isOpen: true, // スライドの表示状態
  direction: "", // スライドの進行方向
};

const slideListSlice = createSlice({
  name: "slide-list",
  initialState,
  reducers: {
    // スライドの表示・非表示の切り替え処理
    toggleDisplayOrHideSlideListAction: (state) => {
      state.isOpen = !state.isOpen;
    },

    // 次のスライドに進む処理
    handleClickNextSlideAction: (state) => {
      state.slideId = state.slideId + 1;
      state.direction = "left";
    },

    // 前のスライドに戻る処理
    handleClickPreviousSlideAction: (state) => {
      state.slideId = state.slideId - 1;
      state.direction = "right";
    },

    // 初期化
    initializeSlideListAction: () => {
      return { ...initialState };
    },
  },
});

export default slideListSlice.reducer;
export const slideListSelector = (state: RootState) => state.slideList;
export const {
  toggleDisplayOrHideSlideListAction,
  handleClickNextSlideAction,
  handleClickPreviousSlideAction,
  initializeSlideListAction,
} = slideListSlice.actions;
