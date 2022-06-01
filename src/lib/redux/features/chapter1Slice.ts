import { createSlice } from "@reduxjs/toolkit";
import { Chapter1QuestionType } from "../../../types/chapterTypes";
import { chapter1QuestionItems } from "../../../dataset/logical_thinking/question_items/chapter1QuestionItems";
import { RootState } from "../store";

const initialState: Chapter1QuestionType = {
  id: 0,
  characterLines: [],
  characterImage: "",
  sampleAnswer: "",
  action: "",
  actionValue: "",
  balloon: false,
  auto: {
    progress: false,
    displayTime: 0,
  },
};

export const chapter1Slice = createSlice({
  name: "chapter1",
  initialState,
  reducers: {
    // datasetから必要なデータを取得
    setSceneAction: (state, action) => {
      state.id = state.id + action.payload;
      const newScene = chapter1QuestionItems.find((item) => item.id === state.id);
      if (newScene) {
        state.characterLines = newScene.characterLines;
        state.characterImage = newScene.characterImage;
        state.action = newScene.action;
        state.actionValue = newScene.actionValue;
        state.sampleAnswer = newScene.sampleAnswer;
        state.auto = newScene.auto;
      }
    },
    // 表示する回答を生成
    setAnswerAction: (state, action) => {
      state.characterLines = [
        `あなたの回答は「${action.payload}」ですね。`,
        `わたしの回答は「${state.sampleAnswer}」です。`,
      ];
      state.action = "";
      state.actionValue = "";
      state.characterImage = "guide_smile_a.png";
    },
    // 吹き出しの表示・非表示を管理
    setBalloonAction: (state, action) => {
      state.balloon = action.payload;
    },
    // シーンを初期化
    initializeSceneAction: () => {
      return { ...initialState };
    },
  },
});

// actions
export const { setSceneAction, setAnswerAction, setBalloonAction, initializeSceneAction } = chapter1Slice.actions;
// selector
export const sceneSelector = (state: RootState) => state.chapter1;
// reducer
export default chapter1Slice.reducer;
