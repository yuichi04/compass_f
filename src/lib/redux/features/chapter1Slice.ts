import { createSlice } from "@reduxjs/toolkit";
import { Chapter1ExerciseDataType, Chapter1ExerciseType } from "../../../types/chapterTypes";
import { chapter1QuestionItems } from "../../../dataset/logical_thinking/exercise_items/chapter1ExerciseItems";
import { RootState } from "../store";

type InitialState = Chapter1ExerciseType & Chapter1ExerciseDataType;

const initialState: InitialState = {
  id: 0,
  section: 1,
  // シーンの進行フラグ
  allowProgress: false,
  action: "",
  actionValue: "",
  answer: "",
  characterLines: [],
  lineDelayTime: 0.03,
  characterImage: {
    src: "",
    role: "",
  },
  commonFactor: "",
  isFullCommonFactor: false,
  isOpenActionBox: false,
  isOpenDocument: false,
  isOpenResult: false,
  isOpenSlideList: true,
  // シーンの進行を止める
  isProgressScene: true,
  isShowCharacter: false,
  isStart: false,
  isLastScene: false,
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
      state.isStart = true;
      state.allowProgress = false;
      state.isOpenActionBox = false;
      state.isOpenResult = false;
      state.isLastScene = false;

      // シーンを進める場合の処理
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
          state.sampleCommonFactor = newScene.sampleCommonFactor;
          state.sampleAnswer = newScene.sampleAnswer;

          // キャラクターの役割に変更がある場合は、フェードインアニメーションを適用するためにキャラクターを非表示にする
          if (state.characterImage.role !== newScene.characterImage.role) {
            state.isShowCharacter = false;
          }

          // キャラクターの画像情報を更新する
          state.characterImage = newScene.characterImage;

          // 資料の表示設定がある場合はstateを更新する
          if (newScene.isOpenDocument) {
            state.isOpenDocument = newScene.isOpenDocument;
          }

          // 最後のシーンが設定されている場合
          if (newScene.isLastScene) {
            state.isLastScene = true;
          }
        }
      }
    },

    // ユーザーのアクションに対するレスポンスを生成する処理
    setCharacterLinesAction: (state, action) => {
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

          // データが設定されている場合の処理
          if (scene.data) {
            // ユーザーの回答を格納
            // 現在のシーンIDと一致するデータを取得
            const newResultData = {
              id: state.id,
              data: scene.data,
              commonFactor: state.commonFactor,
              answer: state.answer,
              sampleCommonFactor: state.sampleCommonFactor,
              sampleAnswer: state.sampleAnswer,
            };
            state.resultData = newResultData;
            state.isProgressScene = true;
            state.isOpenDocument = false;
          }
        }
      } else if (state.commonFactor) {
        // 共通するパターンが入力済みの場合
        state.answer = action.payload;
        state.characterLines = ["なるほど、良い考えですね。", "それでは、その解決方法をお客様にご案内してみましょう。"];
        state.action = "button";
        state.actionValue = "解決方法を案内する";
        state.isProgressScene = false;
      } else {
        // まだ何も入力されていない場合
        // ユーザーが入力した共通するパターンをstateに保存
        state.commonFactor = action.payload;
        state.characterLines = [
          `「${state.commonFactor}」ですね。`,
          "それでは、この共通するパターンから解決方法を考えましょう。",
          "解決方法といっても絶対的な正解はないので、あなたが良いと思うことで大丈夫ですよ。",
        ];
        state.action = "textField";
        state.actionValue = "ここにあなたの解決方法を入力してください";
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

    // 次のシーンへの進行を管理
    setAllowProgress: (state, action) => {
      // アクションが設定されていないシーンなら許可
      if (state.action === "") state.allowProgress = action.payload;
      // 最後のシーンなら許可しない
      if (state.isLastScene) state.allowProgress = false;
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
  setAllowProgress,
  setSceneAction,
  setCharacterLinesAction,
  initializeSceneAction,
  setSlideListAction,
  setActionBoxAction,
  setResultAction,
  setDocumentAction,
  setCharacterImageAction,
} = chapter1Slice.actions;
// selector
export const chapter1Selector = (state: RootState) => state.chapter1;
// reducer
export default chapter1Slice.reducer;
