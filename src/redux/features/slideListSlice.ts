/******************************************************
 *  担当する処理
 * ・次のスライドや前のスライドに移動する処理
 ******************************************************/
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// types
import { SlideListSliceType } from "../../types/slideListTypes";

const initialState: SlideListSliceType = {
  slideId: 0, // 表示中のスライドID
  direction: "", // スライドの進行方向
};

const slideListSlice = createSlice({
  name: "slide-list",
  initialState,
  reducers: {
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
export const { handleClickNextSlideAction, handleClickPreviousSlideAction, initializeSlideListAction } =
  slideListSlice.actions;
