import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ExerciseType } from "../../types/exerciseTypes";

const initialState: ExerciseType = {
  course: "", // 現在のコース
  allowStartingExercise: false, // 演習を開始して良いか
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    // 演習の開始・停止の処理
    switchStartingAndStoppingExerciseAction: (state, action: { payload: boolean }) => {
      state.allowStartingExercise = action.payload;
    },

    // 現在のコースに応じたデータを取得する
    // キャラクターのセリフを生成する処理
  },
});

export default exerciseSlice.reducer;
export const exerciseSelector = (state: RootState) => state.exercise;
export const { switchStartingAndStoppingExerciseAction } = exerciseSlice.actions;
