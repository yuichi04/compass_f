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
  sampleCommonFactor: "",
  action: "",
  actionValue: "",
  auto: {
    progress: false,
    displayTime: 0,
  },
  userAnswerList: [],
  answer: "",
  commonFactor: "",
  lastSceneId: chapter1QuestionItems.length,
  isOpenActionBox: false,
  isOpenBalloon: false,
  isOpenResult: false,
  isOpenSlideList: true,
  isStart: false,
  isFullCommonFactor: false,
};

export const chapter1Slice = createSlice({
  name: "chapter1",
  initialState,
  reducers: {
    // シーンの切り替え処理
    setSceneAction: (state, action) => {
      state.id = action.payload + 1;
      state.isOpenBalloon = false;
      state.isOpenActionBox = false;
      state.isFullCommonFactor = false;
      state.isStart = true;
      const newScene = chapter1QuestionItems.find((item) => item.id === state.id);
      if (newScene) {
        state.characterLines = newScene.characterLines;
        state.characterImage = newScene.characterImage;
        state.action = newScene.action;
        state.actionValue = newScene.actionValue;
        state.auto = newScene.auto;
        state.sampleCommonFactor = newScene.sampleCommonFactor;
        state.sampleAnswer = newScene.sampleAnswer;
      }
    },

    // ユーザーの回答に対するレスポンスを生成
    setAnswerAction: (state, action) => {
      if (state.isFullCommonFactor) {
        state.answer = action.payload;
        state.characterLines = [
          `結論は「${state.answer}」ですね。`,
          `この問題の回答例は「${state.sampleAnswer}」です。`,
        ];
        state.action = "button";
        state.actionValue = "次の問題に進む";
        state.characterImage = "guide_smile_a.png";

        // ユーザーの回答を格納
        // 現在のシーンIDと一致するデータを取得
        const item = chapter1QuestionItems.find((item) => item.id === state.id);
        if (item) {
          const newUserAnswer = {
            id: state.id,
            questions: item.characterLines,
            commonFactor: state.commonFactor,
            answer: state.answer,
            sampleCommonFactor: state.sampleCommonFactor,
            sampleAnswer: state.sampleAnswer,
          };
          state.userAnswerList = [...state.userAnswerList, newUserAnswer];
        } else {
          console.log("サンプルデータが存在しません。");
        }
      } else {
        state.commonFactor = action.payload;
        state.characterLines = [
          `「${state.commonFactor}」ですね。`,
          `この問題の回答例は「${state.sampleCommonFactor}」です。`,
          "それでは次に、このことから導き出される結論を述べてください。",
        ];
        state.action = "textField";
        state.actionValue = "ここに入力してください";
        state.isFullCommonFactor = true;
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
