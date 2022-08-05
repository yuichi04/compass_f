import { createSlice } from "@reduxjs/toolkit";
import { LessonType, SelectableInfoType, UtilsKeyType } from "../../types/lesson/inductionTypes";
import { staticSceneData } from "../../dataset/induction";
import { RootState } from "../store";
import selectableInfo from "../../dataset/induction/selectableInfo";
import { CharacterImage } from "../../assets/images/characters";

const initialState: LessonType = {
  sectionId: 0, // 現在のセクション
  sceneId: 0, // 現在のシーン
  allowStartingExercise: false, // 演習の開始を許可するか
  allowProgressScene: false, // シーンの進行を許可するか
  characterInfo: { src: "", role: "" }, // キャラクター情報の変更を管理
  displaySpeedOfLines: 0.02, // セリフ1文字あたりの表示速度
  isLastScene: false, // 最後のシーンかどうか
  isOpen: {
    answers: false, // ユーザーの回答の表示・非表示
    documents: false, // 資料の表示・非表示
    results: false, // 演習結果の表示・非表示
    screenForAnswers: false, // フェーズ別回答画面の表示・非表示
    slide: true, // スライドの表示・非表示
  },
  selectableInfo: [], // 現在のセクションの選択可能な情報
  history: "", // 1つ前のフェーズを格納
  // シーン本体
  scene: {
    section: 0,
    options: [], // シーンの進行で使用する選択肢
    character: { src: "", role: "" },

    lines: [],
    phase: "",
  },
  // 結果表示用にユーザーの回答を格納
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
    // 演習の開始・停止の処理
    allowStartingExerciseAction: (state, action: { payload: boolean }) => {
      state.allowStartingExercise = action.payload;
    },

    // 静的シーンを生成し更新する処理
    setNextStaticSceneAction: (state, action: { payload: number }) => {
      // 初期化
      state.allowProgressScene = false;
      state.isOpen.screenForAnswers = false;

      // シーンIDを次のシーンIDに更新
      state.sceneId = action.payload + 1;
      // データセットからシーンIDと一致するデータを取得
      const newSceneData = staticSceneData.find((item, index) => index + 1 === state.sceneId);

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
      if (state.sceneId === staticSceneData.length) state.isLastScene = true;
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
            // ユーザーの回答を保存
            state.userAnswers.common = action.payload;
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
        case "check":
          if (typeof action.payload === "boolean") {
            state.allowProgressScene = true;
            // ユーザーの回答を保存
            state.userAnswers.check = action.payload;
            // 表示キャラクターを設定
            state.characterInfo = { src: "", role: "user" };
            // セリフを生成
            if (state.userAnswers.check) {
              state.scene.lines = ["論理の飛躍も大丈夫そうです。"];
            }
          }
          break;
        case "guide":
          break;
      }

      // ヒストリーに現在のフェーズを記録
      if (state.scene.phase) state.history = state.scene.phase;

      // フェーズを初期化
      state.scene.phase = "";

      // 回答画面を閉じる
      state.isOpen.screenForAnswers = false;
    },

    // 回答をやり直す処理
    returnToPreviousPhaseAction: (state) => {
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
      // 回答画面を表示
      state.isOpen.screenForAnswers = true;
    },

    // phaseがinfoなら選択可能な情報をstateに保存する
    getInfoPhaseOptionsAction: (state) => {
      if (state.scene.phase === "info") {
        const newInfo = selectableInfo.filter((info) => info.section === state.sectionId);
        state.selectableInfo = newInfo;
      }
    },

    // 各UIの表示・非表示
    showUtilsAction: (state, action: { payload: { key: UtilsKeyType; value: boolean } }) => {
      const { key, value } = action.payload;
      // 各UIを同時に表示させないために、一旦全てを非表示にする
      state.isOpen.slide = false;
      state.isOpen.answers = false;
      state.isOpen.documents = false;

      switch (key) {
        case "answers": // ユーザーの回答
          state.isOpen.answers = value;
          break;
        case "documents": // 資料
          state.isOpen.documents = value;
          break;
        case "results": // リザルト画面
          state.isOpen.results = value;
          break;
        case "slide": // スライド
          state.isOpen.slide = value;
          break;
        case "screenForAnswers": // 回答用画面
          state.isOpen.screenForAnswers = value;
          // 回答画面表示中はシーンの進行ができないようにする
          state.allowProgressScene = false;
          // 選択肢を再描写させるために、選択肢を非表示にする
          state.scene.options = [];
          break;
      }
    },

    // 次のシーンへの進行を許可するか
    setAllowProgressSceneAction: (state) => {
      // 選択肢が設定されていなければ許可
      if (!state.scene.options) state.allowProgressScene = true;

      // 最後のシーンの場合は許可しない（次のシーンがないため）
      if (state.isLastScene) state.allowProgressScene = false;
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
  allowStartingExerciseAction,
  getInfoPhaseOptionsAction,
  initializeSceneAction,
  returnToPreviousPhaseAction,
  setNextStaticSceneAction,
  setNextDynamicSceneAction,
  setAllowProgressSceneAction,
  showUtilsAction,
} = inductionSlice.actions;
