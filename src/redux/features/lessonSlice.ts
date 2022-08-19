/******************************************************
 *  担当する処理
 * ・演習の開始/終了
 * ・シーン進行の許可/禁止
 * ・インターフェースの表示/非表示
 ******************************************************/
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// Types
import { LessonType, InterfacesKeyType } from "../../types/lessonTypes";

const initialState: LessonType = {
  course: "", // 現在のコース
  allowStartingExercise: false, // 演習の開始を許可するか
  allowProgressScene: false, // シーンを進行して良いか
  displaySpeedOfLines: 0.02, // セリフ1文字あたりの表示速度
  // 各インターフェースの表示・非表示を管理
  isOpen: {
    answers: false, // ユーザーの回答
    documents: false, // 資料
    narration: false, // ナレーション
    results: false, // 演習結果
    slideList: true, // スライドリスト
    screenForAnswers: false, // 回答画面
  },
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    // 演習の開始の処理
    startingExerciseAction: (state, action: { payload: boolean }) => {
      state.allowStartingExercise = action.payload;
    },

    // 次のシーンへ進行を許可する処理
    allowProgressSceneAction: (state) => {
      state.allowProgressScene = true;
    },

    // シーンの進行を禁止する処理
    forbidProgressSceneAction: (state) => {
      state.allowProgressScene = false;
    },

    // 全てのインターフェースを非表示にする処理
    hideAllInterfacesAction: (state) => {
      state.isOpen = {
        answers: false,
        documents: false,
        narration: false,
        results: false,
        slideList: false,
        screenForAnswers: false,
      };
    },

    // キーに渡されたインターフェースの表示と非表示を切り替える処理
    toggleShowAndHideInterfaceAction: (state, action: { payload: { key: InterfacesKeyType; open: boolean } }) => {
      // 全てのインターフェースを非表示
      state.isOpen = {
        answers: false,
        documents: false,
        narration: false,
        results: false,
        slideList: false,
        screenForAnswers: false,
      };
      // キーに渡されたインターフェースを表示
      state.isOpen = {
        ...state.isOpen,
        [action.payload.key]: action.payload.open,
      };
    },

    // 初期化処理
    initializeLessonAction: () => {
      return { ...initialState };
    },
  },
});

export default lessonSlice.reducer;
export const lessonSelector = (state: RootState) => state.lesson;
export const {
  startingExerciseAction,
  forbidProgressSceneAction,
  hideAllInterfacesAction,
  allowProgressSceneAction,
  toggleShowAndHideInterfaceAction,
  initializeLessonAction,
} = lessonSlice.actions;
