import { createSlice } from "@reduxjs/toolkit";
import { Chapter1QuestionItemType, Chapter1QuestionType } from "../../../types/chapterTypes";
import { chapter1QuestionItems } from "../../../dataset/logical_thinking/question_items/chapter1QuestionItems";
import { RootState } from "../store";

type InitialState = Chapter1QuestionType & Chapter1QuestionItemType;

const initialState: InitialState = {
  id: 0,
  characterLines: [],
  characterImage: "",
  sampleAnswer: "",
  action: "",
  actionValue: "",
  auto: {
    progress: false,
    displayTime: 0,
  },
  userAnswerList: [],
  sceneCount: chapter1QuestionItems.length,
  isOpenActionBox: false,
  isOpenBalloon: false,
  isOpenResult: false,
  isOpenSlideList: true,
};

export const chapter1Slice = createSlice({
  name: "chapter1",
  initialState,
  reducers: {
    // シーンの切り替え処理
    setSceneAction: (state, action) => {
      state.isOpenBalloon = false;
      state.isOpenActionBox = false;
      state.isOpenSlideList = false;
      state.id = action.payload + 1;
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
        "理由はLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, dolor totam. Consequatur fugit, voluptate pariatur totam, id odit reiciendis possimus non, doloremque quae doloribus voluptatem maiores placeat minus illum iureです!",
      ];
      state.action = "button";
      state.actionValue = "次の問題に進む";
      state.characterImage = "guide_smile_a.png";
      // ユーザーの回答を配列に格納
      if (state.userAnswerList) {
        const newUserAnswer = {
          id: state.id,
          answer: action.payload,
        };
        state.userAnswerList = [...state.userAnswerList, newUserAnswer];
      }
    },

    // リザルト画面の表示・非表示を管理
    setResultAction: (state, action) => {
      state.isOpenResult = action.payload;
    },

    // スライドの表示・非表示を管理
    setSlideListAction: (state, action) => {
      state.isOpenSlideList = action.payload;
    },

    // ユーザーのアクションボックスの表示・非表示を管理
    setActionBoxAction: (state, action) => {
      state.isOpenActionBox = action.payload;
    },

    // 吹き出しの表示・非表示を管理
    setBalloonAction: (state, action) => {
      state.isOpenBalloon = action.payload;
    },

    // 初期化
    initializeSceneAction: () => {
      return { ...initialState };
    },
  },
});

// actions
export const {
  setSceneAction,
  setAnswerAction,
  initializeSceneAction,
  setSlideListAction,
  setActionBoxAction,
  setBalloonAction,
  setResultAction,
} = chapter1Slice.actions;
// selector
export const chapter1Selector = (state: RootState) => state.chapter1;
// reducer
export default chapter1Slice.reducer;
