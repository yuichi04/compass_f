/******************************************************
 *  担当する処理
 * ・静的/動的シーンの生成
 * ・回答画面のコンテンツの生成と保存
 * ・ユーザーの回答情報の保存
 ******************************************************/
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// Types
import { LessonType, SelectableInfoType } from "../../types/lesson/inductionTypes";
// Images
import { CharacterImage } from "../../assets/images/characters";
// Data
import { ScenesData } from "../../dataset";
import selectableInfo from "../../dataset/induction/selectableInfo";

const initialState: LessonType = {
  sectionId: 0, // 現在のセクション
  sceneId: 0, // 現在のシーン
  characterInfo: { src: "", role: "" }, // キャラクター情報の変更を管理
  commonSubject: ["英語が話せる人は", "セクション2の主語", "セクション3の主語"], // 共通点の主語を設定
  history: "", // 1つ前のフェーズを格納
  isLastScene: false, // 最後のシーンかどうか
  selectableInfo: [], // 現セクションの選択可能な情報
  // 全てのシーン情報
  scenes: ScenesData.induction,
  // 現在のシーン情報
  scene: {
    section: 0,
    options: [], // シーンの進行で使用する選択肢
    character: { src: "", role: "" }, // キャラクター情報
    lines: [], // セリフ
    phase: "", // 動的シーン生成のフック
    narration: "", // ナレーション
  },
  // ユーザーの回答を格納
  userAnswers: {
    info: [],
    common: "",
    conclusion: "",
    check: false,
  },
};

const inductionSlice = createSlice({
  name: "induction",
  initialState,
  reducers: {
    // 静的シーンを生成し更新する処理
    setNextStaticSceneAction: (state, action: { payload: number }) => {
      // シーンIDを次のシーンIDに更新
      state.sceneId = action.payload + 1;
      // データセットからシーンIDと一致するデータを取得
      const newSceneData = state.scenes.find((item, index) => index + 1 === state.sceneId);

      if (newSceneData) {
        // セクションIDを更新
        state.sectionId = newSceneData.section;
        // シーンを生成
        state.scene = newSceneData;
        // キャラクターが設定されている場合は更新
        if (newSceneData.character) state.characterInfo = newSceneData.character;
        // ヒストリーに現在のフェーズを記録
        if (state.scene.phase) state.history = state.scene.phase;
      }

      // 最後のシーンかどうか
      if (state.sceneId === state.scenes.length) state.isLastScene = true;
    },

    // ユーザーの回答から動的シーンを生成する処理
    setNextDynamicSceneAction: (state, action: { payload: string | number[] | boolean }) => {
      // 現在のフェーズに応じた処理を実行する
      switch (state.scene.phase) {
        case "info":
          if (Array.isArray(action.payload)) {
            // ユーザーの回答を保存
            let newSelectedInfo: SelectableInfoType[] = [];
            action.payload.forEach((id) => {
              const info = state.selectableInfo.find((info) => info.id === id);
              if (info) {
                newSelectedInfo.push(info);
              }
            });
            state.userAnswers.info = newSelectedInfo;
            // 表示キャラクターを設定
            state.characterInfo = { src: CharacterImage.guide.normalB, role: "guide" };
            // セリフを生成
            state.scene.lines = ["情報は選べましたか？"];
            // 選択肢を生成
            state.scene.options = [
              {
                progress: false,
                label: "選び直す。",
              },
              {
                progress: true,
                label: "大丈夫。",
              },
            ];
          }
          break;
        case "common":
          if (typeof action.payload === "string") {
            // ユーザーの回答に主語をつけて保存
            state.userAnswers.common = state.commonSubject[state.sectionId - 1] + action.payload;
            // 表示キャラクターを設定
            state.characterInfo = { src: CharacterImage.guide.normalB, role: "guide" };
            // セリフを生成
            state.scene.lines = [`共通点は「${state.userAnswers.common}」ですね。`, "これで大丈夫ですか？"];
            // 選択肢を生成
            state.scene.options = [
              {
                progress: false,
                label: "考え直します。",
              },
              {
                progress: true,
                label: "大丈夫です。",
              },
            ];
          }
          break;
        case "conclusion":
          if (typeof action.payload === "string") {
            // ユーザーの回答を保存
            state.userAnswers.conclusion = action.payload;
            // 表示キャラクターを設定
            state.characterInfo = { src: CharacterImage.guide.normalB, role: "guide" };
            // セリフを生成
            state.scene.lines = [`結論は「${state.userAnswers.conclusion}」ですね。`, "これで大丈夫ですか？"];
            // 選択肢を生成
            state.scene.options = [
              {
                progress: false,
                label: "考え直します。",
              },
              {
                progress: true,
                label: "大丈夫です。",
              },
            ];
          }
          break;
      }
      // ヒストリーに現在のフェーズを記録
      if (state.scene.phase) state.history = state.scene.phase;
      // フェーズを初期化
      state.scene.phase = "";
    },

    // 選択肢を非表示にする処理
    hideOptionsAction: (state) => {
      state.scene.options = [];
    },

    // 回答をやり直す処理
    showPreviousScreenForAnswersAction: (state) => {
      state.scene.options = [];
      // 1つ前のフェーズに戻す
      switch (state.history) {
        case "info":
          state.scene.phase = "info";
          break;
        case "common":
          state.scene.phase = "common";
          break;
        case "conclusion":
          state.scene.phase = "conclusion";
          break;
      }
    },

    // phase === info なら選択可能な情報を保存する
    getInfoPhaseOptionsAction: (state) => {
      if (state.scene.phase === "info") {
        const newInfo = selectableInfo.filter((info) => info.section === state.sectionId);
        state.selectableInfo = newInfo;
      }
    },

    // 初期化処理
    initializeSceneAction: () => {
      return { ...initialState };
    },
  },
});

export default inductionSlice.reducer;
export const inductionSelector = (state: RootState) => state.induction;
export const {
  getInfoPhaseOptionsAction,
  hideOptionsAction,
  initializeSceneAction,
  setNextStaticSceneAction,
  setNextDynamicSceneAction,
  showPreviousScreenForAnswersAction,
} = inductionSlice.actions;
