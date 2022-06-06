import { createSlice } from "@reduxjs/toolkit";
import { Chapter1QuestionItemType, Chapter1QuestionType } from "../../../types/chapterTypes";
import { chapter1QuestionItems } from "../../../dataset/logical_thinking/question_items/chapter1QuestionItems";
import { RootState } from "../store";

type InitialState = Chapter1QuestionType & Chapter1QuestionItemType;

const initialState: InitialState = {
  id: 0,
  auto: {
    progress: false,
    displayTime: 0,
  },
  action: "",
  actionValue: "",
  answer: "",
  characterLines: [],
  characterImage: {
    src: "",
    role: "",
  },
  commonFactor: "",
  allowProgress: false,
  isFullCommonFactor: false,
  isOpenActionBox: false,
  isOpenBalloon: false,
  isOpenDocument: false,
  isOpenResult: false,
  isOpenSlideList: true,
  isProgressScene: true,
  isShowCharacter: false,
  isStart: false,
  lastSceneId: chapter1QuestionItems.length,
  data: [],
  response: {
    role: "",
    lines: [],
    image: "",
  },
  sampleAnswer: "",
  sampleCommonFactor: "",
  resultData: {
    id: 0,
    data: [],
    answer: "",
    commonFactor: "",
    sampleCommonFactor: "",
    sampleAnswer: "",
  },
};

export const chapter1Slice = createSlice({
  name: "chapter1",
  initialState,
  reducers: {
    // シーンの切り替え処理
    setSceneAction: (state, action) => {
      state.isOpenActionBox = false;
      state.isOpenBalloon = false;
      state.isOpenResult = false;

      // シーンの進行可否を管理する
      state.isStart = true;

      // シーンを進行する場合の処理
      if (state.isProgressScene) {
        // 次のシーンidに更新する
        state.id = action.payload + 1;
        // 次のシーンのデータを取得する
        const newScene = chapter1QuestionItems.find((item, index) => index + 1 === state.id);
        // 取得したデータから必要なデータをstateに保存する
        if (newScene) {
          state.characterLines = newScene.characterLines;
          state.action = newScene.action;
          state.actionValue = newScene.actionValue;
          state.auto = newScene.auto;
          state.sampleCommonFactor = newScene.sampleCommonFactor;
          state.sampleAnswer = newScene.sampleAnswer;
          state.allowProgress = newScene.allowProgress;

          // キャラクター役割に変更がある場合は、fade_inを適用するためにキャラクターを非表示にしてから画像を更新する
          if (state.characterImage.role !== newScene.characterImage.role) {
            state.isShowCharacter = false;
          }
          state.characterImage = newScene.characterImage;

          // 資料の表示設定がある場合はstateを更新する
          if (newScene.isOpenDocument) {
            state.isOpenDocument = newScene.isOpenDocument;
          }
        }
      }
    },

    // ユーザーのアクションに対するレスポンスを生成する処理
    setCharacterLinesAction: (state, action) => {
      state.isOpenBalloon = false;
      state.isOpenActionBox = false;

      // 結論が入力済みの場合
      if (state.answer) {
        const scene = chapter1QuestionItems.find((item, index) => index + 1 === state.id);
        // 相手キャラクターの締めセリフを生成
        if (scene) {
          // 入力内容を含むセリフを生成して格納
          state.characterLines = [`なるほど、「${state.commonFactor}」だから、「${state.answer}」ですね。`];
          // データからセリフを取得して格納
          scene.response.lines.forEach((line) => {
            state.characterLines = [...state.characterLines, line];
          });
          state.action = "button";
          state.actionValue = "電話を切る";
          state.characterImage.src = scene.response.image;
          state.characterImage.role = scene.response.role;

          if (scene.data) {
            // ユーザーの回答を格納
            // 現在のシーンIDと一致するデータを取得
            const newUserAnswer = {
              id: state.id,
              data: scene.data,
              commonFactor: state.commonFactor,
              answer: state.answer,
              sampleCommonFactor: state.sampleCommonFactor,
              sampleAnswer: state.sampleAnswer,
            };
            state.resultData = newUserAnswer;
            state.isProgressScene = true;
            state.isOpenDocument = false;
          }
        } else {
          console.log("サンプルデータが存在しません。");
        }
        // 共通するパターンが入力済みの場合
      } else if (state.commonFactor) {
        state.answer = action.payload;
        state.characterLines = [""];
        state.action = "button";
        state.actionValue = "解決案を案内する";
        state.isProgressScene = false;
        // まだ何も入力されていない場合
      } else {
        // ユーザーが入力した共通するパターンをstateに保存
        state.commonFactor = action.payload;
        state.characterLines = [
          `「${state.commonFactor}」ですね。`,
          "それでは、このことから解決案を考えましょう。",
          "絶対的な正解はないので、あなたが良いと思う案で大丈夫です。",
        ];
        state.action = "textField";
        state.actionValue = "ここに入力してください";
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

    // キャラクターの表示・非表示を管理
    setCharacterImageAction: (state, action) => {
      state.isShowCharacter = action.payload;
    },

    // 吹き出しの表示・非表示を管理
    setBalloonAction: (state, action) => {
      state.isOpenBalloon = action.payload;
    },

    // 資料の表示・非表示を管理
    setDocumentAction: (state, action) => {
      state.isOpenDocument = action.payload;
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
  setCharacterLinesAction,
  initializeSceneAction,
  setSlideListAction,
  setActionBoxAction,
  setBalloonAction,
  setResultAction,
  setDocumentAction,
  setCharacterImageAction,
} = chapter1Slice.actions;
// selector
export const chapter1Selector = (state: RootState) => state.chapter1;
// reducer
export default chapter1Slice.reducer;
